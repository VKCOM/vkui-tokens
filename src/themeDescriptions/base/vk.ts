import {ColorsDescription, ThemeDescription} from '@/interfaces/general';

const fontFamilyAccent =
	'"TT Commons", -apple-system, system-ui, Helvetica Neue, Roboto, sans-serif';
const fontFamilyBase =
	'-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontWeightAccent1 = 400;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 600;
const fontWeightBase1 = 400;
const fontWeightBase2 = 500;
const fontWeightBase3 = 600;

export const lightColors: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		colorBackgroundAccent: '#3F8AE0',
		colorBackgroundAccentThemed: '#3F8AE0',
		colorBackgroundAccentAlternative: '#3F8AE0',
		colorIconAccent: '#3F8AE0',
		colorTextAccent: '#3F8AE0',
		colorTextAccentThemed: '#3F8AE0',
		colorStrokeAccent: '#3F8AE0',
		colorStrokeAccentThemed: '#3F8AE0',
		colorStrokeContrast: '#FFFFFF',
		colorActionSheetText: '#3F8AE0',
		colorBackgroundContent: '#FFFFFF',
		colorBackgroundSecondary: '#F5F5F5',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(0, 0, 0, 0.04)',
			hover: 'rgba(0, 0, 0, 0.08)',
			active: 'rgba(0, 0, 0, 0.12)',
		},
		colorBackgroundTertiary: '#F9F9F9',
		colorBackground: '#EBEDF0',
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.20)',
		colorBackgroundWarning: '#FFF2D6',
		colorBackgroundNegative: '#E64646',
		colorTextNegative: '#E64646',
		colorIconNegative: '#E64646',
		colorStrokeNegative: '#E64646',
		colorHeaderBackground: '#FFFFFF',
		colorPanelHeaderIcon: '#3F8AE0',
		colorIconPrimary: '#2C2D2E',
		colorIconPrimaryInvariably: '#2C2D2E',
		colorIconMedium: '#818C99',
		colorIconMediumAlpha: 'rgba(0, 0, 0, 0.48)',
		colorIconSecondary: '#99A2AD',
		colorIconSecondaryAlpha: 'rgba(0, 0, 0, 0.36)',
		colorIconTertiary: '#B8C1CC',
		colorIconTertiaryAlpha: 'rgba(0, 0, 0, 0.24)',
		colorImageBorderAlpha: 'rgba(0, 0, 0, 0.08)',
		colorWriteBarInputBackground: '#F2F3F5',
		colorWriteBarInputBorderAlpha: 'rgba(0, 0, 0, 0.08)',
		colorTrackBackground: '#E1E3E6',
		colorTrackBuffer: '#A0BFE4',
		colorBackgroundModal: '#FFFFFF',
		colorImagePlaceholderAlpha: 'rgba(0, 28, 61, 0.08)',
		colorImagePlaceholder: '#F2F3F5',
		colorSearchFieldBackground: '#EBEDF0',
		colorFieldBorderAlpha: 'rgba(0, 0, 0, 0.12)',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.12)',
		colorSeparatorSecondary: '#E1E3E6',
		colorSeparatorPrimary: '#D7D8D9',
		colorTextLink: '#4986CC',
		colorTextLinkThemed: '#4986CC',
		colorTextMuted: '#2C2D2E',
		colorTextPrimary: '#000000',
		colorTextPrimaryInvariably: '#000000',
		colorTextSecondary: '#818C99',
		colorTextSubhead: '#6D7885',
		colorTextTertiary: '#99A2AD',
		colorWriteBarIcon: '#3F8AE0',
		colorAccentBlue: '#3F8AE0',
		colorAccentGray: '#A3ADB8',
		colorAccentRed: '#FF3347',
		colorAccentGreen: '#4BB34B',
		colorAccentOrange: '#FFA000',
		colorAccentPurple: '#735CE6',
		colorAccentViolet: '#792EC0',
		colorSkeletonFrom: '#F5F5F5',
		colorSkeletonTo: '#E1E3E6',
		colorAccentSecondary: '#3F8AE0',
		colorTextLinkVisited: '#4986CC',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#FFFFFF',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#FFFFFF',
		colorTextPositive: '#4BB34B',
		colorBackgroundPositive: '#4BB34B',
		colorIconPositive: '#4BB34B',
		colorStrokePositive: '#4BB34B',
		colorAvatarOverlay: 'rgba(129, 140, 153, 0.48)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.4)',
		colorTransparent: 'transparent',
		colorSkeletonFromAlpha: 'transparent',
		colorSkeletonToAlpha: 'transparent',
	},
};

export const darkColors: ColorsDescription = {
	colorsScheme: 'dark',
	colors: {
		colorBackgroundAccent: '#71AAEB',
		colorBackgroundAccentThemed: '#FFFFFF',
		colorBackgroundAccentAlternative: '#71AAEB',
		colorIconAccent: '#71AAEB',
		colorTextAccent: '#71AAEB',
		colorTextAccentThemed: '#FFFFFF',
		colorStrokeAccent: '#71AAEB',
		colorStrokeAccentThemed: '#FFFFFF',
		colorStrokeContrast: '#FFFFFF',
		colorActionSheetText: '#71AAEB',
		colorBackgroundContent: '#19191A',
		colorBackgroundSecondary: '#232324',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.04)',
			hover: 'rgba(255, 255, 255, 0.08)',
			active: 'rgba(255, 255, 255, 0.12)',
		},
		colorBackgroundTertiary: '#202021',
		colorBackground: '#0A0A0A',
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.20)',
		colorBackgroundWarning: '#6C4A00',
		colorBackgroundNegative: '#E64646',
		colorTextNegative: '#E64646',
		colorIconNegative: '#E64646',
		colorStrokeNegative: '#E64646',
		colorHeaderBackground: '#19191A',
		colorPanelHeaderIcon: '#71AAEB',
		colorIconPrimary: '#E1E3E6',
		colorIconPrimaryInvariably: '#2C2D2E',
		colorIconMedium: '#B0B1B6',
		colorIconMediumAlpha: 'rgba(241, 247, 255, 0.66)',
		colorIconSecondary: '#76787A',
		colorIconSecondaryAlpha: 'rgba(0, 0, 0, 0.43)',
		colorIconTertiary: '#5D5F61',
		colorIconTertiaryAlpha: 'rgba(255, 255, 255, 0.3)',
		colorImageBorderAlpha: 'rgba(255, 255, 255, 0.08)',
		colorWriteBarInputBackground: '#232324',
		colorWriteBarInputBorderAlpha: 'rgba(255, 255, 255, 0.8)',
		colorTrackBackground: '#202021',
		colorTrackBuffer: '#405772',
		colorBackgroundModal: '#2D2D2E',
		colorImagePlaceholderAlpha: 'rgba(241, 247, 255, 0.08)',
		colorImagePlaceholder: '#2A2B2C',
		colorSearchFieldBackground: '#232324',
		colorFieldBorderAlpha: 'rgba(255, 255, 255, 0.12)',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.4)',
		colorSeparatorSecondary: '#141415',
		colorSeparatorPrimary: '#0F0F10',
		colorTextLink: '#71AAEB',
		colorTextLinkThemed: '#FFFFFF',
		colorTextMuted: '#E1E3E6',
		colorTextPrimary: '#E1E3E6',
		colorTextPrimaryInvariably: '#000000',
		colorTextSecondary: '#76787A',
		colorTextSubhead: '#C1C3C6',
		colorTextTertiary: '#636567',
		colorWriteBarIcon: '#76787A',
		colorAccentBlue: '#71AAEB',
		// цвета ниже нужно поменять
		// не успел сделать к релизу тёмной версии vk почты
		colorAccentGray: '#A3ADB8',
		colorAccentRed: '#FF3347',
		colorAccentGreen: '#4BB34B',
		colorAccentOrange: '#FFA000',
		colorAccentPurple: '#735CE6',
		colorAccentViolet: '#792EC0',
		colorSkeletonFrom: '#F5F5F5',
		colorSkeletonTo: '#E1E3E6',
		colorAccentSecondary: '#3F8AE0',
		colorTextLinkVisited: '#4986CC',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#000000',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#000000',
		colorTextPositive: '#4BB34B',
		colorBackgroundPositive: '#4BB34B',
		colorIconPositive: '#4BB34B',
		colorStrokePositive: '#4BB34B',
		colorAvatarOverlay: 'rgba(129, 140, 153, 0.48)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.4)',
		colorTransparent: 'transparent',
		colorSkeletonFromAlpha: 'transparent',
		colorSkeletonToAlpha: 'transparent',
	},
};

export const lightTheme: ThemeDescription = {
	themeName: 'vkBase',
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
			letterSpacing: '-0.48px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle2: {
		regular: {
			fontSize: 20,
			lineHeight: 24,
			letterSpacing: '-0.4px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle3: {
		regular: {
			fontSize: 17,
			lineHeight: 24,
			letterSpacing: '-0.22px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontHeadline: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			letterSpacing: '-0.16px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
	},
	fontText: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			letterSpacing: '-0.1px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
		compact: {
			fontSize: 16,
			lineHeight: 20,
			letterSpacing: '-0.16px',
		},
	},
	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			letterSpacing: '-0.06px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnote: {
		regular: {
			fontSize: 13,
			lineHeight: 16,
			letterSpacing: '0px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontSize: 13,
			lineHeight: 16,
			letterSpacing: '0.3px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption1: {
		regular: {
			fontSize: 12,
			lineHeight: 14,
			letterSpacing: '0.06px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption1Caps: {
		regular: {
			fontSize: 12,
			lineHeight: 14,
			letterSpacing: '0.2px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
			textTransform: 'uppercase',
		},
	},
	fontCaption2: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			letterSpacing: '0.11px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption2Caps: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			letterSpacing: '0.3px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
			textTransform: 'uppercase',
		},
	},
	fontCaption3: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			letterSpacing: '0.18px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption3Caps: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			letterSpacing: '0.3px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
			textTransform: 'uppercase',
		},
	},

	// Размеры
	sizeSelectIconPadding: {
		regular: 6,
		compact: 7,
	},
	sizePopupBasePadding: {
		regular: 32,
		compact: 20,
	},
	sizePopupHeaderPadding: {
		regular: 24,
		compact: 16,
	},
	sizeLabelHorizontalMargin: {
		regular: 16,
	},
	sizeBorderRadius: {
		regular: 8,
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
		regular: 44,
		compact: 36,
	},
	sizeButtonLargeHeight: {
		regular: 44,
		compact: 36,
	},
	sizeButtonMediumHeight: {
		regular: 36,
		compact: 32,
	},
	sizeButtonSmallHeight: {
		regular: 30,
		compact: 26,
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
		regular: 12,
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
	elevation1:
		'0px 0px 2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.06)',
	elevation2:
		'0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 4px rgba(0, 0, 0, 0.08)',
	elevation3:
		'0px 0px 4px rgba(0, 0, 0, 0.08), 0px 8px 8px rgba(0, 0, 0, 0.16)',
	elevation4:
		'0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16)',
	animationDurationL: '0.4s',
	animationDurationM: '0.2s',
	animationDurationS: '0.1s',
	animationEasingDefault: 'cubic-bezier(0.3, 0.3, 0.5, 1)',
	opacityDisable: 0.4,
};

// todo: здесь должна быть также базовая тёмная тема
// darkColors и darkTheme
