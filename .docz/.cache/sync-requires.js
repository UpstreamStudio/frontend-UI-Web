const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-components-button-mdx": hot(preferDefault(require("/Users/eumhojun/frontend-UI-Web/.docz/src/Components/Button.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/eumhojun/frontend-UI-Web/.docz/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/eumhojun/frontend-UI-Web/.docz/src/pages/404.js")))
}

