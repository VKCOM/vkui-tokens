import { ThemeVkIdOkIOSDescription } from '@/interfaces/themes/vkIdOkIOS';
import { ThemeVkIdOkIOSDarkDescription } from '@/interfaces/themes/vkIdOkIOSDark';
import { vkIdOkTheme, vkIdOkThemeDark } from '@/themeDescriptions/themes/vkIdOk';
import { vkIOSTheme, vkIOSThemeDark } from '@/themeDescriptions/themes/vkIOS';

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
