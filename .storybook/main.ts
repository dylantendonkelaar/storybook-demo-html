import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
	"stories": [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	"addons": [{
        name: "@storybook/addon-essentials",
        options: {
            actions: false
        }
    },
	  "@whitespace/storybook-addon-html",
	"@storybook/addon-a11y",
    "@storybook/addon-designs",
],
	"staticDirs": [
		"../storybook-static/assets"
	],
	"framework": {
		"name": "@storybook/html-vite",
		"options": {}
	}
};
export default config;