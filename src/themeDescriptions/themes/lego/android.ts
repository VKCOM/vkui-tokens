import { ThemeLegoAndroidDescription } from '@/interfaces/themes/legoAndroid';
import { ThemeLegoAndroidDarkDescription } from '@/interfaces/themes/legoAndroidDark';
import {
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
} from '@/themeDescriptions/themes/vkontakteAndroid';

import figma from './figma.json';
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON';

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
	},
	// Фигма использует целые проценты, а не сотые единицы
	// Поэтому здесь нужно поделить на 100
	// Округление пока не стал писать
	opacityDisable: figma.tokens.opacityDisabled.android / 100,
	opacityDisableAccessibility: figma.tokens.opacityDisabled.android / 100,
};

export const legoAndroidThemeDark: ThemeLegoAndroidDarkDescription = {
	...legoAndroidTheme, // Импорт светлой версии текущей темы,
	...vkontakteAndroidThemeDark, // Импорт тёмной базовой темы

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
