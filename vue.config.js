// vue.config.js
module.exports = {
  // options...
  devServer: {
  	overlay: {
  		warnings: true,
  		errors: true
  	}
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/lookr-uppr/'
    : '/'
}