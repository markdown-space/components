import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [react({ jsxImportSource: 'https://esm.sh/react'}), dts({ include: ['lib']})],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      preserveEntrySignatures: 'strict',
      input: {
        index: path.resolve(__dirname, 'lib/index.ts'),
      },
      output: {
        preserveModules: true,
        dir: path.resolve(__dirname, 'dist'),
        format: 'es',
        entryFileNames: '[name].js',
      }
    },
  },
});
