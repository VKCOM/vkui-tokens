import { ThemeOtvetDescription } from '@/interfaces/themes/otvet';
import { ThemeOtvetDarkDescription } from '@/interfaces/themes/otvetDark';

import { darkTheme, lightTheme } from '../../base/paradigm';
import { fontSizes, helpers } from '../../common';

const { x05, x3, x4, x5, x10 } = helpers;
const { fontSize4, fontSize5, fontSize6, fontSize7, fontSize8 } = fontSizes;

export const otvetTheme: ThemeOtvetDescription = {
	...lightTheme,

	themeName: 'otvet',
	themeNameBase: 'otvet',

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

	colors: {
		...lightTheme.colors,

		colorBackground: '#EEEFF1',
		colorFieldBackground: 'rgba(0, 16, 61, 0.06)',
	},
};

export const otvetDarkTheme: ThemeOtvetDarkDescription = {
	...otvetTheme,
	themeName: 'otvetDark',
	colorsScheme: 'dark',
	colors: {
		...otvetTheme.colors,
		...darkTheme.colors,

		// Background
		colorBackground: '#181B20',
		colorBackgroundContent: '#20272E',
		colorBackgroundModal: '#2A333C',
		colorBackgroundTertiary: 'rgba(167, 203, 238, 0.06)',
		colorFieldBackground: 'rgba(167, 203, 238, 0.12)',

		// Background Tint
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.4)',
		colorBackgroundAccentTintThemed: '#134782',

		// Stroke
		colorSeparatorPrimary: '#444A4F',
		colorSeparatorPrimaryAlpha: 'rgba(68, 74, 79, 0.6)',

		// States
		colorBackgroundAccent: {
			normal: '#0077FF',
			hover: '#0073F7',
			active: '#006FEF',
		},

		colorBackgroundSecondary: {
			normal: '#303B45',
			hover: '#36414D',
			active: '#3B4854',
		},

		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(167, 203, 238, 0.12)',
			hover: 'rgba(167, 203, 238, 0.16)',
			active: 'rgba(167, 203, 238, 0.2)',
		},

		colorTransparent: {
			normal: 'transparent',
			hover: 'rgba(167, 203, 238, 0.12)',
			active: 'rgba(167, 203, 238, 0.16)',
		},

		colorBackgroundAccentTintThemedAlpha: {
			normal: 'rgba(0, 119, 255, 0.4)',
			hover: 'rgba(0, 119, 255, 0.46)',
			active: 'rgba(0, 119, 255, 0.52)',
		},
	},
};
