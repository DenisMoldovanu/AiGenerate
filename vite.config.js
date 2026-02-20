import { defineConfig } from 'vite'
import { resolve } from 'path'

module.exports = defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "./",
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'public',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'main-js': resolve(__dirname, 'src/js/main.js'),
        'main-css': resolve(__dirname, 'src/css/main.css'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]

          if (/css/i.test(extType)) {
            return `css/[name].[ext]`
          }

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `images/[name].[ext]`
          }

          if (/woff2?|eot|ttf|otf/i.test(extType)) {
            return `fonts/[name].[ext]`
          }

          return `assets/[name].[ext]`
        },
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    open: true,
    port: 3000
  }
}));
