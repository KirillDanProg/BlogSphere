import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import path from 'path';
import { DefinePlugin, RuleSetRule } from 'webpack';

export default ({ config }: { config: any }) => {
    const paths: BuildPaths = {
        output: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules = [paths.src, 'node_modules'];
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return {
                ...rule,
                exclude: /\.svg$/i
            };
        }

        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader(true));

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
        __PROJECT__: JSON.stringify('storybook'),
    }));

    return config;
}
