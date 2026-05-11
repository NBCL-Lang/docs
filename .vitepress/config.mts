import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NBCL Documentation",
  description: "Documentation for NBCL - Rust embeddable configuration language",
  base: '/docs',
  srcDir: 'src',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '../' },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Benchmarks', link: '/introduction/benchmarks' },
          { text: 'Dependencies', link: '/introduction/dependencies' }
        ],
      },
      {
        text: "Getting Started",
        items: [
          { text: 'Add as Dependency', link: '/getting-started/add_dependency.md' },
          { text: 'Crate Features', link: '/getting-started/crate_features.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nbcl-lang/docs' }
    ],

    editLink: {
      pattern: 'https://github.com/nbcl-lang/docs/edit/main/src/:path'
    },

    search: {
      provider: 'local'
    }
  }
})
