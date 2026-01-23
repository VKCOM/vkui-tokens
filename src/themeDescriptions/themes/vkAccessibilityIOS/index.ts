import { ThemeVkAccessibilityIOSDescription } from '../../../interfaces/themes/vkAccessibilityIOS';
import { ThemeVkAccessibilityIOSDarkDescription } from '../../../interfaces/themes/vkAccessibilityIOSDark';
import { vkAccessibilityTheme, vkAccessibilityThemeDark } from '../../themes/vkAccessibility';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS';

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
