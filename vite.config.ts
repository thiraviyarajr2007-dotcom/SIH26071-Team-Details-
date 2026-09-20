import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {copyFileSync, writeFileSync} from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

const githubPagesBase = '/SIH26071-Team-Details-/';

export default defineConfig(({command}) => {
  return {
    base: command === 'build' ? githubPagesBase : '/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'github-pages-spa',
        closeBundle() {
          writeFileSync(path.resolve('dist/.nojekyll'), '');
          copyFileSync(path.resolve('dist/index.html'), path.resolve('dist/404.html'));
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
