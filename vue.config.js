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
        title: '剑指的方向 就是天才的故乡',
        template: 'public/index.html'
      })
    ]
  }
};
