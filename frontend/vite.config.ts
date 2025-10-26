import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Tip: if your backend runs on 4000 locally, you can proxy /graphql during dev
    proxy: {
      '/graphql': 'http://localhost:4000'
    }
  }
})
