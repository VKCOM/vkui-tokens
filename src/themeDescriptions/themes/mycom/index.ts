import { replacePropDeep } from '../../../build/helpers/replacePropDeep.js';
import { ThemeMediaDescription } from '../../../interfaces/themes/media/index.js';
import { ThemeMycomDescription } from '../../../interfaces/themes/mycom/index.js';
import { projectColors } from '../../common/colors/projectColors.js';
import { mediaTheme } from '../media/index.js';

const fontFamily = 'Proxima Nova, Arial, sans-serif';
const themeWithFontFamily: ThemeMediaDescription = replacePropDeep(mediaTheme, {
	fontFamily,
});
delete themeWithFontFamily.prefix;

export const mycomTheme: ThemeMycomDescription = {
	...themeWithFontFamily,
	themeName: 'mycom',
	themeNameBase: 'mycom',
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
