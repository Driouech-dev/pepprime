import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://pepprime.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [tailwind()],
});
