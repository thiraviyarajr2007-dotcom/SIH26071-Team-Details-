import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {copyFileSync, writeFileSync} from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

const githubPagesBase = '/SIH26071-Team-Details-/';

export default defineConfig(({command}) => {
  const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true' || process.env.VITE_BASE === '/';
  const base = command === 'build' ? (isVercel ? '/' : githubPagesBase) : '/';

  return {
    base,
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'github-pages-spa',
        closeBundle() {
          try {
            writeFileSync(path.resolve('dist/.nojekyll'), '');
            copyFileSync(path.resolve('dist/index.html'), path.resolve('dist/404.html'));
          } catch {
            // Ignore in non-file environments
          }
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
