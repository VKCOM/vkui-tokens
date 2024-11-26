import { ThemeLegoAndroidDescription } from '@/interfaces/themes/legoAndroid';
import { ThemeLegoAndroidDarkDescription } from '@/interfaces/themes/legoAndroidDark';
import {
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
} from '@/themeDescriptions/themes/vkontakteAndroid';

const dark = '#212121';
const light = '#E1E3E6';

export const legoAndroidTheme: ThemeLegoAndroidDescription = {
	...vkontakteAndroidTheme, // импорт светлой базовой темы

	themeName: 'legoAndroid', // название текущей темы
	themeNameBase: 'legoAndroid', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteAndroid', // название родительской темы

	colors: {
		...vkontakteAndroidTheme.colors,
		// переопределение переменных
		colorTextAccent: dark,
		colorTextAccentThemed: dark,
		colorTextPrimary: dark,
		colorTextLink: dark,
		colorTextLinkThemed: dark,
		colorTextLinkTint: dark,
		colorIconAccent: dark,
		colorIconAccentThemed: dark,
		colorStrokeAccent: dark,
		colorStrokeAccentThemed: dark,
		colorBackgroundAccent: dark,
		colorBackgroundAccentThemed: dark,
		colorBackgroundAccentThemedAlpha: 'rgba(38, 136, 235, 0.2)',
		colorBackgroundAccentAlternative: dark,
		colorBackgroundAccentTint: '#2D2D2D',
		colorWriteBarIcon: dark,
	},
};

export const legoAndroidThemeDark: ThemeLegoAndroidDarkDescription = {
	...legoAndroidTheme, // импорт светлой версии текущей темы,
	...vkontakteAndroidThemeDark, // импорт тёмной базовой темы

	themeName: 'legoAndroidDark', // название текущей темы
	themeNameBase: 'legoAndroid', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteAndroidDark', // название родительской темы
	colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

	colors: {
		...vkontakteAndroidThemeDark.colors,
		// переопределение переменных
		colorTextAccent: light,
		colorTextAccentThemed: light,
		colorTextPrimary: light,
		colorTextLink: light,
		colorTextLinkThemed: light,
		colorTextLinkTint: light,
		colorIconAccent: light,
		colorIconAccentThemed: light,
		colorStrokeAccent: light,
		colorStrokeAccentThemed: light,
		colorBackgroundAccent: light,
		colorBackgroundAccentThemed: light,
		colorBackgroundAccentThemedAlpha: 'rgba(255, 255, 255, 0.2)',
		colorBackgroundAccentAlternative: light,
		colorBackgroundAccentTint: '#EAEDF0',
		colorWriteBarIcon: light,
	},
};
