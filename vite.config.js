import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImagemin({
      webp: {
        quality: 75, // Уровень качества для WebP
      },
      mozjpeg: {
        quality: 75, // Качество JPEG
      },
      optipng: {
        optimizationLevel: 3,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
            active: false,
          },
        ],
      },
    }),
  ],
})
