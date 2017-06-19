
module.exports = Object.assign({}, require('./webpack.config'),{
    output: {
        path: '/',
        filename: './node-template/scripts/bundle.js'
    },
    devtool: 'cheap-module-inline-source-map',
    plugins: []
});