module.exports = {
  devServer: {
      proxy: 'https://torch-net.herokuapp.com'
  },

  publicPath: process.env.NODE_ENV === 'production'
   ? '/SyTW-2122/E02/'
   : '/'
}