const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = extra => {
    const loaders = [  {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hrm : isDev,
            reloadAll: true,
        },
    }, 'css-loader']

    if(extra) {
        loaders.push(extra);
    }
    return loaders;
}

const optimization = () => {
    const config = {
        splitChunks : {
            chunks : 'all'
        }
    }

    if(isProd){
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}

module.exports = {
    context : path.resolve(__dirname, 'src'),
    mode : 'development',
    entry : {
        main : ['@babel/polyfill', './index.js'],
    },
    output : {
        filename : filename('js'),
        path : path.resolve(__dirname, 'dist'), 
    },
    resolve : {
        extensions : ['.js', '.json', '.png'],
        alias : {
            '@models' : path.resolve(__dirname, 'src/models'),
            '@' : path.resolve(__dirname, 'src'),
        },
    },
    optimization : optimization(),
    devServer : {
        port: 5600,
        hot: isDev
    },
    plugins : [
        new HTMLWebpackPlugin({
            template : './index.html',
            minify : {
                collapseWhitespace : isProd,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename : filename('css'),
        }),
    ],
    module : {
        rules : [
        {
            test : /\.css$/,
            use : cssLoaders(),
        },
        {
            test : /\.less$/,
            use : cssLoaders('less-loader'),
        },
        {
            test : /\.s[ac]ss$/,
            use : cssLoaders('sass-loader'),
        },
        {
            test : /\.(png|jpg|svg|gif)$/,
            use : ['file-loader'],
        },
        {
            test : /\.(ttf|woff|woff2|eot)$/,
            use : ['file-loader'],
        },
        { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                ]
            }
        },
    ],
    }
}