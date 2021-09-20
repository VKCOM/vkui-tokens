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
	octaviusShadowSidebarItemText: 'none',
	octaviusShadowSidebarItemIcon: 'none',
	octaviusElevationCard: 'none',
	octaviusShadowEmptyStateText: 'none',
	octaviusElevationHeader: 'none',
	colors: {
		...lightTheme.colors,
		colorBackgroundThumbnail: '#EBECEF',
		colorBackgroundThumbnailAlpha: 'rgba(0, 16, 61, 0.08)',
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

		octaviusColorBackground: lightTheme.colors.colorBackground,
		octaviusColorBackgroundAccentToned: toneOpacity(
			lightTheme.colors.colorBackgroundAccent,
			0.12,
		),

		octaviusColorHeaderBackground: lightTheme.colors.colorBackgroundAccent,
		octaviusColorHeaderButtonText: lightTheme.colors.colorTextContrast,
		octaviusColorHeaderButtonBackground: lightTheme.colors.colorTransparent,
		octaviusColorHeaderIcon: lightTheme.colors.colorIconContrast,
		octaviusColorHeaderTextSecondary: '#93969b',
		octaviusColorHeaderSearchIcon: '#b6b8be',
		octaviusColorHeaderSearchChipBackground:
			lightTheme.colors.colorBackgroundSecondary,
		octaviusColorHeaderSearchChipBackgroundEditable: '#ffffff',
		octaviusColorHeaderSearchChipBorderEditable:
			lightTheme.colors.colorFieldBorderAlpha,

		octaviusColorHeaderSearchBackground: '#ffffff',
		octaviusColorHeaderSearchBackgroundCollapsed: '#ffffff',

		octaviusColorHeaderSearchText: lightTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			lightTheme.colors.colorTextSecondary,

		octaviusColorHeaderProgress:
			lightTheme.colors.colorBackgroundAccentAlternative,

		octaviusColorPortalMenuBackground: lightTheme.colors.colorBackground,

		octaviusColorSidebarItemIconActive: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemIconPrimary: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemIconSecondary: lightTheme.colors.colorIconSecondary,
		octaviusColorSidebarItemTextActive: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemTextPrimary: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemTextSecondary: lightTheme.colors.colorTextSecondary,
		octaviusColorSidebarButtonIcon: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarButtonText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonBackground: '#FFFFFF',

		octaviusColorSidebarCounterBackground:
			lightTheme.colors.colorTransparent,

		octaviusColorSidebarCounterText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemBackground: lightTheme.colors.colorTransparent,
		octaviusColorSidebarScrollbar: 'rgba(0, 16, 61, 0.08)',

		octaviusColorContentScrollbar: 'rgba(0, 16, 61, 0.16)',

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

		octaviusColorDatasetBackground:
			lightTheme.colors.colorBackgroundContent,

		octaviusColorEmptyStateText: '#333333',
	},

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
		colorBackgroundThumbnail: '#1F1F1F',
		colorBackgroundThumbnailAlpha: 'rgba(255, 255, 255, 0.04)',
		colorBgPlaceholder: '#000000',
		colorBgPromo: '#303030',

		octaviusColorPortalMenuBackground: '#19191A',
		octaviusColorSidebarItemBackground: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.08)',
			active: 'rgba(255, 255, 255, 0.12)',
		},

		octaviusColorBackground: darkTheme.colors.colorBackground,
		octaviusColorBackgroundAccentToned: toneOpacity(
			darkTheme.colors.colorBackgroundAccent,
			0.12,
		),

		octaviusColorHeaderBackground: darkTheme.colors.colorBackgroundAccent,
		octaviusColorHeaderButtonText: darkTheme.colors.colorTextContrast,
		octaviusColorHeaderButtonBackground: darkTheme.colors.colorTransparent,
		octaviusColorHeaderIcon: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderProgress:
			darkTheme.colors.colorBackgroundAccentAlternative,

		octaviusColorHeaderSearchBackground: '#1F1F1F',
		octaviusColorHeaderSearchBackgroundCollapsed:
			darkTheme.colors.colorBackgroundModal,
		octaviusColorHeaderSearchChipBackground:
			darkTheme.colors.colorBackgroundModal,
		octaviusColorHeaderSearchChipBackgroundEditable: '#313131',
		octaviusColorHeaderSearchChipBorderEditable: 'rgba(255, 255, 255, .48)',
		octaviusColorHeaderSearchText: darkTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			darkTheme.colors.colorTextSecondary,

		octaviusColorSidebarItemIconActive: '#FFFFFF',
		octaviusColorSidebarItemIconPrimary: darkTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemIconSecondary: darkTheme.colors.colorIconSecondary,
		octaviusColorSidebarItemTextActive: '#FFFFFF',
		octaviusColorSidebarItemTextPrimary: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemTextSecondary: darkTheme.colors.colorTextSecondary,
		octaviusColorSidebarButtonIcon: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarButtonText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonBackground: '#FFFFFF',

		octaviusColorSidebarCounterBackground:
			darkTheme.colors.colorTransparent,

		octaviusColorSidebarCounterText: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarScrollbar: 'rgba(255, 255, 255, 0.04)',

		octaviusColorContentScrollbar: 'rgba(255, 255, 255, 0.04)',

		octaviusColorIconUnread: '#0C7CFF',
		octaviusColorIconFavorite: '#FF4550',
		octaviusColorIconOrder: '#F94CA3',
		octaviusColorIconFinance: '#24C780',
		octaviusColorIconRegistration: '#FF9C37',
		octaviusColorIconTravel: '#C15DF3',
		octaviusColorIconEvent: '#3BBAFE',
		octaviusColorIconFees: '#EE3C3C',

		octaviusColorListLetterBackground:
			darkTheme.colors.colorBackgroundContent,
		octaviusColorListLetterSeparator:
			darkTheme.colors.colorSeparatorPrimaryAlpha,

		octaviusColorDatasetBackground: darkTheme.colors.colorBackgroundContent,
		octaviusColorEmptyStateText: darkTheme.colors.colorTextPrimary,
	},
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
	},

	octaviusElevationHeader: '0px 0px 16px rgba(2, 13, 41, 0.16)',
};
