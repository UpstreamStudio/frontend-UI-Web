const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Upstream Frontend UI Doc',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: '.docz/src',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/eumhojun/frontend-UI-Web/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Upstream Frontend UI Doc',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/eumhojun/frontend-UI-Web',
          templates:
            '/Users/eumhojun/frontend-UI-Web/node_modules/docz-core/dist/templates',
          docz: '/Users/eumhojun/frontend-UI-Web/.docz',
          cache: '/Users/eumhojun/frontend-UI-Web/.docz/.cache',
          app: '/Users/eumhojun/frontend-UI-Web/.docz/app',
          appPackageJson: '/Users/eumhojun/frontend-UI-Web/package.json',
          appTsConfig: '/Users/eumhojun/frontend-UI-Web/tsconfig.json',
          gatsbyConfig: '/Users/eumhojun/frontend-UI-Web/gatsby-config.js',
          gatsbyBrowser: '/Users/eumhojun/frontend-UI-Web/gatsby-browser.js',
          gatsbyNode: '/Users/eumhojun/frontend-UI-Web/gatsby-node.js',
          gatsbySSR: '/Users/eumhojun/frontend-UI-Web/gatsby-ssr.js',
          importsJs: '/Users/eumhojun/frontend-UI-Web/.docz/app/imports.js',
          rootJs: '/Users/eumhojun/frontend-UI-Web/.docz/app/root.jsx',
          indexJs: '/Users/eumhojun/frontend-UI-Web/.docz/app/index.jsx',
          indexHtml: '/Users/eumhojun/frontend-UI-Web/.docz/app/index.html',
          db: '/Users/eumhojun/frontend-UI-Web/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
