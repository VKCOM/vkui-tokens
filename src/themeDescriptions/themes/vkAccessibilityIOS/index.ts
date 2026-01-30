import type { ThemeVkAccessibilityIOSDescription } from '../../../interfaces/themes/vkAccessibilityIOS/index.ts';
import type { ThemeVkAccessibilityIOSDarkDescription } from '../../../interfaces/themes/vkAccessibilityIOSDark/index.ts';
import {
	vkAccessibilityTheme,
	vkAccessibilityThemeDark,
} from '../../themes/vkAccessibility/index.ts';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS/index.ts';

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
