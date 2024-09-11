import { vkcom_dark, vkcom_light } from '@vkontakte/appearance/main.valette/scheme_web.json';
import lodash from 'lodash';

import { ColorsDescription } from '@/interfaces/general';
import { DeepPartial } from '@/interfaces/general/tools/utils';
import { ThemeVkComDescription } from '@/interfaces/themes/vkCom';
import { ThemeVkComDarkDescription } from '@/interfaces/themes/vkComDark';
import {
	darkColors,
	darkElevation,
	darkGradient,
	fonts,
	lightColors,
	lightTheme,
} from '@/themeDescriptions/base/vk';

import { resolveColor } from './appearance';

const fontFamilyAccent =
	'"VK Sans Display", "VK Sans Display Faux", -apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", Geneva, "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", arial, Tahoma, verdana, sans-serif';
const fontFamilyBase =
	'-apple-system, BlinkMacSystemFont, "Roboto", "Helvetica Neue", Geneva, "Noto Sans Armenian", "Noto Sans Bengali", "Noto Sans Cherokee", "Noto Sans Devanagari", "Noto Sans Ethiopic", "Noto Sans Georgian", "Noto Sans Hebrew", "Noto Sans Kannada", "Noto Sans Khmer", "Noto Sans Lao", "Noto Sans Osmanya", "Noto Sans Tamil", "Noto Sans Telugu", "Noto Sans Thai", arial, Tahoma, verdana, sans-serif';
const fontFamilyFallbacks = fontFamilyBase;

const vkComColors = (theme: typeof vkcom_light) => ({
	// Background
	colorBackgroundAccent: resolveColor(theme.colors.accent),
	colorBackgroundAccentThemed: resolveColor(theme.colors.button_primary_background),
	colorBackgroundAccentThemedAlpha: 'rgba(68, 123, 186, 0.12)',
	// colorBackgroundAccentTint: '#5a9eff',
	colorBackgroundAccentAlternative: resolveColor(theme.colors.accent),
	colorBackground: resolveColor(theme.colors.background_page),
	colorBackgroundContent: resolveColor(theme.colors.background_content),
	colorBackgroundSecondary: resolveColor(theme.colors.content_tint_background),
	colorBackgroundSecondaryAlpha: {
		normal: 'rgba(235, 242, 250, 0.99)',
		hover: 'rgba(223, 234, 246, 0.99)',
		active: 'rgba(213, 226, 241, 0.99)',
	},
	colorBackgroundTertiary: resolveColor(theme.colors.background_light),
	colorBackgroundContrast: resolveColor(theme.colors.media_overlay_button_background),
	// colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.20)',
	colorBackgroundContrastInverse: resolveColor(theme.colors.media_overlay_button_foreground),
	colorBackgroundContrastThemed: '#FFFFFF',
	colorBackgroundModal: resolveColor(theme.colors.modal_card_background),
	colorBackgroundModalInverse: '#2D2D2E',
	// colorBackgroundWarning: resolveColor(
	// 	theme.colors.content_warning_background,
	// ),
	colorBackgroundPositive: resolveColor(theme.colors.button_commerce_background),
	colorBackgroundNegative: resolveColor(theme.colors.button_secondary_destructive_foreground),
	colorFieldBackground: resolveColor(theme.colors.field_background),
	colorHeaderBackground: resolveColor(theme.colors.header_background),

	// Text
	colorTextAccent: resolveColor(theme.colors.accent),
	colorTextAccentThemed: '#3770B1',
	colorTextPrimary: '#000000',
	colorTextPrimaryInvariably: '#000000',
	colorTextSecondary: resolveColor(theme.colors.text_secondary),
	colorTextSubhead: resolveColor(theme.colors.text_subhead),
	colorTextTertiary: resolveColor(theme.colors.text_tertiary),
	colorTextContrast: resolveColor(theme.colors.counter_prominent_text),
	colorTextContrastThemed: resolveColor(theme.colors.background_content),
	colorTextPositive: resolveColor(theme.colors.button_commerce_background),
	colorTextNegative: resolveColor(theme.colors.destructive),
	colorTextLink: resolveColor(theme.colors.text_link),
	colorTextLinkThemed: resolveColor(theme.colors.link_alternate),
	// colorTextLinkVisited: '#4986CC',
	colorTextMuted: resolveColor(theme.colors.text_muted),
	colorLinkContrast: '#FFFFFF',

	// Icon
	colorIconAccent: resolveColor(theme.colors.accent),
	colorIconAccentThemed: '#3770B1',
	// colorIconPrimary: '#E1E3E6',
	colorIconPrimaryInvariably: '#2C2D2E',
	colorIconMedium: resolveColor(theme.colors.icon_medium),
	colorIconMediumAlpha: resolveColor(theme.colors.icon_medium_alpha),
	colorIconSecondary: resolveColor(theme.colors.icon_secondary),
	colorIconSecondaryAlpha: resolveColor(theme.colors.icon_secondary_alpha),
	colorIconTertiary: resolveColor(theme.colors.icon_tertiary),
	colorIconTertiaryAlpha: resolveColor(theme.colors.icon_tertiary_alpha),
	colorIconContrast: resolveColor(theme.colors.icon_alpha_placeholder),
	colorIconContrastThemed: resolveColor(theme.colors.control_tint),
	// colorIconContrastSecondary: '#F2F3F5',
	colorIconPositive: resolveColor(theme.colors.button_commerce_background),
	colorIconNegative: resolveColor(theme.colors.destructive),

	// Stroke
	colorStrokeAccent: resolveColor(theme.colors.accent),
	colorStrokeAccentThemed: '#3770B1',
	colorSeparatorPrimary: '#DCE1E6',
	colorSeparatorPrimary2x: '#CBCCCD',
	colorSeparatorPrimary3x: '#BEBFC1',
	// colorSeparatorPrimaryAlpha: 'rgba(255, 255, 255, 0.12)', // resolveColor(theme.colors.separator_alpha),
	colorSeparatorSecondary: resolveColor(theme.colors.separator_alternate),
	colorStrokePositive: resolveColor(theme.colors.button_commerce_background),
	colorStrokeNegative: resolveColor(theme.colors.destructive),
	// colorStrokeContrast: '#FFFFFF',
	colorImageBorderAlpha: resolveColor(theme.colors.image_border),
	// colorFieldBorderAlpha: resolveColor(theme.colors.field_border),

	// Palette
	colorAccentBlue: resolveColor(theme.colors.dynamic_blue),
	colorAccentGray: resolveColor(theme.colors.dynamic_gray),
	colorAccentRed: resolveColor(theme.colors.dynamic_red),
	colorAccentOrange: resolveColor(theme.colors.dynamic_orange),
	colorAccentOrangePeach: resolveColor(theme.colors.dynamic_orange_peach),
	colorAccentLime: '#BFF74F',
	colorAccentGreen: resolveColor(theme.colors.dynamic_green),
	colorAccentCyan: '#7CF4DC',
	colorAccentAzure: '#3F8AE0',
	colorAccentPurple: resolveColor(theme.colors.dynamic_purple),
	colorAccentViolet: '#792EC0',
	colorAccentPink: '#F685FF',
	// colorAccentSecondary: '#3F8AE0',

	// Other

	// colorOverlayPrimary: resolveColor(theme.colors.primary_overlay_badge),
	colorOverlaySecondary: 'rgba(44, 45, 46, 0.5)',
	// colorAvatarOverlay: 'rgba(0, 0, 0, 0.6)',
	// colorAvatarOverlayInverseAlpha: 'rgba(255, 255, 255, 0.85)',
	// colorImagePlaceholder: resolveColor(
	// 	theme.colors.placeholder_icon_background,
	// ),
	// colorImagePlaceholderAlpha: resolveColor(
	// 	theme.colors.placeholder_icon_background_opaque,
	// ),
	colorSkeletonFrom: resolveColor(theme.colors.skeleton_foreground_from),
	colorSkeletonTo: resolveColor(theme.colors.skeleton_foreground_to),
	colorWriteBarIcon: resolveColor(theme.colors.writebar_icon),
	colorWriteBarInputBackground: resolveColor(theme.colors.input_background),
	colorWriteBarInputBorder: resolveColor(theme.colors.input_border),
	// colorWriteBarInputBorderAlpha: resolveColor(theme.colors.input_border),
	// colorActionSheetText: '#529EF4',
	colorTrackBackground: resolveColor(theme.colors.loader_track_fill),
	colorTrackBuffer: resolveColor(theme.colors.loader_track_value_fill),
	colorSearchFieldBackground: resolveColor(theme.colors.search_bar_field_background),
	colorPanelHeaderIcon: resolveColor(theme.colors.accent),
	colorButtonText: '#346297',
	colorButtonIcon: '#346297',
	colorButtonStroke: '#346297',
	// colorSegmentedControl: resolveColor(
	// 	theme.colors.segmented_control_bar_background,
	// ),
	// colorTransparent: 'transparent',
});

const vkComLightColor: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		...lightColors.colors,
		...vkComColors(vkcom_light),
		colorBackgroundNegativeTint: '#FAEBEB',
		colorBackgroundPositiveTint: '#E8F9E8',
	},
};

const vkComFontsPartial: DeepPartial<typeof fonts> = {
	fontFamilyFallbacks,
	fontFamilyAccent,
	fontFamilyBase,

	fontDisplayTitle1: {
		regular: {
			fontFamily: fontFamilyAccent,
		},
	},
	fontDisplayTitle2: {
		regular: {
			fontFamily: fontFamilyAccent,
		},
		compact: {
			fontFamily: fontFamilyAccent,
		},
	},
	fontDisplayTitle3: {
		regular: {
			fontFamily: fontFamilyAccent,
		},
	},
	fontDisplayTitle4: {
		regular: {
			fontFamily: fontFamilyAccent,
		},
	},
	fontTitle1: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontTitle2: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontTitle3: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontHeadline2: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontParagraph: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontFootnote: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption1: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption1Caps: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption2: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption2Caps: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption3: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},
	fontCaption3Caps: {
		regular: {
			fontFamily: fontFamilyBase,
		},
	},

	fontHeadline1: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 14,
			lineHeight: 18,
		},
	},

	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 14,
			lineHeight: 18,
		},
	},

	fontText: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
		},
		compact: {
			fontSize: 13,
			lineHeight: 16,
		},
	},
};

export const vkComFonts = lodash.merge<typeof fonts, DeepPartial<typeof fonts>>(
	lodash.cloneDeep(fonts),
	vkComFontsPartial,
);

export const vkComTheme: ThemeVkComDescription = {
	...lightTheme,
	...vkComLightColor,
	themeName: 'vkCom',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBase',

	sizeBorderRadius: {
		regular: 8,
	},
	sizeBorderRadiusPaper: {
		regular: 12,
	},

	...vkComFonts,

	sizeBasePaddingHorizontal: {
		regular: 12,
	},
	sizePopupSmall: {
		regular: 448,
	},

	// Компонент Switch
	sizeSwitchHeight: {
		regular: 10,
		compact: 10,
	},
	sizeSwitchWidth: {
		regular: 27,
		compact: 27,
	},
	sizeSwitchPin: {
		regular: 16,
		compact: 16,
	},

	// Компонент PanelHeader
	sizePanelHeaderHeight: {
		compact: 48,
		regular: 48,
	},

	// FormItem
	sizeFormItemPaddingVertical: {
		regular: 8,
	},
};

const vkComDarkColor: ColorsDescription = {
	colorsScheme: 'dark',
	colors: {
		...darkColors.colors,
		...vkComColors(vkcom_dark),
		// Background
		colorBackgroundAccentThemed: {
			normal: resolveColor(vkcom_dark.colors.button_primary_background),
			hover: '#D8DBDF',
			active: '#CFD2D8',
		},
		colorBackgroundAccentThemedAlpha: 'rgba(255, 255, 255, 0.2)',
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.10)',
			hover: 'rgba(255, 255, 255, 0.12)',
			active: 'rgba(255, 255, 255, 0.14)',
		},
		colorBackgroundContrastThemed: '#323232',
		colorBackgroundModalInverse: '#FFFFFF',

		// Text
		colorTextPrimary: '#E1E3E6',
		colorTextAccentThemed: '#E1E3E6',
		colorLinkContrast: '#FFFFFF',

		// Icon
		colorIconAccentThemed: '#E1E3E6',

		// Stroke
		colorStrokeAccentThemed: '#E1E3E6',
		colorSeparatorPrimary: '#363738',
		colorSeparatorPrimary2x: '#444546',
		colorSeparatorPrimary3x: '#505253',
		colorBackgroundNegativeTint: '#522E2E',
		colorBackgroundPositiveTint: '#2F422F',

		// Palette
		colorAccentLime: '#CAF96C',
		colorAccentCyan: '#55F1D2',
		colorAccentAzure: '#5D9EE9',
		colorAccentViolet: '#A94FFF',
		colorAccentPink: '#F899FF',

		// Other
		colorOverlaySecondary: 'rgba(55, 56, 57, 0.5)',
		colorButtonText: '#E1E3E6',
		colorButtonIcon: '#E1E3E6',
		colorButtonStroke: '#E1E3E6',
	},
};

export const vkComThemeDark: ThemeVkComDarkDescription = {
	...vkComTheme,
	...vkComDarkColor,
	...darkGradient,
	...darkElevation,
	themeName: 'vkComDark',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBaseDark',
	colorsScheme: 'dark',
};
