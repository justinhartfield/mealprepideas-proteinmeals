import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  output: 'hybrid', // Static core + SSR tail
  adapter: netlify(),
  integrations: [tailwind(), alpinejs()],
  site: 'https://proteinmeals.co',
});
