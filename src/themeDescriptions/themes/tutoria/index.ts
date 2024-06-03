import { toneOpacity } from '@/build/helpers/cssHelpers';
import {
	LocalTutoriaColorsDescriptionStruct,
	ThemeTutoriaAdaptiveTokens,
	ThemeTutoriaDescription,
} from '@/interfaces/themes/tutoria';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/vk';

const fontFamilyFallbacks = 'Helvetica, Arial, sans-serif';
const fontFamilyAccent = `VKSansDisplay, ${fontFamilyFallbacks}`;
const fontFamilyBase = `Roboto, ${fontFamilyFallbacks}`;

export const tutoriaThemeColors: LocalTutoriaColorsDescriptionStruct = {
	// background
	tutoriaColorBackgroundPrimary: { normal: '#F4F5F7', hover: '#E9ECEF', active: '#D4D9DE' },
	tutoriaColorBackgroundContentInverse: { normal: '#181B1E', hover: '#41474E', active: '#5C646D' },
	tutoriaColorBackgroundOverlayAlpha: toneOpacity('#181B1E', 0.4),
	tutoriaColorBackgroundNeutral: '#939FAD',
	tutoriaColorBackgroundAccentTint: { normal: '#E5F1FF', hover: '#CCE4FF', active: '#99C9FF' },
	tutoriaColorBackgroundColorPrimary: { normal: '#181B1E', hover: '#41474E', active: '#5C646D' },
	tutoriaColorBackgroundPositiveTint: { normal: '#EDF7ED', hover: '#CAF6DA', active: '#98EDB7' },
	tutoriaColorBackgroundWarning: { normal: '#FC9C0A', hover: '#FDB03B', active: '#FED79D' },
	tutoriaColorBackgroundWarningTint: { normal: '#FFF5E7', hover: '#FEEBCE', active: '#FED79D' },
	tutoriaColorBackgroundNegativeTint: { normal: '#FFECED', hover: '#FFD9DA', active: '#FFB3B5' },
	tutoriaColorBackgroundInfo: { normal: '#008DF2', hover: '#33A4F5', active: '#66BBF7' },
	tutoriaColorBackgroundInfoTint: { normal: '#ECF3FC', hover: '#CCE8FC', active: '#99D1FA' },

	// shadow
	tutoriaColorCardBoxShadow: 'rgba(37, 41, 46, 0.04)',

	// text
	tutoriaColorTextWarning: '#FC9C0A',
	tutoriaColorTextInfo: '#008DF2',

	// icon
	tutoriaColorIconWarning: '#FC9C0A',
	tutoriaColorIconInfo: '#008DF2',
	tutoriaColorIconLink: '#008DF2',

	// separator
	tutoriaColorSeparatorPrimaryAlpha: toneOpacity('#E9ECEF', 0.2),
	tutoriaColorSeparatorSecondaryAlpha: toneOpacity('#E9ECEF', 0.1),

	// stroke
	tutoriaColorStrokePrimary: '#181B1E',
	tutoriaColorStrokeSecondary: '#D4D9DE',
	tutoriaColorStrokeTertiary: '#E9ECEF',
	tutoriaColorStrokeAccentTint: '#99C9FF',
	tutoriaColorStrokePositiveTint: '#98EDB7',
	tutoriaColorStrokeWarning: '#FC9C0A',
	tutoriaColorStrokeWarningTint: '#FED79D',
	tutoriaColorStrokeNegativeTint: '#FFB3B5',
	tutoriaColorStrokeInfo: '#008DF2',
	tutoriaColorStrokeInfoTint: '#99D1FA',
};

export const tutoriaThemeAdaptiveTokens: ThemeTutoriaAdaptiveTokens = {
	// fonts
	tutoriaFontTextTitle1: {
		regular: {
			fontSize: 24,
			fontWeight: 600,
			lineHeight: 28,
			fontFamily: fontFamilyBase,
		},
	},
	tutoriaFontTextTitle2: {
		regular: {
			fontSize: 20,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
		},
	},
	tutoriaFontTextTitle3: {
		regular: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
		},
	},

	// sizes
	tutoriaSizePaddingCard: {
		regular: 24,
		compact: 16,
	},
	tutoriaLayoutMaxWidth: {
		regular: 1224,
	},

	// button
	tutoriaSizeButtonBaseSmallBorderRadius: {
		regular: 12,
	},
	tutoriaSizeButtonBaseMediumBorderRadius: {
		regular: 10,
	},
	tutoriaSizeButtonBaseLargeBorderRadius: {
		regular: 8,
	},
};

export const tutoriaTheme: ThemeTutoriaDescription = {
	...lightTheme,
	themeName: 'tutoria',
	themeNameBase: 'tutoria',
	colors: {
		...lightTheme.colors,
		...tutoriaThemeColors,
		// background
		colorBackgroundContent: { normal: '#FFFFFF', hover: '#F4F5F7', active: '#E9ECEF' },
		colorBackgroundContrast: { normal: '#FFFFFF', hover: '#F4F5F7', active: '#E9ECEF' },
		colorBackgroundAccent: { normal: '#0077FF', hover: '#3392FF', active: '#66ADFF' },
		colorBackgroundSecondary: { normal: '#E9ECEF', hover: '#E9ECEF', active: '#D4D9DE' },
		colorBackgroundSecondaryAlpha: { normal: '#F4F5F7', hover: '#E9ECEF', active: '#D4D9DE' },
		colorTransparent: { normal: 'transparent', hover: '#F4F5F7', active: '#E9ECEF' },
		colorBackgroundNegative: { normal: '#FF4046', hover: '#FF666B', active: '#FFB3B5' },
		colorBackgroundPositive: { normal: '#02D14E', hover: '#34DA71', active: '#66E394' },

		// text
		colorTextPrimary: '#181B1E',
		colorTextSecondary: '#5C646D',
		colorTextTertiary: '#939FAD',
		colorTextContrast: '#FFFFFF',
		colorTextAccent: '#0077FF',
		colorTextPositive: '#02D14E',
		colorTextNegative: '#FF4046',

		// icon
		colorIconPrimary: '#181B1E',
		colorIconSecondary: '#5C646D',
		colorIconTertiary: '#939FAD',
		colorIconContrast: '#FFFFFF',
		colorIconAccent: '#0077FF',
		colorIconPositive: '#02D14E',
		colorIconNegative: '#FF4046',
		colorIconWarning: '#FC9C0A',

		// separator
		colorSeparatorPrimary: '#E9ECEF',
		colorSeparatorSecondary: '#F4F5F7',

		// stroke
		colorStrokeAccent: '#0077FF',
		colorStrokeContrast: '#FFFFFF',
		colorStrokePositive: '#02D14E',
		colorStrokeNegative: '#FF4046',
	},
	...tutoriaThemeAdaptiveTokens,

	// fonts
	fontFamilyFallbacks,
	fontFamilyAccent,
	fontFamilyBase,
	fontTitle1: {
		regular: {
			fontSize: 24,
			fontWeight: 600,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
		},
		largeXX: {
			fontSize: 40,
			fontWeight: 600,
			lineHeight: 44,
			fontFamily: fontFamilyAccent,
		},
		largeX: {
			fontSize: 32,
			fontWeight: 600,
			lineHeight: 36,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle2: {
		regular: {
			fontSize: 20,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle3: {
		regular: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
		},
		compact: {
			fontSize: 16,
			fontWeight: 600,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
		},
	},

	fontSubhead: {
		regular: {
			fontSize: 14,
			fontWeight: 500,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
		},
	},

	fontHeadline1: {
		regular: {
			fontSize: 16,
			fontWeight: 500,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
		},
	},

	fontHeadline2: {
		regular: {
			fontSize: 15,
			fontWeight: 500,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
		},
	},

	fontText: {
		regular: {
			fontSize: 16,
			fontWeight: 400,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
		},
	},

	fontParagraph: {
		regular: {
			fontSize: 14,
			fontWeight: 400,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
		},
	},

	fontFootnote: {
		regular: {
			fontSize: 13,
			fontWeight: 500,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 13,
			fontWeight: 400,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
		},
	},

	fontCaption1: {
		regular: {
			fontSize: 12,
			fontWeight: 500,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 12,
			fontWeight: 400,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
		},
	},

	// button
	sizeButtonMinimumWidth: {
		regular: 101,
	},

	sizeButtonBaseSmallPaddingHorizontal: {
		regular: 6,
	},
	sizeButtonBaseMediumPaddingHorizontal: {
		regular: 8,
	},
	sizeButtonBaseLargePaddingHorizontal: {
		regular: 10,
	},

	sizeButtonSmallHeight: {
		regular: 28,
	},
	sizeButtonMediumHeight: {
		regular: 36,
	},
	sizeButtonLargeHeight: {
		regular: 44,
	},

	// layout
	sizeSplitColPaddingHorizontal: {
		regular: 24,
		compact: 16,
	},
};

export const tutoriaDarkTheme = {
	...tutoriaTheme,
	themeName: 'tutoriaDark',

	colors: {
		...tutoriaTheme.colors,
		...darkTheme.colors,
	},
};
