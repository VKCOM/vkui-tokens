import {ThemeOctaviusCompactDescription} from '@/interfaces/themes/octaviusCompact';

import {fontSizes} from '../../common';
import {octaviusDarkTheme, octaviusTheme} from '../octavius';

const {fontSize2} = fontSizes;

export const octaviusCompactTheme: ThemeOctaviusCompactDescription = {
	...octaviusTheme,
	themeName: 'octaviusCompact',

	fontText: {
		compact: octaviusTheme.fontText.compact,
		regular: {...fontSize2},
	},

	sizeFieldHeight: {
		compact: 48,
		regular: 32,
	},

	sizeButtonMediumHeight: {
		compact: 48,
		regular: 32,
	},

	sizeControlButtonWidthMin: {
		compact: 130,
		regular: 104,
	},

	sizePromoButtonClose: {
		regular: 32,
	},

	sizeButtonSmallHeight: {
		regular: 32,
	},

	sizeLabelWidth: {
		regular: 184,
	},

	sizeCheckbox: {
		regular: 16,
	},

	sizeFieldHorizontalPadding: {
		regular: 12,
	},

	sizeButtonPaddingHorizontal: {
		compact: 20,
		regular: 16,
	},

	sizeButtonIconPadding: {
		compact: 20,
		regular: 16,
	},

	sizeBaseMargin: {
		compact: 12,
		regular: 8,
	},

	sizeLabelHorizontalMargin: {
		regular: 16,
	},

	sizeLabelVerticalMargin: {
		regular: 4,
	},

	sizeFieldHorizontalMargin: {
		regular: 16,
	},

	sizeFieldVerticalMargin: {
		compact: 24,
		regular: 20,
	},

	sizeFieldSetMargin: {
		regular: 32,
	},

	sizeIconMargin: {
		compact: 12,
		regular: 8,
	},

	sizeBorderRadius: {
		regular: 2,
	},
};

export const octaviusCompactDarkTheme: ThemeOctaviusCompactDescription = {
	...octaviusCompactTheme,
	themeName: 'octaviusCompactDark',
	colorsScheme: 'dark',
	colors: {
		...octaviusCompactTheme.colors,
		...octaviusDarkTheme.colors,
	},
};
