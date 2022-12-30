import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createBaseConfig } from '../vite.base.config';

export default defineConfig({
  ...createBaseConfig({
    entry: resolve(__dirname, 'src/index.ts'),
  }),
});
