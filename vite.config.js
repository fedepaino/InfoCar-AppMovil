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
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        
        // --- AÑADIR ESTO ---
        // Caching para las peticiones a la API en tiempo de ejecución
        runtimeCaching: [
          {
            // Coincide con las peticiones POST a tu API para crear vehículos
            // Asegúrate de que la URL coincida con tu endpoint real (ej: /api/vehicles)
            urlPattern: ({url}) => url.pathname.endsWith('/api/vehicles'),
            method: 'POST',
            handler: 'NetworkOnly', // Intenta la red primero, y si falla, usa backgroundSync
            options: {
              backgroundSync: {
                name: 'add-vehicle-queue', // Un nombre para la cola
                options: {
                  maxRetentionTime: 24 * 60 // Reintentar por hasta 24 horas
                }
              }
            }
          }
        ]
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