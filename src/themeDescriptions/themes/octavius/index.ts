import {getRGBA} from '@/build/helpers/cssHelpers';
import {ParadigmThemeDescription} from '@/interfaces/namespaces/paradigm';
import {ThemeOctaviusDescription} from '@/interfaces/themes/octavius';
import {
	darkTheme as paradigmDarkBase,
	lightTheme as paradigmLightBase,
} from '@/themeDescriptions/base/paradigm';
import {helpers} from '@/themeDescriptions/common';

const {x05, x1, x2, x3, x4, x5, x6, x8, x10} = helpers;

export const octaviusTheme: ThemeOctaviusDescription = {
	...paradigmLightBase,
	...helpers,
	themeName: 'octavius',
	colors: {
		...paradigmLightBase.colors,
		colorBgThumbnail: '#00103d',
		colorRating: '#ffd400',
		colorBgContrast: '#2C2D2E',
		colorSocialVk: '#2787F5',
		colorSocialOk: '#ee8208',
		colorSocialMir: '#117eda',
		colorSocialFb: '#0561af',
		colorSocialTwitter: '#00bff3',
		colorSocialDribbble: '#ea4c89',
		colorSocialBehance: '#0057ff',
		colorPaletteRed1: '#fc2c38',
		colorPaletteRed2: '#eb1981',
		colorPaletteRed3: '#ff71bb',
		colorPaletteOrange1: '#ff8b2e',
		colorPaletteOrange2: getRGBA('#FF9E00', 0.12),
		colorPaletteYellow1: '#ffc311',
		colorPaletteGreen1: '#aee113',
		colorPaletteGreen2: '#59c354',
		colorPaletteGreen3: '#37eb94',
		colorPaletteGreen4: '#00b1b3',
		colorPaletteGreen5: getRGBA('#5CBA38', 0.12),
		colorPaletteGreen6: getRGBA('#00E6B4', 0.08),
		colorPaletteBlue1: '#2951ff',
		colorPaletteBlue2: '#00abf2',
		colorPaletteBlue3: '#26dfdf',
		colorPaletteBlue4: getRGBA('#005FF9', 0.12),
		colorPaletteViolet1: '#6c00ff',
		colorPaletteViolet2: '#ae73ff',
		colorAlert: '#c1341b',
		colorBgPlaceholder: '#ffffff',
		colorBgPromo: '#EBEEF5',
		colorTrueBlack: '#000000',
		colorTrueWhite: '#ffffff',
	},

	breakpoints: {
		touch: {
			breakpoint: 0,
			adaptiveValue: 'compact',
		},
		desktopS: {
			breakpoint: 768,
			adaptiveValue: 'regular',
		},
	},

	// Типографика
	fontH0: {
		regular: {
			fontSize: 44,
			lineHeight: 52,
			fontFamily: paradigmLightBase.fontFamilyAccent,
			fontWeight: paradigmLightBase.fontWeightAccent3,
		},
		compact: {
			fontSize: 28,
			lineHeight: 32,
		},
	},
	fontH1: {
		regular: {
			fontSize: 32,
			lineHeight: 36,
			fontFamily: paradigmLightBase.fontFamilyAccent,
			fontWeight: paradigmLightBase.fontWeightAccent3,
		},
		compact: {
			fontSize: 24,
			lineHeight: 28,
		},
	},
	fontH2: {
		regular: {
			fontSize: 28,
			lineHeight: 32,
			fontFamily: paradigmLightBase.fontFamilyAccent,
			fontWeight: paradigmLightBase.fontWeightAccent3,
		},
		compact: {
			fontSize: 20,
			lineHeight: 26,
		},
	},

	// Отступы
	sizeBasePadding: {
		regular: x5,
		compact: x4,
	},
	sizeBorderWidthTab: {
		regular: x05,
	},
	sizeBorderWidthBar: {
		regular: x1,
	},
	sizeBorderWidthAccent: {
		regular: x2,
	},
	sizeBorderWidthAccentSecondary: {
		regular: x2,
	},
	sizeControlButtonWidthMin: {
		regular: 104,
		compact: 130,
	},
	sizePromoButtonClose: {
		regular: x8,
	},
	sizeButtonSliderHeight: {
		regular: x6,
	},
	sizeButtonSliderWidth: {
		regular: x3,
	},
	sizeButtonSliderWidthPointer: {
		regular: x4,
	},
	sizeFieldWidthMin: {
		regular: 380,
		compact: 328,
	},
	sizeLabelWidth: {
		regular: 184,
	},
	sizeProgress: {
		regular: x1,
	},
	sizeProgressScroll: {
		regular: x3,
	},
	sizeDotBullet: {
		regular: x1,
	},
	sizeDotIndicate: {
		regular: x2,
	},
	sizeDotClickable: {
		regular: x3,
	},
	sizeVerticalPadding: {
		regular: 0,
	},
	sizeButtonMorePadding: {
		regular: x2,
	},
	sizeIconMorePadding: {
		regular: x2,
		compact: x3,
	},
	sizeButtonIconPadding: {
		regular: x5,
		compact: x4,
	},
	sizeDivPadding: {
		regular: x1,
	},
	sizeMenuPadding: {
		regular: x2,
	},
	sizeTagPadding: {
		regular: x2,
	},
	sizeTabPadding: {
		regular: x4,
	},
	sizeTableHorizontalPadding: {
		regular: x4,
	},
	sizeTableVerticalPadding: {
		regular: x4,
	},
	sizeSliceTopPadding: {
		regular: x10,
	},
	sizeSliceBottomPadding: {
		regular: 60,
	},
	sizeBaseMargin: {
		regular: x3,
	},
	sizeLabelVerticalMargin: {
		regular: x1,
	},
	sizeTipMargin: {
		regular: x1,
	},
	sizeFieldHorizontalMargin: {
		regular: x5,
		compact: x4,
	},
	sizeFieldVerticalMargin: {
		regular: x6,
	},
	sizeFieldSetMargin: {
		regular: x8,
	},
	sizeIconMargin: {
		regular: x2,
		compact: x3,
	},
	sizeChoiceMargin: {
		regular: x2,
	},
	sizeMenuMargin: {
		regular: x05,
	},
	sizeTagMargin: {
		regular: x2,
	},
	sizeTabMargin: {
		regular: x2,
	},
	sizeBulletMargin: {
		regular: x3,
	},
	sizeAttributeMargin: {
		regular: x1,
	},
	sizePopupMargin: {
		regular: x6,
		compact: x2,
	},
	sizeHeaderIcon: {
		regular: x5,
	},
	sizeWysiwygIcon: {
		regular: x4 - x05,
	},

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

	// остальное
	toneValueOverlay: 0.48,
	toneValueViewer: 0.88,
	toneValueToolbar: 0.24,
	toneValueHover: 0.04,
	toneValueActive: 0.08,
	toneValueFocus: 0.08,

	typeBorderButton: 'solid',
	typeBorderPosition: 'inset',
};

export const octaviusDarkTheme: ParadigmThemeDescription = {
	...octaviusTheme,
	themeName: 'octaviusDark',
	colorsScheme: 'dark',
	colors: {
		...octaviusTheme.colors,
		...paradigmDarkBase.colors,
		colorBgThumbnail: '#1F1F1F',
		colorBgPlaceholder: '#000000',
		colorBgPromo: '#303030',
	},
};
