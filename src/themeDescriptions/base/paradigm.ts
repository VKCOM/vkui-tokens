import type { Property } from 'csstype';

import { getGradientPointsFromColor } from '@/build/helpers/getGradientPointsFromColor';
import { alias, staticRef } from '@/build/helpers/tokenHelpers';
import { overlayColors } from '@/build/themeProcessors/expandColors/overlayColors';
import { ColorsDescription, ThemeDescription } from '@/interfaces/general';
import { Elevation } from '@/interfaces/general/elevation';
import { ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';
import { helpers } from '@/themeDescriptions/common';

const fontFamilyFallbacks = 'apple-system, system-ui, "Helvetica Neue", Arial, sans-serif';
const fontFamilyAccent = `VKSansDisplay, MailSans, ${fontFamilyFallbacks}`;
const fontFamilyBase = fontFamilyFallbacks;
const fontWeightAccent1 = 500;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 400;
const fontWeightBase1 = 700;
const fontWeightBase2 = 700;
const fontWeightBase3 = 400;

const colorBackgroundTertiaryLight: Property.Color = '#F6F7F8';
const colorBackgroundTertiaryDark: Property.Color = '#252525';
const colorBackgroundContentDark: Property.Color = '#232324';

export const lightColors: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		// Background
		colorBackgroundAccent: '#0077FF',
		colorBackgroundAccentThemed: '#0077FF',
		colorBackgroundAccentThemedAlpha: 'rgba(0, 119, 255, 0.2)',
		colorBackgroundAccentAlternative: '#FF9E00',
		colorBackgroundContent: '#FFFFFF',
		colorBackgroundContentAlpha: 'rgba(255, 255, 255, 0.8)',
		colorBackgroundContentInverse: colorBackgroundContentDark,
		colorBackgroundSecondary: '#F0F1F3',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(0, 16, 61, 0.06)',
			hover: 'rgba(0, 16, 61, 0.1)',
			active: 'rgba(0, 16, 61, 0.14)',
		},
		colorBackground: '#FFFFFF',
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.2)',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.28)',
		},
		colorBackgroundWarning: '#FFF1AD',
		colorBackgroundNegative: '#ED330A',
		colorBackgroundTertiary: colorBackgroundTertiaryLight,
		colorBackgroundTertiaryAlpha: {
			normal: 'rgba(0, 0, 0, 0.04)',
			hover: 'rgba(0, 0, 0, 0.08)',
			active: 'rgba(0, 0, 0, 0.12)',
		},
		colorBackgroundModal: '#FFFFFF',
		colorBackgroundPositive: '#0DC268',
		colorBackgroundNegativeTint: '#FEEFEB',
		colorBackgroundPositiveTint: '#ECFAF3',
		colorFieldBackground: '#ffffff',
		colorBackgroundModalInverse: '#303030',
		colorBackgroundContrastInverse: '#303030',
		colorBackgroundContrastThemed: '#FFFFFF',
		colorBackgroundAccentTint: '#5a9eff',
		colorBackgroundInfoTint: '#f0f4ff',

		// Text
		colorTextAccent: '#0070f0',
		colorTextAccentThemed: '#0070f0',
		colorTextNegative: '#ED330a',
		colorTextLink: '#0070f0',
		colorTextLinkTint: '#71AAEB',
		colorTextLinkThemed: '#0070f0',
		colorTextMuted: '#2C2D2E',
		colorTextPrimary: '#2C2D2E',
		colorTextPrimaryAlpha: 'rgba(37, 41, 46, 0.84)',
		colorTextPrimaryInvariably: '#2C2D2E',
		colorTextSecondary: '#87898F',
		colorTextSecondaryAlpha: 'rgba(37, 41, 46, 0.55)',
		colorTextSubhead: '#797A80',
		colorTextTertiary: '#AAADB3',
		colorTextLinkVisited: '#528FDF',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#FFFFFF',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#0DC268',

		// Icons
		colorIconAccent: '#0077ff',
		colorIconAccentThemed: '#0077ff',
		colorIconPrimary: '#2C2D2E',
		colorIconPrimaryInvariably: '#2C2D2E',
		colorIconMedium: '#919399',
		colorIconMediumAlpha: 'rgba(39, 43, 55, 0.5)',
		colorIconSecondary: '#A5A7AD',
		colorIconSecondaryAlpha: 'rgba(39, 43, 55, 0.3)',
		colorIconTertiary: '#CFD1D6',
		colorIconTertiaryAlpha: 'rgba(39, 43, 55, 0.2)',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#FFFFFF',
		colorIconPositive: '#0DC268',
		colorIconWarning: '#FF9E00',
		colorIconNegative: '#ED330a',
		colorIconContrastSecondary: '#F2F3F5',

		// Stroke
		colorStrokeAccent: '#0077ff',
		colorStrokeAccentThemed: '#0077ff',
		colorStrokeContrast: '#FFFFFF',
		colorStrokeNegative: '#ED330a',
		colorStrokePrimary: '#2C2D2E',
		colorImageBorderAlpha: 'rgba(0, 16, 61, 0.08)',
		colorFieldBorderAlpha: 'rgba(0, 16, 61, 0.12)',
		colorSeparatorPrimaryAlpha: 'rgba(0, 16, 61, 0.12)',
		colorSeparatorSecondary: '#E6E7EB',
		colorSeparatorPrimary: '#DADCE0',
		colorStrokePositive: '#0DC268',
		colorSeparatorPrimary2x: '#CDD0D5',
		colorSeparatorPrimary3x: '#BFC3CA',

		// Palette
		colorAccentBlue: '#0077FF',
		colorAccentGray: '#A5A7AD',
		colorAccentRed: '#ED330A',
		colorAccentOrangeFire: '#F05C44',
		colorAccentOrange: '#FF9E00',
		colorAccentOrangePeach: '#F9B54F',
		colorAccentLime: '#B8FC75',
		colorAccentGreen: '#0DC268',
		colorAccentCyan: '#07E5F9',
		colorAccentAzure: '#0077FF',
		colorAccentPurple: '#8C64FF',
		colorAccentViolet: '#C15DF3',
		colorAccentRaspberryPink: '#E03FAB',
		colorAccentPink: '#FF3985',
		colorAccentSecondary: '#FF9E00',

		// Other
		colorActionSheetText: '#0077ff',
		colorHeaderBackground: '#FFFFFF',
		colorPanelHeaderIcon: '#0077ff',
		colorWriteBarInputBackground: '#F0F1F3',
		colorWriteBarInputBorder: '#E1E3E6',
		colorWriteBarInputBorderAlpha: 'rgba(0, 16, 61, 0.8)',
		colorTrackBackground: '#DADCE0',
		colorTrackBuffer: '#83AAEA',
		colorImagePlaceholder: '#E6E7EB',
		colorImagePlaceholderAlpha: 'rgba(0, 16, 61, 0.8)',
		colorSearchFieldBackground: '#E6E7EB',
		colorWriteBarIcon: '#0077ff',
		colorSkeletonFrom: '#F3F3F5',
		colorSkeletonTo: '#E0E1E6',
		colorAvatarOverlay: 'rgba(145, 147, 153, 0.48)',
		colorAvatarOverlayInverseAlpha: 'rgba(255, 255, 255, 0.85)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.4)',
		colorOverlaySecondary: 'rgba(44, 45, 46, 0.5)',
		colorSegmentedControl: '#FFFFFF',
		colorTabbarTextInactive: '#99A2AD',
		colorButtonText: '#0077ff',
		colorButtonIcon: '#0077ff',
		colorButtonStroke: '#0077ff',
		colorTransparent: 'transparent',
	},
};

export const darkColors: ColorsDescription = {
	colorsScheme: 'dark',
	colors: {
		// Background
		colorBackgroundAccent: '#0077FF',
		colorBackgroundAccentThemed: '#FFFFFF',
		colorBackgroundAccentThemedAlpha: 'rgba(255, 255, 255, 0.2)',
		colorBackgroundAccentAlternative: '#FF9E00',
		colorBackgroundContent: colorBackgroundContentDark,
		colorBackgroundContentAlpha: 'rgba(35, 35, 36, 0.8)',
		colorBackgroundContentInverse: '#FFFFFF',
		colorBackgroundSecondary: '#2A2A2B',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.12)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},
		colorBackgroundTertiary: colorBackgroundTertiaryDark,
		colorBackgroundTertiaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.02)',
			hover: 'rgba(255, 255, 255, 0.1)',
			active: 'rgba(255, 255, 255, 0.14)',
		},
		colorBackground: '#19191A',
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.2)',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.28)',
		},
		colorBackgroundWarning: '#6C4E00',
		colorBackgroundNegative: '#FF5C5C',
		colorBackgroundModal: '#303030',
		colorBackgroundPositive: '#0DC268',
		colorBackgroundNegativeTint: '#522e2e',
		colorBackgroundPositiveTint: '#182A22',
		colorFieldBackground: '#232324',
		colorBackgroundModalInverse: '#ffffff',
		colorBackgroundContrastInverse: '#303030',
		colorBackgroundContrastThemed: '#303030',
		colorBackgroundAccentTint: '#5a9eff',
		colorBackgroundInfoTint: '#19202f',

		// Text
		colorTextAccent: '#1A85FF',
		colorTextAccentThemed: '#FFFFFF',
		colorTextNegative: '#FF5C5C',
		colorTextLink: '#1A85FF',
		colorTextLinkTint: '#71AAEB',
		colorTextLinkThemed: '#FFFFFF',
		colorTextMuted: '#E7E8EA',
		colorTextPrimary: '#E7E8EA',
		colorTextPrimaryAlpha: 'rgba(249, 252, 255, 0.72)',
		colorTextPrimaryInvariably: '#2C2D2E',
		colorTextSecondary: '#8C8E94',
		colorTextSecondaryAlpha: 'rgba(247, 251, 255, 0.42)',
		colorTextSubhead: '#BFC1C5',
		colorTextTertiary: '#74767A',
		colorTextLinkVisited: '#528FDF',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#2C2D2E',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#0DC268',

		// Icons
		colorIconAccent: '#0077FF',
		colorIconAccentThemed: '#FFFFFF',
		colorIconPrimary: '#D9DADD',
		colorIconPrimaryInvariably: '#2C2D2E',
		colorIconMedium: '#B0B1B6',
		colorIconMediumAlpha: 'rgba(245, 246, 255, 0.7)',
		colorIconSecondary: '#9C9DA2',
		colorIconSecondaryAlpha: 'rgba(245, 246, 255, 0.6)',
		colorIconTertiary: '#83848A',
		colorIconTertiaryAlpha: 'rgba(245, 246, 255, 0.5)',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#2C2D2E',
		colorIconPositive: '#0DC268',
		colorIconWarning: '#FF9E00',
		colorIconNegative: '#FF5C5C',
		colorIconContrastSecondary: '#F2F3F5',

		// Stroke
		colorStrokeAccent: '#0077FF',
		colorStrokeAccentThemed: '#FFFFFF',
		colorStrokeContrast: '#FFFFFF',
		colorStrokeNegative: '#FF5C5C',
		colorStrokePrimary: '#D9DADD',
		colorImageBorderAlpha: 'rgba(255, 255, 255, 0.08)',
		colorFieldBorderAlpha: 'rgba(255, 255, 255, 0.16)',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.4)',
		colorSeparatorSecondary: '#181818',
		colorSeparatorPrimary: '#151516',
		colorSeparatorPrimary2x: '#202022',
		colorSeparatorPrimary3x: '#2d2d2f',
		colorStrokePositive: '#0DC268',

		// Palette
		colorAccentBlue: '#0077ff',
		colorAccentGray: '#9C9DA2',
		colorAccentRed: '#ED330A',
		colorAccentOrangeFire: '#F05C44',
		colorAccentOrange: '#FF9E00',
		colorAccentOrangePeach: '#FFC062',
		colorAccentLime: '#B8FC75',
		colorAccentGreen: '#0DC268',
		colorAccentCyan: '#07E5F9',
		colorAccentAzure: '#0077FF',
		colorAccentPurple: '#8C64FF',
		colorAccentViolet: '#C15DF3',
		colorAccentRaspberryPink: '#F060C0',
		colorAccentPink: '#FF3985',
		colorAccentSecondary: '#FF9E00',

		// Other
		colorActionSheetText: '#0077FF',
		colorHeaderBackground: '#232324',
		colorPanelHeaderIcon: '#0077FF',
		colorWriteBarInputBackground: '#2A2A2B',
		colorWriteBarInputBorder: '#2C2D2E',
		colorWriteBarInputBorderAlpha: 'rgba(255, 255, 255, 0.8)',
		colorTrackBackground: '#434445',
		colorTrackBuffer: '#83AAEA',
		colorImagePlaceholderAlpha: 'rgba(255, 255, 255, 0.8)',
		colorImagePlaceholder: '#393A3B',
		colorSearchFieldBackground: '#393A3B',
		colorWriteBarIcon: '#0077FF',
		colorSkeletonFrom: '#2A2A2B',
		colorSkeletonTo: '#3E3F40',
		colorAvatarOverlay: 'rgba(176, 178, 182, 0.48)',
		colorAvatarOverlayInverseAlpha: 'rgba(255, 255, 255, 0.85)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.72)',
		colorOverlaySecondary: 'rgba(55, 56, 57, 0.5)',
		colorSegmentedControl: '#626364',
		colorTabbarTextInactive: '#76787A',
		colorButtonText: '#FFFFFF',
		colorButtonIcon: '#FFFFFF',
		colorButtonStroke: '#FFFFFF',
		colorTransparent: 'transparent',
	},
};

export const lightThemeBase: ThemeDescription = {
	themeName: 'paradigmBase',
	...lightColors,

	// Типографика
	fontFamilyFallbacks,
	fontFamilyAccent,
	fontFamilyBase,
	fontWeightAccent1,
	fontWeightAccent2,
	fontWeightAccent3,
	fontWeightBase1,
	fontWeightBase2,
	fontWeightBase3,
	fontDisplayTitle1: {
		regular: {
			fontSize: 23,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontDisplayTitle2: {
		regular: {
			fontSize: 21,
			lineHeight: 26,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
		compact: {
			fontSize: 22,
			lineHeight: 22,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontDisplayTitle3: {
		regular: {
			fontSize: 19,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontDisplayTitle4: {
		regular: {
			fontSize: 17,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontTitle1: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontTitle2: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontTitle3: {
		regular: {
			fontSize: 17,
			lineHeight: 22,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontHeadline: alias('fontHeadline1'),
	fontHeadline1: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
		compact: {
			fontSize: 15,
			lineHeight: 20,
		},
	},
	fontHeadline2: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
		compact: {
			fontSize: 14,
			lineHeight: 20,
		},
	},
	// todo поменять местами fontSize, когда откажемся от auto
	// todo fontSize в мобильном виде должен быть 16
	fontText: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
		compact: {
			fontSize: 15,
			lineHeight: 20,
		},
	},
	fontParagraph: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			fontSize: 13,
			lineHeight: 18,
		},
	},
	fontFootnote: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
			textTransform: 'uppercase',
			letterSpacing: '0.3px',
		},
	},
	fontCaption1: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontCaption1Caps: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
			textTransform: 'uppercase',
			letterSpacing: '0.26px',
		},
	},
	fontCaption2: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontCaption2Caps: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
			textTransform: 'uppercase',
			letterSpacing: '0.22px',
		},
	},
	fontCaption3: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontCaption3Caps: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
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
		regular: 8,
	},
	sizeBorderRadiusRounded: {
		regular: 48,
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
	sizeCellHeight: {
		regular: 48,
		compact: 44,
	},
	sizeFieldHeight: {
		regular: 44,
		compact: 36,
	},
	sizeSearchHeight: {
		regular: 36,
		compact: 32,
	},
	sizeButtonExtraSmallHeight: {
		regular: 24,
		compact: 22,
	},
	sizeButtonSmallHeight: {
		regular: 30,
		compact: 28,
	},
	sizeButtonMediumHeight: {
		regular: 36,
		compact: 32,
	},
	sizeButtonLargeHeight: {
		regular: 44,
		compact: 36,
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
		regular: 430,
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

	// Токены компонента Cardscroll
	sizeCardgridPadding: {
		regular: 12,
	},
	sizeCardBorderRadius: {
		regular: 16,
	},
	sizeCardgridPaddingVertical: {
		regular: 8,
	},
	sizeBasePaddingHorizontal: {
		regular: 16,
	},
	sizeBasePaddingVertical: {
		regular: 12,
	},

	// Токены для ButtonGroup
	sizeButtonGroupGapSpace: {
		regular: 1,
	},
	sizeButtonGroupGapSmall: {
		regular: 8,
	},
	sizeButtonGroupGapMedium: {
		regular: 12,
	},

	// Токены иерархии
	sizeOptionHierarchy: {
		regular: 32,
	},

	// Компонент Switch
	sizeSwitchHeight: {
		regular: 14,
		compact: 12,
	},
	sizeSwitchWidth: {
		regular: 34,
		compact: 32,
	},
	sizeSwitchPin: {
		regular: 20,
		compact: 18,
	},

	// Компонент PanelHeader
	sizePanelHeaderHeight: {
		compact: 48,
		regular: 56,
	},

	// Токены отступов для кнопок
	sizeButtonBaseSmallPaddingHorizontal: {
		regular: 16,
	},
	sizeButtonBaseMediumPaddingHorizontal: {
		regular: 16,
	},
	sizeButtonBaseLargePaddingHorizontal: {
		regular: 20,
	},
	sizeButtonBaseSmallPaddingHorizontalIcon: {
		regular: 12,
	},
	sizeButtonBaseMediumPaddingHorizontalIcon: {
		regular: 12,
	},
	sizeButtonBaseLargePaddingHorizontalIcon: {
		regular: 16,
	},
	sizeButtonTertiarySmallPaddingHorizontal: {
		regular: 12,
	},
	sizeButtonTertiaryMediumPaddingHorizontal: {
		regular: 12,
	},
	sizeButtonTertiaryLargePaddingHorizontal: {
		regular: 16,
	},
	sizeButtonTertiarySmallPaddingHorizontalIcon: {
		regular: 8,
	},
	sizeButtonTertiaryMediumPaddingHorizontalIcon: {
		regular: 8,
	},
	sizeButtonTertiaryLargePaddingHorizontalIcon: {
		regular: 12,
	},
	sizeButtonMinimumWidth: {
		regular: 80,
	},

	// FormItem
	sizeFormItemPaddingVertical: {
		regular: 12,
	},

	// Отступ для компонента SplitCol
	sizeSplitColPaddingHorizontal: {
		regular: 16,
	},

	// Для регулирования расстояния между элементами в SubnavigationBar
	sizeSubnavigationBarGap: {
		regular: 8,
	},
	// Внешние отступы(верхний и нижний) для SubnavigationBar
	sizeSubnavigationBarPaddingVertical: {
		regular: 12,
	},

	// Размер границ
	sizeBorder1x: {
		regular: 1,
	},
	sizeBorder2x: {
		regular: 0.5,
	},
	sizeBorder3x: {
		regular: 0.33,
	},

	// Стандартные токены для отступов
	spacingSize3Xs: 2,
	spacingSize2Xs: 2,
	spacingSizeXs: 4,
	spacingSizeS: 6,
	spacingSizeM: 8,
	spacingSizeL: 10,
	spacingSizeXl: 12,
	spacingSize2Xl: 16,
	spacingSize3Xl: 20,
	spacingSize4Xl: 24,

	// Прочие отступы
	elevation1: '0 2px 6px 0 rgba(0, 16, 61, 0.08), 0 1px 2px 0 rgba(0, 16, 61, 0.08)',
	elevation1InvertY: '0 -2px 6px 0 rgba(0, 16, 61, 0.08), 0 -1px 2px 0 rgba(0, 16, 61, 0.08)',
	elevation2:
		'0 0 2px 0 rgba(0, 16, 61, 0.06), 0 0 6px 0 rgba(0, 16, 61, 0.06), 0 6px 12px 0 rgba(0, 16, 61, 0.06)',
	elevation3:
		'0 0 6px 0 rgba(0, 16, 61, 0.06), 0 6px 12px 0 rgba(0, 16, 61, 0.06), 0 6px 20px 0 rgba(0, 16, 61, 0.06), 0 10px 36px 0 rgba(0, 16, 61, 0.08)',
	elevation4:
		'0 2px 6px 0 rgba(0, 16, 61, 0.06), 0 16px 48px 0 rgba(0, 16, 61, 0.08), 0 24px 68px 0 rgba(0, 16, 61, 0.16)',
	gradientBlack: getGradientPointsFromColor('#000000', 0.4),
	gradientWhite: getGradientPointsFromColor('#FFFFFF'),
	gradientTint: getGradientPointsFromColor(colorBackgroundTertiaryLight),
	gradient: getGradientPointsFromColor('#FFFFFF'),
	animationDurationL: '0.4s',
	animationDurationM: '0.2s',
	animationDurationS: '0.1s',
	animationEasingDefault: 'cubic-bezier(0.3, 0.3, 0.5, 1)',
	animationEasingPlatform: 'cubic-bezier(0.3, 0.3, 0.5, 1)',
	opacityDisable: 0.48,
	opacityDisableAccessibility: 0.64,
	opacityActive: 0.72,
	blurM: 16,
	zIndexModal: 99,
	zIndexPopout: 100,
};

const { x05, x1, x2, x3, x4, x5, x6, x8, x10 } = helpers;

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

		// Тонированные цвета для проектов
		colorBackgroundAccentTintThemedAlpha: 'rgba(0, 119, 255, 0.06)',
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.06)',
		colorBackgroundAccentTintThemed: '#f0f7ff',

		colorBackgroundWarningTintThemedAlpha: 'rgba(255, 241, 173, 0.48)',
		colorBackgroundWarningTintAlpha: 'rgba(255, 241, 173, 0.48)',
		colorBackgroundWarningTintThemed: '#fffce0',
		colorBackgroundWarningTint: '#fffce0',

		colorBackgroundNegativeTintThemedAlpha: 'rgba(237, 51, 10, 0.08)',
		colorBackgroundNegativeTintAlpha: 'rgba(237, 51, 10, 0.08)',
		colorBackgroundNegativeTintThemed: '#feefeb',

		colorBackgroundPositiveTintThemedAlpha: 'rgba(13, 194, 104, 0.08)',
		colorBackgroundPositiveTintAlpha: 'rgba(13, 194, 104, 0.08)',
		colorBackgroundPositiveTintThemed: '#ECFAF3',

		colorTooltipBackgroundBlueTint: '#DDE9FF',
		colorTooltipBackgroundGreenTint: '#CEEEE6',
		colorTooltipBackgroundOrangeTint: '#F9D3BD',
		colorTooltipBackgroundPurpleTint: '#F2E8FF',
		colorTooltipTextBlueThemed: '#1C4479',
		colorTooltipTextGreenThemed: '#087C6D',
		colorTooltipTextOrangeThemed: '#78472A',
		colorTooltipTextPurpleThemed: '#73519F',

		// Byte colors
		colorBackgroundSky: '#cce4ff',
		colorBackgroundSkyAlpha: 'rgba(204, 228, 255, 0.9)',
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
			fontFamily: staticRef(lightThemeBase.fontFamilyAccent),
			fontWeight: staticRef(lightThemeBase.fontWeightAccent1),
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
			fontFamily: staticRef(lightThemeBase.fontFamilyAccent),
			fontWeight: staticRef(lightThemeBase.fontWeightAccent1),
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
			fontFamily: staticRef(lightThemeBase.fontFamilyAccent),
			fontWeight: staticRef(lightThemeBase.fontWeightAccent1),
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
	elevation1InvertY: '0 -2px 0 0 rgba(0, 0, 0, 0.04)',
	elevation2: '0 4px 48px 0 rgba(0, 0, 0, 0.72)',
	elevation3: '0 4px 32px 0 rgba(0, 0, 0, 0.48)',
	elevation4: '0 4px 32px 0 rgba(0, 0, 0, 0.48)',
};

export const darkThemeBase: ThemeDescription = {
	...lightThemeBase,
	gradientTint: getGradientPointsFromColor(colorBackgroundTertiaryDark),
	gradient: getGradientPointsFromColor(colorBackgroundContentDark),
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

		// Тонированные цвета для проектов
		colorBackgroundAccentTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.1)',
		colorBackgroundAccentTintThemed: '#2b2b2c',

		colorBackgroundWarningTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundWarningTintAlpha: 'rgba(255, 158, 0, 0.1)',
		colorBackgroundWarningTintThemed: '#2b2b2c',
		colorBackgroundWarningTint: '#302617',

		colorBackgroundNegativeTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundNegativeTintAlpha: 'rgba(237, 51, 10, 0.1)',
		colorBackgroundNegativeTintThemed: '#2b2b2c',

		colorBackgroundPositiveTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundPositiveTintAlpha: 'rgba(13, 194, 104, 0.1)',
		colorBackgroundPositiveTintThemed: '#2b2b2c',

		colorTooltipBackgroundBlueTint: '#1C4479',
		colorTooltipBackgroundGreenTint: '#087C6D',
		colorTooltipBackgroundOrangeTint: '#78472A',
		colorTooltipBackgroundPurpleTint: '#73519F',
		colorTooltipTextBlueThemed: '#FFFFFF',
		colorTooltipTextGreenThemed: '#FFFFFF',
		colorTooltipTextOrangeThemed: '#FFFFFF',
		colorTooltipTextPurpleThemed: '#FFFFFF',

		// Byte colors
		colorBackgroundSky: '#2b2b2c',
		colorBackgroundSkyAlpha: 'rgba(51, 51, 51, 0.8)',
	},
};

// Для экспорта базовой темы прописываем токен themeNameBase отдельно
// В darkThemeBase прописать не можем, т.к. он тогда перетрёт themeNameBase
// в продуктовых темах.
export const darkThemeExport: ParadigmThemeDescription = {
	...darkTheme,
	themeNameBase: 'paradigmBase',
};
