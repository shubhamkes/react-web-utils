/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    filename: "./index.html"
});
module.exports = {
    // entry: path.join(__dirname, "src/index.js"),
    entry: {
        './Utils/index': './src/Utils/index.js',
        // './Utils/confirm.utils': './src/Utils/confirm.utils.js',
        // './Utils/location.utils': './src/Utils/location.utils.js',
        // './Utils/localStorage.utils': './src/Utils/localStorage.utils.js',
        // './Utils/toast.utils': './src/Utils/toast.utils.js',
        // './Utils/modal.utils': './src/Utils/modal.utils.js',
        // './Utils/openProperties.utils': './src/Utils/openProperties.utils.js',
        // './Utils/preserveUrl.utils': './src/Utils/preserveUrl.utils.js',
        // './Utils/cookie.utils': './src/Utils/cookie.utils.js',
        // './Utils/loader.utils': './src/Utils/loader.utils.js',

        // './Components/Toast-Container/toastContainer.component': './src/Components/Toast-Container/toastContainer.component.js',
        // './Components/Modal-Wrapper/modalWrapper.component': './src/Components/Modal-Wrapper/modalWrapper.component.js',
        // './Components/Confirm-Modal-Wrapper/confirm.modal': './src/Components/Confirm-Modal-Wrapper/confirm.modal.js',
        './Components/index': './src/Components/index.js'
    },
    output: {
        // path: path.join(__dirname, "examples/build"),
        // filename: "bundle.js"

        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        // libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};