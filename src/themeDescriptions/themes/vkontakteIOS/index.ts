import type { ThemeVkontakteIOSDescription } from '../../../interfaces/themes/vkontakteIOS';
import type { ThemeVkontakteIOSDarkDescription } from '../../../interfaces/themes/vkontakteIOSDark';
import { vkIOSTheme, vkIOSThemeDark } from '../vkIOS';
import {
	vkontakteLocalColorDark,
	vkontakteLocalColorLight,
	vkontakteTokens,
} from '../vkontakteAndroid';

export const vkontakteIOSTheme: ThemeVkontakteIOSDescription = {
	...vkIOSTheme,
	themeName: 'vkontakteIOS',

	colors: {
		...vkIOSTheme.colors,
		...vkontakteLocalColorLight,
	},
	...vkontakteTokens,
};

export const vkontakteIOSThemeDark: ThemeVkontakteIOSDarkDescription = {
	...vkIOSThemeDark,
	themeName: 'vkontakteIOSDark',
	colorsScheme: 'dark',

	colors: {
		...vkIOSThemeDark.colors,
		...vkontakteLocalColorDark,
	},
	...vkontakteTokens,
};
