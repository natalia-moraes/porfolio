import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

const PATH_BASE_NAME = 'react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: `/dist/`,
  build: {
    assetsDir: PATH_BASE_NAME,
  },
  server: {
    hmr: { host: 'localhost' },
    origin: 'http://localhost:3000',
    port: 3000,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
