import { getGradientPointsFromColor } from '../../build/helpers/getGradientPointsFromColor';
import { alias } from '../../build/helpers/tokenHelpers';
import { ColorsDescription, ThemeDescription } from '../../interfaces/general';
import { Effects } from '../../interfaces/general/effects';
import { Elevation } from '../../interfaces/general/elevation';
import { Sizes } from '../../interfaces/general/geometry';
import { Gradients } from '../../interfaces/general/gradients';
import { Adaptive } from '../../interfaces/general/tools';
import { Fonts, TypographyBaseProps } from '../../interfaces/general/typography';
import figma from '../base/figma/vk.json';

const fontFamilyFallbacks = '-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontFamilyAccent = fontFamilyFallbacks;
const fontFamilyBase = fontFamilyFallbacks;
const fontWeightAccent1 = 600;
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 400;
const fontWeightBase1 = 600;
const fontWeightBase2 = 500;
const fontWeightBase3 = 400;

// eslint-disable-next-line max-lines-per-function
export const colorFromFigma = (colorsScheme: 'light' | 'dark'): ColorsDescription => {
	const { background, text, icons, stroke, palette, other } = figma[colorsScheme];

	const { states } = figma.light;

	return {
		colorsScheme,
		colors: {
			// Background
			colorBackgroundAccent: background.background_accent,
			colorBackgroundAccentThemed: background.background_accent_themed,
			colorBackgroundAccentThemedAlpha: background.background_accent_themed_alpha,
			colorBackgroundAccentTint: background.background_accent_tint,
			colorBackgroundAccentAlternative: {
				light: '#2688EB',
				dark: '#529EF4',
			}[colorsScheme],
			colorBackground: background.background,
			colorBackgroundContent: background.background_content,
			colorBackgroundContentAlpha: {
				light: 'rgba(255, 255, 255, 0.8)',
				dark: 'rgba(25, 25, 26, 0.8)',
			}[colorsScheme],
			colorBackgroundContentInverse: {
				light: '#19191A',
				dark: '#FFFFFF',
			}[colorsScheme],
			colorBackgroundSecondary: background.background_secondary,
			colorBackgroundSecondaryAlpha: {
				light: {
					normal: background.background_secondary_alpha,
					hover: states.background_secondary_alpha.hover,
					active: states.background_secondary_alpha.active,
				},
				dark: 'rgba(255, 255, 255, 0.10)',
			}[colorsScheme],
			colorBackgroundTertiary: background.background_tertiary,
			colorBackgroundTertiaryAlpha: {
				light: {
					normal: background.background_tertiary_alpha,
					hover: 'rgba(0, 0, 0, 0.07)',
					active: 'rgba(0, 0, 0, 0.11)',
				},
				dark: {
					normal: 'rgba(255, 255, 255, 0.03)',
					hover: 'rgba(255, 255, 255, 0.07)',
					active: 'rgba(255, 255, 255, 0.11)',
				},
			}[colorsScheme],
			colorBackgroundContrast: background.background_contrast,
			colorBackgroundContrastSecondaryAlpha: {
				light: {
					normal: background.background_contrast_secondary_alpha,
					hover: states.background_contrast_secondary_alpha.hover,
					active: states.background_contrast_secondary_alpha.active,
				},
				dark: {
					normal: 'rgba(255, 255, 255, 0.2)',
					hover: 'rgba(255, 255, 255, 0.24)',
					active: 'rgba(255, 255, 255, 0.28)',
				},
			}[colorsScheme],
			colorBackgroundContrastInverse: background.background_contrast_inverse,
			colorBackgroundContrastThemed: {
				light: '#FFFFFF',
				dark: '#2C2D2E',
			}[colorsScheme],
			colorBackgroundModal: {
				light: '#FFFFFF',
				dark: '#1C1D1E',
			}[colorsScheme],
			colorBackgroundModalInverse: {
				light: '#1C1D1E',
				dark: '#FFFFFF',
			}[colorsScheme],
			colorBackgroundPositive: background.background_positive,
			colorBackgroundPositiveTint: {
				light: '#E8F9E8',
				dark: '#2E3E2B',
			}[colorsScheme],
			colorBackgroundWarning: {
				light: '#FFF2D6',
				dark: '#473315',
			}[colorsScheme],
			colorBackgroundNegative: background.background_negative,
			colorBackgroundNegativeTint: {
				light: '#FFE9E9',
				dark: '#522E2E',
			}[colorsScheme],
			colorBackgroundInfoTint: {
				light: '#DEEEFF',
				dark: '#1C3954',
			}[colorsScheme],
			colorFieldBackground: background.field_background,
			colorHeaderBackground: background.header_background,

			// Text
			colorTextAccent: text.text_accent,
			colorTextAccentThemed: text.text_accent_themed,
			colorTextPrimary: text.text_primary,
			colorTextPrimaryAlpha: {
				light: 'rgba(37, 41, 46, 0.84)',
				dark: 'rgba(249, 252, 255, 0.72)',
			}[colorsScheme],
			colorTextPrimaryInvariably: text.text_primary_invariably,
			colorTextSecondary: text.text_secondary,
			colorTextSecondaryAlpha: {
				light: 'rgba(37, 41, 46, 0.55)',
				dark: 'rgba(247, 251, 255, 0.42)',
			}[colorsScheme],
			colorTextSubhead: text.text_subhead,
			colorTextTertiary: text.text_tertiary,
			colorTextContrast: text.text_contrast,
			colorTextContrastThemed: text.text_contrast_themed,
			colorTextPositive: text.text_positive,
			colorTextNegative: text.text_negative,
			colorTextLink: text.text_link,
			colorTextLinkThemed: text.text_link_themed,
			colorTextLinkTint: text.text_link_tint,
			colorTextLinkVisited: text.text_link_visited,
			colorTextMuted: text.text_muted,
			colorLinkContrast: text.link_contrast,

			// Icons
			colorIconAccent: icons.icon_accent,
			colorIconAccentThemed: icons.icon_accent_themed,
			colorIconPrimary: icons.icon_primary,
			colorIconPrimaryInvariably: icons.icon_primary_invariably,
			colorIconMedium: icons.icon_medium,
			colorIconMediumAlpha: icons.icon_medium_alpha,
			colorIconSecondary: icons.icon_secondary,
			colorIconSecondaryAlpha: {
				light: 'rgba(0, 0, 0, 0.36)',
				dark: 'rgba(241, 247, 255, 0.43)',
			}[colorsScheme],
			colorIconTertiary: icons.icon_tertiary,
			colorIconTertiaryAlpha: icons.icon_tertiary_alpha,
			colorIconContrast: icons.icon_contrast,
			colorIconContrastThemed: icons.icon_contrast_themed,
			colorIconContrastSecondary: icons.icon_contrast_secondary,
			colorIconPositive: icons.icon_positive,
			colorIconWarning: {
				light: '#F8A01C',
				dark: '#EDB055',
			}[colorsScheme],
			colorIconNegative: icons.icon_negative,

			// Stroke
			colorStrokeAccent: stroke.stroke_accent,
			colorStrokeAccentThemed: stroke.stroke_accent_themed,
			colorSeparatorPrimary: stroke.separator_primary,
			colorSeparatorPrimary2x: {
				light: '#cbcccd',
				dark: '#444546',
			}[colorsScheme],
			colorSeparatorPrimary3x: {
				light: '#bebfc1',
				dark: '#505253',
			}[colorsScheme],
			colorSeparatorPrimaryAlpha: stroke.separator_primary_alpha,
			colorSeparatorSecondary: stroke.separator_secondary,
			colorStrokePositive: stroke.stroke_positive,
			colorStrokeNegative: stroke.stroke_negative,
			colorStrokeContrast: stroke.stroke_contrast,
			colorStrokePrimary: {
				light: '#2C2D2E',
				dark: '#E1E3E6',
			}[colorsScheme],
			colorImageBorderAlpha: stroke.image_border_alpha,
			colorFieldBorderAlpha: {
				light: {
					normal: 'rgba(0, 0, 0, 0.12)',
					hover: 'rgba(0, 0, 0, 0.24)',
					active: 'rgba(0, 0, 0, 0.36)',
				},
				dark: 'rgba(255, 255, 255, 0.12)',
			}[colorsScheme],

			// Palette
			colorAccentBlue: palette.accent_blue,
			colorAccentGray: palette.accent_gray,
			colorAccentRed: palette.accent_red,
			colorAccentOrangeFire: palette.accent_orange_fire,
			colorAccentOrange: palette.accent_orange,
			colorAccentOrangePeach: {
				light: '#F9B54F',
				dark: '#FFC062',
			}[colorsScheme],
			colorAccentLime: {
				light: '#AFF70D',
				dark: '#AFF70D',
			}[colorsScheme],
			colorAccentGreen: palette.accent_green,
			colorAccentCyan: {
				light: '#13FFD0',
				dark: '#13FFD0',
			}[colorsScheme],
			colorAccentAzure: {
				light: '#0077FF',
				dark: '#0077FF',
			}[colorsScheme],
			colorAccentPurple: palette.accent_purple,
			colorAccentViolet: palette.accent_violet,
			colorAccentRaspberryPink: palette.accent_raspberry_pink,
			colorAccentPink: {
				light: '#F45FFF',
				dark: '#F45FFF',
			}[colorsScheme],
			colorAccentSecondary: palette.accent_secondary,

			// Other
			colorOverlayPrimary: other.overlay_primary,
			colorOverlaySecondary: {
				normal: 'rgba(0, 0, 0, 0.27)',
				hover: 'rgba(0, 0, 0, 0.31)',
				active: 'rgba(0, 0, 0, 0.35)',
			},
			colorAvatarOverlay: other.avatar_overlay_alpha,
			colorAvatarOverlayInverseAlpha: other.avatar_overlay_inverse_alpha,
			colorActionSheetText: other.action_sheet_text,
			colorImagePlaceholder: other.image_placeholder,
			colorImagePlaceholderAlpha: other.image_placeholder_alpha,
			colorSkeletonFrom: other.skeleton_from,
			colorSkeletonTo: other.skeleton_to,
			colorButtonText: {
				light: '#2688eb',
				dark: '#ffffff',
			}[colorsScheme],

			colorButtonIcon: {
				light: '#2688eb',
				dark: '#ffffff',
			}[colorsScheme],

			colorButtonStroke: {
				light: '#2688eb',
				dark: '#ffffff',
			}[colorsScheme],
			colorWriteBarIcon: other.write_bar_icon,
			colorWriteBarInputBackground: other.write_bar_input_background,
			colorWriteBarInputBorder: other.write_bar_input_border,
			colorWriteBarInputBorderAlpha: {
				light: 'rgba(0, 0, 0, 0.08)',
				dark: 'rgba(255, 255, 255, 0.8)',
			}[colorsScheme],
			colorTrackBackground: other.track_background,
			colorTrackBuffer: other.track_buffer,
			colorSearchFieldBackground: other.search_field_background,
			colorPanelHeaderIcon: other.panel_header_icon,
			colorSegmentedControl: other.segmented_control,
			colorTabbarTextInactive: {
				light: '#99a2ad',
				dark: '#76787a',
			}[colorsScheme],
			colorTransparent: 'transparent',
		},
	};
};

export const lightColors: ColorsDescription = colorFromFigma('light');

export const lightGradient: Gradients = {
	gradientBlack: getGradientPointsFromColor('#000000', 0.4),
	gradientWhite: getGradientPointsFromColor('#FFFFFF'),
	gradientTint: getGradientPointsFromColor(figma.light.background.background_tertiary),
	gradient: getGradientPointsFromColor('#FFFFFF'),
};

export const lightElevation: Elevation = {
	elevation1: '0px 0px 2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.06)',
	elevation1InvertY: '0px 0px 2px rgba(0, 0, 0, 0.03), 0px -2px 2px rgba(0, 0, 0, 0.06)',
	elevation2: '0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 4px rgba(0, 0, 0, 0.06)',
	elevation3: '0px 0px 2px rgba(0, 0, 0, 0.08), 0px 4px 16px rgba(0, 0, 0, 0.08)',
	elevation4: '0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16)',
};

export const darkColors: ColorsDescription = colorFromFigma('dark');

export const darkGradient: Gradients = {
	gradientBlack: getGradientPointsFromColor('#000000', 0.4),
	gradientWhite: getGradientPointsFromColor('#FFFFFF'),
	gradientTint: getGradientPointsFromColor(figma.dark.background.background_tertiary),
	gradient: getGradientPointsFromColor(figma.dark.background.background_content),
};

export const darkElevation: Elevation = {
	elevation1: '0px 0px 2px 0px rgba(0, 0, 0, 0.10), 0px 2px 2px 0px rgba(0, 0, 0, 0.20)',
	elevation1InvertY: '0px 0px 2px 0px rgba(0, 0, 0, 0.10), 0px -2px 2px 0px rgba(0, 0, 0, 0.20)',
	elevation2: '0px 4px 8px 0px rgba(0, 0, 0, 0.15), 0px 0px 4px 0px rgba(0, 0, 0, 0.20)',
	elevation3: '0px 0px 2px 0px rgba(0, 0, 0, 0.30), 0px 4px 16px 0px rgba(0, 0, 0, 0.30)',
	elevation4: '0px 0px 8px 0px rgba(0, 0, 0, 0.10), 0px 16px 16px 0px rgba(0, 0, 0, 0.20)',
};

export const effects: Effects = {
	blurM: 16,
};

type BaseFonts = Omit<
	{
		[key in keyof Fonts]: Adaptive<Fonts[key]>;
	},
	'fontHeadline'
> &
	TypographyBaseProps;

export const fonts: BaseFonts = {
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
			lineHeight: 24,
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
			lineHeight: 22,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontTitle1: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontTitle2: {
		regular: {
			fontSize: 20,
			lineHeight: 24,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
		},
	},
	fontTitle3: {
		regular: {
			fontSize: 17,
			lineHeight: 22,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontHeadline1: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
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
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
		},
		compact: {
			fontSize: 14,
			lineHeight: 20,
		},
	},
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
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
		compact: {
			fontSize: 13,
			lineHeight: 16,
		},
	},
	fontFootnote: {
		regular: {
			fontSize: 13,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontSize: 13,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption1: {
		regular: {
			fontSize: 12,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase3,
		},
	},
	fontCaption1Caps: {
		regular: {
			fontSize: 12,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
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
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
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
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
};

type BaseSizes = { [key in keyof Sizes]: Adaptive<Sizes[key]> };

export const sizes: BaseSizes = {
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
};

export const lightTheme: ThemeDescription = {
	themeName: 'vkBase',
	themeNameBase: 'vkBase',
	...lightColors,
	...lightGradient,
	...lightElevation,
	...effects,
	...fonts,
	fontHeadline: alias('fontHeadline1'),
	...sizes,

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

	// Разное
	animationDurationL: '0.4s',
	animationDurationM: '0.2s',
	animationDurationS: '0.1s',
	animationEasingDefault: 'cubic-bezier(0.3, 0.3, 0.5, 1)',
	animationEasingPlatform: 'cubic-bezier(0.4, 0, 0.2, 1)',
	opacityDisable: 0.52,
	opacityDisableAccessibility: 0.52,
	opacityActive: 0.72,
	zIndexModal: 99,
	zIndexPopout: 100,
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
