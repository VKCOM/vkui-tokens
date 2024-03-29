import type { ThemeVkontakteIOSDescription } from '../../../interfaces/themes/vkontakteIOS';
import type { ThemeVkontakteIOSDarkDescription } from '../../../interfaces/themes/vkontakteIOSDark';
import { vkIOSTheme, vkIOSThemeDark } from '../vkIOS';
import {
	vkontakteLocalColorDark,
	vkontakteLocalColorLight,
	vkontakteMobileFonts,
	vkontakteTokens,
} from '../vkontakteAndroid';

const themeNameBase = 'vkontakteIOS';

export const vkontakteIOSTheme: ThemeVkontakteIOSDescription = {
	...vkIOSTheme,
	themeName: themeNameBase,
	themeNameBase,
	themeInheritsFrom: vkIOSTheme.themeName,

	colors: {
		...vkIOSTheme.colors,
		...vkontakteLocalColorLight,
	},
	...vkontakteTokens,
};

export const vkontakteIOSThemeDark: ThemeVkontakteIOSDarkDescription = {
	...vkIOSThemeDark,
	themeName: `${themeNameBase}Dark`,
	themeNameBase,
	themeInheritsFrom: vkIOSThemeDark.themeName,
	colorsScheme: 'dark',

	colors: {
		...vkIOSThemeDark.colors,
		...vkontakteLocalColorDark,
	},
	...vkontakteMobileFonts,
	...vkontakteTokens,
};
