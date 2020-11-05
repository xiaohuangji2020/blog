const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/assets/css/main.less']
    }
  },
  configureWebpack: {
    externals: {
      hljs: 'hljs'
    },
    plugins: [
      new htmlWebpackPlugin({
        title: '时之长河 生生不息',
        template: 'public/index.html'
      })
    ]
  }
};
