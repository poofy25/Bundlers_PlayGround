const path = require('path')

module.exports = {
     mode: 'development',
     entry:{
      indexjs : path.resolve(__dirname, 'src/Case_Handler.js'),
     },
     output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
     },
     devServer: {
      static:{
         directory: path.resolve(__dirname, 'dist')
      },
      port: 3000,
      open:true,
      hot:true,
      compress:true,
      historyApiFallback: true,
     }
}