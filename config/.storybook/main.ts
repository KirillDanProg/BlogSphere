const config = {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react',
    },
    core: {
        builder: '@storybook/builder-webpack5'
    }
};
export default config;
