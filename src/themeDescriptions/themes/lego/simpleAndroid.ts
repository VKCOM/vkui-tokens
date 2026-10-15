import lodash from 'lodash';

import type { ThemeLegoSimpleAndroidDescription } from '../../../interfaces/themes/legoSimpleAndroid/index.ts';
import type { ThemeLegoSimpleAndroidDarkDescription } from '../../../interfaces/themes/legoSimpleAndroidDark/index.ts';
import { legoAndroidTheme, legoAndroidThemeDark, legoFonts } from './android.ts';

const medium = 500;
const semibold = 600;
const bold = 700;

// Статические веса и межбуквенные интервалы для фолбека без вариативного шрифта.
// Значения берутся из фигмы (Lego Tokens → Android / Fallback 🇨🇳).
// Если letterSpacing не задан, то в фигме он равен 0 и в токене не нужен.
type SimpleOverride = { fontWeight: number; letterSpacing?: string; lineHeight?: number };

const simpleOverrides = {
	fontTitle1: { fontWeight: bold },
	fontTitle2: { fontWeight: bold, letterSpacing: '-0.09px' },
	fontTitle3: { fontWeight: bold, letterSpacing: '-0.15px' },
	fontLabel1: { fontWeight: bold, letterSpacing: '-0.14px' },
	fontLabel2: { fontWeight: semibold, letterSpacing: '-0.19px' },
	fontHeadline1: { fontWeight: semibold, letterSpacing: '-0.16px' },
	fontBody: { fontWeight: medium, letterSpacing: '-0.21px', lineHeight: 17.8 },
	fontText: { fontWeight: semibold, letterSpacing: '-0.15px' },
	fontTextBold: { fontWeight: bold, letterSpacing: '-0.15px' },
	fontParagraph: { fontWeight: medium, letterSpacing: '-0.05px', lineHeight: 18.2 },
	fontFootnote: { fontWeight: semibold, letterSpacing: '-0.16px' },
	fontFootnoteBold: { fontWeight: bold, letterSpacing: '-0.16px' },
	fontCaption1: { fontWeight: semibold, letterSpacing: '-0.16px' },
	fontCaption2: { fontWeight: semibold, letterSpacing: '-0.16px' },
} as const satisfies Record<string, SimpleOverride>;

const legoSimpleAndroidFonts = lodash.cloneDeep(legoFonts);

(Object.keys(simpleOverrides) as (keyof typeof simpleOverrides)[]).forEach((key) => {
	const { fontWeight, letterSpacing, lineHeight }: SimpleOverride = simpleOverrides[key];
	const font = legoSimpleAndroidFonts[key].regular;
	delete font.fontVariationSettings;
	font.fontWeight = fontWeight;
	if (letterSpacing === undefined) {
		delete font.letterSpacing;
	} else {
		font.letterSpacing = letterSpacing;
	}
	if (lineHeight !== undefined) {
		font.lineHeight = lineHeight;
	}
});

export const legoSimpleAndroidTheme: ThemeLegoSimpleAndroidDescription = {
	...legoAndroidTheme,
	...legoSimpleAndroidFonts,

	themeName: 'legoSimpleAndroid',
	themeNameBase: 'legoSimpleAndroid',
	themeInheritsFrom: 'legoAndroid',
};

export const legoSimpleAndroidThemeDark: ThemeLegoSimpleAndroidDarkDescription = {
	...legoAndroidThemeDark,
	...legoSimpleAndroidFonts,

	themeName: 'legoSimpleAndroidDark',
	themeNameBase: 'legoSimpleAndroid',
	themeInheritsFrom: 'legoAndroidDark',
	colorsScheme: 'dark',
};
