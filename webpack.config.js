const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }, ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: './velox.js',
        // path: path.resolve(__dirname, './dist'),
        path: path.resolve(__dirname, '../velox/src/js/'),
        library: '__VELOX__',
        libraryTarget: 'window'

    },
};