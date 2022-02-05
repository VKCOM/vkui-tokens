import {ThemeVkIOSDescription} from '@/interfaces/themes/vkIOS';
import {ThemeVkIOSDarkDescription} from '@/interfaces/themes/vkIOSDark';
import {darkColors, lightTheme} from '@/themeDescriptions/base/vk';

export const vkIOSTheme: ThemeVkIOSDescription = {
	...lightTheme,
	themeName: 'vkIOS',
	themeNameBase: 'vkIOS',
	inheritsFrom: 'vkBase',

	sizeBorderRadius: {
		regular: 10,
	},

	// Токены компонента Cardscroll
	sizeCardBorderRadius: {
		regular: 10,
	},
};

export const vkIOSThemeDark: ThemeVkIOSDarkDescription = {
	...vkIOSTheme,
	...darkColors,
	themeName: 'vkIOSDark',
	themeNameBase: 'vkIOS',
	inheritsFrom: 'vkBaseDark',
	colorsScheme: 'dark',
};
