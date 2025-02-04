import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-weather-app/',
  plugins: [
    react(),
    ViteImagemin({
      webp: {
        quality: 75,
      },
      mozjpeg: {
        quality: 75,
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
