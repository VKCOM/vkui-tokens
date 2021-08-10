import {ColorsDescription, ThemeDescription} from '@/interfaces/general';

const fontFamilyAccent =
	'"TT Commons", -apple-system, system-ui, Helvetica Neue, Roboto, sans-serif';
const fontFamilyBase =
	'-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontWeightAccent1 = 400;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 600;
const fontWeightBase1 = 400;
const fontWeightBase2 = 700;
const fontWeightBase3 = 600;

export const lightColors: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		colorBackgroundAccent: '#4986CC',
		colorBackgroundAccentAlternative: '#FF9E00',
		colorIconAccent: '#3F8AE0',
		colorTextAccent: '#3F8AE0',
		colorStrokeAccent: '#3F8AE0',
		colorActionSheetText: '#3F8AE0',
		colorBackgroundContent: '#FFFFFF',
		colorBackgroundSecondary: '#F5F5F5',
		colorBackgroundTertiary: '#F9F9F9',
		colorBackground: '#EBEDF0',
		colorCounterAccentBackground: '#3F8AE0',
		colorCounterAccentText: '#FFFFFF',
		colorCounterProminentBackground: '#FF3347',
		colorCounterProminentText: '#FFFFFF',
		colorCounterMutedBackground: '#AEB7C2',
		colorCounterMutedText: '#FFFFFF',
		colorBackgroundWarning: '#FFF2D6',
		colorBackgroundNegative: '#E64646',
		colorTextNegative: '#E64646',
		colorIconNegative: '#E64646',
		colorStrokeNegative: '#E64646',
		colorHeaderBackground: '#FFFFFF',
		colorPanelHeaderIcon: '#3F8AE0',
		colorIconPrimary: '#2C2D2E',
		colorIconMedium: '#818C99',
		colorIconMediumAlpha: 'rgba(0, 0, 0, 0.48)',
		colorIconSecondary: '#99A2AD',
		colorIconSecondaryAlpha: 'rgba(0, 0, 0, 0.36)',
		colorIconTertiary: '#B8C1CC',
		colorIconTertiaryAlpha: 'rgba(0, 0, 0, 0.24)',
		colorImageBorder: 'rgba(0, 0, 0, 0.08)',
		colorWriteBarInputBackground: '#F2F3F5',
		colorWriteBarInputBorder: '#E1E3E6',
		colorTextLinkAlternate: '#4986CC',
		colorTrackBackground: '#E1E3E6',
		colorTrackBuffer: '#A0BFE4',
		colorBackgroundModal: '#FFFFFF',
		colorImagePlaceholder: 'rgba(0, 28, 61, 0.08)',
		colorImagePlaceholderOpaque: '#F2F3F5',
		colorSearchFieldBackground: '#EBEDF0',
		colorFieldBorder: 'rgba(0, 0, 0, 0.12)',
		colorCheckboxBorder: '#AEB7C2',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.12)',
		colorSeparatorSecondary: '#E1E3E6',
		colorSeparatorPrimary: '#D7D8D9',
		colorTextLink: '#4986CC',
		colorTextMuted: '#2C2D2E',
		colorTextPrimary: '#000000',
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
		colorIconContrast: '#FFFFFF',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#4BB34B',
		colorBackgroundPositive: '#4BB34B',
		colorIconPositive: '#4BB34B',
		colorStrokePositive: '#4BB34B',
		colorAvatarOverlay: 'rgba(129, 140, 153, 0.48)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.4)',
		colorTransparent: 'transparent',
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
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle2: {
		regular: {
			fontSize: 20,
			lineHeight: 24,
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
			fontSize: 16,
			lineHeight: 20,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
			letterSpacing: '0.1px',
		},
	},
	fontText: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
		compact: {
			fontSize: 16,
			lineHeight: 20,
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
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontSize: 13,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.3px',
		},
	},
	fontCaption1: {
		regular: {
			fontSize: 12,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption1Caps: {
		regular: {
			fontSize: 12,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.2px',
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
			letterSpacing: '0.3px',
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
			letterSpacing: '0.3px',
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
