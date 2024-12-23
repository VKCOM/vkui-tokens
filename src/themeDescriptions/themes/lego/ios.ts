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
	sizeButtonSmallHeight: {
		regular: figma.tokens.sizeButtonSmallHeight.iOS,
	},
	sizeButtonMediumHeight: {
		regular: figma.tokens.sizeButtonMediumHeight.iOS,
	},
	sizeButtonLargeHeight: {
		regular: figma.tokens.sizeButtonLargeHeight.iOS,
	},
	opacityDisable: figma.tokens.opacityDisabled.iOS / 100,
	opacityDisableAccessibility: figma.tokens.opacityDisabled.iOS / 100,
};

export const legoIOSThemeDark: ThemeLegoIOSDarkDescription = {
	...vkIOSThemeDark, // импорт тёмной базовой темы
	...legoIOSTheme, // импорт светлой версии текущей темы,

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
