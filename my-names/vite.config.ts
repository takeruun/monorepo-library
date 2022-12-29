import { defineConfig } from "vite";
import { createBaseConfig } from "../vite.base.config";
import { resolve } from "path";

export default defineConfig({
  ...createBaseConfig({
    entry: resolve(__dirname, 'src/index.ts')
  })
})