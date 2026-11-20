Thought Leadership Landing Page

## Cloudflare Turnstile

Lead submissions are sent through the Vercel function at `/api/submit-lead`. The function verifies the Turnstile token server-side before forwarding validated contact and opt-in data to the configured LeadConnector webhook.

Create a Cloudflare Turnstile widget for the production and preview hostnames, then add these variables in Vercel:

| Variable | Vercel exposure | Value |
|---|---|---|
| `VITE_TURNSTILE_SITE_KEY` | Build-time, public | The Turnstile site key. This key is intentionally included in the browser bundle. |
| `TURNSTILE_SECRET_KEY` | Server-only | The Turnstile secret key. Do not prefix it with `VITE_`. |
| `LEAD_WEBHOOK_URL` | Server-only | The LeadConnector webhook URL used to receive submissions. |

Set the site key for each Vercel environment and redeploy so Vite includes it in the browser build. The API fails closed when the secret or webhook URL is missing. For local Vercel Function testing, use `vercel dev` with the same variables.

The previous LeadConnector webhook URL was embedded in client-side source. Rotate/reissue it in LeadConnector and store the replacement only as `LEAD_WEBHOOK_URL`; removing it from the frontend does not invalidate the old URL.

## Static SEO pages

`npm run build` prerenders each public route into `dist/` so page headings and copy are present in the initial HTML without JavaScript. The route metadata in `src/data/seo.ts` is used for both prerendered head tags and the client-side metadata updates. `vercel.json` maps the site's clean URLs to the generated HTML files.

To confirm the build output is crawlable, run `npm run build` and inspect a route with `curl` against the deployed URL, for example `curl -s https://thoughtleadershipbusinessschool.com/programs | grep -i 'Four Pathways to Thought Leadership'`.