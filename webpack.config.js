const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: {
        background: './src/background/background.js',
        popup: './src/popup/popup.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader?presets[]=es2015'
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }],
            },
            {
                test: /\.(jpg|jpeg|png|gif|ico|svg)$/,
                use: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.(json|ttf|otf|woff2|woff|eot)$/,
                use: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Ribbon Reminder",
            template: './src/popup/popup.html',
            filename: 'popup.html'
        }),
        new CopyWebpackPlugin([
            { from: './src/manifest.json', to: './manifest.json' },
            { from: './src/icons/app-icon.png', to: './app-icon.png' }
        ])
    ]
};

module.exports = config;
