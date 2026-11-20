import { useEffect } from 'react';

const SITE_ORIGIN = 'https://thoughtleadershipbusinessschool.com';
const SITE_NAME = 'Thought Leadership Business School';

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.content = content;
}

export function useDocumentTitle(
  title: string,
  description?: string,
  options: { noindex?: boolean } = {},
) {
  useEffect(() => {
    document.title = title;
    if (description) {
      upsertMeta('name', 'description', description);
    }

    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    const canonicalUrl = `${SITE_ORIGIN}${path === '/' ? '/' : path}`;
    const robots = options.noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    upsertMeta('name', 'robots', robots);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('name', 'twitter:card', 'summary');
    upsertMeta('name', 'twitter:title', title);

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?? document.head.appendChild(document.createElement('link'));
    canonical.rel = 'canonical';
    canonical.href = canonicalUrl;

    if (description) {
      upsertMeta('property', 'og:description', description);
      upsertMeta('name', 'twitter:description', description);
    }
  }, [title, description, options.noindex]);
}
