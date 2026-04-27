/**
 * Шрифты Lego
 * Наследуются от базовых, добавляют Label-шрифты
 * и совпадают в Android и iOS (кроме гарнитуры — с этим попозже разберёмся)
 */
import type { Adaptive } from 'interfaces/general/tools/index.ts';
import type { Font } from 'interfaces/general/typography/index.ts';
import lodash from 'lodash';

import type { DeepPartial } from '../../../../interfaces/general/tools/utils.ts';
import { fonts } from '../../../base/vk.ts';

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
				fontVariationSettings: {
					opticalSize: 28,
				},
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
