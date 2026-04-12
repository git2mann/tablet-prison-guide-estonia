import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    // This allows any host (like your Pinggy link) to access the dev server
    allowedHosts: true,
    host: true // Bind to all network interfaces for external access
  }
})
