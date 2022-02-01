import {ThemeVkIOSDescription} from '@/interfaces/themes/vkIOS';
import {darkTheme, lightTheme} from '@/themeDescriptions/base/vk';

export const vkIOSTheme: ThemeVkIOSDescription = {
	...lightTheme,
	themeName: 'vkIOS',

	sizeBorderRadius: {
		regular: 10,
	},
};

export const vkIOSThemeDark: ThemeVkIOSDescription = {
	...vkIOSTheme,
	...darkTheme,
	themeName: 'vkIOSDark',
	colorsScheme: 'dark',
};
