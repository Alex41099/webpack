const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'), // путь к точке входа в приложение
        output: { // место где будет собираться сборка
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true // если будем менять название filename и снова собирать то старый файл удалится!
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})
        ]
    }

}

