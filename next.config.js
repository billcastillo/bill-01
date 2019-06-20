const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withSass({
  // cssModules: true,
  // target: 'serverless',
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
});