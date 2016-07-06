var webpack = require('webpack');
module.exports = {
    port: 8800,
    entry: [
      "./ui/app.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.json']
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]
};

