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

	// shadows
	otvetBoxShadowIsland: '0px 6px 16px 0px rgba(0, 16, 61, 0.04)',

	// gradient
	gradientContent0: 'rgba(255, 255, 255, 0.00)',
	gradientContent86: 'rgba(255, 255, 255, 0.86)',

	colors: {
		...lightTheme.colors,

		// Stroke
		colorSeparatorSecondary: '#E0E2E8',

		// Background
		colorBackground: '#EEEFF1',
		colorFieldBackground: 'rgba(0, 16, 61, 0.06)',
		otvetColorBackgroundAnswer: '#E7E9EC',
		colorBackgroundNavBarOtvetui: '#FFFFFF',

		// Background Tint
		colorBackgroundAccentTintThemedAlpha: 'rgba(0, 119, 255, 0.06)',
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.06)',
		colorBackgroundAccentTintThemed: '#F0F7FF',

		// Rang
		colorRangHigherBrain: '#FCD6D6',
		colorRangAi: '#E1F0A9',
		colorRangGenius: '#FFD38B',
		colorRangOracul: '#FFCAA7',
		colorRangProLight: '#FACBF1',
		colorRangMudriy: '#BEE9FF',
		colorRangMyslitel: '#FED2D7',
		colorRangGuru: '#F9EB98',
		colorRangMaster: '#BDEFFD',
		colorRangPro: '#FDCC89',
		colorRangExpert: '#F7EAA7',
		colorRangStudent: '#C9EDEE',

		// Avatars
		colorAvatarsRed: '#F55252',
		colorAvatarsOrange: '#F68E42',
		colorAvatarsPeach: '#FFB980',
		colorAvatarsBlue: '#4C91FF',
		colorAvatarsCoral: '#FEA4A4',
		colorAvatarsGreen: '#43CC4C',
		colorAvatarsIndigo: '#7772F8',
		colorAvatarsLavender: '#D3B2FF',
		colorAvatarsLime: '#C3F07F',
		colorAvatarsMint: '#7BEADB',
		colorAvatarsSea: '#22CEEC',
		colorAvatarsSeagreen: '#42D7A5',
		colorAvatarsSky: '#9EDBFF',
		colorAvatarsViolet: '#F55252',
		colorAvatarsYellow: '#FFD65C',

		// Palette
		colorAccentCyan: {
			normal: '#11AAC5',
			hover: '#10A0B9',
			active: '#0F96AD',
		},

		// states
		colorBackgroundModal: {
			normal: '#FFFFFF',
			hover: '#F0F1F3',
			active: '#E0E2E8',
		},

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

		colorFieldBorderAlpha: {
			normal: 'rgba(0, 16, 61, 0.12)',
			hover: 'rgba(0, 16, 61, 0.24)',
			active: 'rgba(0, 16, 61, 0.36)',
		},
	},
};

export const otvetDarkTheme: ThemeOtvetDarkDescription = {
	...otvetTheme,

	themeName: 'otvetDark',
	colorsScheme: 'dark',

	// shadows
	otvetBoxShadowIsland: '0px 6px 16px 0px rgba (17, 20, 33, 0.16)',

	// gradient
	gradientContent0: 'rgba(32, 39, 46, 0.00)',
	gradientContent86: 'rgba(32, 39, 46, 0.86)',

	colors: {
		...otvetTheme.colors,
		...darkTheme.colors,

		// Text
		colorTextLink: '#00A9FF',

		// Background
		colorBackground: '#181B20',
		colorBackgroundContent: '#20272E',
		colorBackgroundModal: {
			normal: '#2A333C',
			hover: '#2F3943',
			active: '#343F4A',
		},
		colorBackgroundTertiary: 'rgba(167, 203, 238, 0.06)',
		colorFieldBackground: 'rgba(167, 203, 238, 0.12)',
		otvetColorBackgroundAnswer: '#181B20',
		colorBackgroundNavBarOtvetui: '#303A45',

		// Background Tint
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.12)',
		colorBackgroundAccentTintThemed: '#303B45',

		// Stroke
		colorSeparatorPrimary: '#444A4F',
		colorSeparatorPrimaryAlpha: 'rgba(68, 74, 79, 0.6)',
		colorSeparatorSecondary: '#444A4F',

		// Rang
		colorRangHigherBrain: '#9D6467',
		colorRangAi: '#5A7133',
		colorRangGenius: '#9D6A14',
		colorRangOracul: '#9D4A14',
		colorRangProLight: '#9D739C',
		colorRangMudriy: '#0E81A3',
		colorRangMyslitel: '#96727F',
		colorRangGuru: '#898118',
		colorRangMaster: '#0E81A3',
		colorRangPro: '#9D6A14',
		colorRangExpert: '#9D8C29',
		colorRangStudent: '#5F8D93',

		// Palette
		colorAccentCyan: '#07E5F9',

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

		colorBackgroundAccentTintThemedAlpha: {
			normal: 'rgba(167, 203, 238, 0.12)',
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

		colorBackgroundSky: {
			normal: '#1A3758',
			hover: '#233F5F',
			active: '#2C4765',
		},

		colorFieldBorderAlpha: {
			normal: 'rgba(255, 255, 255, 0.16)',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.32)',
		},

		colorTransparent: {
			normal: 'transparent',
			hover: 'rgba(167, 203, 238, 0.12)',
			active: 'rgba(167, 203, 238, 0.16)',
		},
	},
};
