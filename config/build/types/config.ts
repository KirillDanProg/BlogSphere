type ModeType = 'production' | 'development'

export interface IPaths {
    entry: string
    output: string
    html: string
    src: string
}

export interface BuildEnv {
    mode: ModeType
    port: number
}
export interface BuildOptions {
    mode: ModeType
    paths: IPaths
    port: number
    isDev: boolean
}
