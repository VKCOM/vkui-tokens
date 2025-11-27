import { ThemeOtvetDescription } from '@/interfaces/themes/otvet';
import { ThemeOtvetDarkDescription } from '@/interfaces/themes/otvetDark';

import { darkTheme, lightTheme } from '../../base/paradigm';

const fontFamilyAccent = 'VKSansDisplay, Helvetica, Arial, sans-serif';
const fontFamilyBase = 'Arial, sans-serif';

export const otvetTheme: ThemeOtvetDescription = {
	...lightTheme,

	themeName: 'otvet',
	themeNameBase: 'otvet',

	fontFamilyAccent,
	fontFamilyBase,
	fontTitleXXL: {
		regular: {
			fontSize: 36,
			lineHeight: 44,
			fontWeight: 600,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitleXL: {
		regular: {
			fontSize: 26,
			lineHeight: 32,
			fontWeight: 600,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle1: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontWeight: 500,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle1Bold: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontWeight: 600,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle2: {
		regular: {
			fontSize: 22,
			lineHeight: 28,
			fontWeight: 500,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle2Bold: {
		regular: {
			fontSize: 22,
			lineHeight: 28,
			fontWeight: 600,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle3: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			fontWeight: 500,
			fontFamily: fontFamilyAccent,
		},
	},

	fontTitle4: {
		regular: {
			fontSize: 17,
			lineHeight: 22,
			fontWeight: 500,
			fontFamily: fontFamilyAccent,
		},
	},

	fontHeadline1: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			fontWeight: 500,
			fontFamily: fontFamilyAccent,
		},
	},

	fontHeadline2: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontWeight: 500,
			fontFamily: fontFamilyAccent,
		},
	},

	fontHeadline2Bold: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontWeight: 600,
			fontFamily: fontFamilyAccent,
		},
	},

	fontParagraph: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
		},
	},

	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontWeight: 400,
			fontFamily: fontFamilyAccent,
		},
	},

	fontSubheadBold: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontWeight: 500,
			fontFamily: fontFamilyAccent,
		},
	},

	fontFootnote: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
		},
	},

	fontFootnoteCaps: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
			letterSpacing: '0.3px',
			textTransform: 'uppercase',
		},
	},

	fontCaption1: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
		},
	},

	fontCaption1Caps: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
			letterSpacing: '0.26px',
			textTransform: 'uppercase',
		},
	},

	fontCaption2: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
		},
	},

	fontCaption2Bold: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontWeight: 500,
			fontFamily: fontFamilyBase,
		},
	},

	fontCaption2Caps: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
			letterSpacing: '0.22px',
			textTransform: 'uppercase',
		},
	},

	fontCaption3: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
		},
	},

	fontCaption3Bold: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontWeight: 500,
			fontFamily: fontFamilyBase,
		},
	},

	fontCaption3Caps: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontWeight: 400,
			fontFamily: fontFamilyBase,
			letterSpacing: '0.16px',
			textTransform: 'uppercase',
		},
	},

	fontCaption3CapsBold: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontWeight: 500,
			fontFamily: fontFamilyBase,
			letterSpacing: '0.16px',
			textTransform: 'uppercase',
		},
	},

	spacingSize3Xl: 36,

	sizeBorder: {
		regular: 1,
	},

	colors: {
		...lightTheme.colors,

		colorBackground: '#EEEFF1',
		colorFieldBackground: 'rgba(0, 16, 61, 0.06)',
		otvetColorBackgroundAnswer: '#E7E9EC',

		colorBackgroundPositiveTint: {
			normal: '#ECFAF3',
			hover: '#DEF6E2',
			active: '#D9E7E4',
		},

		colorBackgroundNegativeTint: {
			normal: '#FEEFEB',
			hover: '#F9DBDE',
			active: '#EADDDD',
		},

		colorTextAccent: {
			normal: '#0070F0',
			hover: '#005FCC',
			active: '#004EA8',
		},

		colorIconAccent: {
			normal: '#0077FF',
			hover: '#005FCC',
			active: '#004EA8',
		},
	},
};

export const otvetDarkTheme: ThemeOtvetDarkDescription = {
	...otvetTheme,

	themeName: 'otvetDark',
	colorsScheme: 'dark',

	colors: {
		...otvetTheme.colors,
		...darkTheme.colors,

		// Background
		colorBackground: '#181B20',
		colorBackgroundContent: '#20272E',
		colorBackgroundModal: '#2A333C',
		colorBackgroundTertiary: 'rgba(167, 203, 238, 0.06)',
		colorFieldBackground: 'rgba(167, 203, 238, 0.12)',
		otvetColorBackgroundAnswer: '#181B20',

		// Background Tint
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.4)',
		colorBackgroundAccentTintThemed: '#134782',

		// Stroke
		colorSeparatorPrimary: '#444A4F',
		colorSeparatorPrimaryAlpha: 'rgba(68, 74, 79, 0.6)',

		// States
		colorBackgroundAccent: {
			normal: '#0077FF',
			hover: '#0073F7',
			active: '#006FEF',
		},

		colorBackgroundSecondary: {
			normal: '#303B45',
			hover: '#36414D',
			active: '#3B4854',
		},

		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(167, 203, 238, 0.12)',
			hover: 'rgba(167, 203, 238, 0.16)',
			active: 'rgba(167, 203, 238, 0.2)',
		},

		colorTransparent: {
			normal: 'transparent',
			hover: 'rgba(167, 203, 238, 0.12)',
			active: 'rgba(167, 203, 238, 0.16)',
		},

		colorBackgroundAccentTintThemedAlpha: {
			normal: 'rgba(0, 119, 255, 0.4)',
			hover: 'rgba(0, 119, 255, 0.46)',
			active: 'rgba(0, 119, 255, 0.52)',
		},

		colorTextAccent: {
			normal: '#1A85FF',
			hover: '#3C97FF',
			active: '#5FAAFF',
		},

		colorIconAccent: {
			normal: '#0077FF',
			hover: '#3C97FF',
			active: '#5FAAFF',
		},
	},
};
