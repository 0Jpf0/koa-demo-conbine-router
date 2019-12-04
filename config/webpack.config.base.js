var path = require('path');
const nodeExternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')
const utils=require('./utils')

const webpackConfig={
    target:'node',
    entry: {
        server:path.join(utils.APP_PATH,'index.js')
    },
    output: {
        path: utils.DIST_PATH,
        filename: '[name].bundle.js',
    },
    module:{
        rules:[
            {
                test:'/\.(js|jsx)$/',
                use:{
                    loader: "babel-loader"
                },
                exclude:[path.join(__dirname,'node_modules')]
            }
        ]
    },
    externals:[nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            "process.env":{
                "NODE_ENV":process.env.NODE_ENV==='production'||process.env.NODE_ENV==='prod'?'production':'development'
            }
        })
    ],
    node: {
        console: false,
        global: true,
        process: true,
        __filename: "mock",
        __dirname: "mock",
        Buffer: true,
        setImmediate: true

        // 更多选项，请查看“其他 Node.js 核心库”
    }

};
module.exports =webpackConfig