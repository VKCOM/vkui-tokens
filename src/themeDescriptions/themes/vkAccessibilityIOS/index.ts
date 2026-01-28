import { ThemeVkAccessibilityIOSDescription } from '../../../interfaces/themes/vkAccessibilityIOS/index.js';
import { ThemeVkAccessibilityIOSDarkDescription } from '../../../interfaces/themes/vkAccessibilityIOSDark/index.js';
import {
	vkAccessibilityTheme,
	vkAccessibilityThemeDark,
} from '../../themes/vkAccessibility/index.js';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS/index.js';

export const vkAccessibilityIOSTheme: ThemeVkAccessibilityIOSDescription = {
	...vkIOSTheme,
	themeName: 'vkAccessibilityIOS',
	themeNameBase: 'vkAccessibilityIOS',
	colors: {
		...vkIOSTheme.colors,
		...vkAccessibilityTheme.colors,
	},
};

export const vkAccessibilityIOSThemeDark: ThemeVkAccessibilityIOSDarkDescription = {
	...vkIOSThemeDark,
	themeName: 'vkAccessibilityIOSDark',
	themeNameBase: 'vkAccessibilityIOS',
	colors: {
		...vkIOSThemeDark.colors,
		...vkAccessibilityThemeDark.colors,
	},
};
