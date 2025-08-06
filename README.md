# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Pasos para tranformarlo en AppMovil
Paso 1: Instalar npm y vite-plugin-pwa
Primero, necesitas añadir el plugin a las dependencias de desarrollo de tu proyecto. Abre tu terminal en la raíz del proyecto y ejecuta los siguientes comandos:     

npm install

npm install vite-plugin-pwa -D

## Paso 2: Configurar el plugin en vite.config.js
Ahora, debes importar y configurar el plugin en tu archivo vite.config.js (o vite.config.ts). 


// vite.config.js
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
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      
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
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
})


## Paso 3: Añadir los iconos y metadatos al index.html
Para que tu aplicación se vea bien en los dispositivos y el navegador sepa qué icono usar, necesitas:

Crear los iconos: Crea los iconos que definiste en el manifest (por ejemplo, pwa-192x192.png y pwa-512x512.png) y colócalos en la carpeta public.
Actualizar index.html: Añade las siguientes etiquetas dentro del <head> en tu archivo public/index.html.

## Paso 4: Construir y verificar
Las funcionalidades de PWA (como el Service Worker) se generan principalmente para el build de producción.

Construye tu proyecto:
bash
npm run build

Previsualiza el resultado:
bash
npm run preview


Verifica:
Abre tu navegador en la URL que te proporciona el comando preview.
Abre las herramientas de desarrollador (F12 o Cmd+Opt+I).
Ve a la pestaña Application.
En el panel izquierdo, busca Manifest y Service Workers. Deberías ver que ambos están registrados y sin errores.
En la sección de Manifest, verás un botón para "Instalar" la aplicación.
¡Y listo! Con estos pasos, tu aplicación de Vite y React volverá a ser una PWA instalable.

## Instalar en el telefono 
## paso 1
modificar en package.json el archivo "preview": "vite preview" por

    "preview": "vite preview --host"

## Paso 2: Conecta tu teléfono a la misma red Wi-Fi
Tu teléfono y tu computadora deben estar conectados a la misma red Wi-Fi. Esto es fundamental para que puedan comunicarse.

## Paso 3: Abre la URL en el navegador de tu teléfono
Abre el navegador en tu teléfono (Chrome en Android o Safari en iOS).
En la barra de direcciones, escribe la URL de la red que te dio el comando npm run preview. Usando el ejemplo de arriba, sería: http://192.168.1.108:4173

## Paso 4: Instala la aplicación (PWA)
Una vez que la página cargue en el navegador de tu teléfono, el proceso de instalación varía un poco según el sistema operativo:
