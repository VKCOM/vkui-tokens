import lodash from 'lodash';

import type { Adaptive } from '../../../interfaces/general/tools/index.ts';
import type { DeepPartial } from '../../../interfaces/general/tools/utils.ts';
import type { Font } from '../../../interfaces/general/typography/index.ts';
import type { ThemeLegoIOSDescription } from '../../../interfaces/themes/legoIOS/index.ts';
import type { ThemeLegoIOSDarkDescription } from '../../../interfaces/themes/legoIOSDark/index.ts';
import { darkElevation, darkGradient, fonts } from '../../../themeDescriptions/base/vk.ts';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS/index.ts';
import { vkontakteIOSTheme, vkontakteIOSThemeDark } from '../../themes/vkontakteIOS/index.ts';
import figma from './figma.json' with { type: 'json' };
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON.ts';

const fontFamilyAccent =
	'"VK Sans Display", -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const medium = 520;
const semiboldish = 580;
const semibold = 600;
const bold = 700;

// Расширение типа новыми переменными в лего
type LegoFonts =
	| typeof fonts
	| {
			fontLabel1: Adaptive<Font>;
			fontLabel2: Adaptive<Font>;
			fontBody: Adaptive<Font>;
			fontHeadline: Adaptive<Font>;
			fontTextBold: Adaptive<Font>;
			fontFootnoteBold: Adaptive<Font>;
	  };

// Наследование стандартных шрифтов из базовой темы
const legoFonts: LegoFonts = lodash.merge<typeof fonts, DeepPartial<LegoFonts>>(
	lodash.cloneDeep(fonts),
	// Значения переменных не такие же, как в фигме,
	// а подобраны эмпирически для визуального совпадения
	{
		fontTitle1: {
			regular: {
				fontSize: 31,
				lineHeight: 31,
				fontFamily: fontFamilyAccent,
				fontWeight: bold,
				letterSpacing: '-0.65px',
			},
		},
		fontTitle2: {
			regular: {
				fontSize: 24,
				lineHeight: 26,
				fontWeight: bold,
				letterSpacing: '-0.15px',
				fontVariationSettings: {
					opticalSize: 28,
				},
			},
		},
		fontTitle3: {
			regular: {
				fontSize: 21.5,
				lineHeight: 23,
				fontWeight: bold,
				fontVariationSettings: {
					opticalSize: 23.8,
				},
			},
		},
		fontLabel1: {
			regular: {
				fontSize: 19,
				lineHeight: 20,
				fontWeight: bold,
				fontVariationSettings: {
					opticalSize: 22,
				},
			},
		},
		fontLabel2: {
			regular: {
				fontSize: 18,
				lineHeight: 21,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 21.8,
				},
			},
		},
		fontHeadline1: {
			regular: {
				fontSize: 17,
				lineHeight: 20,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 21.1,
				},
			},
		},
		fontBody: {
			regular: {
				fontSize: 16.5,
				lineHeight: 21,
				fontWeight: medium,
				fontVariationSettings: {
					opticalSize: 21.5,
				},
			},
		},
		fontText: {
			regular: {
				fontSize: 16,
				lineHeight: 18.5,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 21.8,
				},
			},
		},
		fontTextBold: {
			regular: {
				fontSize: 16,
				lineHeight: 18.5,
				fontWeight: bold,
				fontVariationSettings: {
					opticalSize: 21.8,
				},
			},
		},
		fontParagraph: {
			regular: {
				fontSize: 15,
				lineHeight: 18.5,
				fontWeight: semiboldish,
				fontVariationSettings: {
					opticalSize: 21.5,
				},
			},
		},
		fontFootnote: {
			regular: {
				fontSize: 13.5,
				lineHeight: 15,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 22.2,
				},
			},
		},
		fontFootnoteBold: {
			regular: {
				fontSize: 13.5,
				lineHeight: 15,
				fontWeight: bold,
				fontVariationSettings: {
					opticalSize: 22.2,
				},
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
		colorBackgroundInverse: figma.appearance.backgroundInverse.light,
		colorStrokeContrastSecondaryAlpha: figma.appearance.strokeContrastSecondaryAlpha.light,
		colorFieldBorderAlpha: {
			normal: '#333333',
			hover: '#3333333D',
			active: '#3333335C',
		},
		colorBackgroundContent: figma.appearance.backgroundBackground.light,
	},

	// Изменённые не-цвета
	blurS: figma.tokens.blurSmall.android,
	blurM: figma.tokens.blurMedium.android,
	blurL: figma.tokens.blurLarge.android,
	blurXL: figma.tokens.blurExtraLarge.android,

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
		colorBackgroundInverse: figma.appearance.backgroundInverse.dark,
		colorStrokeContrastSecondaryAlpha: figma.appearance.strokeContrastSecondaryAlpha.dark,
		colorFieldBorderAlpha: {
			normal: '#FFFFFF0F',
			hover: '#33333329',
			active: '#33333333',
		},
		colorBackgroundContent: figma.appearance.backgroundBackground.dark,
	},
};
