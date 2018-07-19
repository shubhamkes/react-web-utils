var path = require('path');
module.exports = {
    // entry: './src/index.js',
    entry: {
        './Utils/index': './src/Utils/index.js',
        './Components/index': './src/Components/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        // libraryTarget: 'commonjs2'
        libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-2']
                    }
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
    }
};