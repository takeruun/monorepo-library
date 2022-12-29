import { UserConfigExport } from "vite";
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export const createBaseConfig = ({
  entry
}: {
  entry: string
}): UserConfigExport => ({
  plugins: [
    react(),
    tsconfigPaths({ root: process.cwd() }),
    dts(),
  ],
  build: {
    lib: {
      entry,
      fileName: 'index',
      formats: ['es','cjs']
    },
    rollupOptions: {
      external: [
        'react-dom',
        'react'
      ]
    }
  }
})