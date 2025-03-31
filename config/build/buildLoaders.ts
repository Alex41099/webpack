import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from "webpack";
import {BuildOptions} from "../types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development'

  const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  const svgLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }
    ]
  }

  const cssLoaderWithModules = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
      }
    }
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      'sass-loader'
    ]
  }
  const tsLoader = {
    test: /\.tsx?$/, // обрабатываем ts и tsx
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          })
        }
      }
    ], // название
    exclude: /node_modules/, // не смотрим папку node_modules
  }
  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      // options: { // любо тут пишем любо в "babel.config.json"
      //   presets: [
      //     '@babel/preset-env',
      //     '@babel/preset-typescript',
      //     [
      //       '@babel/preset-react',
      //       {
      //         runtime: isDev ? 'automatic' : 'classic'
      //       }
      //     ],
      //   ]
      // }
    }
  }

  return [
    assetsLoader,
    scssLoader,
    // tsLoader,
    babelLoader,
    svgLoader
  ]
}
