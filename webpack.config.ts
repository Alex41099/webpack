import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode
}

export default (env: EnvVariables) => {
    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.ts'), // путь к точке входа в приложение
        output: { // место где будет собираться сборка
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true // если будем менять название filename и снова собирать то старый файл удалится!
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})
        ],
        module: {
            rules: [ // лоадеры
                {
                    test: /\.tsx?$/, // обрабатываем ts и tsx
                    use: 'ts-loader', // название
                    exclude: /node_modules/, // не смотрим папку node_modules
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],  // расширения которые необходимо обработать
        },
    }
    return config
}

