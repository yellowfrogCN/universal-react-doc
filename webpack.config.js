const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './Entry.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};


// module.exports = {
//   devtool: '#source-map',
//   entry: [
//     // 'webpack-hot-middleware/client',
//     './Client.js',
//   ],
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//     // publicPath: '/',
//   },
// //   plugins: [
// //     new webpack.optimize.OccurrenceOrderPlugin(),
// //     new webpack.HotModuleReplacementPlugin(),
// //     new webpack.NoEmitOnErrorsPlugin(),
// //   ],
//   module: {
//     loaders: [{
//         test: /\.js?$/,
//         loader: 'babel-loader',
//         query: {
//             presets: ['react']
//         }
//     }],
//   },
// };