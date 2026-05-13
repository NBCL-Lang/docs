import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

const nbclGrammar = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './nbcl.tmLanguage.json'), 'utf8')
)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NBCL Documentation",
  description: "Documentation for NBCL - Rust embeddable configuration language",
  base: '/docs',
  srcDir: 'src',
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],],
  markdown: {
    async shikiSetup(highlighter) {
      await highlighter.loadLanguage({
        name: 'nbcl',
        aliases: ['nbl'],
        scopeName: nbclGrammar.scopeName, 
        ...nbclGrammar
      })
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '../' },
    ],

    sidebar: [
      {
        text: "Introduction",
        collapsed: false,
        items: [
          { text: 'Overview', link: '/introduction/overview' },
          { text: 'Benchmarks', link: '/introduction/benchmarks' },
          { text: 'Dependencies', link: '/introduction/dependencies' },
          { text: 'Resources', link: '/introduction/resources' }
        ],
      },
      {
        text: "Language Guide",
        collapsed: false,
        items: [
          { text: 'Quick Start', link: '/language-guide/quick-start' },
        ],
      },
      {
        text: "Embedding Guide",
        collapsed: false,
        items: [
          { text: 'Add as Dependency', link: '/embedding-guide/add-dependency' },
          { text: 'Crate Features', link: '/embedding-guide/crate-features' },
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
