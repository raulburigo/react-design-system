import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '@lib': path.resolve(__dirname, './src/lib')
    }
  },
  plugins: [react(), dts()]
})
