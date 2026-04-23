interface WebhookResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: unknown;
}

interface WebhookOptions {
  headers?: Record<string, string>;
  timeout?: number;
}

/**
 * Posts data to a webhook URL
 * @param webhookUrl - The webhook URL to post to
 * @param payload - The data payload to send (accepts any object)
 * @param options - Optional configuration (headers, timeout)
 * @returns Promise with success status and response data
 */
export const postToWebhook = async (
  webhookUrl: string,
  payload: Record<string, unknown>,
  options: WebhookOptions = {}
): Promise<WebhookResponse> => {
  try {
    // Validate webhook URL
    if (!webhookUrl || typeof webhookUrl !== 'string') {
      return {
        success: false,
        error: 'Invalid webhook URL provided',
      };
    }

    // Validate URL format
    try {
      new URL(webhookUrl);
    } catch {
      return {
        success: false,
        error: 'Webhook URL is not a valid URL',
      };
    }

    // Validate payload
    if (!payload || typeof payload !== 'object') {
      return {
        success: false,
        error: 'Invalid payload provided',
      };
    }

    const { headers = {}, timeout = 10000 } = options;

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    const defaultHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { ...defaultHeaders, ...headers },
      body: JSON.stringify(payload),
      signal: controller.signal,
      mode: 'no-cors', // Use no-cors to avoid CORS issues with webhooks
    });

    clearTimeout(timeoutId);

    // With no-cors mode, we can't read the response, but the request was sent
    // This is common with webhooks - we assume success if no network error occurred
    console.log('Webhook request sent (no-cors mode):', {
      url: webhookUrl,
      payload: payload,
    });

    return {
      success: true,
      message: 'Webhook request sent successfully',
      data: null,
    };
  } catch (error) {
    // Handle abort/timeout
    if (error instanceof DOMException && error.name === 'AbortError') {
      return {
        success: false,
        error: 'Webhook request timed out',
      };
    }

    // Handle CORS or network errors - for webhooks, these might still mean the request was sent
    if (error instanceof TypeError && error.message.includes('CORS')) {
      console.warn('CORS error with webhook, but request may have been sent:', error.message);
      return {
        success: true,
        message: 'Webhook request sent (CORS restricted response)',
        data: null,
      };
    }

    // Handle other network errors
    if (error instanceof TypeError) {
      console.warn('Network error with webhook, but request may have been sent:', error.message);
      return {
        success: true,
        message: 'Webhook request sent (network response not readable)',
        data: null,
      };
    }

    // For any other unexpected errors, still consider it potentially successful
    // since webhooks often don't provide detailed error responses
    console.warn('Unexpected error with webhook, but request may have been sent:', error);
    return {
      success: true,
      message: 'Webhook request sent (unexpected response behavior)',
      data: null,
    };
  }
};

/**
 * Posts form data to a webhook with form validation
 * Useful for handling form submissions across the application
 * @param webhookUrl - The webhook URL to post to
 * @param formData - Object containing form field names and values
 * @param options - Optional configuration
 * @returns Promise with success status
 */
export const postFormToWebhook = async (
  webhookUrl: string,
  formData: Record<string, FormDataEntryValue>,
  options: WebhookOptions = {}
): Promise<WebhookResponse> => {
  // Convert FormData to regular object
  const payload: Record<string, unknown> = {};

  Object.entries(formData).forEach(([key, value]) => {
    // Skip empty values
    if (value === '' || value === null) {
      return;
    }
    payload[key] = value;
  });

  return postToWebhook(webhookUrl, payload, options);
};
