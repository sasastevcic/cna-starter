/** @type {import('@storybook/core-common').StorybookConfig} */
const storybookConfig = {
	stories: ['../components/**/*.stories.@(mdx|ts|tsx)', '../styles/**/*.stories.@(mdx|ts|tsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-styled-component-theme/dist/preset',
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5',
	},
	typescript: { reactDocgen: false },
	webpackFinal: async (config) => {
		const rules = config.module.rules;
		const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'));
		fileLoaderRule.exclude = /\.svg$/;

		rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

module.exports = storybookConfig;
