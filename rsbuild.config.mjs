import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';

export default defineConfig({
  plugins: [pluginSvelte()],
  dev: {
    watchFiles: {
      paths: ['./src/**/*.{svelte,js}'],
      options: {
        usePolling: true
      }
    }
  }
});
