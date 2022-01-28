const path = require('path')

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/store/'
  // : '/',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [path.resolve(__dirname, './src/style/main.sass')]
    }
  },
}
