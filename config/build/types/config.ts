type ModeType = 'production' | 'development'

export interface BuildPaths {
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
    paths: BuildPaths
    port: number
    isDev: boolean
}
