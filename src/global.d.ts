declare module '*.module.scss' {
  interface IClassNames {
    [className: string]: string // благодаря нему ts понимает какие есть свойства внутри обьекта стилей
  }
  const className: IClassNames;
  export = className
}
