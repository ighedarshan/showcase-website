import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Optional: Enable fast refresh & optimize dependencies
  optimizeDeps: {
    include: ['framer-motion', '@react-three/fiber', '@react-three/drei', 'lucide-react']
  }
})
