const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
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
                test: /\.(json|ttf|otf)$/,
                use: 'file-loader?name=[name].[ext]'
            },
            {
                test: /(fontawesome.js)$/,
                use: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.scss$/,
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
            template: './src/popup.html',
            filename: 'popup.html'
        })
    ]
};

module.exports = config;
