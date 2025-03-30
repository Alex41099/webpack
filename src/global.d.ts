declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string // благодаря нему ts понимает какие есть свойства внутри обьекта стилей
  }
  const className: IClassNames;
  export = className
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG
}

declare const __PLATFORM__: 'desktop' | 'mobile'
