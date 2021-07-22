import {ColorsDescription, ThemeDescription} from '@/interfaces/general';

const fontFamilyAccent = 'MailSans, Helvetica, Arial, sans-serif';
const fontFamilyBase = 'Helvetica, Arial, sans-serif';
const fontWeightAccent1 = 400;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 500;
const fontWeightBase1 = 400;
const fontWeightBase2 = 700;
const fontWeightBase3 = 700;

export const lightColors: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		colorBackgroundAccent: '#005FF9',
		colorIconAccent: '#005FF9',
		colorTextAccent: '#005FF9',
		colorStrokeAccent: '#005FF9',
		colorActionSheetText: '#005FF9',
		colorBackgroundContent: '#FFFFFF',
		colorBackgroundSecondary: '#F0F1F3',
		colorBackgroundTertiary: '#F9F9FA',
		colorBackground: '#FFFFFF',
		colorCounterAccentBackground: '#005FF9',
		colorCounterAccentText: '#FFFFFF',
		colorCounterProminentBackground: '#ED0A34',
		colorCounterProminentText: '#FFFFFF',
		colorCounterMutedBackground: '#C4C6CC',
		colorCounterMutedText: '#FFFFFF',
		colorBackgroundWarning: '#FFFCE0',
		colorBackgroundNegative: '#ED0A34',
		colorTextNegative: '#ED0A34',
		colorIconNegative: '#ED0A34',
		colorStrokeNegative: '#ED0A34',
		colorHeaderBackground: '#FFFFFF',
		colorPanelHeaderIcon: '#005FF9',
		colorIconPrimary: '#2C2D2E',
		colorIconMedium: '#919399',
		colorIconMediumAlpha: 'rgba(39, 43, 55, 0.5)',
		colorIconSecondary: '#A5A7AD',
		colorIconSecondaryAlpha: 'rgba(39, 43, 55, 0.3)',
		colorIconTertiary: '#CFD1D6',
		colorIconTertiaryAlpha: 'rgba(39, 43, 55, 0.2)',
		colorImageBorder: 'rgba(0, 16, 61, 0.08)',
		colorWriteBarInputBackground: '#F0F1F3',
		colorWriteBarInputBorder: 'rgba(0, 16, 61, 0.8)',
		colorTextLinkAlternate: '#005BD1',
		colorTrackBackground: '#DADCE0',
		colorTrackBuffer: '#83AAEA',
		colorBackgroundModal: '#FFFFFF',
		colorImagePlaceholder: 'rgba(0, 16, 61, 0.8)',
		colorImagePlaceholderOpaque: '#E6E7EB',
		colorSearchFieldBackground: '#E6E7EB',
		colorFieldBorder: 'rgba(0, 16, 61, 0.12)',
		colorCheckboxBorder: 'rgba(0, 16, 61, 0.12)',
		colorSeparatorPrimaryAlpha: 'rgba(0, 16, 61, 0.12)',
		colorSeparatorSecondary: '#E6E7EB',
		colorSeparatorPrimary: '#DADCE0',
		colorTextLink: '#005BD1',
		colorTextMuted: '#2C2D2E',
		colorTextPrimary: '#2C2D2E',
		colorTextSecondary: '#87898F',
		colorTextSubhead: '#797A80',
		colorTextTertiary: '#AAADB3',
		colorWriteBarIcon: '#005FF9',
		colorAccentBlue: '#005FF9',
		colorAccentGray: '#A5A7AD',
		colorAccentRed: '#ED0A34',
		colorAccentGreen: '#0DC268',
		colorAccentOrange: '#FF9E00',
		colorAccentPurple: '#4F6DDC',
		colorAccentViolet: '#C15DF3',
		colorSkeletonFrom: '#F3F3F5',
		colorSkeletonTo: '#E0E1E6',
		colorAccentSecondary: '#FF9E00',
		colorTextLinkVisited: '#528FDF',
		colorTextContrast: '#FFFFFF',
		colorIconContrast: '#FFFFFF',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#0DC268',
		colorBackgroundPositive: '#0DC268',
		colorIconPositive: '#0DC268',
		colorStrokePositive: '#0DC268',
		colorAvatarOverlay: 'rgba(145, 147, 153, 0.48)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
		colorTransparent: 'transparent',
	},
};

export const darkColors: ColorsDescription = {
	colorsScheme: 'dark',
	colors: {
		colorBackgroundAccent: '#2775FC',
		colorIconAccent: '#3C82FD',
		colorTextAccent: '#3C82FD',
		colorStrokeAccent: '#3C82FD',
		colorActionSheetText: '#3C82FD',
		colorBackgroundContent: '#232324',
		colorBackgroundSecondary: '#2A2A2B',
		colorBackgroundTertiary: '#252525',
		colorBackground: '#151515',
		colorCounterAccentBackground: '#2775FC',
		colorCounterAccentText: '#151515',
		colorCounterProminentBackground: '#ED0A34',
		colorCounterProminentText: '#151515',
		colorCounterMutedBackground: '#8D8E94',
		colorCounterMutedText: '#151515',
		colorBackgroundWarning: 'rgba(255, 212, 100, 0.16)',
		colorBackgroundNegative: '#ED0A34',
		colorTextNegative: '#ED0A34',
		colorIconNegative: '#ED0A34',
		colorStrokeNegative: '#ED0A34',
		colorHeaderBackground: '#151515',
		colorPanelHeaderIcon: '#3C82FD',
		colorIconPrimary: '#D9DADD',
		colorIconMedium: '#B0B1B6',
		colorIconMediumAlpha: 'rgba(245, 246, 255, 0.7)',
		colorIconSecondary: '#9C9DA2',
		colorIconSecondaryAlpha: 'rgba(245, 246, 255, 0.6)',
		colorIconTertiary: '#83848A',
		colorIconTertiaryAlpha: 'rgba(245, 246, 255, 0.5)',
		colorImageBorder: 'rgba(255, 255, 255, 0.08)',
		colorWriteBarInputBackground: '#2A2A2B',
		colorWriteBarInputBorder: 'rgba(255, 255, 255, 0.8)',
		colorTextLinkAlternate: '#0667FF',
		colorTrackBackground: '#434445',
		colorTrackBuffer: '#83AAEA',
		colorBackgroundModal: '#151515',
		colorImagePlaceholder: 'rgba(255, 255, 255, 0.8)',
		colorImagePlaceholderOpaque: '#393A3B',
		colorSearchFieldBackground: '#393A3B',
		colorFieldBorder: 'rgba(255, 255, 255, 0.16)',
		colorCheckboxBorder: 'rgba(255, 255, 255, 0.16)',
		colorSeparatorPrimaryAlpha: 'rgba(255, 255, 255, 0.16)',
		colorSeparatorSecondary: '#393A3B',
		colorSeparatorPrimary: '#434445',
		colorTextLink: '#0667FF',
		colorTextMuted: '#D9DADD',
		colorTextPrimary: '#D9DADD',
		colorTextSecondary: '#9C9DA2',
		colorTextSubhead: '#BFC1C5',
		colorTextTertiary: '#88898F',
		colorWriteBarIcon: '#3C82FD',
		colorAccentBlue: '#2775FC',
		colorAccentGray: '#9C9DA2',
		colorAccentRed: '#ED0A34',
		colorAccentGreen: '#0DC268',
		colorAccentOrange: '#FF9E00',
		colorAccentPurple: '#4F6DDC',
		colorAccentViolet: '#C15DF3',
		colorSkeletonFrom: '#2A2A2B',
		colorSkeletonTo: '#3E3F40',
		colorAccentSecondary: '#FF9E00',
		colorTextLinkVisited: '#528FDF',
		colorTextContrast: '#FFFFFF',
		colorIconContrast: '#FFFFFF',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#0DC268',
		colorBackgroundPositive: '#0DC268',
		colorIconPositive: '#0DC268',
		colorStrokePositive: '#0DC268',
		colorAvatarOverlay: 'rgba(176, 178, 182, 0.48)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
		colorTransparent: 'transparent',
	},
};

export const lightTheme: ThemeDescription = {
	themeName: 'paradigmBase',
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
		compact: {
			fontSize: 16,
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

export const darkTheme: ThemeDescription = {
	...lightTheme,
	themeName: 'paradigmBaseDark',
	...darkColors,
};
