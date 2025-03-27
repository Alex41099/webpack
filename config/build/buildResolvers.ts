import {Configuration} from "mini-css-extract-plugin";

export function buildResolvers(options?: any): Configuration['resolve'] {
  return {
    extensions: ['.tsx', '.ts', '.js'],  // расширения которые необходимо обработать
  }
}
