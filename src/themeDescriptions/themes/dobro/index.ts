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

	dobroFontFamily600: 'VK Sans Display, sans-serif, Arial',
	dobroFontFamily500: 'VK Sans Display Medium, sans-serif, Arial',
	dobroFontFamily400: 'VK Sans Display Regular, sans-serif, Arial',

	dobroPortalZIndex: 96,
	dobroPopoutZIndex: 96,
	dobroModalZIndex: 97,
	dobroMenuZIndex: 98,

	dobroLayoutWidthToMobileS: '(max-width: 499px)',
	dobroLayoutWidthMobileM: '(min-width: 500px) and (max-width: 637px)',
	dobroLayoutWidthToMobileM: '(max-width: 638px)',
	dobroLayoutWidthMobileL: '(min-width: 639px) and (max-width: 767px)',
	dobroLayoutWidthToMobile: '(max-width: 767px)',
	dobroLayoutWidthFromTablet: '(min-width: 768px)',
	dobroLayoutWidthTablet: '(min-width: 768px) and (max-width: 1003px)',
	dobroLayoutWidthToTablet: '(max-width: 1003px)',
	dobroLayoutWidthFromDesktopS: '(min-width: 1004px)',
	dobroLayoutWidthDesktopS: '(min-width: 1004px) and (max-width: 1244px)',
	dobroLayoutWidthToDesktopS: '(max-width: 1244px)',
	dobroLayoutWidthDesktopM: '(min-width: 1245px)',
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
