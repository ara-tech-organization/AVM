import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// On GitHub Pages the site is served from https://<org>.github.io/AVM/, so the
// production build needs base '/AVM/'. Local dev stays at '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/AVM/' : '/',
  plugins: [react(), tailwindcss()],
}))
