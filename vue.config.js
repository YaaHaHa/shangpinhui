module.exports = {
    // lintOnSave: false, // 关闭ESLint的规则检查
    lintOnSave: 'warning', // 输出提示错误, 但项目继续运行
    publicPath:'./',  // 在hash模式下避免打包空白页
    devServer:{    //只用于开发环境
      proxy:{     // 代理服务器
        '/api':{    //只对请求路径以/api开头的作代理转发
          target:'http://localhost:8000', //转发的目标服务器地址。路径要写全！！！
          changeOrigin:true,    //支持跨域
          // pathRewrite: {'^/api': ''}  // 代理服务器转发的时候要不要把/api替换掉，如果后台可以接收/api那就不用去掉
        }
      }
    }
  }