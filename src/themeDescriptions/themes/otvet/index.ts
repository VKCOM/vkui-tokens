import {ThemeOtvetDescription} from '@/interfaces/themes/otvet';
import {ThemeOtvetDarkDescription} from '@/interfaces/themes/otvetDark';

import {flatifyTheme} from '../../../build/helpers/flatifyTheme';
import {darkTheme, lightTheme} from '../../base/paradigm';
import {fontSizes, helpers} from '../../common';

const {x05, x3, x4, x5, x10} = helpers;
const {fontSize4, fontSize5, fontSize6, fontSize7, fontSize8} = fontSizes;

const octaviusThemeRegular = flatifyTheme(lightTheme);

export const otvetTheme: ThemeOtvetDescription = {
	...octaviusThemeRegular,

	themeName: 'otvet',

	breakpoints: {
		desktopS: {
			breakpoint: 0,
			adaptiveValue: 'regular',
		},
	},

	sizeBorderRadiusPaper: {
		regular: 4,
	},

	fontH0: {
		regular: {
			...fontSize8,
			fontWeight: 700,
			marginBottom: x5,
		},
	},

	fontH1: {
		regular: {
			...fontSize7,
			fontWeight: 700,
			marginBottom: x4,
		},
	},

	fontH2: {
		regular: {
			...fontSize6,
			fontWeight: 700,
			marginBottom: x3,
		},
	},

	fontTitle1: {
		regular: {
			...fontSize5,
			fontWeight: 700,
			marginBottom: x3,
		},
	},

	fontTitle2: {
		regular: {
			...fontSize4,
			fontWeight: 700,
			marginBottom: x3,
		},
	},

	sizeFieldHeight: {
		regular: x10,
	},

	sizeButtonPaddingHorizontal: {
		regular: x5,
	},

	sizeIconMargin: {
		regular: x3,
	},

	sizeIconUI: {
		regular: x4 + x05,
	},
};

export const otvetDarkTheme: ThemeOtvetDarkDescription = {
	...otvetTheme,
	themeName: 'otvetDark',
	colorsScheme: 'dark',
	colors: {
		...otvetTheme.colors,
		...darkTheme.colors,

		colorBackgroundContent: {
			normal: '#191919',
			hover: '#2B2B2B',
			active: '#2B2B2B',
		},

		colorTextPrimary: 'rgba(255, 255, 255, 0.9)',
		colorTextSecondary: 'rgba(255, 255, 255, 0.5)',

		colorIconPrimary: '#B4B4B4',
		colorIconSecondary: '#5F5F5F',
		colorFieldBorderAlpha: {
			normal: 'transparent',
			hover: 'transparent',
			active: 'transparent',
		},
	},
};
