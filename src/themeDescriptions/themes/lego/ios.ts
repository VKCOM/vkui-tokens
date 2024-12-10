import { ThemeLegoIOSDescription } from '@/interfaces/themes/legoIOS';
import { ThemeLegoIOSDarkDescription } from '@/interfaces/themes/legoIOSDark';
import { vkontakteIOSTheme, vkontakteIOSThemeDark } from '@/themeDescriptions/themes/vkontakteIOS';

import figma from './figma.json';
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON';

export const legoIOSTheme: ThemeLegoIOSDescription = {
	// Мб заменить базу на vkIOS?
	// Жду ответа Ульяны
	// Мб наследовать от legoAndroidTheme
	...vkontakteIOSTheme, // импорт светлой базовой темы

	themeName: 'legoIOS', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteIOS', // название родительской темы

	colors: {
		...vkontakteIOSTheme.colors,
		// переопределение переменных
		...overwriteFromFigmaJSON(vkontakteIOSThemeDark.colors, 'appearance', 'light', figma),
	},
	sizeBasePaddingHorizontal: {
		regular: figma.tokens.sizeBasePaddingHorizontal.iOS,
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
		...overwriteFromFigmaJSON(vkontakteIOSThemeDark.colors, 'appearance', 'dark', figma),
	},
};
