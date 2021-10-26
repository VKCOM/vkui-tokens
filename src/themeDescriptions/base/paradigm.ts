import {overlayColors} from '@/build/themeProcessors/expandColors/overlayColors';
import {ColorsDescription, ThemeDescription} from '@/interfaces/general';
import {Elevation} from '@/interfaces/general/elevation';
import {ParadigmThemeDescription} from '@/interfaces/namespaces/paradigm';
import {helpers} from '@/themeDescriptions/common';

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
		colorBackgroundAccentThemed: '#005FF9',
		colorBackgroundAccentAlternative: '#FF9E00',
		colorIconAccent: '#005FF9',
		colorTextAccent: '#005FF9',
		colorTextAccentThemed: '#005FF9',
		colorStrokeAccent: '#005FF9',
		colorStrokeAccentThemed: '#005FF9',
		colorStrokeContrast: '#FFFFFF',
		colorActionSheetText: '#005FF9',
		colorBackgroundContent: '#FFFFFF',
		colorBackgroundSecondary: '#F0F1F3',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(0, 16, 61, 0.06)',
			hover: 'rgba(0, 16, 61, 0.1)',
			active: 'rgba(0, 16, 61, 0.14)',
		},
		colorBackgroundTertiary: '#F9F9FA',
		colorBackground: '#FFFFFF',
		colorBackgroundContrast: '#FFFFFF',
		colorCounterAccentBackground: '#005FF9',
		colorCounterAccentText: '#FFFFFF',
		colorCounterProminentBackground: '#ED0A34',
		colorCounterProminentText: '#FFFFFF',
		colorCounterMutedBackground: '#C4C6CC',
		colorCounterMutedText: '#FFFFFF',
		colorBackgroundWarning: '#FFF1AD',
		colorBackgroundNegative: '#ED0A34',
		colorTextNegative: '#ED0A34',
		colorIconNegative: '#ED0A34',
		colorStrokeNegative: '#ED0A34',
		colorHeaderBackground: '#FFFFFF',
		colorPanelHeaderIcon: '#005FF9',
		colorIconPrimary: '#2C2D2E',
		colorIconPrimaryInvariably: '#2C2D2E',
		colorIconMedium: '#919399',
		colorIconMediumAlpha: 'rgba(39, 43, 55, 0.5)',
		colorIconSecondary: '#A5A7AD',
		colorIconSecondaryAlpha: 'rgba(39, 43, 55, 0.3)',
		colorIconTertiary: '#CFD1D6',
		colorIconTertiaryAlpha: 'rgba(39, 43, 55, 0.2)',
		colorImageBorderAlpha: 'rgba(0, 16, 61, 0.08)',
		colorWriteBarInputBackground: '#F0F1F3',
		colorWriteBarInputBorderAlpha: 'rgba(0, 16, 61, 0.8)',
		colorTrackBackground: '#DADCE0',
		colorTrackBuffer: '#83AAEA',
		colorBackgroundModal: '#FFFFFF',
		colorImagePlaceholder: '#E6E7EB',
		colorImagePlaceholderAlpha: 'rgba(0, 16, 61, 0.8)',
		colorSearchFieldBackground: '#E6E7EB',
		colorFieldBorderAlpha: 'rgba(0, 16, 61, 0.12)',
		colorSeparatorPrimaryAlpha: 'rgba(0, 16, 61, 0.12)',
		colorSeparatorSecondary: '#E6E7EB',
		colorSeparatorPrimary: '#DADCE0',
		colorTextLink: '#005BD1',
		colorTextLinkThemed: '#005BD1',
		colorTextMuted: '#2C2D2E',
		colorTextPrimary: '#2C2D2E',
		colorTextPrimaryInvariably: '#2C2D2E',
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
		colorTextContrastThemed: '#FFFFFF',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#FFFFFF',
		colorTextPositive: '#0DC268',
		colorBackgroundPositive: '#0DC268',
		colorIconPositive: '#0DC268',
		colorStrokePositive: '#0DC268',
		colorAvatarOverlay: 'rgba(145, 147, 153, 0.48)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
		colorTransparent: 'transparent',
		colorSkeletonFromAlpha: 'transparent',
		colorSkeletonToAlpha: 'transparent',
	},
};

export const darkColors: ColorsDescription = {
	colorsScheme: 'dark',
	colors: {
		colorBackgroundAccent: '#2775FC',
		colorBackgroundAccentThemed: '#2775FC',
		colorBackgroundAccentAlternative: '#FF9E00',
		colorIconAccent: '#3C82FD',
		colorTextAccent: '#3C82FD',
		colorTextAccentThemed: '#3C82FD',
		colorStrokeAccent: '#3C82FD',
		colorStrokeAccentThemed: '#3C82FD',
		colorStrokeContrast: '#FFFFFF',
		colorActionSheetText: '#3C82FD',
		colorBackgroundContent: '#232324',
		colorBackgroundSecondary: '#2A2A2B',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},
		colorBackgroundTertiary: '#252525',
		colorBackground: '#19191A',
		colorBackgroundContrast: '#FFFFFF',
		colorCounterAccentBackground: '#2775FC',
		colorCounterAccentText: '#151515',
		colorCounterProminentBackground: '#ED0A34',
		colorCounterProminentText: '#151515',
		colorCounterMutedBackground: '#8D8E94',
		colorCounterMutedText: '#151515',
		colorBackgroundWarning: '#6C4E00',
		colorBackgroundNegative: '#ED0A34',
		colorTextNegative: '#ED0A34',
		colorIconNegative: '#ED0A34',
		colorStrokeNegative: '#ED0A34',
		colorHeaderBackground: '#232324',
		colorPanelHeaderIcon: '#3C82FD',
		colorIconPrimary: '#D9DADD',
		colorIconPrimaryInvariably: '#2C2D2E',
		colorIconMedium: '#B0B1B6',
		colorIconMediumAlpha: 'rgba(245, 246, 255, 0.7)',
		colorIconSecondary: '#9C9DA2',
		colorIconSecondaryAlpha: 'rgba(245, 246, 255, 0.6)',
		colorIconTertiary: '#83848A',
		colorIconTertiaryAlpha: 'rgba(245, 246, 255, 0.5)',
		colorImageBorderAlpha: 'rgba(255, 255, 255, 0.08)',
		colorWriteBarInputBackground: '#2A2A2B',
		colorWriteBarInputBorderAlpha: 'rgba(255, 255, 255, 0.8)',
		colorTrackBackground: '#434445',
		colorTrackBuffer: '#83AAEA',
		colorBackgroundModal: '#303030',
		colorImagePlaceholderAlpha: 'rgba(255, 255, 255, 0.8)',
		colorImagePlaceholder: '#393A3B',
		colorSearchFieldBackground: '#393A3B',
		colorFieldBorderAlpha: 'rgba(255, 255, 255, 0.16)',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.4)',
		colorSeparatorSecondary: '#181818',
		colorSeparatorPrimary: '#151516',
		colorTextLink: '#589BFF',
		colorTextLinkThemed: '#FFFFFF',
		colorTextMuted: '#E7E8EA',
		colorTextPrimary: '#E7E8EA',
		colorTextPrimaryInvariably: '#2C2D2E',
		colorTextSecondary: '#8C8E94',
		colorTextSubhead: '#BFC1C5',
		colorTextTertiary: '#74767A',
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
		colorTextContrastThemed: '#2C2D2E',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#2C2D2E',
		colorTextPositive: '#0DC268',
		colorBackgroundPositive: '#0DC268',
		colorIconPositive: '#0DC268',
		colorStrokePositive: '#0DC268',
		colorAvatarOverlay: 'rgba(176, 178, 182, 0.48)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
		colorTransparent: 'transparent',
		colorSkeletonFromAlpha: 'transparent',
		colorSkeletonToAlpha: 'transparent',
	},
};

export const lightThemeBase: ThemeDescription = {
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
	// todo поменять местами fontSize, когда откажемся от auto
	// todo fontSize в мобильном виде должен быть 16
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

const {x05, x1, x2, x3, x4, x5, x6, x8, x10} = helpers;

export const lightTheme: ParadigmThemeDescription = {
	...lightThemeBase,
	...helpers,
	colors: {
		...lightThemeBase.colors,
		colorRating: '#ffd400',
		colorButtonContrastAlpha: {
			normal: 'rgba(255, 255, 255, 1)',
			hover: 'rgba(255, 255, 255, 0.8)',
			active: 'rgba(255, 255, 255, 0.6)',
		},
		colorButtonContrast: overlayColors<ParadigmThemeDescription['colors']>(
			(theme) => theme.colors.colorBackgroundContent,
			(theme) => theme.colors.colorButtonContrastAlpha,
		),
		colorThumbErrorBackgroundAlpha: 'rgba(237, 10, 52, 0.12)',
	},

	breakpoints: {
		touch: {
			breakpoint: 0,
			adaptiveValue: 'regular',
		},
		desktopS: {
			breakpoint: 768,
			adaptiveValue: 'compact',
		},
	},

	// Типографика
	// todo удалить и заменить на контекстные токены в проектах
	fontH0: {
		regular: {
			fontSize: 28,
			lineHeight: 32,
			fontFamily: lightThemeBase.fontFamilyAccent,
			fontWeight: lightThemeBase.fontWeightAccent3,
		},
		compact: {
			fontSize: 44,
			lineHeight: 52,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH1: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontFamily: lightThemeBase.fontFamilyAccent,
			fontWeight: lightThemeBase.fontWeightAccent3,
		},
		compact: {
			fontSize: 32,
			lineHeight: 36,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH2: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			fontFamily: lightThemeBase.fontFamilyAccent,
			fontWeight: lightThemeBase.fontWeightAccent3,
		},
		compact: {
			fontSize: 28,
			lineHeight: 32,
		},
	},

	// Отступы
	sizeArrowHeight: {
		regular: 8,
	},
	sizeArrowWidth: {
		regular: 12,
	},
	sizeBasePadding: {
		regular: x4,
		compact: x5,
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
		regular: 130,
		compact: 104,
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
		regular: 328,
		compact: 380,
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
		regular: x3,
		compact: x2,
	},
	sizeButtonIconPadding: {
		regular: x4,
		compact: x5,
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
	},
	sizeFieldVerticalMargin: {
		regular: x6,
	},
	sizeFieldSetMargin: {
		regular: x8,
	},
	sizeIconMargin: {
		regular: x3,
		compact: x2,
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
		regular: x2,
		compact: x6,
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

export const darkThemeElevation: Elevation = {
	elevation1: '0 2px 0 0 rgba(0, 0, 0, 0.04)',
	elevation2: '0 4px 48px 0 rgba(0, 0, 0, 0.72)',
	elevation3: '0 4px 32px 0 rgba(0, 0, 0, 0.48)',
	elevation4: '0 4px 32px 0 rgba(0, 0, 0, 0.48)',
};

export const darkThemeBase: ThemeDescription = {
	...lightThemeBase,
	themeName: 'paradigmBaseDark',
	...darkColors,
	...darkThemeElevation,
};

export const darkTheme: ParadigmThemeDescription = {
	...lightTheme,
	...darkThemeBase,
	...darkThemeElevation,
	colorsScheme: 'dark',
	colors: {
		...lightTheme.colors,
		...darkThemeBase.colors,
		colorButtonContrastAlpha: {
			normal: 'rgba(255, 255, 255, 0.12)',
			hover: 'rgba(255, 255, 255, 0.2)',
			active: 'rgba(255, 255, 255, 0.24)',
		},
		colorThumbErrorBackgroundAlpha: 'rgba(237, 10, 52, 0.12)',
	},
};
