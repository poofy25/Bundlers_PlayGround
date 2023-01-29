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
}