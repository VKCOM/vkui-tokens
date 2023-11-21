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

	fontFamilyDisplay: 'VK Sans Display, sans-serif, Arial',
	fontFamilyDisplayMedium: 'VK Sans Display Medium, sans-serif, Arial',
	fontFamilyDisplayRegular: 'VK Sans Display Regular, sans-serif, Arial',

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

export const dobroDarkTheme: ThemeDobroDescription = {
	...dobroTheme,
	...darkColors,
	...darkGradient,
	...darkElevation,
	themeName: 'dobroDark',
	themeInheritsFrom: 'dobro',
	colorsScheme: 'dark',
};
