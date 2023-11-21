import { replacePropDeep } from '@/build/helpers/replacePropDeep';
import figma from '@/themeDescriptions/base/figma/vk.json';
import { colorFromFigma, darkElevation, darkGradient, fonts as fontsVKBase, lightTheme } from '@/themeDescriptions/base/vk';
import type { ColorsDescription } from '@/interfaces/general';
import type { BaseFonts, ThemeDescriptionDobro } from '@/interfaces/themes/dobro';

const fontFamilyDisplay = '"VK Sans Display", sans-serif, Arial';
const fontFamilyDisplayMedium = '"VK Sans Display Medium", sans-serif, Arial';
const fontFamilyDisplayRegular = '"VK Sans Display Regular", sans-serif, Arial';

const lightColors: ColorsDescription = replacePropDeep(colorFromFigma('light'), {
  colorBackgroundSecondary: {
    light: {
      normal: figma.light.background.background_secondary,
      hover: figma.light.states.background_secondary.hover,
      active: 'rgba(0, 0, 0, 0.12)',
    },
  },
});

const darkColors: ColorsDescription = colorFromFigma('dark');

const fontWeightAccent1 = 600;

const fonts: BaseFonts = {
  ...fontsVKBase,
  fontFamilyDisplay,
  fontFamilyDisplayMedium,
  fontFamilyDisplayRegular,
	fontDisplayTitle1: {
		regular: {
			fontSize: 23,
			lineHeight: 28,
			fontFamily: fontFamilyDisplay,
			fontWeight: fontWeightAccent1,
		},
	},
	fontDisplayTitle2: {
		regular: {
			fontSize: 21,
			lineHeight: 26,
			fontFamily: fontFamilyDisplay,
			fontWeight: fontWeightAccent1,
		},
		compact: {
			fontSize: 22,
			lineHeight: 24,
			fontFamily: fontFamilyDisplay,
			fontWeight: fontWeightAccent1,
		},
	},
	fontDisplayTitle3: {
		regular: {
			fontSize: 19,
			lineHeight: 24,
			fontFamily: fontFamilyDisplay,
			fontWeight: fontWeightAccent1,
		},
	},
	fontDisplayTitle4: {
		regular: {
			fontSize: 17,
			lineHeight: 24,
			fontFamily: fontFamilyDisplay,
			fontWeight: fontWeightAccent1,
		},
	},
};

export const dobroTheme: ThemeDescriptionDobro = {
  ...lightTheme,
  ...lightColors,
  ...fonts,
	themeName: 'dobro',
	themeNameBase: 'dobro',

  zIndexMailMenu: 96,
  zIndexPopover: 96,
  zIndexPopup: 97,
  zIndexMenu: 98,

  widthToTouchS: '(max-width: 499px)',
  widthTouchM: '(min-width: 500px) and (max-width: 637px)',
  widthToTouchM: '(max-width: 638px)',
  widthTouchL: '(min-width: 639px) and (max-width: 767px)',
  widthToTouch: '(max-width: 767px)',
  widthFromTablet: '(min-width: 768px)',
  widthTablet: '(min-width: 768px) and (max-width: 1003px)',
  widthToTablet: '(max-width: 1003px)',
  widthFromDesktopS: '(min-width: 1004px)',
  widthDesktopS: '(min-width: 1004px) and (max-width: 1244px)',
  widthToDesktopS: '(max-width: 1244px)',
  widthFromDesktopM: '(min-width: 1245px)',
};

export const dobroDarkTheme: ThemeDescriptionDobro = {
	...dobroTheme,
	...darkColors,
	...darkGradient,
	...darkElevation,
	themeName: 'dobroDark',
	themeInheritsFrom: 'dobro',
	colorsScheme: 'dark',
};
