// vue.config.js
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vuecli3/'
    : '/',
    assetsDir: 'assets',
    outputDir: 'docs',
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    // 设置代理
    devServer: {
      // 设置主机地址
      host: 'localhost',
      // 设置默认端口
      port: 8088,
      // 设置代理
      /* proxy: {
        '/static': {
          // 目标 API 地址
          target: 'http://127.0.0.1:8080/',
          // 如果要代理 websockets
          ws: false,
          // 将主机标头的原点更改为目标URL
          changeOrigin: true,
          pathRewrite: {
              '^/static' : 'static'
          }
        }
      } */
    },
    chainWebpack: config => config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_conf', resolve('src/config')),
}
