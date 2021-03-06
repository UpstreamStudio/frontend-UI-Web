// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-components-button-mdx": () => import("./../../../src/Components/Button.mdx" /* webpackChunkName: "component---src-components-button-mdx" */),
  "component---src-index-mdx": () => import("./../../../src/index.mdx" /* webpackChunkName: "component---src-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

