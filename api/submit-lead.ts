import { randomUUID } from 'node:crypto';

interface ApiRequest {
  method?: string;
  headers: Record<string, string | string[] | undefined>;
  body?: unknown;
}

interface ApiResponse {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(body: unknown): ApiResponse;
}

interface TurnstileResult {
  success?: boolean;
  action?: string;
  hostname?: string;
}

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const LEAD_SOURCE = 'Thought Leadership Business School';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16kb',
    },
  },
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function getHeader(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? '' : value ?? '';
}

function getRequestOrigin(headers: ApiRequest['headers']): URL | undefined {
  const originValue = getHeader(headers.origin);
  const host = getHeader(headers.host);
  if (!originValue || !host) return undefined;

  try {
    const origin = new URL(originValue);
    if ((origin.protocol === 'https:' || origin.protocol === 'http:') && origin.host.toLowerCase() === host.toLowerCase()) {
      return origin;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

function getText(value: unknown, field: string, maxLength: number, required = false): string {
  if (value === undefined && !required) return '';
  if (typeof value !== 'string' || value.length > maxLength) {
    throw new Error(`Invalid ${field}.`);
  }

  const text = value.trim();
  if (required && !text) {
    throw new Error(`${field} is required.`);
  }
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    throw new Error(`Invalid ${field}.`);
  }

  return text;
}

function parseLead(body: unknown): { token: string; payload: Record<string, string> } {
  if (!isRecord(body)) {
    throw new Error('Invalid form submission.');
  }

  const token = getText(body.turnstileToken, 'security token', 2048, true);
  const formType = body.formType;
  if (formType !== 'contact' && formType !== 'resource' && formType !== 'program') {
    throw new Error('Invalid form type.');
  }

  const fullName = getText(body.fullName, 'full name', 120, true);
  const email = getText(body.email, 'email', 254, true);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Enter a valid email address.');
  }

  const payload: Record<string, string> = {
    fullName,
    email,
    source: LEAD_SOURCE,
    type: formType,
    timestamp: new Date().toISOString(),
  };

  if (formType === 'contact') {
    payload.phone = getText(body.phone, 'phone', 40, true);
    payload.programOfInterest = getText(body.programOfInterest, 'program of interest', 120);
    payload.goals = getText(body.goals, 'goals', 4000);
    payload.tag = 'Contact Form Submission';
  } else {
    payload.mobileNumber = getText(body.mobileNumber, 'mobile number', 40, true);
    payload.tag = getText(body.tag, 'program or resource', 160, true);
    if (formType === 'program') {
      const programId = getText(body.programId, 'program', 60, true);
      if (!['foundation', 'accelerator', 'mastermind'].includes(programId)) {
        throw new Error('Invalid program.');
      }
      payload.programId = programId;
    }
  }

  return { token, payload };
}

function getWebhookUrl(value: string | undefined): URL | undefined {
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.protocol === 'https:' && url.hostname === 'services.leadconnectorhq.com') {
      return url;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

async function postWithTimeout(url: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 4000);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(req: ApiRequest, res: ApiResponse): Promise<ApiResponse> {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  const contentType = getHeader(req.headers['content-type']).split(';', 1)[0].trim().toLowerCase();
  if (contentType !== 'application/json') {
    return res.status(415).json({ success: false, error: 'Expected a JSON request.' });
  }

  const origin = getRequestOrigin(req.headers);
  if (!origin) {
    return res.status(403).json({ success: false, error: 'Request origin is not allowed.' });
  }

  let lead: ReturnType<typeof parseLead>;
  try {
    lead = parseLead(req.body);
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error instanceof Error ? error.message : 'Invalid form submission.',
    });
  }

  const secret = process.env.TURNSTILE_SECRET_KEY;
  const webhookUrl = getWebhookUrl(process.env.LEAD_WEBHOOK_URL);
  if (!secret || !webhookUrl) {
    console.error('Lead submission is missing required server configuration.');
    return res.status(503).json({ success: false, error: 'Lead submission is temporarily unavailable.' });
  }

  let verificationResponse: Response;
  try {
    verificationResponse = await postWithTimeout(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret,
        response: lead.token,
        idempotency_key: randomUUID(),
      }),
      redirect: 'error',
    });
  } catch {
    console.error('Turnstile verification request failed.');
    return res.status(502).json({ success: false, error: 'Could not verify the security check. Please try again.' });
  }

  if (!verificationResponse.ok) {
    console.error('Turnstile verification returned an unsuccessful status:', verificationResponse.status);
    return res.status(502).json({ success: false, error: 'Could not verify the security check. Please try again.' });
  }

  let verification: TurnstileResult;
  try {
    const responseBody: unknown = await verificationResponse.json();
    if (!isRecord(responseBody)) throw new Error('Invalid verification response.');
    if (
      (responseBody.success !== true && responseBody.success !== false) ||
      (responseBody.action !== undefined && typeof responseBody.action !== 'string') ||
      (responseBody.hostname !== undefined && typeof responseBody.hostname !== 'string')
    ) {
      throw new Error('Invalid verification response.');
    }
    verification = {
      success: responseBody.success,
      action: responseBody.action,
      hostname: responseBody.hostname,
    };
  } catch {
    console.error('Turnstile verification returned an invalid response.');
    return res.status(502).json({ success: false, error: 'Could not verify the security check. Please try again.' });
  }

  if (
    verification.success !== true ||
    verification.action !== 'lead_submission' ||
    verification.hostname?.toLowerCase() !== origin.hostname.toLowerCase()
  ) {
    return res.status(403).json({ success: false, error: 'Security check failed. Please try again.' });
  }

  let webhookResponse: Response;
  try {
    webhookResponse = await postWithTimeout(webhookUrl.toString(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead.payload),
      redirect: 'error',
    });
  } catch {
    console.error('Lead webhook request failed.');
    return res.status(502).json({ success: false, error: 'Could not submit your request. Please try again.' });
  }

  if (!webhookResponse.ok) {
    console.error('Lead webhook returned an unsuccessful status:', webhookResponse.status);
    return res.status(502).json({ success: false, error: 'Could not submit your request. Please try again.' });
  }

  return res.status(200).json({ success: true });
}
