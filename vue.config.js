const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/assets/css/main.less']
    }
  },
  configureWebpack: {
    plugins: [
      new htmlWebpackPlugin({
        title: '何妨英勇',
        template: 'public/index.html'
      })
    ]
  }
};
