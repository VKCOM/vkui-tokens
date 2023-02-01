import { vkcom_dark, vkcom_light } from '@vkontakte/appearance/main.valette/scheme_web.json';

import { ColorsDescription } from '@/interfaces/general';
import { ThemeVkComDescription } from '@/interfaces/themes/vkCom';
import { ThemeVkComDarkDescription } from '@/interfaces/themes/vkComDark';
import {
	darkColors,
	darkElevation,
	darkGradient,
	lightColors,
	lightTheme,
} from '@/themeDescriptions/base/vk';

import { resolveColor } from './appearance';

const vkComColors = (theme: typeof vkcom_light) => ({
	// Background
	colorBackgroundAccent: resolveColor(theme.colors.accent),
	colorBackgroundAccentThemed: resolveColor(theme.colors.button_primary_background),
	// colorBackgroundAccentTint: '#5a9eff',
	colorBackgroundAccentAlternative: resolveColor(theme.colors.accent),
	colorBackground: resolveColor(theme.colors.background_page),
	colorBackgroundContent: resolveColor(theme.colors.background_content),
	colorBackgroundSecondary: resolveColor(theme.colors.content_tint_background),
	// colorBackgroundSecondaryAlpha: {
	// 	normal: 'rgba(255, 255, 255, 0.04)',
	// 	hover: 'rgba(255, 255, 255, 0.08)',
	// 	active: 'rgba(255, 255, 255, 0.12)',
	// },
	// colorBackgroundSecondaryAlpha: resolveColor(
	// 	theme.colors.button_secondary_background,
	// ),
	colorBackgroundTertiary: resolveColor(theme.colors.background_light),
	colorBackgroundContrast: resolveColor(theme.colors.media_overlay_button_background),
	// colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.20)',
	colorBackgroundContrastInverse: resolveColor(theme.colors.media_overlay_button_foreground),
	colorBackgroundModal: resolveColor(theme.colors.background_suggestions),
	colorBackgroundModalInverse: resolveColor(theme.colors.modal_card_header_close),
	// colorBackgroundWarning: resolveColor(
	// 	theme.colors.content_warning_background,
	// ),
	colorBackgroundPositive: resolveColor(theme.colors.button_commerce_background),
	colorBackgroundNegative: resolveColor(theme.colors.button_secondary_destructive_foreground),
	// colorBackgroundNegativeTint: resolveColor(
	// 	theme.colors.field_error_background,
	// ),
	// colorBackgroundPositiveTint: '#E8f9e8',
	colorFieldBackground: resolveColor(theme.colors.field_background),
	colorHeaderBackground: resolveColor(theme.colors.header_background),

	// Text
	colorTextAccent: resolveColor(theme.colors.accent),
	colorTextAccentThemed: resolveColor(theme.colors.button_primary_background),
	colorTextPrimary: resolveColor(theme.colors.text_primary),
	colorTextPrimaryInvariably: resolveColor(theme.colors.media_overlay_button_foreground),
	colorTextSecondary: resolveColor(theme.colors.content_placeholder_text),
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
	colorLinkContrast: resolveColor(theme.colors.text_muted),

	// Icons
	colorIconAccent: resolveColor(theme.colors.accent),
	colorIconAccentThemed: resolveColor(theme.colors.button_primary_background),
	// colorIconPrimary: '#E1E3E6',
	colorIconPrimaryInvariably: resolveColor(theme.colors.media_overlay_button_foreground),
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
	colorStrokeAccentThemed: resolveColor(theme.colors.button_primary_background),
	// colorSeparatorPrimary: '#363738', // resolveColor(theme.colors.separator_common),
	// colorSeparatorPrimary2x: '#444546',
	// colorSeparatorPrimary3x: '#505253',
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
	colorAccentGreen: resolveColor(theme.colors.dynamic_green),
	colorAccentOrange: resolveColor(theme.colors.dynamic_orange),
	colorAccentPurple: resolveColor(theme.colors.dynamic_purple),
	colorAccentViolet: resolveColor(theme.colors.dynamic_violet),
	// colorAccentSecondary: '#3F8AE0',

	// Other

	// colorOverlayPrimary: resolveColor(theme.colors.primary_overlay_badge),
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
	// colorWriteBarInputBorderAlpha: resolveColor(theme.colors.input_border),
	// colorActionSheetText: '#529EF4',
	colorTrackBackground: resolveColor(theme.colors.loader_track_fill),
	colorTrackBuffer: resolveColor(theme.colors.loader_track_value_fill),
	colorSearchFieldBackground: resolveColor(theme.colors.search_bar_field_background),
	colorPanelHeaderIcon: resolveColor(theme.colors.accent),
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
	},
};

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
	...darkGradient,
	...darkElevation,
	themeName: 'vkComDark',
	themeNameBase: 'vkCom',
	themeInheritsFrom: 'vkBaseDark',
	colorsScheme: 'dark',
};
