import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import viteCompression from 'vite-plugin-compression';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteCompression(),
    purgecss({
      content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.tsx'], // specify the paths to your files
      safelist: ['html', 'body'], // add any classes that should not be removed
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    '__VUE_OPTIONS_API__': true, // or false if you're not using Options API
    '__VUE_PROD_DEVTOOLS__': false, // or true if you want to enable Vue Devtools in production
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false, // or true if you need this feature
  }
});
