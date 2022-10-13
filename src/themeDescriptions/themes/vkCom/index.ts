import {ThemeVkComDescription} from '@/interfaces/themes/vkCom';
import {ThemeVkComDarkDescription} from '@/interfaces/themes/vkComDark';
import {
	darkColors,
	darkTheme,
	lightColors,
	lightTheme,
} from '@/themeDescriptions/base/vk';

export const vkComTheme: ThemeVkComDescription = {
	...lightTheme,
	themeName: 'vkCom',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBase',
	colors: {
		...lightColors.colors,
	},
};

export const vkComThemeDark: ThemeVkComDarkDescription = {
	...darkTheme,
	themeName: 'vkComDark',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBaseDark',
	colors: {
		...darkColors.colors,
	},
};
