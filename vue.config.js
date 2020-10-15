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
        title: '万物尽风流',
        template: 'public/index.html'
      })
    ]
  }
};
