var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var Package = require('./package.json');
var autoprefixer = require('autoprefixer');
//var precss = require('precss');
var cssnano = require('cssnano');
var banner = 
'+-----------------------------+\n' +
Package.name + '               *\n' + 
Package.description + '   *\n' +
'@author ' +Package.author + '        *\n' +
Package.url + '     *\n' +
'Copyright ' + new Date().getFullYear() + ' ' + Package.license  + ' licensed.  *\n' +
'+-----------------------------+';
var extractPlugin = new ExtractTextPlugin({
   filename: 'assets/css/styles.min.css'
});
module.exports = {
  entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'assets/js/bundle.js',
        publicPath: '/'
    },
    devServer: {
      contentBase: path.join(__dirname, "app"),
      compress: true,
      port: 9000,
      historyApiFallback: true
    },
    module:{
      rules:[
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['react', 'es2015', 'stage-2']
              }
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          loader: extractPlugin.extract({
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          })
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/img/[name].[ext]',
                //outputPath: '/'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      extractPlugin,
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        favicon: 'src/favicon.ico'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console: false,
        }
      }),
      new webpack.BannerPlugin(banner),
      new webpack.DefinePlugin({
        "process.env": { 
           NODE_ENV: JSON.stringify("production") 
         }
      }),
      new CleanWebpackPlugin(['app'])
    ]
};