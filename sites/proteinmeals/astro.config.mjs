import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [tailwind(), alpinejs(), sitemap()],
  site: 'https://proteinmeals.co',
  vite: {
    resolve: {
      alias: {
        '@mealprepideas/shared': path.resolve(__dirname, '../../packages/shared'),
      },
    },
  },
});
