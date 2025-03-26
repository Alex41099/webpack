const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'), // путь к точке входа в приложение
    output: { // место где будет собираться сборка
        path: path.resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true // если будем менять название filename и снова собирать то старый файл удалится!
    }
}

