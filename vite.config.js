import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/samsung-galaxy/', // ← MUST MATCH YOUR REPO NAME EXACTLY
})
