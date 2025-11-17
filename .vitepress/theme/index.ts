import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import VPFeature from './components/VPFeature.vue'
import './custom.css'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // Register custom components globally so they can be used in Markdown
    app.component('VPFeature', VPFeature)
  }
}

export default theme
