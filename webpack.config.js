const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/setup.ts',
    experiments: {
        outputModule: true
    },
    output: {
        filename: 'setup.mjs',
        path: path.resolve(__dirname, 'packed'),
        library: {
            type: 'module'
        },
        clean: true
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: './data/*',
                    to: '[path][name][ext]',
                    noErrorOnMissing: true
                },
                {
                    from: '**/*.html',
                    to: '[path][name][ext]',
                    context: 'src/App',
                    noErrorOnMissing: true
                },
                {
                    from: 'manifest.json',
                    to: 'manifest.json',
                    noErrorOnMissing: true
                },
                {
                    from: 'data.json',
                    to: 'data.json',
                    noErrorOnMissing: true
                },
                {
                    from: 'src/assets',
                    to: 'assets',
                    noErrorOnMissing: true
                }
            ]
        })
    ],
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}