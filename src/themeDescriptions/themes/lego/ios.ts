import { ThemeLegoIOSDescription } from '@/interfaces/themes/legoIOS';
import { ThemeLegoIOSDarkDescription } from '@/interfaces/themes/legoIOSDark';
import { vkIOSTheme, vkIOSThemeDark } from '@/themeDescriptions/themes/vkIOS';
import { vkontakteIOSThemeDark } from '@/themeDescriptions/themes/vkontakteIOS';

import figma from './figma.json';
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON';

export const legoIOSTheme: ThemeLegoIOSDescription = {
	...vkIOSTheme, // импорт светлой базовой темы

	themeName: 'legoIOS', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOS', // название родительской темы

	colors: {
		...vkIOSTheme.colors,
		// Переопределение переменных
		...overwriteFromFigmaJSON(vkontakteIOSThemeDark.colors, 'appearance', 'light', figma),
		// Локальные цвета
		colorStrokePrimary: figma.appearance.strokePrimary.light,
	},
	sizeBasePaddingHorizontal: {
		regular: figma.tokens.sizeBasePaddingHorizontal.iOS,
	},
};

export const legoIOSThemeDark: ThemeLegoIOSDarkDescription = {
	...legoIOSTheme, // импорт светлой версии текущей темы,
	...vkIOSThemeDark, // импорт тёмной базовой темы

	themeName: 'legoIOSDark', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOSDark', // название родительской темы
	colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

	colors: {
		...vkIOSThemeDark.colors,
		// Переопределение переменных
		...overwriteFromFigmaJSON(vkontakteIOSThemeDark.colors, 'appearance', 'dark', figma),
		// Локальные цвета
		colorStrokePrimary: figma.appearance.strokePrimary.light,
	},
};
