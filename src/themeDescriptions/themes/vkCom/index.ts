import {ThemeVkComDescription} from '@/interfaces/themes/vkCom';
import {ThemeVkComDarkDescription} from '@/interfaces/themes/vkComDark';
import {
	darkColors,
	darkElevation,
	darkGradient,
	lightTheme,
} from '@/themeDescriptions/base/vk';

export const vkComTheme: ThemeVkComDescription = {
	...lightTheme,
	themeName: 'vkCom',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBase',

	sizeBorderRadius: {
		regular: 4,
	},
	sizeBorderRadiusPaper: {
		regular: 8,
	},

	// Компонент Switch
	sizeSwitchHeight: {
		regular: 10,
		compact: 10,
	},
	sizeSwitchWidth: {
		regular: 27,
		compact: 27,
	},
	sizeSwitchPin: {
		regular: 16,
		compact: 16,
	},

	// Компонент PanelHeader
	sizePanelHeaderHeight: {
		regular: 48,
	},
};

export const vkComThemeDark: ThemeVkComDarkDescription = {
	...vkComTheme,
	...darkColors,
	...darkGradient,
	...darkElevation,
	themeName: 'vkComDark',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBaseDark',
	colorsScheme: 'dark',
};
