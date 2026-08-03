import type { Radii } from 'interfaces/general/radii/index.ts';
import lodash from 'lodash';

import type { DeepPartial } from '../../../interfaces/general/tools/utils.ts';
import type {
	LocalLegoIOSFonts,
	ThemeLegoIOSDescription,
} from '../../../interfaces/themes/legoIOS/index.ts';
import type { ThemeLegoIOSDarkDescription } from '../../../interfaces/themes/legoIOSDark/index.ts';
import {
	type BaseFonts,
	darkElevation,
	darkGradient,
	fonts,
} from '../../../themeDescriptions/base/vk.ts';
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

// Наследование стандартных шрифтов из базовой темы
const legoFonts = lodash.merge<BaseFonts, DeepPartial<BaseFonts & LocalLegoIOSFonts>>(
	lodash.cloneDeep(fonts),
	// Значения переменных не такие же, как в фигме,
	// а подобраны эмпирически для визуального совпадения
	{
		fontDisplayTitle1: {
			regular: {
				fontSize: 31,
				lineHeight: 31,
				fontFamily: fontFamilyAccent,
				fontWeight: bold,
				letterSpacing: '-0.65px',
			},
		},
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
					opticalSize: 22,
				},
			},
		},
		fontTextBold: {
			regular: {
				fontSize: 16,
				lineHeight: 18.5,
				fontWeight: bold,
				fontVariationSettings: {
					opticalSize: 22,
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
		fontCaption1: {
			regular: {
				fontSize: 11.5,
				lineHeight: 12,
				fontWeight: semibold,
				fontVariationSettings: {
					opticalSize: 22.8,
				},
			},
		},
	},
) as BaseFonts & LocalLegoIOSFonts;

const legoRadii: Radii = {
	radius2XS: figma.tokens.radiusRadius2XS.iOS,
	radiusXS: figma.tokens.radiusRadiusXS.iOS,
	radiusS: figma.tokens.radiusRadiusS.iOS,
	radiusM: figma.tokens.radiusRadiusM.iOS,
	radiusL: figma.tokens.radiusRadiusL.iOS,
	radiusXL: figma.tokens.radiusRadiusXL.iOS,
	radius2XL: figma.tokens.radiusRadius2XL.iOS,
	radius3XL: figma.tokens.radiusRadius3XL.iOS,
};

export const legoIOSTheme: ThemeLegoIOSDescription = {
	...vkIOSTheme, // импорт светлой базовой темы
	...legoFonts, // шрифты
	...legoRadii, // скругления

	themeName: 'legoIOS', // название текущей темы
	themeNameBase: 'legoIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOS', // название родительской темы

	colors: {
		...vkIOSTheme.colors,
		// Переопределение переменных
		...overwriteFromFigmaJSON(vkontakteIOSTheme.colors, 'appearance', 'light', figma),
		// Здесь нужно прописать другие цвета с особыми различиями нейминга
		// А также локальные цвета, используемые только в этой теме
		// Или цвета, которые не выгружаются из фигмы, но переопределяются в этой теме
		colorBackgroundInverse: figma.appearance.backgroundInverse.light,
		colorStrokeContrastSecondaryAlpha: figma.appearance.strokeContrastSecondaryAlpha.light,
		colorBackgroundContent: figma.appearance.backgroundBackground.light,
		colorTextTertiaryAlpha: figma.appearance.textTertiaryAlpha.light,
		colorFieldBorderAlpha: {
			normal: figma.appearance.strokeFieldBorderAlpha.light,
			hover: figma.appearance.statesHoverStrokeFieldBorderAlpha.light,
			active: figma.appearance.statesActiveStrokeFieldBorderAlpha.light,
		},
		colorIconContrastSecondaryAlpha: figma.appearance.iconContrastSecondaryAlpha.light,
		colorTextContrastSecondaryAlpha: figma.appearance.textContrastSecondaryAlpha.light,
	},

	// Изменённые не-цвета
	blurS: figma.tokens.blurSmall.iOS,
	blurM: figma.tokens.blurMedium.iOS,
	blurL: figma.tokens.blurLarge.iOS,
	blurXL: figma.tokens.blurExtraLarge.iOS,

	animationEasingLinear: 'cubic-bezier(0, 0, 1, 1)',
	animationEasingInSmooth: 'cubic-bezier(1, 0, 0.7, 1)',
	animationEasingOutSmooth: 'cubic-bezier(0.3, 0, 0, 1)',
	animationEasingInOutSmooth: 'cubic-bezier(0.3, 0, 0.7, 1)',
	animationEasingOutSharp: 'cubic-bezier(0.2, 0, 0, 1)',
	animationEasingInOutSharp: 'cubic-bezier(0.7, 0, 0.3, 1)',

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
		colorBackgroundContent: figma.appearance.backgroundBackground.dark,
		colorTextTertiaryAlpha: figma.appearance.textTertiaryAlpha.dark,
		colorFieldBorderAlpha: {
			normal: figma.appearance.strokeFieldBorderAlpha.dark,
			hover: figma.appearance.statesHoverStrokeFieldBorderAlpha.dark,
			active: figma.appearance.statesActiveStrokeFieldBorderAlpha.dark,
		},
		colorIconContrastSecondaryAlpha: figma.appearance.iconContrastSecondaryAlpha.dark,
		colorTextContrastSecondaryAlpha: figma.appearance.textContrastSecondaryAlpha.dark,
	},
};
