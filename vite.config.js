import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Web-LaGriso/', // Cambia esto por el nombre de tu repositorio en GitHub
  server: {
    port: 3000,
    open: true
  }
})

