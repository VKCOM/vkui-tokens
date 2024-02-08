import { Property } from 'csstype';

import { staticRef } from '@/build/helpers/tokenHelpers';
import { ThemeMediaDescription } from '@/interfaces/themes/media';
import { helpers, projectColors, socialColors } from '@/themeDescriptions/common';

import { darkTheme, lightTheme } from '../../base/paradigm';

const { fontWeightBase3 } = lightTheme;
const { x0, x05, x2, x3, x4, x5, x6, x8, x10, x12 } = helpers;

const fontFamilyBase: Property.FontFamily = 'Inter, Helvetica, Arial, sans-serif';
const fontFamilyAccent: Property.FontFamily = `MailSans, ${fontFamilyBase}`;
const fontFamilyArticle: Property.FontFamily = fontFamilyBase;
const fontFamilyFallbacks: Property.FontFamily = fontFamilyBase;

// const fontWeightMedia1 = 700;
const fontWeightMedia2 = 600;
const fontWeightMedia3 = 500;
const fontWeightMedia4 = 400;

export const mediaTheme: ThemeMediaDescription = {
	...lightTheme,
	themeName: 'media',
	themeNameBase: 'media',
	prefix: 'vkui',
	fontFamilyAccent,
	fontFamilyArticle,
	fontFamilyBase,
	fontFamilyFallbacks,

	colors: {
		...lightTheme.colors,
		...projectColors,
		...socialColors,
	},

	breakpoints: {
		touch: {
			adaptiveValue: 'regular',
			breakpoint: 0,
		},
		tablet: {
			adaptiveValue: 'compactX',
			breakpoint: 660,
		},
		desktopS: {
			adaptiveValue: 'compact',
			breakpoint: 980,
		},
		desktopM: {
			adaptiveValue: 'large',
			breakpoint: 1300,
		},
	},

	sizeBasePadding: {
		regular: 16,
		compact: 20,
	},

	sizeSelectIconPadding: {
		regular: 7,
		compact: 6,
	},

	sizePopupBasePadding: {
		regular: x5,
		compact: x8,
	},

	sizePopupHeaderPadding: {
		regular: x4,
		compact: x6,
	},

	sizeBorderWidthAccentSecondary: {
		regular: 4,
	},

	sizeBorderRadiusPaper: {
		regular: 4,
	},

	/**
	 * ТИПОГРАФИКА
	 */
	fontMediaTitle1: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 30,
			lineHeight: 36,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 48,
			lineHeight: 56,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaTitle2: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 28,
			lineHeight: 34,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 36,
			lineHeight: 44,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaTitle3: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 26,
			lineHeight: 32,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 32,
			lineHeight: 40,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaTitle4: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 24,
			lineHeight: 30,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 28,
			lineHeight: 36,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaTitle5: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 22,
			lineHeight: 28,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 24,
			lineHeight: 32,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaTitle6: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 20,
			lineHeight: 26,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 22,
			lineHeight: 28,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaLead: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 18,
			lineHeight: 26,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 24,
			lineHeight: 36,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaQuote: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 18,
			lineHeight: 26,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
			fontSize: 24,
			lineHeight: 36,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaQuotePerson: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia2,
			fontSize: 18,
			lineHeight: 24,
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia2,
			fontSize: 24,
			lineHeight: 32,
			letterSpacing: '-0.005em',
		},
	},
	fontMediaParagraph: {
		regular: {
			fontFamily: fontFamilyArticle,
			fontWeight: staticRef(fontWeightBase3),
			fontSize: 16,
			lineHeight: 28,
			letterSpacing: '0.003em',
		},
		compact: {
			fontFamily: fontFamilyArticle,
			fontWeight: staticRef(fontWeightBase3),
			fontSize: 18,
			lineHeight: 32,
			letterSpacing: '0.003em',
		},
	},
	fontMediaParagraphSecondary: {
		regular: {
			fontWeight: staticRef(fontWeightBase3),
			fontSize: 16,
			lineHeight: 24,
		},
	},
	fontMediaTextSecondaryLight: {
		regular: {
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia4,
			fontSize: 15,
			lineHeight: 20,
		},
	},
	fontMediaCaption: {
		regular: {
			fontWeight: staticRef(fontWeightBase3),
			fontSize: 14,
			lineHeight: 22,
		},
		compact: {
			fontWeight: staticRef(fontWeightBase3),
			fontSize: 16,
			lineHeight: 26,
		},
	},
	fontMediaCaptionCaps: {
		regular: {
			fontWeight: staticRef(fontWeightBase3),
			fontSize: 13,
			lineHeight: 16,
			letterSpacing: '0.05em',
		},
		compact: {
			fontWeight: staticRef(fontWeightBase3),
			fontSize: 15,
			lineHeight: 20,
			letterSpacing: '0.05em',
		},
	},
	fontTitle1: {
		regular: {
			...staticRef(lightTheme.fontTitle1).regular,
			fontFamily: fontFamilyAccent,
		},
	},
	fontTitle2: {
		regular: {
			...staticRef(lightTheme.fontTitle2).regular,
			fontFamily: fontFamilyAccent,
		},
	},
	fontTitle3: {
		regular: {
			...staticRef(lightTheme.fontTitle3).regular,
			fontFamily: fontFamilyAccent,
		},
	},
	fontHeadline1: {
		regular: {
			...staticRef(lightTheme.fontHeadline1).regular,
			fontFamily: fontFamilyAccent,
		},
		compact: {
			...staticRef(lightTheme.fontHeadline1).compact,
		},
	},
	fontHeadline2: {
		regular: {
			...staticRef(lightTheme.fontHeadline2).regular,
			fontFamily: fontFamilyAccent,
		},
		compact: {
			...staticRef(lightTheme.fontHeadline2).compact,
		},
	},
	fontText: {
		regular: {
			...staticRef(lightTheme.fontText).regular,
			fontFamily: fontFamilyBase,
		},
		compact: {
			...staticRef(lightTheme.fontText).compact,
		},
	},
	fontParagraph: {
		regular: {
			...staticRef(lightTheme.fontParagraph).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontSubhead: {
		regular: {
			...staticRef(lightTheme.fontSubhead).regular,
			fontFamily: fontFamilyAccent,
		},
		compact: {
			...staticRef(lightTheme.fontSubhead).compact,
		},
	},
	fontFootnote: {
		regular: {
			...staticRef(lightTheme.fontFootnote).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontFootnoteCaps: {
		regular: {
			...staticRef(lightTheme.fontFootnoteCaps).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption1: {
		regular: {
			...staticRef(lightTheme.fontCaption1).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption1Caps: {
		regular: {
			...staticRef(lightTheme.fontCaption1Caps).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption2: {
		regular: {
			...staticRef(lightTheme.fontCaption2).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption2Caps: {
		regular: {
			...staticRef(lightTheme.fontCaption2Caps).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption3: {
		regular: {
			...staticRef(lightTheme.fontCaption3).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption3Caps: {
		regular: {
			...staticRef(lightTheme.fontCaption3Caps).regular,
			fontFamily: fontFamilyBase,
		},
	},
	fontH1: {
		regular: {
			fontSize: 36,
			lineHeight: 48,
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
		},
		compact: {
			fontSize: 28,
			lineHeight: 36,
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
		},
	},
	fontH2: {
		regular: {
			fontSize: 28,
			lineHeight: 34,
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
		},
		compact: {
			fontSize: 24,
			lineHeight: 32,
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
		},
	},
	fontH3: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
		},
	},
	fontH4: {
		regular: {
			fontSize: 15,
			lineHeight: 22,
			fontFamily: staticRef(fontFamilyAccent),
			fontWeight: fontWeightMedia3,
		},
	},

	/**
	 * РАЗМЕРЫ КОНТРОЛЛОВ
	 */

	sizeFieldHeight: {
		regular: x12,
	},

	sizeButtonLargeHeight: {
		regular: x12,
	},
	sizeButtonMediumHeight: {
		regular: x10,
	},
	sizeButtonSmallHeight: {
		regular: 36,
	},

	sizeFieldWidthMin: {
		regular: 288,
		compact: 380,
	},

	sizeControlButtonWidthMin: {
		regular: 130,
		compact: 94,
	},

	/**
	 * РАЗМЕРЫ ДЛЯ СЕТКИ
	 */

	gridWrapperContent: {
		regular: '100%',
		compactX: 620,
		compact: 940,
		large: 1260,
	},
	gridMainContent: {
		regular: '100%',
		compactX: 620,
		compact: 620,
		large: 780,
	},
	gridAsideContent: {
		regular: '100%',
		compactX: 300,
		compact: 300,
		large: 300,
	},

	// @deprecated
	gridColumnX2: {
		regular: '100%',
		compactX: 280,
		compact: 430,
		large: 580,
	},
	gridColumnX3: {
		regular: '100%',
		compactX: 180,
		compact: 280,
		large: 380,
	},
	gridColumnX4: {
		regular: '100%',
		compactX: 130,
		compact: 205,
		large: 280,
	},
	gridColumnX6: {
		regular: '100%',
		compactX: 80,
		compact: 130,
		large: 180,
	},

	/**
	 * ОТСТУПЫ ВНУТРИ ЭЛЕМЕНТОВ УПРАВЛЕНИЯ
	 */

	sizeIconMorePadding: {
		regular: x3,
	},
	sizeButtonPaddingHorizontal: {
		regular: x5,
	},
	sizeButtonIconPadding: {
		regular: x5,
	},
	sizeTabPadding: {
		regular: x0,
		compact: x4,
	},

	/**
	 * ОТСТУПЫ МЕЖДУ ЭЛЕМЕНТАМИ УПРАВЛЕНИЯ
	 */
	sizeFieldHorizontalMargin: {
		regular: x4,
		compact: x5,
	},
	sizeIconMargin: {
		regular: x2,
	},
	sizeTabMargin: {
		regular: x8,
		compact: x2,
	},
	sizePopupMargin: {
		regular: x2,
		compact: x6,
	},

	/**
	 * ИКОНКИ
	 */

	sizeIconUI: {
		regular: x4,
		compact: x4 + x05,
	},

	/**
	 * ИЛЛЮСТРАЦИИ
	 */

	sizeIllustrationS: {
		regular: 48,
	},
	sizeIllustrationXM: {
		regular: 72,
	},
	sizeIllustrationM: {
		regular: 96,
	},
	sizeIllustrationL: {
		regular: 144,
	},
	sizeIllustrationXXL: {
		regular: 228,
	},

	/**
	 * АВАТАРЫ
	 */
	sizeAvatarXS: {
		regular: 24,
	},
	sizeAvatarS: {
		regular: 32,
	},
	sizeAvatarM: {
		regular: 48,
	},
	sizeAvatarL: {
		regular: 96,
	},
	sizeAvatarXL: {
		regular: 128,
	},

	sizeBadgeXS: {
		regular: 12,
	},
	sizeBadgeS: {
		regular: 16,
	},
	sizeBadgeM: {
		regular: 24,
	},
	sizeBadgeL: {
		regular: 44,
	},
	sizeBadgeXL: {
		regular: 56,
	},
};

export const mediaDarkTheme: ThemeMediaDescription = {
	...mediaTheme,
	themeName: 'mediaDark',
	colorsScheme: 'dark',
	colors: {
		...mediaTheme.colors,
		...darkTheme.colors,
	},
};
