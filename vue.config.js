const webpack = require('webpack')
  module.exports = {
    chainWebpack: config => {
      config.module
          .rule('iview')
          .test(/iview.src.*?js$/)
          .use('babel')
          .loader('babel-loader')
          .end()
    },
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/aserver': {
        target: 'http://127.0.0.1:21028/',
        // target: 'http://192.168.d31.192:11038'
        ws: true
      }
    }
  }
}
