import { create } from '@storybook/theming';
import stimmtLogo from '../src/assets/logo.svg'

export default create({
	base: 'dark',

	// Typography
	brandTitle: 'Stimmt Digital',
	brandUrl: 'https://stimmt.digital',
	brandImage: stimmtLogo,
	brandTarget: '_self',

	//
	colorPrimary: '#FFF',
	colorSecondary: '#000000',

	// Toolbar default and active colors
	barSelectedColor: '#FFF',
	});