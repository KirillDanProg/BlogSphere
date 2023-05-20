import { type RuleSetRule } from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders ({ isDev }: BuildOptions): RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
    const babelLoader = buildBabelLoader({
        isTsx: false
    })
    const tsxBabelLoader = buildBabelLoader({ isTsx: true })
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/
    // }
    const cssLoader = buildCssLoader(isDev)
    return [
        svgLoader,
        fileLoader,
        babelLoader,
        tsxBabelLoader,
        // typescriptLoader,
        cssLoader
    ]
}
