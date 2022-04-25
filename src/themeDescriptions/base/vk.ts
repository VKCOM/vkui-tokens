import {alias} from '@/build/helpers/tokenHelpers';
import {ColorsDescription, ThemeDescription} from '@/interfaces/general';

const fontFamilyAccent =
	'"TT Commons", -apple-system, system-ui, Helvetica Neue, Roboto, sans-serif';
const fontFamilyBase =
	'-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontWeightAccent1 = 600;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 400;
const fontWeightBase1 = 600;
const fontWeightBase2 = 500;
const fontWeightBase3 = 400;

export const lightColors: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		colorBackgroundAccent: '#2688EB',
		colorBackgroundAccentThemed: '#2688EB',
		colorBackgroundAccentAlternative: '#2688EB',
		colorIconAccent: '#2688EB',
		colorTextAccent: '#2688EB',
		colorTextAccentThemed: '#2688EB',
		colorStrokeAccent: '#2688EB',
		colorStrokeAccentThemed: '#2688EB',
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
		colorBackgroundNegativeTint: '#FAEBEB',
		colorTextNegative: '#E64646',
		colorIconNegative: '#E64646',
		colorStrokeNegative: '#E64646',
		colorHeaderBackground: '#FFFFFF',
		colorPanelHeaderIcon: '#2688EB',
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
		colorFieldBorderAlpha: {
			normal: 'rgba(0, 0, 0, 0.12)',
			hover: 'rgba(0, 0, 0, 0.24)',
			active: 'rgba(0, 0, 0, 0.36)',
		},
		colorFieldBackground: '#f2f3f5',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.12)',
		colorSeparatorSecondary: '#E1E3E6',
		colorSeparatorPrimary: '#D7D8D9',
		colorTextLink: '#2D81E0',
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

export const darkColors: ColorsDescription = {
	colorsScheme: 'dark',
	colors: {
		colorBackgroundAccent: '#529EF4',
		colorBackgroundAccentThemed: '#FFFFFF',
		colorBackgroundAccentAlternative: '#529EF4',
		colorIconAccent: '#529EF4',
		colorTextAccent: '#529EF4',
		colorTextAccentThemed: '#FFFFFF',
		colorStrokeAccent: '#529EF4',
		colorStrokeAccentThemed: '#FFFFFF',
		colorStrokeContrast: '#FFFFFF',
		colorActionSheetText: '#529EF4',
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
		colorBackgroundNegativeTint: '#522E2E',
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
		colorFieldBackground: '#292929',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.4)',
		colorSeparatorSecondary: '#141415',
		colorSeparatorPrimary: '#0F0F10',
		colorTextLink: '#529EF4',
		colorTextLinkThemed: '#FFFFFF',
		colorTextMuted: '#E1E3E6',
		colorTextPrimary: '#E1E3E6',
		colorTextPrimaryInvariably: '#000000',
		colorTextSecondary: '#76787A',
		colorTextSubhead: '#C1C3C6',
		colorTextTertiary: '#636567',
		colorWriteBarIcon: '#529EF4',
		colorAccentBlue: '#529EF4',
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
	themeNameBase: 'vkBase',
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

	// Прочие отступы
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
	animationDurationL: '0.4s',
	animationDurationM: '0.2s',
	animationDurationS: '0.1s',
	animationEasingDefault: 'cubic-bezier(0.3, 0.3, 0.5, 1)',
	opacityDisable: 0.4,
	opacityDisableAccessibility: 0.64,
};

export const darkTheme: ThemeDescription = {
	...lightTheme,
	...darkColors,
	themeName: 'vkBaseDark',
	themeInheritsFrom: 'vkBase',
	colorsScheme: 'dark',

	// TODO: Поставить нормальные отступы из тёмной темы
	elevation1:
		'0px 0px 2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.06)',
	elevation2:
		'0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06)',
	elevation3:
		'0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)',
	elevation4:
		'0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16)',
};
