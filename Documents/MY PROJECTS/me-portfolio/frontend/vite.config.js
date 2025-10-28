import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // where the production build goes
  },
  server: {
    port: 5173,     // local dev port
    open: true,     // auto-open browser on "npm run dev"
  },
})
