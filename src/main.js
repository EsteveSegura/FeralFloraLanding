import { ViteSSG } from 'vite-ssg'
import '@fontsource/open-sans/latin-400.css'
import '@fontsource/open-sans/latin-600.css'
import '@fontsource/open-sans/latin-700.css'
import '@fontsource/playfair-display/latin-400.css'
import '@fontsource/playfair-display/latin-700.css'
import './THEME.css'
import './style.css'
import App from './App.vue'
import { createAppRouter } from './router'

export const createApp = ViteSSG(
  App,
  { routes: createAppRouter().options.routes },
  ({ app, router, isClient }) => {
    // install plugins, etc.
  }
)
