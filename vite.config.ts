/// <reference types="vitest" />
/// <reference types="vite-plugin-pages/client-react" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Pages from 'vite-plugin-pages'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    react(),
    Pages(),
    AutoImport({
      imports: [
        'react',
        'react-router-dom',
        { 'usehooks-ts': ['useDarkMode', 'useCounter'] },
      ],
      dts: true,
    }),
    UnoCSS(),
  ],

  test: {
    environment: 'jsdom',
  },
})
