import { replacePropDeep } from '../../../build/helpers/replacePropDeep.ts';
import type { ThemeMediaDescription } from '../../../interfaces/themes/media/index.ts';
import type { ThemeMycomDescription } from '../../../interfaces/themes/mycom/index.ts';
import { projectColors } from '../../common/colors/projectColors.ts';
import { mediaTheme } from '../media/index.ts';

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
