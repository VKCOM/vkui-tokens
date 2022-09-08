import {Property} from 'csstype';

import {getGradientPointsFromColor} from '@/build/helpers/getGradientPointsFromColor';
import {alias} from '@/build/helpers/tokenHelpers';
import {ColorsDescription, ThemeDescription} from '@/interfaces/general';
import {Elevation} from '@/interfaces/general/elevation';
import {Gradients} from '@/interfaces/general/gradients';

const fontFamilyAccent =
	'-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontFamilyBase =
	'-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontWeightAccent1 = 600;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 400;
const fontWeightBase1 = 600;
const fontWeightBase2 = 500;
const fontWeightBase3 = 400;

const colorBackgroundTertiaryLight: Property.Color = '#F9F9F9';
const colorBackgroundTertiaryDark: Property.Color = '#202021';

export const lightColors: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		// Background
		colorBackgroundAccent: '#2688EB',
		colorBackgroundAccentThemed: '#2688EB',
		colorBackgroundAccentTint: '#5a9eff',
		colorBackgroundAccentAlternative: '#2688EB',
		colorBackground: '#EBEDF0',
		colorBackgroundContent: '#FFFFFF',
		colorBackgroundSecondary: '#F5F5F5',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(0, 0, 0, 0.04)',
			hover: 'rgba(0, 0, 0, 0.08)',
			active: 'rgba(0, 0, 0, 0.12)',
		},
		colorBackgroundTertiary: colorBackgroundTertiaryLight,
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.20)',
		colorBackgroundContrastInverse: '#2d2d2e',
		colorBackgroundModal: '#FFFFFF',
		colorBackgroundModalInverse: '#2d2d2e',
		colorBackgroundWarning: '#FFF2D6',
		colorBackgroundPositive: '#4BB34B',
		colorBackgroundNegative: '#E64646',
		colorBackgroundNegativeTint: '#FAEBEB',
		colorBackgroundPositiveTint: '#E8f9e8',
		colorFieldBackground: '#f2f3f5',
		colorHeaderBackground: '#FFFFFF',

		// Text
		colorTextAccent: '#2688EB',
		colorTextAccentThemed: '#2688EB',
		colorTextPrimary: '#000000',
		colorTextPrimaryInvariably: '#000000',
		colorTextSecondary: '#818C99',
		colorTextSubhead: '#6D7885',
		colorTextTertiary: '#99A2AD',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#FFFFFF',
		colorTextPositive: '#4BB34B',
		colorTextNegative: '#E64646',
		colorTextLink: '#2D81E0',
		colorTextLinkThemed: '#2D81E0',
		colorTextLinkVisited: '#4986CC',
		colorTextMuted: '#2C2D2E',
		colorLinkContrast: '#FFFFFF',

		// Icons
		colorIconAccent: '#2688EB',
		colorIconAccentThemed: '#2688EB',
		colorIconPrimary: '#2C2D2E',
		colorIconPrimaryInvariably: '#2C2D2E',
		colorIconMedium: '#818C99',
		colorIconMediumAlpha: 'rgba(0, 0, 0, 0.48)',
		colorIconSecondary: '#99A2AD',
		colorIconSecondaryAlpha: 'rgba(0, 0, 0, 0.36)',
		colorIconTertiary: '#B8C1CC',
		colorIconTertiaryAlpha: 'rgba(0, 0, 0, 0.24)',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#FFFFFF',
		colorIconContrastSecondary: '#F2F3F5',
		colorIconPositive: '#4BB34B',
		colorIconNegative: '#E64646',

		// Stroke
		colorStrokeAccent: '#2688EB',
		colorStrokeAccentThemed: '#2688EB',
		colorSeparatorPrimary: '#D7D8D9',
		colorSeparatorPrimary2x: '#cbcccd',
		colorSeparatorPrimary3x: '#bebfc1',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.12)',
		colorSeparatorSecondary: '#E1E3E6',
		colorStrokePositive: '#4BB34B',
		colorStrokeNegative: '#E64646',
		colorStrokeContrast: '#FFFFFF',
		colorImageBorderAlpha: 'rgba(0, 0, 0, 0.08)',
		colorFieldBorderAlpha: {
			normal: 'rgba(0, 0, 0, 0.12)',
			hover: 'rgba(0, 0, 0, 0.24)',
			active: 'rgba(0, 0, 0, 0.36)',
		},

		// Palette
		colorAccentBlue: '#3F8AE0',
		colorAccentGray: '#A3ADB8',
		colorAccentRed: '#FF3347',
		colorAccentGreen: '#4BB34B',
		colorAccentOrange: '#FFA000',
		colorAccentPurple: '#735CE6',
		colorAccentViolet: '#792EC0',
		colorAccentSecondary: '#3F8AE0',

		// Other
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.4)',
		colorAvatarOverlay: 'rgba(0, 0, 0, 0.6)',
		colorAvatarOverlayInverseAlpha: 'rgba(255, 255, 255, 0.85)',
		colorActionSheetText: '#3F8AE0',
		colorImagePlaceholder: '#F2F3F5',
		colorImagePlaceholderAlpha: 'rgba(0, 28, 61, 0.08)',
		colorSkeletonFrom: '#F5F5F5',
		colorSkeletonTo: '#E1E3E6',
		colorWriteBarIcon: '#3F8AE0',
		colorWriteBarInputBackground: '#F2F3F5',
		colorWriteBarInputBorderAlpha: 'rgba(0, 0, 0, 0.08)',
		colorTrackBackground: '#E1E3E6',
		colorTrackBuffer: '#A0BFE4',
		colorSearchFieldBackground: '#EBEDF0',
		colorPanelHeaderIcon: '#2688EB',
		colorSegmentedControl: '#FFFFFF',
		colorTransparent: 'transparent',
	},
};

export const lightGradient: Gradients = {
	gradientBlack: getGradientPointsFromColor('#000000', 0.4),
	gradientWhite: getGradientPointsFromColor('#FFFFFF'),
	gradientTint: getGradientPointsFromColor(colorBackgroundTertiaryLight),
};

export const lightElevation: Elevation = {
	elevation1:
		'0px 0px 2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.06)',
	elevation1InvertY:
		'0px 0px 2px rgba(0, 0, 0, 0.03), 0px -2px 2px rgba(0, 0, 0, 0.06)',
	elevation2:
		'0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06)',
	elevation3:
		'0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)',
	elevation4:
		'0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16)',
};

export const darkColors: ColorsDescription = {
	colorsScheme: 'dark',
	colors: {
		// Background
		colorBackgroundAccent: '#529EF4',
		colorBackgroundAccentThemed: '#FFFFFF',
		colorBackgroundAccentTint: '#5a9eff',
		colorBackgroundAccentAlternative: '#529EF4',
		colorBackground: '#0A0A0A',
		colorBackgroundContent: '#19191A',
		colorBackgroundSecondary: '#232324',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.10)',
			hover: 'rgba(255, 255, 255, 0.12)',
			active: 'rgba(255, 255, 255, 0.14)',
		},
		colorBackgroundTertiary: colorBackgroundTertiaryDark,
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.20)',
		colorBackgroundContrastInverse: '#2d2d2e',
		colorBackgroundModal: '#2D2D2E',
		colorBackgroundModalInverse: '#ffffff',
		colorBackgroundWarning: '#857250',
		colorBackgroundPositive: '#4BB34B',
		colorBackgroundNegative: '#FF5C5C',
		colorBackgroundNegativeTint: '#522E2E',
		colorBackgroundPositiveTint: '#E8f9e8',
		colorFieldBackground: '#292929',
		colorHeaderBackground: '#19191A',

		// Text
		colorTextAccent: '#529EF4',
		colorTextAccentThemed: '#FFFFFF',
		colorTextPrimary: '#E1E3E6',
		colorTextPrimaryInvariably: '#000000',
		colorTextSecondary: '#76787A',
		colorTextSubhead: '#969A9F',
		colorTextTertiary: '#636567',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#000000',
		colorTextPositive: '#4BB34B',
		colorTextNegative: '#FF5C5C',
		colorTextLink: '#529EF4',
		colorTextLinkThemed: '#FFFFFF',
		colorTextLinkVisited: '#4986CC',
		colorTextMuted: '#E1E3E6',
		colorLinkContrast: '#FFFFFF',

		// Icons
		colorIconAccent: '#529EF4',
		colorIconAccentThemed: '#FFFFFF',
		colorIconPrimary: '#E1E3E6',
		colorIconPrimaryInvariably: '#2C2D2E',
		colorIconMedium: '#B0B1B6',
		colorIconMediumAlpha: 'rgba(241, 247, 255, 0.66)',
		colorIconSecondary: '#76787A',
		colorIconSecondaryAlpha: 'rgba(0, 0, 0, 0.43)',
		colorIconTertiary: '#5D5F61',
		colorIconTertiaryAlpha: 'rgba(255, 255, 255, 0.3)',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#000000',
		colorIconContrastSecondary: '#F2F3F5',
		colorIconPositive: '#4BB34B',
		colorIconNegative: '#FF5C5C',

		// Stroke
		colorStrokeAccent: '#529EF4',
		colorStrokeAccentThemed: '#FFFFFF',
		colorSeparatorPrimary: '#363738',
		colorSeparatorPrimary2x: '#444546',
		colorSeparatorPrimary3x: '#505253',
		colorSeparatorPrimaryAlpha: 'rgba(255, 255, 255, 0.12)',
		colorSeparatorSecondary: '#141415',
		colorStrokePositive: '#4BB34B',
		colorStrokeNegative: '#FF5C5C',
		colorStrokeContrast: '#FFFFFF',
		colorImageBorderAlpha: 'rgba(255, 255, 255, 0.08)',
		colorFieldBorderAlpha: 'rgba(255, 255, 255, 0.12)',

		// Palette
		colorAccentBlue: '#529EF4',
		colorAccentGray: '#A3ADB8',
		colorAccentRed: '#FF3347',
		colorAccentGreen: '#4BB34B',
		colorAccentOrange: '#FFA000',
		colorAccentPurple: '#735CE6',
		colorAccentViolet: '#792EC0',
		colorAccentSecondary: '#3F8AE0',

		// Other
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.4)',
		colorAvatarOverlay: 'rgba(0, 0, 0, 0.6)',
		colorAvatarOverlayInverseAlpha: 'rgba(255, 255, 255, 0.85)',
		colorImagePlaceholder: '#2A2B2C',
		colorImagePlaceholderAlpha: 'rgba(241, 247, 255, 0.08)',
		colorSkeletonFrom: '#F5F5F5',
		colorSkeletonTo: '#E1E3E6',
		colorWriteBarIcon: '#529EF4',
		colorWriteBarInputBackground: '#232324',
		colorWriteBarInputBorderAlpha: 'rgba(255, 255, 255, 0.8)',
		colorActionSheetText: '#529EF4',
		colorTrackBackground: '#454647',
		colorTrackBuffer: '#405772',
		colorSearchFieldBackground: '#363738',
		colorPanelHeaderIcon: '#71AAEB',
		colorSegmentedControl: '#626364',
		colorTransparent: 'transparent',
	},
};

export const darkGradient: Gradients = {
	gradientBlack: getGradientPointsFromColor('#000000', 0.4),
	gradientWhite: getGradientPointsFromColor('#FFFFFF'),
	gradientTint: getGradientPointsFromColor(colorBackgroundTertiaryDark),
};

export const darkElevation: Elevation = {
	// TODO: Тени (Поправить для Dark)
	elevation1:
		'0px 0px 2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.06)',
	elevation1InvertY:
		'0px 0px 2px rgba(0, 0, 0, 0.03), 0px -2px 2px rgba(0, 0, 0, 0.06)',
	elevation2:
		'0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06)',
	elevation3:
		'0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)',
	elevation4:
		'0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16)',
};

export const lightTheme: ThemeDescription = {
	themeName: 'vkBase',
	themeNameBase: 'vkBase',
	...lightColors,
	...lightGradient,
	...lightElevation,
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
			fontWeight: fontWeightAccent1,
		},
	},
	fontTitle2: {
		regular: {
			fontSize: 20,
			lineHeight: 24,
			letterSpacing: '-0.4px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontTitle3: {
		regular: {
			fontSize: 17,
			lineHeight: 22,
			letterSpacing: '-0.22px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontHeadline: alias('fontHeadline1'),
	fontHeadline1: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			letterSpacing: '-0.16px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
		compact: {
			fontSize: 15,
			lineHeight: 20,
			letterSpacing: '-0.1px',
		},
	},
	fontHeadline2: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			letterSpacing: '-0.1px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
		compact: {
			fontSize: 14,
			lineHeight: 20,
			letterSpacing: '-0.06px',
		},
	},
	fontText: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			letterSpacing: '-0.16px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
		compact: {
			fontSize: 15,
			lineHeight: 20,
			letterSpacing: '-0.1px',
		},
	},
	fontParagraph: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			letterSpacing: '-0.1px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			letterSpacing: '-0.06px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
		compact: {
			fontSize: 13,
			lineHeight: 16,
			letterSpacing: '0px',
		},
	},
	fontFootnote: {
		regular: {
			fontSize: 13,
			lineHeight: 16,
			letterSpacing: '0px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontSize: 13,
			lineHeight: 16,
			letterSpacing: '0.3px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
			textTransform: 'uppercase',
		},
	},
	fontCaption1: {
		regular: {
			fontSize: 12,
			lineHeight: 14,
			letterSpacing: '0.06px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontCaption1Caps: {
		regular: {
			fontSize: 12,
			lineHeight: 14,
			letterSpacing: '0.2px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption2: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			letterSpacing: '0.11px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontCaption2Caps: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			letterSpacing: '0.3px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption3: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			letterSpacing: '0.18px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontCaption3Caps: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			letterSpacing: '0.3px',
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
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
	sizeSearchHeight: {
		regular: 36,
		compact: 32,
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
		compact: 28,
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

	// Токены компонента Cardscroll
	sizeCardgridPadding: {
		regular: 8,
	},
	sizeCardBorderRadius: {
		regular: 8,
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

	// Разное
	animationDurationL: '0.4s',
	animationDurationM: '0.2s',
	animationDurationS: '0.1s',
	animationEasingDefault: 'cubic-bezier(0.3, 0.3, 0.5, 1)',
	animationEasingPlatform: 'cubic-bezier(0.4, 0, 0.2, 1)',
	opacityDisable: 0.4,
	opacityDisableAccessibility: 0.64,
};

export const darkTheme: ThemeDescription = {
	...lightTheme,
	...darkColors,
	...darkGradient,
	...darkElevation,
	themeName: 'vkBaseDark',
	themeInheritsFrom: 'vkBase',
	colorsScheme: 'dark',
};
