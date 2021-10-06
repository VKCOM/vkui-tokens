import {ColorsDescription, ThemeDescription} from '../../interfaces/general';
import {
	darkColors as webDarkColors,
	lightColors as webLightColors,
} from '../../themeDescriptions/base/paradigm';

const fontFamilyAccent = 'MailSans';
const fontFamilyBase = 'SF Pro Text';
const fontWeightAccent1 = 400;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 500;
const fontWeightBase1 = 400;
const fontWeightBase2 = 700;
const fontWeightBase3 = 700;

export const lightColors: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		...webLightColors.colors,
		colorBackgroundWarning: '#FFFCE0',
		colorBackgroundNegative: '#FC2C38',
		colorTextNegative: '#FC2C38',
		colorIconNegative: '#FC2C38',
		colorStrokeNegative: '#FC2C38',
		colorIconPrimary: '#474747',
		colorFieldBorder: '#DADCE0',
		colorTextPrimary: '#1E1E1E',
		colorTextSecondary: '#858585',
		colorTextPositive: '#5CBA38',
		colorBackgroundPositive: '#5CBA38',
		colorIconPositive: '#5CBA38',
		colorStrokePositive: '#5CBA38',
		colorOverlayPrimary: 'rgba(0, 16, 61, 0.12)',
	},
};

export const darkColors: ColorsDescription = {
	colorsScheme: 'dark',
	colors: {
		...webDarkColors.colors,
		colorBackgroundAccent: '#0B66F9',
		colorTextAccent: '#0B66F9',
		colorBackgroundContent: '#191919',
		colorBackgroundSecondary: '#2B2B2B',
		colorBackgroundNegative: '#CA0D00',
		colorTextNegative: '#CA0D00',
		colorIconNegative: '#CA0D00',
		colorStrokeNegative: '#CA0D00',
		colorHeaderBackground: '#191919',
		colorIconPrimary: '#EAEAEA',
		colorIconSecondary: '#A5A7AD',
		colorImageBorder: 'rgba(0, 16, 61, 0.08)',
		colorBackgroundModal: '#1F1F1F',
		colorFieldBorder: '#494949',
		colorSeparatorPrimaryAlpha: 'rgba(7, 7, 7, 0.48)',
		colorSeparatorPrimary: '#070707',
		colorTextLink: '#297BEF',
		colorTextPrimary: 'rgba(255, 255, 255, 0.9)',
		colorTextSubhead: '#797A80',
		colorTextTertiary: '#AAADB3',
		colorTextPositive: '#5CBA38',
		colorBackgroundPositive: '#5CBA38',
		colorIconPositive: '#5CBA38',
		colorStrokePositive: '#5CBA38',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.5)',
	},
};

export const lightThemeBase: ThemeDescription = {
	themeName: 'paradigmMobileBase',
	...lightColors,

	// Типографика
	fontFamilyAccent,
	fontFamilyBase,
	fontWeightAccent1,
	fontWeightAccent2,
	fontWeightAccent3,
	fontWeightBase1,
	fontWeightBase2,
	fontWeightBase3,
	fontTitle1: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle2: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle3: {
		regular: {
			fontSize: 17,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontHeadline: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
	},
	fontText: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnote: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.3px',
		},
	},
	fontCaption1: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption1Caps: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.26px',
		},
	},
	fontCaption2: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption2Caps: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.22px',
		},
	},
	fontCaption3: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption3Caps: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.16px',
		},
	},

	// Размеры
	sizeSelectIconPadding: {
		regular: 7,
		compact: 6,
	},
	// todo поменять местами, когда откажемся от auto
	sizePopupBasePadding: {
		regular: 20,
		compact: 32,
	},
	// todo поменять местами, когда откажемся от auto
	sizePopupHeaderPadding: {
		regular: 16,
		compact: 24,
	},
	sizeBorderRadius: {
		regular: 4,
	},
	sizeCheckBorderRadius: {
		regular: 4,
	},
	sizeBorderRadiusPaper: {
		regular: 12,
	},
	sizeBorderRadiusPromo: {
		regular: 20,
	},
	sizeFieldHeight: {
		regular: 48,
		compact: 40,
	},
	sizeButtonLargeHeight: {
		regular: 48,
		compact: 48,
	},
	sizeButtonMediumHeight: {
		regular: 48,
		compact: 40,
	},
	sizeButtonSmallHeight: {
		regular: 32,
		compact: 32,
	},
	sizeCheckbox: {
		regular: 16,
	},
	sizeArrow: {
		regular: 8,
	},
	sizeArrowPromo: {
		regular: 40,
	},
	sizePopupSmall: {
		regular: 420,
	},
	sizePopupMedium: {
		regular: 680,
	},
	sizePopupLarge: {
		regular: 880,
	},
	sizeFieldHorizontalPadding: {
		regular: 12,
	},
	sizeButtonPaddingHorizontal: {
		regular: 20,
		compact: 16,
	},
	sizeLabelHorizontalMargin: {
		regular: 16,
	},
	sizeArrowPadding: {
		regular: 12,
	},
	sizeTooltipMargin: {
		regular: 8,
	},
	sizeIconUI: {
		regular: 16,
	},
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

	// Прочие отступы
	elevation1: '0 2px 0 0 rgba(0, 16, 61, 0.04)',
	elevation2: '0 4px 32px 0 rgba(0, 16, 61, 0.32)',
	elevation3: '0 16px 48px 0 rgba(0, 0, 0, 0.48)',
	elevation4: '0 16px 48px 0 rgba(0, 0, 0, 0.48)',
	animationDurationL: '0.4s',
	animationDurationM: '0.2s',
	animationDurationS: '0.1s',
	animationEasingDefault: 'cubic-bezier(0.3, 0.3, 0.5, 1)',
	opacityDisable: 0.48,
};

export const darkThemeBase: ThemeDescription = {
	...lightThemeBase,
	themeName: 'paradigmMobileBaseDark',
	...darkColors,
	elevation1: '0 2px 0 0 rgba(0, 0, 0, 0.04)',
	elevation2: '0 4px 48px 0 rgba(0, 0, 0, 0.72)',
	elevation3: '0 4px 32px 0 rgba(0, 0, 0, 0.48)',
	elevation4: '0 4px 32px 0 rgba(0, 0, 0, 0.48)',
};
