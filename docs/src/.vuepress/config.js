const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Get That Job',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'A Guide to help you successfully apply for and get the job that you want',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Get Ready',
        link: '/prepare-in-advance/'
      },
      {
        text: 'Resumes',
        link: '/resume/',
      },
      {
        text: 'Cover Letters',
        link: '/cover-letter/',
      },
      {
        text: 'Interviews',
        link: '/interviews/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/prepare-in-advance/': [
        {
          title: 'Before You Need a Job',
          collapsable: false,
          children: [
            '',
            'keep-track',
            'networking'
          ]
        }
      ],
      '/resume/': [
        {
          title: 'Resumes',
          collapsable: true,
          children: [
            '',
            'what-goes-in',
            'section-ordering',
            'easy-to-read',
            'job-requirements',
            'meet-job-requirements'
          ]
        }
      ],
      '/cover-letter/': [
        {
          title: 'Cover Letters',
          collapsable: true,
          children: [
            '',
            'letter-structure',
            'speed-dating',
            'elevator-pitches'
          ]
        }
      ],
      '/interviews/': [
        {
          title: 'Interviews',
          collapsable: true,
          children: [
            '',
            'elevator-pitches',
            'speed-dating'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-container'))
    }
  }
}
