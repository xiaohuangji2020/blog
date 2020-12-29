const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/variable.less')]
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
