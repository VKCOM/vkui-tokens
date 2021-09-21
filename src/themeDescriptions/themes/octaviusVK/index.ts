import {toneOpacity} from '@/build/helpers/cssHelpers';
import {ThemeOctaviusDescription} from '@/interfaces/themes/octavius';
import {
	darkColors as vkDarkColors,
	lightColors as vkLightColors,
	lightTheme as vkLightTheme,
} from '@/themeDescriptions/base/vk';
import {octaviusTheme} from '@/themeDescriptions/themes/octavius';

const fontFamilyAccent = 'VKSansDisplay, Helvetica, Arial, sans-serif';
const fontFamilyBase = 'VKSansText, Helvetica, Arial, sans-serif';
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 500;
const fontWeightBase1 = 400;

// TODO: Придумать более изящный способ наследования
const octaviusVKThemeBase: ThemeOctaviusDescription = {
	...octaviusTheme,
	themeName: 'octaviusVK',
	sizeBorderRadius: vkLightTheme.sizeBorderRadius,

	// Цвета
	colors: {
		...octaviusTheme.colors,
		...vkLightColors.colors,
		colorBackgroundSecondary: 'rgba(0, 28, 61, 0.05)',
		colorThumbErrorBackground: `rgba(230, 70, 70, 0.12)`,
		colorBackgroundAccentAlternative:
			vkLightColors.colors.colorBackgroundAccent,

		octaviusColorBackground: '#EDEEF0',
		octaviusColorBackgroundAccentToned: toneOpacity(
			vkLightColors.colors.colorBackgroundAccent,
			0.12,
		),
		octaviusColorIconUnread: vkLightColors.colors.colorIconAccent,
		octaviusColorIconFavorite: vkLightColors.colors.colorAccentRed,
		octaviusColorIconOrder: '#ff51ab',
		octaviusColorIconFinance: '#22c983',
		octaviusColorIconRegistration: '#ffa000',
		octaviusColorIconTravel: '#bd19ff',
		octaviusColorIconEvent: '#07a3fc',
		octaviusColorIconFees: '#e70101',

		octaviusColorHeaderBackground: {
			normal: '#ffffff',
			hover: '#f5f6f8',
			active: '#eff1f3',
		},
		octaviusColorHeaderButtonText: '#000000',
		octaviusColorHeaderIcon: vkLightColors.colors.colorIconAccent,
		octaviusColorHeaderTextSecondary:
			vkLightColors.colors.colorTextSecondary,
		octaviusColorHeaderProgress: vkLightColors.colors.colorBackgroundAccent,

		octaviusColorHeaderSearchBackground: 'rgba(0, 16, 61, 0.07)',
		octaviusColorHeaderSearchBackgroundCollapsed: 'rgba(0, 16, 61, 0.07)',
		octaviusColorHeaderSearchChipBackground: {
			normal: '#FFFFFF',
			hover: 'rgba(255, 255, 255, 0.64)',
			active: 'rgba(255, 255, 255, 0.4)',
		},
		octaviusColorHeaderSearchIcon: '#b6b8be',
		octaviusColorHeaderSearchText: vkLightColors.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			vkLightColors.colors.colorTextSecondary,

		octaviusColorSidebarItemBackground: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.04)',
			active: 'rgba(0, 16, 61, 0.08)',
		},
		octaviusColorSidebarItemIconPrimary:
			vkLightColors.colors.colorIconAccent,
		octaviusColorSidebarCounterBackground: '#AEB7C2',
		octaviusColorSidebarCounterText: '#FFFFFF',
		octaviusColorSidebarScrollbar: 'rgba(0, 16, 61, 0.08)',

		octaviusColorContentScrollbar: '#C4C8CC',

		octaviusColorDatasetBackground:
			octaviusTheme.colors.colorBackgroundContent,
		octaviusColorListLetterSeparator:
			vkLightColors.colors.colorSeparatorPrimary,
		octaviusColorListLetterBackground: {
			normal: '#ffffff',
			hover: '#E4E5E9',
			active: '#DADCE2',
		},
		octaviusColorEmptyStateText: octaviusTheme.colors.colorTextPrimary,

		octaviusColorSidebarItemIcon: '#3F8AE0',
		octaviusColorEmptyStateTextLink: '#4986cc',
	},

	octaviusElevationCard: '0px 1px 0px 0px #DCE1E6, 0px 0px 0px 1px #E7E8EC',
	octaviusElevationHeader: '0px 1px 0px 0px #E7E8EC',

	// Типографика
	// Размеры такие же, как в теме octavius, а вот fontFamily другой
	fontFamilyAccent,
	fontFamilyBase,
	fontTitle1: {
		regular: {
			...vkLightTheme.fontTitle1.regular,
			fontSize: 24,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle2: {
		regular: {
			...vkLightTheme.fontTitle2.regular,
			fontSize: 20,
			lineHeight: 26,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle3: {
		regular: {
			...vkLightTheme.fontTitle3.regular,
			fontSize: 17,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontHeadline: {
		regular: {
			...vkLightTheme.fontHeadline.regular,
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
			...vkLightTheme.fontText.regular,
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontSubhead: {
		regular: {
			...vkLightTheme.fontSubhead.regular,
			fontSize: 14,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnote: {
		regular: {
			...vkLightTheme.fontFootnote.regular,
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnoteCaps: {
		regular: {
			...vkLightTheme.fontFootnoteCaps.regular,
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption1: {
		regular: {
			...vkLightTheme.fontCaption1.regular,
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption1Caps: {
		regular: {
			...vkLightTheme.fontCaption1Caps.regular,
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption2: {
		regular: {
			...vkLightTheme.fontCaption2.regular,
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption2Caps: {
		regular: {
			...vkLightTheme.fontCaption2Caps.regular,
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},
	fontCaption3: {
		regular: {
			...vkLightTheme.fontCaption3.regular,
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption3Caps: {
		regular: {
			...vkLightTheme.fontCaption3Caps.regular,
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
		},
	},

	// todo удалить и заменить на контекстные токены в проектах
	fontH0: {
		regular: {
			fontSize: 28,
			lineHeight: 32,
			letterSpacing: '-0.56px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
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
			letterSpacing: '-0.48px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
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
			letterSpacing: '-0.4px',
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			fontSize: 28,
			lineHeight: 32,
		},
	},
};

export const octaviusVKTheme: ThemeOctaviusDescription = {
	...octaviusVKThemeBase,

	octaviusFontFamilyDefault: fontFamilyBase,
	octaviusFontFamilyMailSans: fontFamilyAccent,
	octaviusFontFamilyGlobal: fontFamilyBase,
	octaviusFontFamilyMac: fontFamilyBase,
	octaviusFontFamilyDisplay: fontFamilyAccent,
};

export const octaviusVKDarkTheme: ThemeOctaviusDescription = {
	...octaviusVKTheme,
	themeName: 'octaviusVKDark',
	colorsScheme: 'dark',
	colors: {
		...octaviusVKTheme.colors,
		...vkDarkColors.colors,
		colorThumbErrorBackground: vkDarkColors.colors.colorImagePlaceholder,

		colorTransparent: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},

		colorBackgroundSecondary: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		colorBackgroundAccentAlternative:
			vkDarkColors.colors.colorBackgroundAccent,

		octaviusColorBackground: '#000000',
		octaviusColorBackgroundAccentToned: toneOpacity(
			vkDarkColors.colors.colorBackgroundAccent,
			0.12,
		),

		octaviusColorIconUnread: vkDarkColors.colors.colorIconAccent,
		octaviusColorIconFavorite: vkDarkColors.colors.colorAccentRed,

		octaviusColorHeaderBackground: {
			normal: '#161616',
			hover: '#2B2B2C',
			active: '#353535',
		},

		octaviusColorPortalMenuBackground: 'rgb(31, 31, 31)',
		octaviusColorHeaderButtonText: vkDarkColors.colors.colorTextPrimary,
		octaviusColorHeaderIcon: vkDarkColors.colors.colorIconAccent,
		octaviusColorHeaderTextSecondary:
			vkDarkColors.colors.colorTextSecondary,
		octaviusColorHeaderProgress: vkDarkColors.colors.colorBackgroundAccent,

		octaviusColorHeaderSearchBackground: 'rgba(255, 255, 255, 0.07)',
		octaviusColorHeaderSearchBackgroundCollapsed:
			'rgba(255, 255, 255, 0.07)',
		octaviusColorHeaderSearchChipBackground: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.12)',
			active: 'rgba(255, 255, 255, 0.16)',
		},
		octaviusColorHeaderSearchIcon: vkDarkColors.colors.colorIconSecondary,
		octaviusColorHeaderSearchText: vkDarkColors.colors.colorTextSecondary,
		octaviusColorHeaderSearchTextCollapsed:
			vkDarkColors.colors.colorTextSecondary,

		octaviusColorSidebarItemBackground: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.12)',
			active: 'rgba(255, 255, 255, 0.2)',
		},
		octaviusColorSidebarItemIconPrimary:
			vkDarkColors.colors.colorIconAccent,
		octaviusColorSidebarCounterBackground: '#000000',
		octaviusColorSidebarCounterText: vkDarkColors.colors.colorTextSecondary,
		octaviusColorSidebarScrollbar: 'rgba(255, 255, 255, 0.12)',

		octaviusColorContentScrollbar: 'rgba(255, 255, 255, 0.2)',

		octaviusColorDatasetBackground:
			vkDarkColors.colors.colorBackgroundContent,
		octaviusColorListLetterSeparator:
			vkDarkColors.colors.colorSeparatorPrimary,
		octaviusColorListLetterBackground: {
			normal: '#19191A',
			hover: '#2B2B2C',
			active: '#353535',
		},
		octaviusColorEmptyStateText: vkDarkColors.colors.colorTextPrimary,

		octaviusColorHeaderButtonBackground: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},
		octaviusColorHeaderSearchChipBorderEditable: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		octaviusColorBorderSolid: 'transparent',
		octaviusColorSidebarItemIcon: '#e1e3e6',
		octaviusColorSidebarItemText: '#e1e3e6',

		octaviusColorBackgroundSecondary: '#2D2D2E',
	},

	octaviusElevationCard: 'none',
	octaviusElevationHeader: 'none',
};
