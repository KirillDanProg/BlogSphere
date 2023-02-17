import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import path from 'path';

export default ({ config }: { config: any }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        html: '',
        entry: '',
        output: ''
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', 'tsx');

    config.module.rules.push(buildCssLoader(true));

    const fileLoaderRule = config.module.rules.find(
        (rule: any) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
        test: /\.svg$/,
        enforce: "pre",
        loader: require.resolve("@svgr/webpack")
    });

    return config;
}
