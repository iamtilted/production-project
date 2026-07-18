declare module '*.scss' {
    interface IClassNames {
        [ClassName: string]: string
    }

    const className: IClassNames;
    export = className;
}