import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'
import eslintPlugin from 'vite-plugin-eslint'
// import RequireTransform from 'vite-plugin-require-transform'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    WindiCSS(),
    eslintPlugin({
      include: [
        'src/**/*.ts',
        'src/**/*.tsx',
        'src/*.ts',
        'src/*.tsx',
        'src/*/*.jsx'
      ]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true
  }
})
