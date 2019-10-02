const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withSass({
  // cssModules: true,
  target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    },

    // For loading .md files thru js
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })

    return config
  },

  // exportPathMap: async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
  //   return {
  //     '/': { page: '/' },
  //     '/blog': { page: '/blog' },
  //     '/projects': { page: '/projects' },
  //     '/writing/basic-web-typography-guide': { page: '/blogpost', query: { title: 'basic-web-typography-guide' } },
  //     '/writing/how-to-host-your-site-for-free-using-github-pages': { page: '/blogpost', query: { title: 'how-to-host-your-site-for-free-using-github-pages' } }
  //   };
  // }
});