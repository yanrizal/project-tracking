var webpack = require('webpack');
module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './app/index.js'],
},
output: {
  path: __dirname + '/app/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/built/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/built/'
},
module: {
 loaders: [
   {
    test   :/\.js?$/,
    exclude:/(node_modules|bower_components)/,
    loader :'babel-loader',
    query  :{
        presets:['react','es2015','stage-1']
    },
   },
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
 ]
},
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}