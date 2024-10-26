/**
 * Custom Hot Reloading Plugin
 * Start `vite build` on Hot Module Reload
 * https://stackoverflow.com/a/69632090/8014660
 */
import { build } from 'vite';

export default function HotBuild() {
  let bundling = false;
  const hmrBuild = async () => {
    bundling = true;
    // You can give a custom config here or remove it to use default options
    // await build({ build: { outDir: "./hot-dist" } });
    await build();
  };

  return {
    name: 'hot-build',
    enforce: 'pre' as const,
    // HMR
    handleHotUpdate() {
      if (!bundling) {
        console.log(`hot vite build starting...`);
        hmrBuild().then(() => {
          bundling = false;
          console.log(`hot vite build finished`);
        });
      }
      return [];
    },
  };
}
