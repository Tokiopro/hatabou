import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fukui-bankin-hatabou.jp',
  integrations: [react(), sitemap({
    filter: (page) => !page.includes('/thanks'),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
