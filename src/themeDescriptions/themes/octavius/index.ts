import {getRGBA, toneOpacity} from '@/build/helpers/cssHelpers';
import {ThemeOctaviusDescription} from '@/interfaces/themes/octavius';
import {
	darkTheme,
	darkThemeElevation,
	lightTheme,
} from '@/themeDescriptions/base/paradigm';

export const octaviusTheme: ThemeOctaviusDescription = {
	...lightTheme,
	themeName: 'octavius',
	themeNameBase: 'octavius',
	colors: {
		...lightTheme.colors,
		colorBgThumbnail: 'rgba(0, 16, 61, 0.08)',
		colorBgContrast: '#2C2D2E',
		colorSocialVk: '#2787F5',
		colorSocialOk: '#ee8208',
		colorSocialMir: '#117eda',
		colorSocialFb: '#0561af',
		colorSocialTwitter: '#00bff3',
		colorSocialDribbble: '#ea4c89',
		colorSocialBehance: '#0057ff',
		colorPaletteRed1: '#fc2c38',
		colorPaletteRed2: '#eb1981',
		colorPaletteRed3: '#ff71bb',
		colorPaletteOrange1: '#ff8b2e',
		colorPaletteOrange2: getRGBA('#FF9E00', 0.12),
		colorPaletteYellow1: '#ffc311',
		colorPaletteGreen1: '#aee113',
		colorPaletteGreen2: '#59c354',
		colorPaletteGreen3: '#37eb94',
		colorPaletteGreen4: '#00b1b3',
		colorPaletteGreen5: getRGBA('#5CBA38', 0.12),
		colorPaletteGreen6: getRGBA('#00E6B4', 0.08),
		colorPaletteBlue1: '#2951ff',
		colorPaletteBlue2: '#00abf2',
		colorPaletteBlue3: '#26dfdf',
		colorPaletteBlue4: getRGBA('#005FF9', 0.12),
		colorPaletteViolet1: '#6c00ff',
		colorPaletteViolet2: '#ae73ff',
		colorAlert: '#c1341b',
		colorBgPlaceholder: '#ffffff',
		colorBgPromo: '#EBEEF5',
		colorTrueBlack: '#000000',
		colorTrueWhite: '#ffffff',

		octaviusColorText: '#333333',
		octaviusColorIcon: '#333333',

		octaviusColorButtonText: '#333333',
		octaviusColorButtonTextBright: '#333333',
		octaviusColorButtonIcon: '#333333',
		octaviusColorButtonIconBright: '#333333',
		octaviusColorButtonTextSecondary: '#93969B',
		octaviusColorButtonIconSecondary: '#B6B8BE',
		octaviusColorButtonBackgroundPure: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.04)',
			active: 'rgba(0, 16, 61, 0.08)',
		},

		octaviusColorBackground: lightTheme.colors.colorBackground,
		octaviusColorBackgroundAccentToned: toneOpacity(
			lightTheme.colors.colorBackgroundAccent,
			0.12,
		),
		octaviusColorOverlayBackground: 'transparent',

		octaviusColorHeaderBackground: lightTheme.colors.colorBackgroundAccent,
		octaviusColorHeaderButtonText: lightTheme.colors.colorTextContrast,
		octaviusColorHeaderButtonBackground: {
			normal: 'transparent',
			hover: getRGBA('#00103D', 0.12),
			active: getRGBA('#00103D', 0.24),
		},
		octaviusColorHeaderIcon: lightTheme.colors.colorIconContrast,
		octaviusColorHeaderTextSecondary: '#93969b',
		octaviusColorHeaderSearchIcon: '#b6b8be',
		octaviusColorHeaderSearchChipBackground:
			lightTheme.colors.colorBackgroundSecondary,
		octaviusColorHeaderSearchChipBackgroundEditable: '#ffffff',
		octaviusColorHeaderSearchChipBorderEditable:
			lightTheme.colors.colorFieldBorder,

		octaviusColorHeaderSearchBackground: '#ffffff',
		octaviusColorHeaderSearchBackgroundCollapsed: '#ffffff',

		octaviusColorHeaderSearchText: lightTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			lightTheme.colors.colorTextSecondary,
		octaviusColorHeaderFilterText: 'rgba(255, 255, 255, .48)',

		octaviusColorHeaderProgress:
			lightTheme.colors.colorBackgroundAccentAlternative,

		octaviusColorPortalMenuBackground: lightTheme.colors.colorBackground,

		octaviusColorSidebarBackground: '#ffffff',
		octaviusColorSidebarItemIconPrimary: lightTheme.colors.colorIconPrimary,

		octaviusColorSidebarCounterBackground:
			lightTheme.colors.colorTransparent,

		octaviusColorSidebarCounterText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemBackground: lightTheme.colors.colorTransparent,
		octaviusColorSidebarScrollbar: 'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarNavItemIcon: '#333333',
		octaviusColorSidebarNavItemText: '#333333',
		octaviusColorSidebarNavItemButtonBackground: 'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarShortNavItemButtonBackground:
			'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarComposeButtonBackground: '#ffffff',
		octaviusColorSidebarComposeButtonText: '#2c2d2e',
		octaviusColorSidebarComposeButtonIcon: '#2c2d2e',

		octaviusColorContentScrollbar: 'rgba(0, 16, 61, 0.16)',

		octaviusColorThreadFooterBackground: '#ebecef',

		octaviusColorIconUnread: '#005FF9',
		octaviusColorIconFavorite: '#fc2c38',
		octaviusColorIconOrder: '#ff54aa',
		octaviusColorIconFinance: '#2fc885',
		octaviusColorIconRegistration: '#ff9e00',
		octaviusColorIconTravel: '#ba34fc',
		octaviusColorIconEvent: '#09a6fa',
		octaviusColorIconFees: '#e60000',

		octaviusColorListLetterBackground: {
			normal: '#ffffff',
			hover: '#f5f5f7',
			active: '#ebecef',
		},
		octaviusColorListLetterSeparator:
			lightTheme.colors.colorSeparatorPrimary,
		octaviusColorListLetterAdvBackground: '#F0F5FF',

		octaviusColorDatasetBackground:
			lightTheme.colors.colorBackgroundContent,

		octaviusColorEmptyStateText: '#333333',
		octaviusIconBackgroundContrastColor: '#333333',
		octaviusColorBadgeBackground: 'rgba(0, 16, 61, 0.08)',
		octaviusColorMetaThreadImageColor: '#ffffff',
		octaviusColorBorderSolid: '#E0E2E8',
		octaviusColorOctopusText: '#005bd1',
		octaviusColorPanelBackgroundSelected: '#F3F3F5',
	},

	octaviusElevationCard: 'none',
	octaviusTextShadowEmptyStateText: 'none',
	octaviusElevationHeader: 'none',
	octaviusPositionBackground: '50% 0',
	octaviusImageOverlayBackground: 'none',

	octaviusShadowSidebarNavItemText: 'none',
	octaviusFilterSidebarNavItemIcon: 'none',
	octaviusTextDecorationOctopusLink: 'none',
	octaviusTextDecorationOctopusLinkHover: 'underline',

	octaviusFontFamilyDefault: 'HelveticaNeue, Helvetica, Arial, sans-serif',

	octaviusFontFamilyMailSans:
		'MailSans, HelveticaNeue, Helvetica, Arial, sans-serif',

	octaviusFontFamilyGlobal: 'Arial, Tahoma, Verdana, sans-serif',
	octaviusFontFamilyMac: 'Helvetica, Arial, Tahoma, Verdana, sans-serif',
	octaviusFontFamilyDisplay: 'inherit',

	octaviusSizeHeadlineHeight: {
		regular: 36,
	},
	octaviusSizeLayoutWidthMax: {
		regular: 2150,
	},
	octaviusSizeLayoutWidthMin: {
		regular: 761,
	},
	octaviusSizeSidebarPaddingTop: {
		regular: 12,
	},
	octaviusSizeSidebarWidgetsHeightMin: {
		regular: 64,
	},
	octaviusSizeSidebarWidgetsHeightCompactMin: {
		regular: 104,
	},
};

export const octaviusDarkTheme: ThemeOctaviusDescription = {
	...octaviusTheme,
	...darkTheme,
	...darkThemeElevation,
	themeName: 'octaviusDark',
	colors: {
		...octaviusTheme.colors,
		...darkTheme.colors,
		colorBgThumbnail: '#1F1F1F',
		colorBgPlaceholder: '#000000',
		colorBgPromo: '#303030',

		octaviusColorPortalMenuBackground: '#19191A',
		octaviusColorSidebarItemBackground: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorBackground: '#000000',
		octaviusColorBackgroundAccentToned: toneOpacity(
			darkTheme.colors.colorBackgroundAccent,
			0.12,
		),

		octaviusColorHeaderBackground: '#161616',
		octaviusColorHeaderButtonText: darkTheme.colors.colorTextContrast,
		octaviusColorHeaderIcon: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderProgress:
			darkTheme.colors.colorBackgroundAccentAlternative,

		octaviusColorHeaderSearchBackground: '#1F1F1F',
		octaviusColorHeaderSearchBackgroundCollapsed:
			darkTheme.colors.colorBackgroundModal,
		octaviusColorHeaderSearchChipBackground:
			darkTheme.colors.colorBackgroundModal,
		octaviusColorHeaderSearchChipBackgroundEditable: '#313131',
		octaviusColorHeaderSearchChipBorderEditable: {
			normal: 'rgba(255, 255, 255, .48)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},
		octaviusColorHeaderSearchText: darkTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			darkTheme.colors.colorTextSecondary,

		octaviusColorSidebarBackground: '#303030',
		octaviusColorSidebarItemIconPrimary: '#E7E8EA',

		octaviusColorSidebarNavItemIcon: '#ffffff',
		octaviusColorSidebarNavItemText: '#ffffff',

		octaviusIconBackgroundContrastColor: '#ffffff',

		octaviusColorHeaderButtonBackground: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		octaviusColorButtonText: '#E7E8EA',
		octaviusColorButtonIcon: '#E7E8EA',
		octaviusColorButtonBackgroundPure: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},

		octaviusColorSidebarCounterBackground:
			darkTheme.colors.colorTransparent,

		octaviusColorSidebarCounterText: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarScrollbar: 'rgba(255, 255, 255, 0.12)',
		octaviusColorSidebarNavItemButtonBackground: {
			normal: 'rgba(255, 255, 255, 0.16)',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorContentScrollbar: 'rgba(255, 255, 255, 0.12)',

		octaviusColorIconUnread: '#0C7CFF',
		octaviusColorIconFavorite: '#FF4550',
		octaviusColorIconOrder: '#F94CA3',
		octaviusColorIconFinance: '#24C780',
		octaviusColorIconRegistration: '#FF9C37',
		octaviusColorIconTravel: '#C15DF3',
		octaviusColorIconEvent: '#3BBAFE',
		octaviusColorIconFees: '#EE3C3C',

		octaviusColorBadgeBackground: 'rgba(255, 255, 255, 0.08)',

		octaviusColorThreadFooterBackground: '#303030',

		octaviusColorMetaThreadImageColor: 'transparent',

		octaviusColorListLetterBackground:
			darkTheme.colors.colorBackgroundContent,
		octaviusColorListLetterSeparator:
			darkTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorListLetterAdvBackground: '#151515',

		octaviusColorDatasetBackground: darkTheme.colors.colorBackgroundContent,
		octaviusColorEmptyStateText: darkTheme.colors.colorTextPrimary,
		octaviusColorBorderSolid: 'transparent',
		octaviusColorOctopusText: '#E7E8EA',
	},

	octaviusTextDecorationOctopusLink: 'underline',
	octaviusTextDecorationOctopusLinkHover: 'none',
};

export const octaviusWhiteTheme: ThemeOctaviusDescription = {
	...octaviusTheme,
	themeName: 'octaviusWhite',
	colors: {
		...octaviusTheme.colors,

		octaviusColorHeaderBackground: '#FFFFFF',
		octaviusColorHeaderButtonText: octaviusTheme.colors.colorTextPrimary,
		octaviusColorHeaderIcon: octaviusTheme.colors.colorIconPrimary,

		octaviusColorHeaderSearchBackground: '#f0f1f3',
		octaviusColorHeaderSearchBackgroundCollapsed: '#f0f1f3',
		octaviusColorHeaderSearchChipBackground: {
			normal: '#FFFFFF',
			hover: 'rgba(255, 255, 255, 0.64)',
			active: 'rgba(255, 255, 255, 0.4)',
		},
		octaviusColorHeaderSearchChipBackgroundEditable: '#ffffff',
		octaviusColorHeaderSearchChipBorderEditable: '#FFFFFF',
		octaviusColorHeaderButtonBackground: '#FFFFFF',
	},

	octaviusElevationHeader: '0px 0px 16px rgba(2, 13, 41, 0.16)',
};
