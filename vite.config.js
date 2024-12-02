import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {  // Para poder acceder desde el movil para comprobar la acesibilidad
    host: '0.0.0.0',  // Escuchar en todas las interfaces de red
    port: 5173,       // O el puerto que estés usando
    strictPort: true, // Si el puerto ya está en uso, no intenta buscar otro
  },
})
