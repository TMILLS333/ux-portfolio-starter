import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // IMPORTANT: Participants must update this to their Cloudflare Pages URL
  // Example: https://jane-ux-portfolio.pages.dev
  site: 'https://your-name-portfolio.pages.dev',
  integrations: [
    tailwind(),
    sitemap()
  ]
});
