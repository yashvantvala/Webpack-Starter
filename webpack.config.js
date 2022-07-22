const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'), // which file to use
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', //automatically take name and make file with hash
        clean: true, //prevent multiple bundle for same js file
        assetModuleFilename : '[name][ext]'
    },
    devtool: 'source-map', //to view source map
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist') //which directory to run in dev server
        },
        port: 3000, //which port to use
        open: true, //automatically open in browser
        hot: true, //change will automatically reflect in browser
        compress: true,
        historyApiFallback: true,
    },
    module:{
        rules:[
            {
                test: /\.scss$/, //regex for css/scss/less
                use: [
                    'style-loader', //which loader to use to compile
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },{
                test:/\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins:[ //will make dist folder itself
        new HtmlWebpackPlugin({
            title:'Webpack App',
            filename:'index.html', //file name after execution
            template:'src/template.html' //which file to run
        }),
        new BundleAnalyzerPlugin(),
    ]
}