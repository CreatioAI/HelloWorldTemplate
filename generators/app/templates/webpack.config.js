const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
var ZipPlugin = require('zip-webpack-plugin');

module.exports = (env) => {
    return {
        entry: { },
        output: {
            filename: `[name]/[name].js?v=${Date.now()}`,
            path: path.resolve(__dirname, `packages`),
            publicPath: '/',
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    {from: '**/*', to: "[path][name][ext]", context: 'template/'},
                ],
            }),
            new ZipPlugin({
                path: './package',
                filename: `package.zip`,
                extension: 'zip',
                fileOptions: {
                    mtime: new Date(),
                    mode: 0o100664,
                    compress: true,
                    forceZip64Format: false,
                },
                zipOptions: {
                    forceZip64Format: false,
                },
            })
        ]
    };
};