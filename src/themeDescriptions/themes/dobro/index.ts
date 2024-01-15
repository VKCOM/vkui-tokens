import type { ColorsDescription } from '@/interfaces/general';
import type { ThemeDobroDescription } from '@/interfaces/themes/dobro';
import {
	colorFromFigma,
	darkElevation,
	darkGradient,
	fonts,
	lightTheme,
} from '@/themeDescriptions/base/vk';

const lightColors: ColorsDescription = colorFromFigma('light');

const darkColors: ColorsDescription = colorFromFigma('dark');

export const dobroTheme: ThemeDobroDescription = {
	...lightTheme,
	...lightColors,
	...fonts,

	themeName: 'dobro',
	themeNameBase: 'dobro',

	dobroFontFamilyDisplay: 'VK Sans Display, sans-serif, Arial',
	dobroFontFamilyDisplayMedium: 'VK Sans Display Medium, sans-serif, Arial',
	dobroFontFamilyDisplayRegular: 'VK Sans Display Regular, sans-serif, Arial',

	dobroZIndexMailMenu: 96,
	dobroZIndexPopover: 96,
	dobroZIndexPopup: 97,
	dobroZIndexMenu: 98,

	dobroWidthToTouchS: '(max-width: 499px)',
	dobroWidthTouchM: '(min-width: 500px) and (max-width: 637px)',
	dobroWidthToTouchM: '(max-width: 638px)',
	dobroWidthTouchL: '(min-width: 639px) and (max-width: 767px)',
	dobroWidthToTouch: '(max-width: 767px)',
	dobroWidthFromTablet: '(min-width: 768px)',
	dobroWidthTablet: '(min-width: 768px) and (max-width: 1003px)',
	dobroWidthToTablet: '(max-width: 1003px)',
	dobroWidthFromDesktopS: '(min-width: 1004px)',
	dobroWidthDesktopS: '(min-width: 1004px) and (max-width: 1244px)',
	dobroWidthToDesktopS: '(max-width: 1244px)',
	dobroWidthFromDesktopM: '(min-width: 1245px)',
};

export const dobroDarkTheme: ThemeDobroDescription = {
	...dobroTheme,
	...darkColors,
	...darkGradient,
	...darkElevation,
	themeName: 'dobroDark',
	themeInheritsFrom: 'dobro',
	colorsScheme: 'dark',
};
