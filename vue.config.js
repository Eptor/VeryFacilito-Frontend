const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    allowedHosts: 'all',
    https: true,
  },
  transpileDependencies: true
}