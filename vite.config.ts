import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from 'vite-plugin-eslint';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [vue(), viteEslint(), WindiCSS()]
});
