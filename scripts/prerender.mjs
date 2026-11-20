import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { createServer } from 'vite';

const siteOrigin = 'https://thoughtleadershipbusinessschool.com';
const routeFallback = {
  title: 'Page not found | TLBS',
  description: 'The requested page could not be found.',
  noindex: true,
};

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function setHeadTag(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, () => replacement);
  }
  return html.replace('</head>', `  ${replacement}\n</head>`);
}

function applyPageMetadata(html, pathName, metadata) {
  const canonicalUrl = `${siteOrigin}${pathName === '/' ? '/' : pathName}`;
  const description = escapeAttribute(metadata.description);
  const title = escapeAttribute(metadata.title);
  const robots = metadata.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  html = setHeadTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = setHeadTag(
    html,
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${description}" />`,
  );
  html = setHeadTag(
    html,
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  );
  html = setHeadTag(
    html,
    /<meta name="robots"[^>]*>/,
    `<meta name="robots" content="${robots}" />`,
  );
  html = setHeadTag(
    html,
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${title}" />`,
  );
  html = setHeadTag(
    html,
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${description}" />`,
  );
  html = setHeadTag(
    html,
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${canonicalUrl}" />`,
  );
  html = setHeadTag(
    html,
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${title}" />`,
  );
  html = setHeadTag(
    html,
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${description}" />`,
  );

  return html;
}

const server = await createServer({
  appType: 'custom',
  logLevel: 'error',
  ssr: { resolve: { externalConditions: ['node', 'module-sync'] } },
  server: { middlewareMode: true, hmr: false },
});

try {
  const [{ AppRoutes }, { pageSeo }] = await Promise.all([
    server.ssrLoadModule('/src/App.tsx'),
    server.ssrLoadModule('/src/data/seo.ts'),
  ]);
  const template = await readFile(path.resolve('dist/index.html'), 'utf8');

  for (const [route, metadata] of Object.entries(pageSeo)) {
    if (metadata.title.length >= 60) {
      throw new Error(`SEO title for ${route} must be shorter than 60 characters.`);
    }

    const markup = renderToString(
      createElement(
        StaticRouter,
        { location: route },
        createElement(AppRoutes),
      ),
    );
    if (!/<h1\b/.test(markup)) {
      throw new Error(`Prerendered route ${route} is missing its main heading.`);
    }

    if (!template.includes('<div id="root"></div>')) {
      throw new Error('The HTML template is missing the React root element.');
    }

    const html = applyPageMetadata(template, route, metadata).replace(
      '<div id="root"></div>',
      `<div id="root">${markup}</div>`,
    );
    const outputPath = route === '/'
      ? path.resolve('dist/index.html')
      : path.resolve('dist', route.slice(1), 'index.html');

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
  }

  const notFoundPath = '/__not-found__';
  const notFoundMarkup = renderToString(
    createElement(
      StaticRouter,
      { location: notFoundPath },
      createElement(AppRoutes),
    ),
  );
  const notFoundHtml = applyPageMetadata(template, notFoundPath, routeFallback).replace(
    '<div id="root"></div>',
    `<div id="root">${notFoundMarkup}</div>`,
  );
  await writeFile(path.resolve('dist/404.html'), notFoundHtml);
} finally {
  await server.close();
}
