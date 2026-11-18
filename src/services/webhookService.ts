export interface LeadSubmissionResult {
  success: boolean;
  error?: string;
}

export type LeadFormType = 'contact' | 'resource' | 'program';

export const submitLead = async (
  payload: Record<string, unknown> & { formType: LeadFormType },
  turnstileToken: string,
): Promise<LeadSubmissionResult> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...payload, turnstileToken }),
      signal: controller.signal,
    });

    const result: unknown = await response.json().catch(() => null);
    if (response.ok && typeof result === 'object' && result !== null && 'success' in result && result.success === true) {
      return { success: true };
    }

    const error = typeof result === 'object' && result !== null && 'error' in result && typeof result.error === 'string'
      ? result.error
      : 'Could not submit your request. Please try again.';
    return { success: false, error };
  } catch (error) {
    return {
      success: false,
      error: error instanceof DOMException && error.name === 'AbortError'
        ? 'The request timed out. Please try again.'
        : 'Could not submit your request. Please check your connection and try again.',
    };
  } finally {
    clearTimeout(timeout);
  }
};
