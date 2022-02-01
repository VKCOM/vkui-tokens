import {ThemeVkIOSDescription} from '@/interfaces/themes/vkIOS';
import {ThemeVkIOSDarkDescription} from '@/interfaces/themes/vkIOSDark';
import {darkTheme, lightTheme} from '@/themeDescriptions/base/vk';

export const vkIOSTheme: ThemeVkIOSDescription = {
	...lightTheme,
	themeName: 'vkIOS',
	themeNameBase: 'vkIOS',

	sizeBorderRadius: {
		regular: 10,
	},
};

export const vkIOSThemeDark: ThemeVkIOSDarkDescription = {
	...vkIOSTheme,
	...darkTheme,
	themeName: 'vkIOSDark',
	themeNameBase: 'vkIOS',
	colorsScheme: 'dark',
};
