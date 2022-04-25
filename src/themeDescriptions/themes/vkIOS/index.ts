import {ThemeVkIOSDescription} from '@/interfaces/themes/vkIOS';
import {ThemeVkIOSDarkDescription} from '@/interfaces/themes/vkIOSDark';
import {darkColors, lightTheme} from '@/themeDescriptions/base/vk';

export const vkIOSTheme: ThemeVkIOSDescription = {
	...lightTheme,
	themeName: 'vkIOS',
	themeNameBase: 'vkIOS',
	themeInheritsFrom: 'vkBase',

	sizeBorderRadius: {
		regular: 10,
	},

	// Токены компонента Cardscroll
	sizeCardBorderRadius: {
		regular: 10,
	},

	// Компонент Switch
	sizeSwitchHeight: {
		regular: 31,
		compact: 27,
	},
	sizeSwitchWidth: {
		regular: 51,
		compact: 47,
	},
	sizeSwitchPin: {
		regular: 27,
		compact: 23,
	},
};

export const vkIOSThemeDark: ThemeVkIOSDarkDescription = {
	...vkIOSTheme,
	...darkColors,
	themeName: 'vkIOSDark',
	themeNameBase: 'vkIOS',
	themeInheritsFrom: 'vkBaseDark',
	colorsScheme: 'dark',
};
