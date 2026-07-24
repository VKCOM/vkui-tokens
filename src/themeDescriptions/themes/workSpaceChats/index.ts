import type { Property } from 'csstype';

import type { ThemeGeneral } from '../../../interfaces/general/index.ts';
import type { Adaptive } from '../../../interfaces/general/tools/index.ts';
import type { Token } from '../../../interfaces/general/tools/tokenValue.ts';
import type { Font } from '../../../interfaces/general/typography/index.ts';
import type { ThemeWorkSpaceChatsDescription } from '../../../interfaces/themes/workSpaceChats/index.ts';
import {
	darkThemeExport as paradigmBaseDark,
	lightTheme as paradigmBase,
} from '../../base/paradigm.ts';

const fontFamilyAccent: Property.FontFamily = 'VK Sans Display';
const fontFamilyBase: Property.FontFamily = 'Arial';

type AdaptiveFont = Adaptive<Font>;
type FontToken = Token<AdaptiveFont, ThemeGeneral>;

// Подменяет fontFamily во всех адаптивных вариантах (regular/compact/...) шрифтового токена,
// сохраняя остальные параметры (fontSize, lineHeight, fontWeight, ...) из базовой темы.
// Альсы (alias) не передаются — они разрешатся в переопределённый токен.
const withFamily = (family: Property.FontFamily, token: FontToken): AdaptiveFont => {
	const source = (typeof token === 'function' ? ({} as AdaptiveFont) : token) as AdaptiveFont;
	const result = { ...source } as Record<string, Partial<Font> | undefined>;
	for (const key of Object.keys(result)) {
		const variant = result[key];
		if (variant) {
			result[key] = { ...variant, fontFamily: family };
		}
	}
	return result as unknown as AdaptiveFont;
};

const accent = (token: FontToken): AdaptiveFont => withFamily(fontFamilyAccent, token);
const base = (token: FontToken): AdaptiveFont => withFamily(fontFamilyBase, token);

// Переопределённая типографика: VK Sans Display для акцентных шрифтов, Arial — для основного текста.
// Вынесено в отдельный объект, чтобы переопределить шрифты и в светлой, и в тёмной теме
// (тёмная базовая тема иначе затрёт их значениями paradigmBase).
const workSpaceChatsTypography = {
	fontFamilyAccent,
	fontFamilyBase,
	fontDisplayTitle1: accent(paradigmBase.fontDisplayTitle1),
	fontDisplayTitle2: accent(paradigmBase.fontDisplayTitle2),
	fontDisplayTitle3: accent(paradigmBase.fontDisplayTitle3),
	fontDisplayTitle4: accent(paradigmBase.fontDisplayTitle4),
	fontTitle1: accent(paradigmBase.fontTitle1),
	fontTitle2: accent(paradigmBase.fontTitle2),
	fontTitle3: accent(paradigmBase.fontTitle3),
	fontHeadline1: accent(paradigmBase.fontHeadline1),
	fontHeadline2: accent(paradigmBase.fontHeadline2),
	fontSubhead: accent(paradigmBase.fontSubhead),
	fontH0: accent(paradigmBase.fontH0),
	fontH1: accent(paradigmBase.fontH1),
	fontH2: accent(paradigmBase.fontH2),
	fontText: base(paradigmBase.fontText),
	fontParagraph: base(paradigmBase.fontParagraph),
	fontFootnote: base(paradigmBase.fontFootnote),
	fontFootnoteCaps: base(paradigmBase.fontFootnoteCaps),
	fontCaption1: base(paradigmBase.fontCaption1),
	fontCaption1Caps: base(paradigmBase.fontCaption1Caps),
	fontCaption2: base(paradigmBase.fontCaption2),
	fontCaption2Caps: base(paradigmBase.fontCaption2Caps),
	fontCaption3: base(paradigmBase.fontCaption3),
	fontCaption3Caps: base(paradigmBase.fontCaption3Caps),
};

export const workSpaceChatsTheme: ThemeWorkSpaceChatsDescription = {
	...paradigmBase,
	...workSpaceChatsTypography,
	themeName: 'workSpaceChats',
	colorsScheme: 'light',

	colors: {
		...paradigmBase.colors,

		// Text
		colorTextMediumAlpha: 'rgba(44, 45, 46, 0.56)',

		// Icon
		colorIconNotificationNeutralAlpha: 'rgba(67, 83, 103, 0.28)',
		colorIconNotificationRed: '#FF5C5C',
		colorIconNotificationAccent: '#0077FF',

		// Bubble
		colorBubbleBackgroundAccent: '#DEECFF',
		colorBubbleBackgroundNeutral: '#FFFFFF',
		colorBubbleHighlightAccent: 'rgba(0, 119, 255, 0.16)',
		colorBubbleTextRed: '#C43131',
		colorBubbleTextOrange: '#C84900',
		colorBubbleTextPeach: '#BE6116',
		colorBubbleTextYellow: '#987202',
		colorBubbleTextLime: '#5B841D',
		colorBubbleTextGreen: '#1C8022',
		colorBubbleTextSea: '#097F94',
		colorBubbleTextMint: '#1E7D70',
		colorBubbleTextSeagreen: '#0F815B',
		colorBubbleTextSky: '#2B6D94',
		colorBubbleTextBlue: '#205EC2',
		colorBubbleTextIndigo: '#4C47C8',
		colorBubbleTextViolet: '#7042AC',
		colorBubbleTextLavender: '#6D5292',
		colorBubbleTextCoral: '#A53848',

		// Other
		colorOtherPullBackgroundAccent: 'rgba(0, 119, 255, 0.06)',
		colorOtherPullProgressAccent: 'rgba(0, 119, 255, 0.08)',
		colorOtherBackgroundBlur: 'rgba(255, 255, 255, 0.01)',

		// States
		colorBubbleTransparentHover: 'rgba(0, 16, 61, 0.08)',
		colorBubbleTransparentActive: 'rgba(0, 16, 61, 0.12)',
	},
};

export const workSpaceChatsDarkTheme: ThemeWorkSpaceChatsDescription = {
	...workSpaceChatsTheme,
	...paradigmBaseDark,
	...workSpaceChatsTypography,
	themeName: 'workSpaceChatsDark',
	colorsScheme: 'dark',
	colors: {
		...workSpaceChatsTheme.colors,
		...paradigmBaseDark.colors,

		// Text
		colorTextMediumAlpha: 'rgba(255, 255, 255, 0.64)',

		// Icon
		colorIconNotificationNeutralAlpha: 'rgba(250, 252, 255, 0.28)',
		colorIconNotificationRed: '#FF5C5C',
		colorIconNotificationAccent: '#5A9EFF',

		// Bubble
		colorBubbleBackgroundAccent: '#12335A',
		colorBubbleBackgroundNeutral: '#303030',
		colorBubbleHighlightAccent: 'rgba(255, 255, 255, 0.12)',
		colorBubbleTextRed: '#FF6464',
		colorBubbleTextOrange: '#F68E42',
		colorBubbleTextPeach: '#FFB980',
		colorBubbleTextYellow: '#FFD65C',
		colorBubbleTextLime: '#C3F07F',
		colorBubbleTextGreen: '#43CC4C',
		colorBubbleTextSea: '#22CEEC',
		colorBubbleTextMint: '#7BEADB',
		colorBubbleTextSeagreen: '#42D7A5',
		colorBubbleTextSky: '#9EDBFF',
		colorBubbleTextBlue: '#629FFF',
		colorBubbleTextIndigo: '#8E89FF',
		colorBubbleTextViolet: '#B884FF',
		colorBubbleTextLavender: '#D3B2FF',
		colorBubbleTextCoral: '#FEA4A4',

		// Other
		colorOtherPullBackgroundAccent: 'rgba(255, 255, 255, 0.08)',
		colorOtherPullProgressAccent: 'rgba(0, 119, 255, 0.24)',
		colorOtherBackgroundBlur: 'rgba(255, 255, 255, 0.01)',

		// States
		colorBubbleTransparentHover: 'rgba(255, 255, 255, 0.08)',
		colorBubbleTransparentActive: 'rgba(255, 255, 255, 0.12)',
	},
};
