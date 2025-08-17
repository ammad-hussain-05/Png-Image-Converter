const path = require ('path')
const HTMLWebpackPlugin = require ('html-webpack-plugin')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

    },
    devServer: {
    hot: false,
    static: {
        directory: path.join(__dirname, 'dist'),
    },
        port: 8080,
    },

    plugins:[
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new WasmPackPlugin({
            crateDirectory: path.resolve(__dirname,'.')
        })
    ],
    experiments :{
        asyncWebAssembly: true
    }

}


// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports = {
//   entry: "./public/main.js", // tumhara main.js
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "bundle.js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: "./public/index.html", // tumhara index.html
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "dist"),
//     },
//     port: 3000,
//     open: true,
//   },
// };
