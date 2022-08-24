import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    vue(),
    viteEslint(),
    viteStylelint({
      fix: true,
      exclude: ['windicss', 'node_modules']
    })
  ]
});
