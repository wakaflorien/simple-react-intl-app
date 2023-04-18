import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001
  },
  test: {
    coverage: {
      provider: 'c8', // or 'istanbul'
      reporters: ['html'], //'text', 'json',
      // reportsDirectory: './tests/unit/coverage'
    },
  },
})
