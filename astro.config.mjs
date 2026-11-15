// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// L'adresse publique du site. Elle sert au plan du site (sitemap) et aux liens canoniques.
// En production, elle est fournie par GitHub Actions (voir .github/workflows/deploy.yml).
const site = process.env.SITE_URL ?? 'https://example.com';
// Laisser vide si le site est à la racine du domaine (cas recommandé : dépôt « pseudo.github.io »).
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR', en: 'en-US' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
