module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: ['./src/assets/css/main.less']
    }
  },
  // chainWebpack: config => {
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       args[0].title = '机关算尽'
  //       return args
  //     })
  // },
  pwa: {
    "name": "33机关算尽22",
    "short_name": "33机关算尽22",
    "theme_color": "#4DBA87",
    "icons": [
      {
        "src": "./favicon.ico",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "./favicon.ico",
        "sizes": "512x512",
        "type": "image/png"
      },
      {
        "src": "./favicon.ico",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "./favicon.ico",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
    "start_url": ".",
    "display": "standalone",
    "background_color": "#000000"
  }
};
