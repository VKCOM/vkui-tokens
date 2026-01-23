import { ThemeVkIOSDescription } from '../../../interfaces/themes/vkIOS';
import { ThemeVkIOSDarkDescription } from '../../../interfaces/themes/vkIOSDark';
import { darkColors, darkElevation, darkGradient, lightTheme } from '../../base/vk';

export const vkIOSTheme: ThemeVkIOSDescription = {
	...lightTheme,
	themeName: 'vkIOS',
	themeNameBase: 'vkIOS',
	themeInheritsFrom: 'vkBase',

	sizeBorderRadius: {
		regular: 10,
	},

	// Токены компонента CardScroll
	sizeCardBorderRadius: {
		regular: 10,
	},
	sizeBasePaddingHorizontal: {
		regular: 12,
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

	// Компонент PanelHeader
	sizePanelHeaderHeight: {
		compact: 52,
		regular: 52,
	},

	// Разное
	animationEasingPlatform: 'cubic-bezier(0.36, 0.66, 0.04, 1)',
};

export const vkIOSThemeDark: ThemeVkIOSDarkDescription = {
	...vkIOSTheme,
	...darkColors,
	...darkGradient,
	...darkElevation,
	themeName: 'vkIOSDark',
	themeNameBase: 'vkIOS',
	themeInheritsFrom: 'vkBaseDark',
	colorsScheme: 'dark',
};
