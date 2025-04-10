import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import react from '@astrojs/react';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  // build: {
  //   // Example: Generate `page.html` instead of `page/index.html` during build.
  //   format: 'file'
  // },
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  integrations: [mdx(),react(),],
  // srcDir: './src/pages',
  // cacheDir: './dist/pages',
  cacheDir: './dist/cache',
  outDir: './dist/',
  output: 'server',
  adapter: node({
    mode: 'standalone', 
  }),
  security: {
    checkOrigin: false,
  },
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/pages/components'),
      },
    },
    optimizeDeps: {
      exclude: ['fs','express', 'formidable']
    },
    build: {
      rollupOptions: {
        external: ['better-sqlite3','fs','express', 'formidable','path'],
      }
    },
    server: {
      port: 3000,
      allowedHosts: ['vitness.space', 'localhost', '127.0.0.1'],
      watch: {
        ignored: ['!**/dist/**'],
      }
    }
  }
})
