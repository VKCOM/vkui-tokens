import { ThemeLegoAndroidDescription } from '@/interfaces/themes/legoAndroid';
import { ThemeLegoAndroidDarkDescription } from '@/interfaces/themes/legoAndroidDark';
import {
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
} from '@/themeDescriptions/themes/vkontakteAndroid';

import figma from './figma.json';
import { findFigmaToken } from './helpers/findFigmaToken';

export const legoAndroidTheme: ThemeLegoAndroidDescription = {
	themeName: 'legoAndroid', // название текущей темы
	themeNameBase: 'legoAndroid', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteAndroid', // название родительской темы

	...vkontakteAndroidTheme, // импорт светлой базовой темы

	colors: {
		// Импорт изначальных токенов
		...vkontakteAndroidTheme.colors,
		// Переопределение токенов, которые есть в figma.json
		...Object.fromEntries(
			Object.keys(vkontakteAndroidTheme.colors).reduce((acc, key) => {
				const figmaToken = findFigmaToken(figma, key);
				if (figmaToken) {
					acc.push([key, figmaToken.light]);
				}
				return acc;
			}, []),
		),
		// Здесь нужно прописать другие цвета с особыми различиями нейминга
		// Локальные цвета, используемые только в этой теме
		// Или цвета, которые не выгружаются из фигмы, но переопределяются в этой теме
		colorStrokePrimary: figma.appearance.strokePrimary.light,
	},
	// Изменённые не-цвета
	sizeBasePaddingHorizontal: {
		regular: figma.tokens.sizeBasePaddingHorizontal.android,
	},
	// Фигма использует целые проценты, а не сотые единицы
	// Поэтому здесь нужно поделить на сто
	// Округление пока не стал писать
	opacityDisable: figma.tokens.opacityDisabled.android / 100,
	opacityDisableAccessibility: figma.tokens.opacityDisabled.android / 100,
};

export const legoAndroidThemeDark: ThemeLegoAndroidDarkDescription = {
	themeName: 'legoAndroidDark', // название текущей темы
	themeNameBase: 'legoAndroid', // название светлой (базовой) темы
	themeInheritsFrom: 'vkontakteAndroidDark', // название родительской темы
	colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

	...legoAndroidTheme, // импорт светлой версии текущей темы,
	...vkontakteAndroidThemeDark, // импорт тёмной базовой темы

	colors: {
		...vkontakteAndroidThemeDark.colors,
		// Переопределение токенов, которые есть в figma.json
		// То же самое, что в светлой теме, но ссылаемся на figmaToken.dark вместо light
		...Object.fromEntries(
			Object.keys(vkontakteAndroidTheme.colors).reduce((acc, key) => {
				const figmaToken = findFigmaToken(figma, key);
				if (figmaToken) {
					acc.push([key, figmaToken.dark]);
				}
				return acc;
			}, []),
		),
		// Здесь нужно прописать другие цвета с особыми различиями нейминга
		// Локальные цвета, используемые только в этой теме
		// Или цвета, которые не выгружаются из фигмы, но переопределяются в этой теме
		colorStrokePrimary: figma.appearance.strokePrimary.dark,
	},
};
