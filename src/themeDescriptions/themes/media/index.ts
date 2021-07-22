import {replacePropDeep} from '@/build/helpers/replacePropDeep';
import {ThemeMediaDescription} from '@/interfaces/themes/media';
import {fontSizes, helpers, projectColors} from '@/themeDescriptions/common';

import {octaviusTheme} from '../octavius';

const fontFamily = 'Roboto, Arial, sans-serif';
// const fontFamilySlab = 'Roboto Slab, Arial, serif';
const fontFamilyTouch = 'Helvetica, Arial, sans-serif';
const {x0, x05, x2, x3, x4, x5, x6, x8, x10, x12} = helpers;

const {
	fontSize1,
	fontSize2,
	fontSize3,
	fontSize4,
	fontSize5,
	fontSize6,
	fontSize7,
	fontSize8,
} = replacePropDeep(fontSizes, {fontFamily, fontWeight: 300});

const touch = replacePropDeep(fontSizes, {
	fontFamily: fontFamilyTouch,
	fontWeight: 400,
});

const replacedFamilyOctavius = replacePropDeep(octaviusTheme, {
	fontFamily,
	fontWeight: 300,
});

const fontText = {
	compactX: {
		...fontSize4,
	},
	compact: {
		...fontSize4,
	},
	regular: {
		...fontSize3,
	},
};

export const mediaTheme: ThemeMediaDescription = {
	...replacedFamilyOctavius,
	themeName: 'media',
	prefix: 'vkui',
	colors: {
		...replacedFamilyOctavius.colors,
		...projectColors,
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
		desktopL: {
			adaptiveValue: 'largeX',
			breakpoint: 1346,
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
		compactX: {
			...touch.fontSize7,
			fontWeight: 700,
			marginBottom: x5,
		},
		compact: {
			...fontSize7,
			fontWeight: 700,
			marginBottom: x5,
		},
		regular: {
			...fontSize7,
			fontWeight: 700,
			marginBottom: x4,
		},
		large: {
			...fontSize8,
			fontWeight: 700,
			marginBottom: x5,
		},
		largeX: {
			...fontSize8,
			fontWeight: 700,
			marginBottom: x5,
		},
	},

	fontH1: {
		compactX: {
			...touch.fontSize6,
			fontWeight: 700,
			marginBottom: x4,
		},
		compact: {
			...fontSize6,
			fontWeight: 700,
			marginBottom: x4,
		},
		regular: {
			...fontSize6,
			fontWeight: 700,
			marginBottom: x3,
		},
		large: {
			...fontSize7,
			fontWeight: 700,
			marginBottom: x4,
		},
		largeX: {
			...fontSize7,
			fontWeight: 700,
			marginBottom: x4,
		},
	},

	fontH2: {
		compactX: {
			...touch.fontSize5,
			fontWeight: 700,
			marginBottom: x3,
		},
		compact: {
			...fontSize5,
			fontWeight: 700,
			marginBottom: x3,
		},
		regular: {
			...fontSize5,
			fontWeight: 700,
			marginBottom: x2,
		},
		large: {
			...fontSize6,
			fontWeight: 700,
			marginBottom: x3,
		},
		largeX: {
			...fontSize6,
			fontWeight: 700,
			marginBottom: x3,
		},
	},

	fontTitle1: {
		compactX: {
			...touch.fontSize4,
			fontWeight: 700,
			marginBottom: x3,
		},
		compact: {
			...fontSize4,
			fontWeight: 700,
			marginBottom: x3,
		},
		regular: {
			...fontSize4,
			fontWeight: 700,
			marginBottom: x3,
		},
		large: {
			...fontSize5,
			fontWeight: 700,
			marginBottom: x3,
		},
		largeX: {
			...fontSize5,
			fontWeight: 700,
			marginBottom: x3,
		},
	},

	fontTitle2: {
		compactX: {
			...touch.fontSize3,
			fontWeight: 700,
			marginBottom: x3,
		},
		compact: {
			...fontSize3,
			fontWeight: 700,
			marginBottom: x3,
		},
		regular: {
			...fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
		large: {
			...fontSize4,
			fontWeight: 700,
			marginBottom: x3,
		},
		largeX: {
			...fontSize4,
			fontWeight: 700,
			marginBottom: x3,
		},
	},

	fontTitle3: {
		compactX: {
			...touch.fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
		compact: {
			...fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
		regular: {
			...fontSize4,
			fontWeight: 700,
			marginBottom: x3,
		},
		large: {
			...fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
		largeX: {
			...fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
	},

	fontHeadline: {
		compactX: {
			...touch.fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
		compact: {
			...fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
		regular: {
			...fontSize4,
			fontWeight: 700,
			marginBottom: x3,
		},
		large: {
			...fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
		largeX: {
			...fontSize3,
			fontWeight: 700,
			marginBottom: x2,
		},
	},

	fontText,

	fontArticle: {
		regular: {
			...fontSize4,
		},
	},

	fontFootnote: {
		compactX: {
			...touch.fontSize2,
		},
		regular: {
			...fontSize2,
		},
	},

	fontCaption2Caps: {
		compactX: {
			...touch.fontSize1,
			fontWeight: 700,
			letterSpacing: '1px',
			textTransform: 'uppercase',
		},
		compact: {
			...fontSize1,
			fontWeight: 700,
			letterSpacing: '1px',
			textTransform: 'uppercase',
		},
		regular: {
			...fontSize1,
			fontWeight: 700,
			letterSpacing: '1px',
			textTransform: 'uppercase',
		},
		large: {
			...fontSize1,
			fontWeight: 700,
			letterSpacing: '1px',
			textTransform: 'uppercase',
		},
		largeX: {
			...fontSize1,
			fontWeight: 700,
			letterSpacing: '1px',
			textTransform: 'uppercase',
		},
	},

	fontCaption2: {
		compactX: {
			...touch.fontSize1,
		},
		compact: {
			...fontSize1,
		},
		regular: {
			...fontSize1,
		},
		large: {
			...fontSize1,
		},
		largeX: {
			...fontSize1,
		},
	},

	/**
	 * РАЗМЕРЫ КОНТРОЛЛОВ
	 */

	sizeFieldHeight: {
		compactX: x12,
		compact: x12,
		regular: x10,
	},
	sizeControlButtonWidthMin: {
		compactX: 130,
		compact: 130,
		regular: 94,
	},

	sizeButtonLargeHeight: {
		regular: x12,
	},
	sizeButtonSmallHeight: {
		regular: x8,
	},
	sizeFieldWidthMin: {
		compactX: 288,
		regular: 380,
	},

	/**
	 * РАЗМЕРЫ ДЛЯ СЕТКИ
	 */

	gridContent: {
		compactX: '100%',
		compact: '100%',
		regular: 940,
		large: 1180,
		largeX: 1300,
	},
	gridColumnX2: {
		compactX: '100%',
		compact: 340,
		regular: 460,
		large: 580,
		largeX: 640,
	},
	gridColumnX3: {
		compactX: '100%',
		compact: 220,
		regular: 300,
		large: 380,
		largeX: 420,
	},
	gridColumnX4: {
		compactX: '100%',
		compact: 160,
		regular: 220,
		large: 280,
		largeX: 310,
	},
	gridColumnX6: {
		compactX: '100%',
		compact: 100,
		regular: 140,
		large: 180,
		largeX: 200,
	},
	gridLayoutArticle: {
		compactX: '100%',
		compact: '100%',
		regular: 640,
		large: 860,
		largeX: 940,
	},
	gridLayoutBanner: {
		compactX: '100%',
		compact: 280,
		regular: 280,
		large: 280,
		largeX: 280,
	},

	gridLayoutArticleMargin: {
		compactX: 0,
		compact: 0,
		regular: 0,
		large: 100,
		largeX: 100,
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
