import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file'
  },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  integrations: [mdx()],
  srcDir: './src/html',
  // cacheDir: './dist/pages',
  cacheDir: './dist/cache',
  outDir: './dist/pages',
  vite: {
    build: {
      rollupOptions: {
        external: ['better-sqlite3'],
      }
    },
    server: {
      allowedHosts: ['vitness.space', 'localhost', '127.0.0.1'],
      watch: {
        ignored: ['!**/dist/**'],
      }
    }
  }
})
