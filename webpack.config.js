var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            }
        ]
    },
    debug: true,
    devtool: 'source-map',
    output: {
        path: __dirname + '/public/build',
        filename: 'bundle.js'
    }
};
