/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    publicDir: 'public',
    alias: {
      '@': './src',
      '@components': './src/components'
    }
  },
  plugins: [],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: 'import { h, Fragment } from \'fre\'',
    target: 'es2020',
    format: 'esm'
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
