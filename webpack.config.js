const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const config= {
    entry: {
        main:'./src/index.js',
        //sw: './src/sw.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ],
    devServer: {
        contentBase: './build',
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3001'
        },
    },
    devtool: 'source-map',
    optimization: {
        runtimeChunk: 'single',
        usedExports: true,
        sideEffects: false,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: 'vendor',
                    name: 'vendor',
                    enforce: true,
                    chunks: 'all'
                }
            }
        }
    }
}

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';
    if (isDevelopment) {
        config.devtool = 'eval-source-map';
    } else {
        config.devtool = 'source-map';
    }
    return config;
};