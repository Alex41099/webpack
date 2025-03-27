import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server'

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode
    port: number
}

export default (env: EnvVariables) => {
    const isDev = env.mode === 'development'

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'), // путь к точке входа в приложение
        output: { // место где будет собираться сборка
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true // если будем менять название filename и снова собирать то старый файл удалится!
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            // HtmlWebpackPlugin - подставляет js скрипты в html в результате сборки
            isDev && new webpack.ProgressPlugin()
        ].filter(Boolean),
        module: {
            rules: [ // лоадеры - нужны для переоброзования файлов, например для ts, css, svg и т.д.
                {
                    test: /\.s[ac]ss$/i,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                },
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
        devtool: isDev? 'inline-source-map': false,
        devServer: isDev?  {
            port: env.port ?? 3000,
            open: true
        }: undefined
    }
    return config
}

