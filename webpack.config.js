var path = require('path');
const nodeExternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

 const webpackConfig={
    target:'node',
    mode: 'development',
    entry: {
         server:path.join(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
     devtool: "eval-source-map",
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
         new CleanWebpackPlugin()
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