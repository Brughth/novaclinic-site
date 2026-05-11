// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site URL — à remplacer par le vrai domaine en production
const SITE_URL = 'https://www.novaclinic.ch';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // Mode 100% statique — pas de serveur, idéal pour CDN / static hosting.
  // Le formulaire de contact fait un fetch direct vers un backend externe.
  output: 'static',

  // I18n basée sur la structure des dossiers (src/pages = FR, src/pages/en = EN)

  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Ajouter hreflang sur les pages principales
        if (item.url === SITE_URL + '/' || item.url === SITE_URL + '/en/') {
          item.links = [
            { lang: 'fr', url: SITE_URL + '/' },
            { lang: 'en', url: SITE_URL + '/en/' },
            { lang: 'x-default', url: SITE_URL + '/' },
          ];
          item.priority = item.url.endsWith('/en/') ? 0.9 : 1.0;
        }
        return item;
      },
    }),
  ],

  build: {
    inlineStylesheets: 'auto', // CSS critique inliné automatiquement
    assets: '_astro',
  },

  // Compression HTML pour de meilleures performances
  compressHTML: true,

  // Prefetch des liens dans le viewport — navigation perçue instantanée
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  vite: {
    build: {
      cssMinify: 'esbuild',
    },
  },
});
