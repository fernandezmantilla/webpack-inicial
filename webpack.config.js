const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {

    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false    
                },
            },
            {
                test:  /\.css$/i,
                exclude:   /styles.css$/i,
                use: ['style-loader',  'css-loader']
            },
            {
                test:  /styles.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
           },
           {
               test: /\.(png|jpe?e|gif)$/,
               loader: 'file-loader'

           }
        ]
    },
    plugins:[
        new HtmlWebPack({
           template: './src/index.html' ,
           filename: './index.html',
           inject: 'body'
        }),
        new MiniCssExtractPlugin ({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin ({
            patterns:
            [ { from: 'src/assets/', to: 'assets/' } ]
        })
    ]


}
