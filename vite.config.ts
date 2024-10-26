/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// import checker from 'vite-plugin-checker';
import HotBuild from './tools/hot-build';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: resolve(srcDir, 'background', 'index.ts'),
        popup: resolve(srcDir, 'popup', 'index.html'),
      },
      output: {
        entryFileNames: 'src/[name]/index.js',
      },
    },
  },
  /**
   * Add `HotBuild()` back when you want to build on each save. This prevents normal hot reload,
   * though, so switch it is as needed.
   */
  // plugins: [react(), checker({ typescript: true })],
  plugins: [react(), HotBuild()],
  test: {
    css: true,
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setup-test.ts'],
  },
});
