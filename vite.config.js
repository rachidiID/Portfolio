import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Le site est publié sur https://rachidiid.github.io/Portfolio/
// -> le chemin de base doit correspondre au nom du dépôt.
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
})
