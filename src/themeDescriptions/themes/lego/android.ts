import type { ThemeLegoAndroidDescription } from '../../../interfaces/themes/legoAndroid/index.ts';
import type { ThemeLegoAndroidDarkDescription } from '../../../interfaces/themes/legoAndroidDark/index.ts';
import {
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
} from '../../themes/vkontakteAndroid/index.ts';
import figma from './figma.json' with { type: 'json' };
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON.ts';

export const legoAndroidTheme: ThemeLegoAndroidDescription = {
	...vkontakteAndroidTheme, // импорт светлой базовой темы

	themeName: 'legoAndroid', // название текущей темы
	themeNameBase: 'legoAndroid', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteAndroid', // название родительской темы

	colors: {
		// Импорт изначальных токенов
		...vkontakteAndroidTheme.colors,
		// Переопределение токенов, которые есть в figma.json
		...overwriteFromFigmaJSON(vkontakteAndroidTheme.colors, 'appearance', 'light', figma),
		// Здесь нужно прописать другие цвета с особыми различиями нейминга
		// А также локальные цвета, используемые только в этой теме
		// Или цвета, которые не выгружаются из фигмы, но переопределяются в этой теме
		// ...
	},
	// Изменённые не-цвета
	sizeBasePaddingHorizontal: {
		regular: figma.tokens.sizeBasePaddingHorizontal.android,
		compact: figma.tokens.sizeBasePaddingHorizontal.desktop,
	},
	sizeCellHeight: {
		regular: figma.tokens.sizeCellHeight.android,
		compact: figma.tokens.sizeCellHeight.desktop,
	},
	sizeButtonExtraSmallHeight: {
		regular: figma.tokens.sizeButtonExtraSmallHeight.android,
		compact: figma.tokens.sizeButtonExtraSmallHeight.desktop,
	},
	sizeButtonSmallHeight: {
		regular: figma.tokens.sizeButtonSmallHeight.android,
		compact: figma.tokens.sizeButtonSmallHeight.desktop,
	},
	sizeButtonMediumHeight: {
		regular: figma.tokens.sizeButtonMediumHeight.android,
		compact: figma.tokens.sizeButtonMediumHeight.desktop,
	},
	sizeButtonLargeHeight: {
		regular: figma.tokens.sizeButtonLargeHeight.android,
		compact: figma.tokens.sizeButtonLargeHeight.desktop,
	},
	// Фигма использует целые проценты, а не сотые единицы
	// Поэтому здесь нужно поделить на 100
	// Округление пока не стал писать
	opacityDisable: figma.tokens.opacityDisabled.android / 100,
	opacityDisableAccessibility: figma.tokens.opacityDisabled.android / 100,
};

export const legoAndroidThemeDark: ThemeLegoAndroidDarkDescription = {
	...vkontakteAndroidThemeDark, // Импорт тёмной базовой темы
	...legoAndroidTheme, // Импорт светлой версии текущей темы,

	themeName: 'legoAndroidDark', // название текущей темы
	themeNameBase: 'legoAndroid', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteAndroidDark', // название родительской темы
	colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

	colors: {
		...vkontakteAndroidThemeDark.colors,
		// То же самое, что в светлой теме, но ссылаемся на figmaToken.dark вместо light
		...overwriteFromFigmaJSON(vkontakteAndroidTheme.colors, 'appearance', 'dark', figma),
	},
};
