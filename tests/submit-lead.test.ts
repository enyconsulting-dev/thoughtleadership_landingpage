import assert from 'node:assert/strict';
import { test } from 'node:test';
import handler from '../api/submit-lead.ts';

interface TestResponse {
  statusCode: number;
  body: unknown;
  headers: Record<string, string>;
  setHeader(name: string, value: string): void;
  status(code: number): TestResponse;
  json(body: unknown): TestResponse;
}

function createResponse(): TestResponse {
  return {
    statusCode: 0,
    body: undefined,
    headers: {},
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      this.body = body;
      return this;
    },
  };
}

function createRequest(body: unknown) {
  return {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      host: 'example.com',
      origin: 'https://example.com',
    },
    body,
  };
}

function setServerConfig() {
  process.env.TURNSTILE_SECRET_KEY = 'test-secret';
  process.env.LEAD_WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/test';
}

test('rejects invalid Turnstile verification without forwarding lead data', async () => {
  const originalFetch = globalThis.fetch;
  setServerConfig();
  let fetchCalls = 0;
  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response(JSON.stringify({
      success: false,
      action: 'lead_submission',
      hostname: 'example.com',
    }), { status: 200 });
  };

  try {
    const response = createResponse();
    await handler(createRequest({
      formType: 'contact',
      turnstileToken: 'invalid-token',
      fullName: 'Test User',
      email: 'test@example.com',
      phone: '+123456789',
    }), response);

    assert.equal(response.statusCode, 403);
    assert.equal(fetchCalls, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('forwards a validated lead without its Turnstile token', async () => {
  const originalFetch = globalThis.fetch;
  setServerConfig();
  const requests: Array<{ url: string; init?: RequestInit }> = [];
  globalThis.fetch = async (input, init) => {
    const url = input instanceof Request ? input.url : input.toString();
    requests.push({ url, init });
    if (url === 'https://challenges.cloudflare.com/turnstile/v0/siteverify') {
      return new Response(JSON.stringify({
        success: true,
        action: 'lead_submission',
        hostname: 'example.com',
      }), { status: 200 });
    }
    return new Response('', { status: 200 });
  };

  try {
    const response = createResponse();
    await handler(createRequest({
      formType: 'contact',
      turnstileToken: 'valid-token',
      fullName: 'Test User',
      email: 'test@example.com',
      phone: '+123456789',
      goals: 'Build authority',
    }), response);

    assert.equal(response.statusCode, 200);
    assert.equal(requests.length, 2);
    const webhookPayload = JSON.parse(String(requests[1].init?.body)) as Record<string, unknown>;
    assert.equal(webhookPayload.fullName, 'Test User');
    assert.equal(webhookPayload.type, 'contact');
    assert.equal('turnstileToken' in webhookPayload, false);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects a token issued for a different hostname', async () => {
  const originalFetch = globalThis.fetch;
  setServerConfig();
  let fetchCalls = 0;
  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response(JSON.stringify({
      success: true,
      action: 'lead_submission',
      hostname: 'other.example.com',
    }), { status: 200 });
  };

  try {
    const response = createResponse();
    await handler(createRequest({
      formType: 'contact',
      turnstileToken: 'valid-token',
      fullName: 'Test User',
      email: 'test@example.com',
      phone: '+123456789',
    }), response);

    assert.equal(response.statusCode, 403);
    assert.equal(fetchCalls, 1);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
