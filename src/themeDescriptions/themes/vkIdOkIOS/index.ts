import { ThemeVkIdOkIOSDescription } from '../../../interfaces/themes/vkIdOkIOS/index.js';
import { ThemeVkIdOkIOSDarkDescription } from '../../../interfaces/themes/vkIdOkIOSDark/index.js';
import { vkIdOkTheme, vkIdOkThemeDark } from '../../themes/vkIdOk/index.js';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS/index.js';

export const vkIdOkIOSTheme: ThemeVkIdOkIOSDescription = {
	...vkIOSTheme,
	themeName: 'vkIdOkIOS',
	themeNameBase: 'vkIdOkIOS',
	colors: {
		...vkIOSTheme.colors,
		...vkIdOkTheme.colors,
	},
};

export const vkIdOkIOSThemeDark: ThemeVkIdOkIOSDarkDescription = {
	...vkIOSThemeDark,
	themeName: 'vkIdOkIOSDark',
	themeNameBase: 'vkIdOkIOS',
	colors: {
		...vkIOSThemeDark.colors,
		...vkIdOkThemeDark.colors,
	},
};
