import vkComPalette from '@vkontakte/appearance/main.valette/palette_web.json';
import { vkcom_dark, vkcom_light } from '@vkontakte/appearance/main.valette/scheme_web.json';

import { ClusterData, resolveColor } from '@/build/helpers/appearance';
import { alias } from '@/build/helpers/tokenHelpers';
import { ColorsDescription } from '@/interfaces/general';
import { ThemeVkComDescription } from '@/interfaces/themes/vkCom';
import { ThemeVkComDarkDescription } from '@/interfaces/themes/vkComDark';
import {
	darkColors,
	darkElevation,
	darkGradient,
	lightColors,
	lightTheme,
	vkLocalColors,
} from '@/themeDescriptions/base/vk';

const resolveVkComColor = (clusterData: ClusterData) => resolveColor(clusterData, vkComPalette);

const fontFamilyAccent = '-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontFamilyBase = '-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontWeightAccent2 = 500;
const fontWeightBase3 = 400;

const vkComColors = (theme: typeof vkcom_light) => ({
	// Background
	colorBackgroundAccent: resolveVkComColor(theme.colors.accent),
	colorBackgroundAccentThemed: resolveVkComColor(theme.colors.button_primary_background),
	// colorBackgroundAccentTint: '#5a9eff',
	colorBackgroundAccentAlternative: resolveVkComColor(theme.colors.accent),
	colorBackground: resolveVkComColor(theme.colors.background_page),
	colorBackgroundContent: resolveVkComColor(theme.colors.background_content),
	colorBackgroundSecondary: resolveVkComColor(theme.colors.content_tint_background),
	// colorBackgroundSecondaryAlpha: {
	// 	normal: 'rgba(255, 255, 255, 0.04)',
	// 	hover: 'rgba(255, 255, 255, 0.08)',
	// 	active: 'rgba(255, 255, 255, 0.12)',
	// },
	// colorBackgroundSecondaryAlpha: resolveVkComColor(
	// 	theme.colors.button_secondary_background,
	// ),
	colorBackgroundTertiary: resolveVkComColor(theme.colors.background_light),
	colorBackgroundContrast: resolveVkComColor(theme.colors.media_overlay_button_background),
	// colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.20)',
	colorBackgroundContrastInverse: resolveVkComColor(theme.colors.media_overlay_button_foreground),
	colorBackgroundModal: resolveVkComColor(theme.colors.background_suggestions),
	colorBackgroundModalInverse: resolveVkComColor(theme.colors.modal_card_header_close),
	// colorBackgroundWarning: resolveVkComColor(
	// 	theme.colors.content_warning_background,
	// ),
	colorBackgroundPositive: resolveVkComColor(theme.colors.button_commerce_background),
	colorBackgroundNegative: resolveVkComColor(theme.colors.button_secondary_destructive_foreground),
	// colorBackgroundNegativeTint: resolveVkComColor(
	// 	theme.colors.field_error_background,
	// ),
	// colorBackgroundPositiveTint: '#E8f9e8',
	colorFieldBackground: resolveVkComColor(theme.colors.field_background),
	colorHeaderBackground: resolveVkComColor(theme.colors.header_background),

	// Text
	colorTextAccent: resolveVkComColor(theme.colors.accent),
	colorTextAccentThemed: resolveVkComColor(theme.colors.button_primary_background),
	colorTextPrimary: resolveVkComColor(theme.colors.text_primary),
	colorTextPrimaryInvariably: resolveVkComColor(theme.colors.media_overlay_button_foreground),
	colorTextSecondary: resolveVkComColor(theme.colors.content_placeholder_text),
	colorTextSubhead: resolveVkComColor(theme.colors.text_subhead),
	colorTextTertiary: resolveVkComColor(theme.colors.text_tertiary),
	colorTextContrast: resolveVkComColor(theme.colors.counter_prominent_text),
	colorTextContrastThemed: resolveVkComColor(theme.colors.background_content),
	colorTextPositive: resolveVkComColor(theme.colors.button_commerce_background),
	colorTextNegative: resolveVkComColor(theme.colors.destructive),
	colorTextLink: resolveVkComColor(theme.colors.text_link),
	colorTextLinkThemed: resolveVkComColor(theme.colors.link_alternate),
	// colorTextLinkVisited: '#4986CC',
	colorTextMuted: resolveVkComColor(theme.colors.text_muted),
	colorLinkContrast: resolveVkComColor(theme.colors.text_muted),

	// Icons
	colorIconAccent: resolveVkComColor(theme.colors.accent),
	colorIconAccentThemed: resolveVkComColor(theme.colors.button_primary_background),
	// colorIconPrimary: '#E1E3E6',
	colorIconPrimaryInvariably: resolveVkComColor(theme.colors.media_overlay_button_foreground),
	colorIconMedium: resolveVkComColor(theme.colors.icon_medium),
	colorIconMediumAlpha: resolveVkComColor(theme.colors.icon_medium_alpha),
	colorIconSecondary: resolveVkComColor(theme.colors.icon_secondary),
	colorIconSecondaryAlpha: resolveVkComColor(theme.colors.icon_secondary_alpha),
	colorIconTertiary: resolveVkComColor(theme.colors.icon_tertiary),
	colorIconTertiaryAlpha: resolveVkComColor(theme.colors.icon_tertiary_alpha),
	colorIconContrast: resolveVkComColor(theme.colors.icon_alpha_placeholder),
	colorIconContrastThemed: resolveVkComColor(theme.colors.control_tint),
	// colorIconContrastSecondary: '#F2F3F5',
	colorIconPositive: resolveVkComColor(theme.colors.button_commerce_background),
	colorIconNegative: resolveVkComColor(theme.colors.destructive),

	// Stroke
	colorStrokeAccent: resolveVkComColor(theme.colors.accent),
	colorStrokeAccentThemed: resolveVkComColor(theme.colors.button_primary_background),
	// colorSeparatorPrimary: '#363738', // resolveVkComColor(theme.colors.separator_common),
	// colorSeparatorPrimary2x: '#444546',
	// colorSeparatorPrimary3x: '#505253',
	// colorSeparatorPrimaryAlpha: 'rgba(255, 255, 255, 0.12)', // resolveVkComColor(theme.colors.separator_alpha),
	colorSeparatorSecondary: resolveVkComColor(theme.colors.separator_alternate),
	colorStrokePositive: resolveVkComColor(theme.colors.button_commerce_background),
	colorStrokeNegative: resolveVkComColor(theme.colors.destructive),
	// colorStrokeContrast: '#FFFFFF',
	colorImageBorderAlpha: resolveVkComColor(theme.colors.image_border),
	// colorFieldBorderAlpha: resolveVkComColor(theme.colors.field_border),

	// Palette
	colorAccentBlue: resolveVkComColor(theme.colors.dynamic_blue),
	colorAccentGray: resolveVkComColor(theme.colors.dynamic_gray),
	colorAccentRed: resolveVkComColor(theme.colors.dynamic_red),
	colorAccentGreen: resolveVkComColor(theme.colors.dynamic_green),
	colorAccentOrange: resolveVkComColor(theme.colors.dynamic_orange),
	colorAccentPurple: resolveVkComColor(theme.colors.dynamic_purple),
	colorAccentViolet: resolveVkComColor(theme.colors.dynamic_violet),
	// colorAccentSecondary: '#3F8AE0',

	// Other

	// colorOverlayPrimary: resolveVkComColor(theme.colors.primary_overlay_badge),
	// colorAvatarOverlay: 'rgba(0, 0, 0, 0.6)',
	// colorAvatarOverlayInverseAlpha: 'rgba(255, 255, 255, 0.85)',
	// colorImagePlaceholder: resolveVkComColor(
	// 	theme.colors.placeholder_icon_background,
	// ),
	// colorImagePlaceholderAlpha: resolveVkComColor(
	// 	theme.colors.placeholder_icon_background_opaque,
	// ),
	colorSkeletonFrom: resolveVkComColor(theme.colors.skeleton_foreground_from),
	colorSkeletonTo: resolveVkComColor(theme.colors.skeleton_foreground_to),
	colorWriteBarIcon: resolveVkComColor(theme.colors.writebar_icon),
	colorWriteBarInputBackground: resolveVkComColor(theme.colors.input_background),
	// colorWriteBarInputBorderAlpha: resolveVkComColor(theme.colors.input_border),
	// colorActionSheetText: '#529EF4',
	colorTrackBackground: resolveVkComColor(theme.colors.loader_track_fill),
	colorTrackBuffer: resolveVkComColor(theme.colors.loader_track_value_fill),
	colorSearchFieldBackground: resolveVkComColor(theme.colors.search_bar_field_background),
	colorPanelHeaderIcon: resolveVkComColor(theme.colors.accent),
	// colorSegmentedControl: resolveVkComColor(
	// 	theme.colors.segmented_control_bar_background,
	// ),
	// colorTransparent: 'transparent',
});

const vkComLightColor: ColorsDescription = {
	colorsScheme: 'light',
	colors: {
		...lightColors.colors,
		...vkComColors(vkcom_light),
	},
};

export const vkComTheme: ThemeVkComDescription = {
	...lightTheme,
	...vkComLightColor,
	colors: {
		...vkComLightColor.colors,
		...vkLocalColors(vkcom_light, vkComPalette),
	},
	themeName: 'vkCom',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBase',

	sizeBorderRadius: {
		regular: 8,
	},
	sizeBorderRadiusPaper: {
		regular: 12,
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
			fontSize: 14,
			lineHeight: 18,
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
			fontSize: 14,
			lineHeight: 18,
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
			fontSize: 13,
			lineHeight: 16,
		},
	},

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

		colorBackgroundAccentThemed: {
			normal: resolveColor(vkcom_dark.colors.button_primary_background),
			hover: '#D8DBDF',
			active: '#CFD2D8',
		},
	},
};

export const vkComThemeDark: ThemeVkComDarkDescription = {
	...vkComTheme,
	...vkComDarkColor,
	colors: {
		...vkComDarkColor.colors,
		...vkLocalColors(vkcom_dark, vkComPalette),
	},
	...darkGradient,
	...darkElevation,
	themeName: 'vkComDark',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBaseDark',
	colorsScheme: 'dark',
};
