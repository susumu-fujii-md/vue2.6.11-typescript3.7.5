module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/sass/main.scss";'
      },
    }
  },
  devServer:{
    proxy:{
        '^/api':{
            target: 'http://127.0.0.1:8080',
            ws: true,
            secure: false                
        }
    }
  }
};
