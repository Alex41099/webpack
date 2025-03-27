import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from "webpack";
import {BuildOptions} from "../types/types";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ]
  }
  const tsLoader = {
    test: /\.tsx?$/, // обрабатываем ts и tsx
    use: 'ts-loader', // название
    exclude: /node_modules/, // не смотрим папку node_modules
  }

  return [
    scssLoader,
    tsLoader
  ]
}