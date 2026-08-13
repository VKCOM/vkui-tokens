import lodash from 'lodash';

import type { ThemeLegoSimpleAndroidDescription } from '../../../interfaces/themes/legoSimpleAndroid/index.ts';
import type { ThemeLegoSimpleAndroidDarkDescription } from '../../../interfaces/themes/legoSimpleAndroidDark/index.ts';
import { legoAndroidTheme, legoAndroidThemeDark, legoFonts } from './android.ts';

const medium = 500;
const semibold = 600;
const bold = 700;

// Статические веса и межбуквенные интервалы для фолбека без вариативного шрифта.
// fontTitle1 наследуется из базовой темы без изменений (вес 700, letterSpacing -0.5px, без fontVariationSettings).
const simpleOverrides = {
	fontTitle2: { fontWeight: bold, letterSpacing: '-0.09px' },
	fontTitle3: { fontWeight: bold, letterSpacing: '-0.15px' },
	fontLabel1: { fontWeight: bold, letterSpacing: '-0.14px' },
	fontLabel2: { fontWeight: semibold, letterSpacing: '-0.19px' },
	fontHeadline1: { fontWeight: semibold, letterSpacing: '-0.16px' },
	fontBody: { fontWeight: medium, letterSpacing: '-0.21px' },
	fontText: { fontWeight: semibold, letterSpacing: '-0.15px' },
	fontTextBold: { fontWeight: bold, letterSpacing: '-0.15px' },
	fontParagraph: { fontWeight: semibold, letterSpacing: '-0.17px' },
	fontFootnote: { fontWeight: semibold, letterSpacing: '-0.16px' },
	fontFootnoteBold: { fontWeight: bold, letterSpacing: '-0.16px' },
	fontCaption1: { fontWeight: semibold, letterSpacing: '-0.16px' },
} as const;

const legoSimpleAndroidFonts = lodash.cloneDeep(legoFonts);

(Object.keys(simpleOverrides) as (keyof typeof simpleOverrides)[]).forEach((key) => {
	const font = legoSimpleAndroidFonts[key].regular;
	delete font.fontVariationSettings;
	font.fontWeight = simpleOverrides[key].fontWeight;
	font.letterSpacing = simpleOverrides[key].letterSpacing;
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
