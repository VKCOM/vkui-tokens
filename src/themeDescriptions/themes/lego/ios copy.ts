import { ThemeVkIOSDescription } from '@/interfaces/themes/vkIOS';
import { ThemeVkIOSDarkDescription } from '@/interfaces/themes/vkIOSDark';
import { vkIOSTheme, vkIOSThemeDark } from '@/themeDescriptions/themes/vkIOS';
import { vkontakteIOSThemeDark } from '@/themeDescriptions/themes/vkontakteIOS';

import figma from './figma.json';
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON';

export const legoIOSTheme: ThemeVkIOSDescription = {
	...vkIOSTheme, // импорт светлой базовой темы

	themeName: 'legoIOS', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOS', // название родительской темы

	colors: {
		...vkIOSTheme.colors,
		// переопределение переменных
		...overwriteFromFigmaJSON(vkontakteIOSThemeDark.colors, 'appearance', 'light', figma),
	},
	sizeBasePaddingHorizontal: {
		regular: figma.tokens.sizeBasePaddingHorizontal.iOS,
	},
};

export const legoIOSThemeDark: ThemeVkIOSDarkDescription = {
	...legoIOSTheme, // импорт светлой версии текущей темы,
	...vkIOSThemeDark, // импорт тёмной базовой темы

	themeName: 'legoIOSDark', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOSDark', // название родительской темы
	colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

	colors: {
		...vkIOSThemeDark.colors,
		...overwriteFromFigmaJSON(vkontakteIOSThemeDark.colors, 'appearance', 'dark', figma),
	},
};
