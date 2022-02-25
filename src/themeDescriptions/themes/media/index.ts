import {replacePropDeep} from '@/build/helpers/replacePropDeep';
import {staticRef} from '@/build/helpers/tokenHelpers';
import {ThemeMediaDescription} from '@/interfaces/themes/media';
import {helpers, projectColors, socialColors} from '@/themeDescriptions/common';

import {darkTheme, lightTheme} from '../../base/paradigm';

const {x0, x05, x2, x3, x4, x5, x6, x8, x10, x12} = helpers;

const fontFamilyAccent = 'MailSans, Inter, Helvetica, Arial, sans-serif';
const fontFamilyArticle = 'Georgia, serif';
const fontFamilyBase = 'Inter, Helvetica, Arial, sans-serif';

const fontWeightAccent1 = 400;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 600;
const fontWeightBase1 = 400;
const fontWeightBase2 = 700;
const fontWeightBase3 = 700;
const fontWeightArticle1 = 400;
const fontWeightArticle2 = 700;

const replacedFamilyOctavius = replacePropDeep(lightTheme, {
	fontFamily: fontFamilyBase,
	fontWeight: fontWeightBase1,
});

export const mediaTheme: ThemeMediaDescription = {
	...replacedFamilyOctavius,
	themeName: 'media',
	themeNameBase: 'media',
	prefix: 'vkui',
	fontFamilyAccent,
	fontFamilyArticle,
	fontFamilyBase,

	fontWeightAccent1,
	fontWeightAccent2,
	fontWeightAccent3,
	fontWeightBase1,
	fontWeightBase2,
	fontWeightBase3,
	fontWeightArticle1,
	fontWeightArticle2,

	colors: {
		...replacedFamilyOctavius.colors,
		...projectColors,
		...socialColors,
	},

	breakpoints: {
		touch: {
			adaptiveValue: 'compactX',
			breakpoint: 0,
		},
		tablet: {
			adaptiveValue: 'compact',
			breakpoint: 768,
		},
		desktopS: {
			adaptiveValue: 'regular',
			breakpoint: 1004,
		},
		desktopM: {
			adaptiveValue: 'large',
			breakpoint: 1260,
		},
	},

	elevation3: `0 4px 20px 0 rgba(0,0,0,.16)`,

	sizeBasePadding: {
		compactX: 16,
		regular: 20,
	},

	sizeSelectIconPadding: {
		compactX: 7,
		compact: 7,
		regular: 6,
	},

	sizePopupBasePadding: {
		compactX: x5,
		regular: x8,
	},

	sizePopupHeaderPadding: {
		compactX: x4,
		regular: x6,
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

	fontH0: {
		regular: {
			...replacedFamilyOctavius.fontH0.regular,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			...replacedFamilyOctavius.fontH0.compact,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle1: {
		regular: {
			...staticRef(replacedFamilyOctavius.fontTitle1).regular,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			...staticRef(replacedFamilyOctavius.fontTitle1).compact,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle2: {
		regular: {
			...staticRef(replacedFamilyOctavius.fontTitle2).regular,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			...staticRef(replacedFamilyOctavius.fontTitle2).compact,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle3: {
		regular: {
			...staticRef(replacedFamilyOctavius.fontTitle3).regular,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			...staticRef(replacedFamilyOctavius.fontTitle3).compact,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontSubhead: {
		regular: {
			...staticRef(replacedFamilyOctavius.fontSubhead).regular,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			...staticRef(replacedFamilyOctavius.fontSubhead).compact,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},

	fontH1: {
		regular: {
			fontSize: 36,
			lineHeight: 48,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
		compact: {
			fontSize: 28,
			lineHeight: 36,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
	},
	fontH2: {
		regular: {
			fontSize: 28,
			lineHeight: 34,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
		compact: {
			fontSize: 24,
			lineHeight: 32,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
	},
	fontH3: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
	},
	fontH4: {
		regular: {
			fontSize: 15,
			lineHeight: 22,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
	},
	fontLead: {
		regular: {
			fontSize: 19,
			lineHeight: 30,
			fontFamily: fontFamilyArticle,
			fontWeight: fontWeightArticle1,
			fontStyle: 'italic',
		},
	},
	fontArticleBody: {
		regular: {
			fontSize: 18,
			lineHeight: 28,
			fontFamily: fontFamilyArticle,
			fontWeight: fontWeightArticle1,
		},
	},
	fontSpecificText: {
		regular: {
			fontSize: 18,
			lineHeight: 28,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontSpecificFootnote: {
		regular: {
			fontSize: 14,
			lineHeight: 22,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontSpecificButton: {
		regular: {
			fontSize: 16,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
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
		compactX: 288,
		regular: 380,
	},

	sizeControlButtonWidthMin: {
		compactX: 130,
		compact: 130,
		regular: 94,
	},

	/**
	 * РАЗМЕРЫ ДЛЯ СЕТКИ
	 */

	gridContent: {
		compactX: '100%',
		compact: 580,
		regular: 880,
		large: 1180,
	},
	gridColumnX2: {
		compactX: '100%',
		compact: 280,
		regular: 430,
		large: 580,
	},
	gridColumnX3: {
		compactX: '100%',
		compact: 180,
		regular: 280,
		large: 380,
	},
	gridColumnX4: {
		compactX: '100%',
		compact: 130,
		regular: 205,
		large: 280,
	},
	gridColumnX6: {
		compactX: '100%',
		compact: 80,
		regular: 130,
		large: 180,
	},
	gridLayoutArticle: {
		compactX: '100%',
		compact: '100%',
		regular: 540,
		large: 540,
	},
	gridLayoutBanner: {
		compactX: '100%',
		compact: 280,
		regular: 280,
		large: 560,
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
		compactX: x0,
		compact: x0,
		regular: x4,
	},

	/**
	 * ОТСТУПЫ МЕЖДУ ЭЛЕМЕНТАМИ УПРАВЛЕНИЯ
	 */
	sizeFieldHorizontalMargin: {
		compactX: x4,
		compact: x4,
		regular: x5,
	},
	sizeIconMargin: {
		regular: x2,
	},
	sizeTabMargin: {
		compactX: x8,
		compact: x8,
		regular: x2,
	},
	sizePopupMargin: {
		compactX: x2,
		compact: x2,
		regular: x6,
	},

	/**
	 * ИКОНКИ
	 */

	sizeIconUI: {
		compactX: x4,
		compact: x4,
		regular: x4 + x05,
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
