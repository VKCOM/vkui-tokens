import {replacePropDeep} from '@/build/helpers/replacePropDeep';
import {ThemeMediaDescription} from '@/interfaces/themes/media';
import {ThemePharmaDescription} from '@/interfaces/themes/pharma';

import {projectColors} from '../../common';
import {mediaTheme} from '../media';

const fontFamily = 'Proxima Nova, Arial, sans-serif';
const themeWithFontFamily: ThemeMediaDescription = replacePropDeep(mediaTheme, {
	fontFamily,
});

delete themeWithFontFamily.gridLayoutArticleMargin;

export const pharmaTheme: ThemePharmaDescription = {
	...themeWithFontFamily,

	themeName: 'pharma',

	gridContent: {
		compactX: '100%',
		compact: 660,
		regular: 920,
		large: 1180,
		largeX: 1240,
	},
	gridColumnX2: {
		compactX: '100%',
		compact: 300,
		regular: 440,
		large: 580,
		largeX: 600,
	},
	gridColumnX3: {
		compactX: '100%',
		compact: 180,
		regular: 280,
		large: 380,
		largeX: 387,
	},
	gridColumnX4: {
		compactX: '100%',
		compact: 120,
		regular: 200,
		large: 280,
		largeX: 280,
	},
	gridColumnX6: {
		compactX: '100%',
		compact: 60,
		regular: 120,
		large: 180,
		largeX: 173,
	},
	colors: {
		...themeWithFontFamily.colors,
		colorTextAccent: projectColors.colorPrimaryPharma,
		colorIconAccent: projectColors.colorPrimaryPharma,
		colorBackgroundAccent: projectColors.colorPrimaryPharma,
		colorStrokeAccent: projectColors.colorPrimaryPharma,
		colorSale: themeWithFontFamily.colors.colorPaletteRed2,
	},
	sizeSelectIconPadding: {
		regular: 7,
	},
};
