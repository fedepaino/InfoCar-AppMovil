import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // 'registerType' se encarga de cómo se actualiza el service worker.
      // 'autoUpdate' lo actualizará automáticamente en segundo plano cuando encuentre una nueva versión.
      registerType: 'autoUpdate',
      
      // 'injectRegister' se asegura de que el script para registrar el service worker se inyecte en tu HTML.
      // Si lo pones en `null`, tendrás que registrarlo manualmente.
      injectRegister: 'auto',

      // 'workbox' genera el service worker.
      // 'globPatterns' le dice qué archivos debe cachear para que la app funcione offline.
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },

      // 'includeAssets' es otra forma de asegurar que archivos estáticos importantes se cacheen.
      includeAssets: ['pwa-192x192.png', 'pwa-512x512.png'],
      
      // 'manifest' es la configuración del archivo manifest.webmanifest.
      // Este archivo le dice al navegador cómo debe comportarse tu app cuando se "instala".
      manifest: {
        name: 'InfoCar App',
        short_name: 'InfoCar',
        description: 'Una aplicación para obtener información de vehículos.',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]
      }
    })
  ],
})