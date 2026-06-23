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
        aliases: ['nbcl'],
        scopeName: nbclGrammar.scopeName,
        ...nbclGrammar
      })
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: 'https://nbcl-lang.github.io/' },
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
          { text: 'Nodes', link: '/language-guide/nodes' },
          { text: 'Variables', link: '/language-guide/variables' },
          { text: 'Functions', link: '/language-guide/functions' },
          { text: 'Data Types', link: '/language-guide/data-types' },
          { text: 'Imports', link: '/language-guide/imports' },
          { text: 'Conditionals', link: '/language-guide/conditionals' },
          { text: 'Loops', link: '/language-guide/loops' },
          {
            text: 'Built-ins',
            collapsed: true,
            items: [
              { text: 'Overview', link: '/language-guide/built-ins/overview' },
              { text: 'Libraries', link: '/language-guide/built-ins/libraries' },
              { text: 'Functions', link: '/language-guide/built-ins/functions' },
              { text: 'Components', link: '/language-guide/built-ins/components' }
            ],
          }
        ],
      },
      {
        text: "Embedding Guide",
        collapsed: false,
        items: [
          { text: 'Add as Dependency', link: '/embedding-guide/add-dependency' },
          { text: 'Crate Features', link: '/embedding-guide/crate-features' },
          { text: 'Quick Start', link: '/embedding-guide/quick-start' },
          {
            text: 'Engine API',
            collapsed: false,
            items: [
              { text: 'Execution API', link: '/embedding-guide/engine/execution-api' },
              { text: 'Registration API', link: '/embedding-guide/engine/registration-api' },
              { text: 'Other API', link: '/embedding-guide/engine/other-api' }
            ]
          }
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
