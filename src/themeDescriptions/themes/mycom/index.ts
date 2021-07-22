import {replacePropDeep} from '@/build/helpers/replacePropDeep';
import {ThemeMediaDescription} from '@/interfaces/themes/media';
import {ThemeMycomDescription} from '@/interfaces/themes/mycom';
import {projectColors} from '@/themeDescriptions/common/colors/projectColors';

import {mediaTheme} from '../media';

const fontFamily = 'Proxima Nova, Arial, sans-serif';
const themeWithFontFamily: ThemeMediaDescription = replacePropDeep(mediaTheme, {
	fontFamily,
});
delete themeWithFontFamily.prefix;

export const mycomTheme: ThemeMycomDescription = {
	...themeWithFontFamily,
	themeName: 'mycom',
	colors: {
		...themeWithFontFamily.colors,
		colorTextAccent: projectColors.colorPrimaryMycom,
		colorIconAccent: projectColors.colorPrimaryMycom,
		colorBackgroundAccent: projectColors.colorPrimaryMycom,
		colorStrokeAccent: projectColors.colorPrimaryMycom,
		colorSale: projectColors.colorSecondaryMycom,
	},
	fontFamily,
	sizeSelectIconPadding: {
		regular: 7,
	},
};
