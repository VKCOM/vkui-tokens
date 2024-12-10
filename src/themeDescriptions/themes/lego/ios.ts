import { ThemeLegoIOSDescription } from '@/interfaces/themes/legoIOS';
import { ThemeLegoIOSDarkDescription } from '@/interfaces/themes/legoIOSDark';
import { vkontakteIOSTheme, vkontakteIOSThemeDark } from '@/themeDescriptions/themes/vkontakteIOS';

const dark = '#212121';
const light = '#E1E3E6';

export const legoIOSTheme: ThemeLegoIOSDescription = {
	// Мб заменить базу на vkIOS?
	// Жду ответа Ульяны
	...vkontakteIOSTheme, // импорт светлой базовой темы

	themeName: 'legoIOS', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteIOS', // название родительской темы

	colors: {
		...vkontakteIOSTheme.colors,
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

export const legoIOSThemeDark: ThemeLegoIOSDarkDescription = {
	...legoIOSTheme, // импорт светлой версии текущей темы,
	...vkontakteIOSThemeDark, // импорт тёмной базовой темы

	themeName: 'legoIOSDark', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteIOSDark', // название родительской темы
	colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

	colors: {
		...vkontakteIOSThemeDark.colors,
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
