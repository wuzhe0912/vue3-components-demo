module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Vue 3 Components'
        return args
      })
  }
}
