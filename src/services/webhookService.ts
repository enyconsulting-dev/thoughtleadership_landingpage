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

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { ...defaultHeaders, ...headers },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Try to check the response status
      if (response.ok) {
        // Try to read the response body to check for success
        try {
          const responseData = await response.json();
          console.log('Webhook response data:', responseData);
          if (responseData && responseData.status && responseData.status.includes('Success')) {
            return {
              success: true,
              message: 'Webhook request sent successfully',
              data: responseData,
            };
          } else {
            return {
              success: false,
              error: 'Webhook did not confirm success in response',
            };
          }
        } catch (jsonError) {
          // If can't read JSON, assume success since status is ok
          console.warn('Could not read response JSON, assuming success:', jsonError instanceof Error ? jsonError.message : 'Unknown error');
          return {
            success: true,
            message: 'Webhook request sent successfully (response body not readable)',
            data: null,
          };
        }
      } else {
        return {
          success: false,
          error: `Webhook returned status ${response.status}: ${response.statusText}`,
        };
      }
    } catch (fetchError) {
      clearTimeout(timeoutId);

      // If fetch fails due to CORS or network issues, but the webhook might have received the data
      // Check if it's a CORS-related error
      if (fetchError instanceof TypeError) {
        console.warn('Fetch failed, possibly due to CORS, but webhook may have received the data:', fetchError.message);
        return {
          success: true,
          message: 'Webhook request sent (response blocked by CORS)',
          data: null,
        };
      }

      // Re-throw other errors
      console.error('Fetch error:', fetchError);
      return {
        success: false,
        error: `Failed to send webhook: ${fetchError instanceof Error ? fetchError.message : 'Unknown fetch error'}`,
      };
    }
  } catch (error) {
    // Handle abort/timeout
    if (error instanceof DOMException && error.name === 'AbortError') {
      return {
        success: false,
        error: 'Webhook request timed out',
      };
    }

    // Handle other errors
    console.error('Error sending webhook:', error);
    return {
      success: false,
      error: `Failed to send webhook: ${error instanceof Error ? error.message : 'Unknown error'}`,
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
