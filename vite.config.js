import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const scriptUrl = env.VITE_APPS_SCRIPT_URL || env.URL_FORM || ''
  const scriptUrlUgc = env.VITE_APPS_SCRIPT_URL_UGC || env.URL_FORM_UGC || ''
  const scriptUrlEquipo = env.VITE_APPS_SCRIPT_URL_EQUIPO || env.URL_FORM_EQUIPO || ''

  return {
    plugins: [tailwindcss(), react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    define: {
      'import.meta.env.VITE_APPS_SCRIPT_URL': JSON.stringify(scriptUrl),
      'import.meta.env.VITE_APPS_SCRIPT_URL_UGC': JSON.stringify(scriptUrlUgc),
      'import.meta.env.VITE_APPS_SCRIPT_URL_EQUIPO': JSON.stringify(scriptUrlEquipo),
    },
  }
})
