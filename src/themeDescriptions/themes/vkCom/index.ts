import {ThemeVkComDescription} from '@/interfaces/themes/vkCom';
import {ThemeVkComDarkDescription} from '@/interfaces/themes/vkComDark';
import {darkColors, lightTheme} from '@/themeDescriptions/base/vk';

export const vkComTheme: ThemeVkComDescription = {
	...lightTheme,
	themeName: 'vkCom',
	themeNameBase: 'vkCom',

	sizeBorderRadius: {
		regular: 4,
	},
};

export const vkComThemeDark: ThemeVkComDarkDescription = {
	...vkComTheme,
	...darkColors,
	themeName: 'vkComDark',
	themeNameBase: 'vkCom',
	colorsScheme: 'dark',
};
