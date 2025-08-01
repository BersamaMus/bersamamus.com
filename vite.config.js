import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'bersamamus.com/',
  plugins: [react()],
})