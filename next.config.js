
const withOptimizedImages = require('next-optimized-images')
const withSass = require('@zeit/next-sass')
const path = require('path')
const imageminWebp = require('imagemin-webp');

const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = withOptimizedImages(
  withSass({
    target: 'serverless',

    webpack: config => {
      config.resolve.alias.images = path.join(__dirname, "images");

      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      },

      // For loading .md files thru js
      config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader'
        },

        {
          test: /\.(jpe?g|png)$/i,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {quality: 95}
            }
          ]
        }
      ),

      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            { from: "./images/", to: "./images/[name].webp" }
          ]
        }),
      ),

      config.plugins.push(
        new ImageminWebpackPlugin({
          test: /\.(jpe?g|png|gif|svg)$/i,
          plugins: [
            imageminWebp({
              quality: 75
            })
          ]
        })
      )

      return config
    },
  })
);

// imagemin(['images/*.{jpg,png}'], {
//   destination: __dirname + '/images/converted/',
//   plugins: [
//     imageminWebp({
//       quality: 75
//     })
//   ]
// }).then(() => {
//   console.log('Images optimized');
// });