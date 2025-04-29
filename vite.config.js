import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa' // <-- Importa el plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({ // <-- Añade la configuración del plugin
      registerType: 'autoUpdate', // Actualiza automáticamente el service worker
      injectRegister: 'auto', // O 'script' si prefieres registrarlo manualmente
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,woff,woff2}'] // Archivos a cachear
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'], // Íconos y otros assets
      manifest: {
        name: 'Futurama App',
        short_name: 'Futurama',
        description: 'Una aplicación de personajes de Futurama',
        theme_color: '#213547', // Color principal de tu tema (ej. modo oscuro)
        background_color: '#f5f7fb', // Color de fondo (ej. modo claro)
        display: 'standalone', // O 'fullscreen', 'minimal-ui'
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png', // Ruta relativa a la carpeta 'public'
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Ruta relativa a la carpeta 'public'
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // Ícono para 'maskable'
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable' // Importante para íconos adaptables
          }
        ]
      }
    })
  ],
})