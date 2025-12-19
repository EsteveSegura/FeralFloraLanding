import { ViteSSG } from 'vite-ssg'
import '@fontsource/inter/400.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/700.css'
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
