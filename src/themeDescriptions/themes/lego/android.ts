import type { Adaptive } from 'interfaces/general/tools/index.ts';
import type { DeepPartial } from 'interfaces/general/tools/utils.ts';
import type { Font } from 'interfaces/general/typography/index.ts';
import lodash from 'lodash';
import { fonts } from 'themeDescriptions/base/vk.ts';

import type { ThemeLegoAndroidDescription } from '../../../interfaces/themes/legoAndroid/index.ts';
import type { ThemeLegoAndroidDarkDescription } from '../../../interfaces/themes/legoAndroidDark/index.ts';
import {
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
} from '../../themes/vkontakteAndroid/index.ts';
import figma from './figma.json' with { type: 'json' };
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON.ts';

const fontFamilyAccent =
	'"VK Sans Display", -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const medium = 520;
const semiboldish = 580;
const semibold = 600;
const bold = 670;
const boldAccent = 700;

// Расширение типа новыми переменными в лего
type LegoFonts =
	| typeof fonts
	| {
			fontLabel1: Adaptive<Font>;
			fontLabel2: Adaptive<Font>;
			fontBody: Adaptive<Font>;
			fontHeadline: Adaptive<Font>;
	  };

// Наследование стандартных шрифтов из базовой темы
export const legoFonts: LegoFonts = lodash.merge<typeof fonts, DeepPartial<LegoFonts>>(
	lodash.cloneDeep(fonts),
	{
		fontTitle1: {
			regular: {
				fontSize: 31,
				lineHeight: 31,
				fontFamily: fontFamilyAccent,
				fontWeight: boldAccent,
				letterSpacing: '-0.5px',
			},
		},
		fontTitle2: {
			regular: {
				fontSize: 24,
				lineHeight: 26,
				fontWeight: bold,
				fontVariationSettings: {
					opticalSize: 27.2,
				},
			},
		},
		fontTitle3: {
			regular: {
				fontSize: 21.5,
				lineHeight: 23,
				fontWeight: bold,
				fontVariationSettings: {
					opticalSize: 23,
				},
			},
		},
		fontLabel1: {
			regular: {
				fontSize: 19,
				lineHeight: 20,
				fontWeight: bold,
				fontVariationSettings: {
					opticalSize: 24,
				},
			},
		},
		fontLabel2: {
			regular: {
				fontSize: 18,
				lineHeight: 21,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 26,
				},
			},
		},
		fontHeadline1: {
			regular: {
				fontSize: 17,
				lineHeight: 20,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 24,
				},
			},
		},
		fontBody: {
			regular: {
				fontSize: 16.5,
				lineHeight: 21,
				fontWeight: medium,
				fontVariationSettings: {
					opticalSize: 22,
				},
			},
		},
		fontText: {
			regular: {
				fontSize: 16,
				lineHeight: 18.33,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 24,
				},
			},
		},
		fontParagraph: {
			regular: {
				fontSize: 15,
				lineHeight: 18.5,
				fontWeight: semiboldish,
				fontVariationSettings: {
					opticalSize: 26,
				},
			},
		},
		fontFootnote: {
			regular: {
				fontSize: 13.5,
				lineHeight: 15,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 20,
				},
			},
		},
	},
);

export const legoAndroidTheme: ThemeLegoAndroidDescription = {
	...vkontakteAndroidTheme, // импорт светлой базовой темы
	...legoFonts, // шрифты

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
		colorBackgroundInverse: figma.appearance.backgroundInverse.light,
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
		colorBackgroundInverse: figma.appearance.backgroundInverse.dark,
	},
};
