import { type BuildOptions } from '../types/config'

const babelRemovePropsPlugin = require.resolve('../babel/babelRemovePropsPlugin')

type BuildProps = Partial<BuildOptions> & {
    isTsx: boolean
}

export const buildBabelLoader = ({
    isDev,
    isTsx
}: BuildProps) => {
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env'
                ],
                plugins: [
                    [
                        babelRemovePropsPlugin,
                        { props: ['data-testid'] }
                    ],
                    [
                        '@babel/plugin-transform-typescript',
                        { isTsx }
                    ],
                    '@babel/plugin-transform-runtime'
                ]
            }
        }
    }
}
