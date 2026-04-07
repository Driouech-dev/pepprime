import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://driouech-dev.github.io',
  base: '/pepprime/',
  integrations: [tailwind()],
});
