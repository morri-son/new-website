import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // The Markdown content lives in the `docs/` directory
  srcDir: 'docs',
  // Exclude starter example page from the built docs
  srcExclude: ['markdown-examples.md'],

  title: 'Open Component Model',
  description: 'Open Component Model documentation and website powered by VitePress',

  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/VPFeature.vue', import.meta.url)
          )
        }
      ]
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/ocm-logo-black-text.svg',
      dark: '/ocm-logo-white-text.svg',
      alt: 'Open Component Model'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Documentation',
          items: [
            {
              text: 'Overview',
              items: [
                { text: 'Overview', link: '/documentation/overview/' },
                { text: 'Benefits', link: '/documentation/overview/benefits' },
                { text: 'More Benefits', link: '/documentation/overview/benefits-2' },
                { text: 'Project', link: '/documentation/overview/project' }
              ]
            },
            {
              text: 'Getting Started',
              collapsed: false,
              items: [
                { text: 'Introduction', link: '/documentation/getting-started/' },
                { text: 'Prerequisites', link: '/documentation/getting-started/prerequisites' },
                { text: 'Install OCM CLI', link: '/documentation/getting-started/ocm-cli-installation' },
                { text: 'Create Component Version', link: '/documentation/getting-started/create-component-version' },
                { text: 'Display & Examine Components', link: '/documentation/getting-started/display-examine-component-versions' },
                { text: 'Sign Component Versions', link: '/documentation/getting-started/sign-component-versions' },
                { text: 'Transport Component Versions', link: '/documentation/getting-started/transport-component-versions' }
              ]
            },
            {
              text: 'Concepts',
              collapsed: true,
              items: [
                { text: 'Concepts Overview', link: '/documentation/concepts/' },
                { text: 'Components', link: '/documentation/concepts/components' },
                { text: 'Coordinates', link: '/documentation/concepts/coordinates' }
              ]
            },
            {
              text: 'Tutorials',
              collapsed: true,
              items: [
                { text: 'Tutorials Overview', link: '/documentation/tutorials/' },
                { text: 'Best Practices', link: '/documentation/tutorials/best-practices' },
                { text: 'Build & Deploy via Helm Charts (101)', link: '/documentation/tutorials/build-deploy-software-via-helm-charts-with-ocm-101' },
                { text: 'Complex Component Structures', link: '/documentation/tutorials/complex-component-structure-deployment' },
                { text: 'Credentials in ocmconfig', link: '/documentation/tutorials/creds-in-ocmconfig' },
                { text: 'Input and Access Types', link: '/documentation/tutorials/input-and-access-types' },
                { text: 'OCM & GitOps', link: '/documentation/tutorials/ocm-and-gitops/' }
              ]
            },
            {
              text: 'Reference',
              collapsed: true,
              items: [
                { text: 'Reference Overview', link: '/documentation/reference/' },
                { text: 'OCM CLI', link: '/documentation/reference/ocm-cli/' },
                { text: 'OCM Controller', link: '/documentation/reference/ocm-controller/' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/open-component-model' }
    ]
  }
})
