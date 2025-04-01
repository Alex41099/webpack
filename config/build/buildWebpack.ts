import webpack from "webpack";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {BuildOptions} from "../types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === 'development'

  return {
    mode: options.mode ?? 'development',
    entry: options.paths.entry, // путь к точке входа в приложение
    output: { // место где будет собираться сборка
      path: options.paths.output,
      filename: '[name].[contenthash].js',
      clean: true // если будем менять название filename и снова собирать то старый файл удалится!
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(options),
    devtool: isDev? 'eval-cheap-module-source-map': 'source-map',
    devServer: isDev?  buildDevServer(options): undefined
  }
}