import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Open Component Model",
  description: "Deliver and deploy your software securely.",
  themeConfig: {
    logo: '/ocm-logo-black.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/documentation/' }
    ],
    sidebar: {
      '/documentation/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/documentation/getting-started/' },
            { text: 'Prerequisites', link: '/documentation/getting-started/prerequisites' },
            { text: 'OCM CLI Installation', link: '/documentation/getting-started/ocm-cli-installation' },
            { text: 'Create Component Version', link: '/documentation/getting-started/create-component-version' },
            { text: 'Display & Examine Component Versions', link: '/documentation/getting-started/display-examine-component-versions' },
            { text: 'Sign Component Versions', link: '/documentation/getting-started/sign-component-versions' },
            { text: 'Transport Component Versions', link: '/documentation/getting-started/transport-component-versions' }
          ]
        },
        {
          text: 'Concepts',
          items: [
            { text: 'Overview', link: '/documentation/concepts/' },
            { text: 'Components', link: '/documentation/concepts/components' },
            { text: 'Coordinates', link: '/documentation/concepts/coordinates' }
          ]
        },
        {
          text: 'Overview',
          items: [
            { text: 'Introduction', link: '/documentation/overview/' },
            { text: 'Benefits', link: '/documentation/overview/benefits' },
            { text: 'Project', link: '/documentation/overview/project' }
          ]
        },
        {
          text: 'Tutorials',
          items: [
            { text: 'Overview', link: '/documentation/tutorials/' },
            { text: 'Best Practices', link: '/documentation/tutorials/best-practices' },
            { text: 'Input and Access Types', link: '/documentation/tutorials/input-and-access-types' },
            {
              text: 'OCM and GitOps',
              items: [
                { text: 'Overview', link: '/documentation/tutorials/ocm-and-gitops/' },
                { text: 'Deploying Applications', link: '/documentation/tutorials/ocm-and-gitops/deploying-applications-with-ocm-and-gitops' },
                { text: 'Air-Gapped GitOps', link: '/documentation/tutorials/ocm-and-gitops/air-gapped-gitops-with-ocm-and-flux' },
                { text: 'Secure Software Delivery', link: '/documentation/tutorials/ocm-and-gitops/secure-software-delivery' }
              ]
            }
          ]
        },
        {
          text: 'Reference',
          items: [
            { text: 'Overview', link: '/documentation/reference/' },
            {
              text: 'OCM CLI',
              link: '/documentation/reference/ocm-cli/'
            },
            {
              text: 'OCM Controller',
              link: '/documentation/reference/ocm-controller/'
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/open-component-model' }
    ],
    footer: {
      message: 'Funded by the European Union – NextGenerationEU. | <a href="https://neonephos.org/" target="_blank">Neonephos</a>',
      copyright: 'Copyright © Linux Foundation Europe. Open Component Model is a project of the Open Component Model Community.'
    }
  }
})
