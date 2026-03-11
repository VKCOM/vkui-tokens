import type { Adaptive } from 'interfaces/general/tools/index.ts';
import type { Font } from 'interfaces/general/typography/index.ts';
import lodash from 'lodash';

import type { DeepPartial } from '../../../interfaces/general/tools/utils.ts';
import type { ThemeLegoIOSDescription } from '../../../interfaces/themes/legoIOS/index.ts';
import type { ThemeLegoIOSDarkDescription } from '../../../interfaces/themes/legoIOSDark/index.ts';
import { darkElevation, darkGradient, fonts } from '../../base/vk.ts';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS/index.ts';
import { vkontakteIOSTheme, vkontakteIOSThemeDark } from '../../themes/vkontakteIOS/index.ts';
import figma from './figma.json' with { type: 'json' };
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON.ts';

// Шрифты
const fontFamilyAccent =
	'"VK Sans Display", -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const medium = 500;
const semibold = 600;
const bold = 700;

// Расширение типа новыми переменными в лего
export type LegoFonts =
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
				fontWeight: bold,
				letterSpacing: '-0.72px',
			},
		},
		fontTitle2: {
			regular: {
				fontSize: 24,
				lineHeight: 26,
				fontWeight: bold,
				letterSpacing: '-0.58px',
			},
		},
		fontTitle3: {
			regular: {
				fontSize: 20,
				lineHeight: 23,
				fontWeight: bold,
				letterSpacing: '-0.78px',
			},
		},
		fontLabel1: {
			regular: {
				fontSize: 19,
				lineHeight: 20,
				fontWeight: bold,
				letterSpacing: '-0.58px',
			},
		},
		fontLabel2: {
			regular: {
				fontSize: 18,
				lineHeight: 21,
				fontWeight: semibold,
				letterSpacing: '-0.68px',
			},
		},
		fontBody: {
			regular: {
				fontSize: 17.5,
				lineHeight: 23,
				fontWeight: medium,
				letterSpacing: '-0.72px',
			},
		},
		fontHeadline1: {
			regular: {
				fontSize: 17,
				lineHeight: 20,
				fontWeight: semibold,
				letterSpacing: '-0.72px',
			},
		},
		fontText: {
			regular: {
				fontSize: 16,
				lineHeight: 18.5,
				fontWeight: semibold,
				letterSpacing: '-0.68px',
			},
		},
		fontParagraph: {
			regular: {
				fontSize: 15,
				lineHeight: 18,
				fontWeight: semibold,
				letterSpacing: '-0.46px',
			},
		},
		fontFootnote: {
			regular: {
				fontSize: 13.5,
				lineHeight: 15,
				fontWeight: semibold,
				letterSpacing: '-0.58px',
			},
		},
	},
);

export const legoIOSTheme: ThemeLegoIOSDescription = {
	...vkIOSTheme, // импорт светлой базовой темы
	...legoFonts, // шрифты

	themeName: 'legoIOS', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOS', // название родительской темы

	colors: {
		...vkIOSTheme.colors,
		// Переопределение переменных
		...overwriteFromFigmaJSON(vkontakteIOSTheme.colors, 'appearance', 'light', figma),
	},
	sizeBasePaddingHorizontal: {
		regular: figma.tokens.sizeBasePaddingHorizontal.iOS,
	},
	sizeCellHeight: {
		regular: figma.tokens.sizeCellHeight.iOS,
		compact: figma.tokens.sizeCellHeight.desktop,
	},
	sizeButtonExtraSmallHeight: {
		regular: figma.tokens.sizeButtonExtraSmallHeight.iOS,
		compact: figma.tokens.sizeButtonExtraSmallHeight.desktop,
	},
	sizeButtonSmallHeight: {
		regular: figma.tokens.sizeButtonSmallHeight.iOS,
		compact: figma.tokens.sizeButtonSmallHeight.desktop,
	},
	sizeButtonMediumHeight: {
		regular: figma.tokens.sizeButtonMediumHeight.iOS,
		compact: figma.tokens.sizeButtonMediumHeight.desktop,
	},
	sizeButtonLargeHeight: {
		regular: figma.tokens.sizeButtonLargeHeight.iOS,
		compact: figma.tokens.sizeButtonLargeHeight.desktop,
	},
	opacityDisable: figma.tokens.opacityDisabled.iOS / 100,
	opacityDisableAccessibility: figma.tokens.opacityDisabled.iOS / 100,
};

export const legoIOSThemeDark: ThemeLegoIOSDarkDescription = {
	...vkIOSThemeDark, // импорт тёмной базовой темы
	...legoIOSTheme, // импорт светлой версии текущей темы,
	...darkGradient, // переключаем наследованные градиенты на тёмную тему
	...darkElevation, // переключаем наследованные тени на тёмную тему

	themeName: 'legoIOSDark', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOSDark', // название родительской темы
	colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

	colors: {
		...vkIOSThemeDark.colors,
		// Переопределение переменных
		...overwriteFromFigmaJSON(vkontakteIOSThemeDark.colors, 'appearance', 'dark', figma),
	},
};
