import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

interface TurnstileOptions {
  sitekey: string;
  action: string;
  theme: 'dark';
  callback: (token: string) => void;
  'expired-callback': () => void;
  'error-callback': () => void;
}

interface TurnstileApi {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export interface TurnstileWidgetHandle {
  reset: () => void;
}

interface TurnstileWidgetProps {
  onToken: (token: string) => void;
}

const SCRIPT_ID = 'cloudflare-turnstile-script';
const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
let scriptPromise: Promise<TurnstileApi> | undefined;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
    let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    const isNewScript = !script;
    if (!script) {
      script = document.createElement('script');
      script.id = SCRIPT_ID;
      script.src = SCRIPT_URL;
      script.async = true;
      script.defer = true;
    }

    script.addEventListener('load', () => {
      if (window.turnstile) {
        resolve(window.turnstile);
      } else {
        reject(new Error('Turnstile did not initialize.'));
      }
    }, { once: true });
    script.addEventListener('error', () => {
      script?.remove();
      reject(new Error('Turnstile failed to load.'));
    }, { once: true });

    if (window.turnstile) {
      resolve(window.turnstile);
    } else if (isNewScript) {
      document.head.appendChild(script);
    }
  }).catch((error: unknown) => {
    scriptPromise = undefined;
    throw error;
  });

  return scriptPromise;
}

const TurnstileWidget = forwardRef<TurnstileWidgetHandle, TurnstileWidgetProps>(
  ({ onToken }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string>();
    const onTokenRef = useRef(onToken);
    const [error, setError] = useState('');
    const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? '';

    onTokenRef.current = onToken;

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (widgetIdRef.current) {
          window.turnstile?.reset(widgetIdRef.current);
        }
        onTokenRef.current('');
        setError('');
      },
    }), []);

    useEffect(() => {
      let disposed = false;
      let widgetId: string | undefined;

      if (!siteKey) {
        setError('Security verification is not configured. Please contact us.');
        onTokenRef.current('');
        return;
      }

      setError('');
      void loadTurnstile()
        .then((turnstile) => {
          if (disposed || !containerRef.current) return;
          widgetId = turnstile.render(containerRef.current, {
            sitekey: siteKey,
            action: 'lead_submission',
            theme: 'dark',
            callback: (token) => {
              setError('');
              onTokenRef.current(token);
            },
            'expired-callback': () => {
              onTokenRef.current('');
            },
            'error-callback': () => {
              onTokenRef.current('');
              setError('Security verification failed. Please try again.');
            },
          });
          widgetIdRef.current = widgetId;
        })
        .catch(() => {
          if (!disposed) {
            onTokenRef.current('');
            setError('Unable to load security verification. Please refresh and try again.');
          }
        });

      return () => {
        disposed = true;
        if (widgetId) {
          window.turnstile?.remove(widgetId);
          widgetIdRef.current = undefined;
        }
      };
    }, [siteKey]);

    return (
      <div>
        <div ref={containerRef} aria-label="Security verification" />
        {error && (
          <p role="alert" className="mt-2 text-sm text-red-300">
            {error}
          </p>
        )}
      </div>
    );
  },
);

TurnstileWidget.displayName = 'TurnstileWidget';

export default TurnstileWidget;
