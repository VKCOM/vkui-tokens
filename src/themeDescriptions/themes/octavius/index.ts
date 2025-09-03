import { getRGBA, toneOpacity } from '@/build/helpers/cssHelpers';
import { ThemeOctaviusDescription } from '@/interfaces/themes/octavius';
import {
	darkTheme,
	darkThemeElevation,
	lightColors,
	lightTheme,
} from '@/themeDescriptions/base/paradigm';
import { socialColors } from '@/themeDescriptions/common';

export const octaviusTheme: ThemeOctaviusDescription = {
	...lightTheme,
	themeName: 'octavius',
	themeNameBase: 'octavius',
	octaviusShadowSidebarItemText: 'none',
	octaviusShadowSidebarItemIcon: 'none',
	octaviusElevationCard: 'none',
	octaviusShadowEmptyStateText: 'none',
	octaviusElevationHeader: '0px 0px 16px rgba(2, 13, 41, 0.16)',
	colors: {
		...lightTheme.colors,
		...socialColors,

		// Thumnails
		colorBackgroundThumbnail: '#EBECEF',
		colorBackgroundThumbnailAlpha: 'rgba(0, 16, 61, 0.08)',

		// Палитра цветов
		colorPaletteRed1: '#fc2c38',
		colorPaletteRed2: '#eb1981',
		colorPaletteRed3: '#ff71bb',
		colorPaletteOrange1: '#ff8b2e',
		colorPaletteOrange1Alpha: getRGBA('#FF9E00', 0.12),
		colorPaletteYellow1: '#ffc311',
		colorPaletteGreen1: '#aee113',
		colorPaletteGreen2: '#59c354',
		colorPaletteGreen3: '#37eb94',
		colorPaletteGreen4: '#00b1b3',
		colorPaletteGreen1Alpha: getRGBA('#5CBA38', 0.12),
		colorPaletteGreen2Alpha: getRGBA('#00E6B4', 0.08),
		colorPaletteBlue1: '#2951ff',
		colorPaletteBlue2: '#00abf2',
		colorPaletteBlue3: '#26dfdf',
		colorPaletteBlue1Alpha: getRGBA('#005FF9', 0.12),
		colorPaletteViolet1: '#6c00ff',
		colorPaletteViolet2: '#ae73ff',
		colorAlert: '#c1341b',
		colorAccentBlue: '#0077FF',

		// Палитра для промо банеров
		colorTagBackgroundMint: '#96E9CD',
		colorTagTextMint: '#1F5C5C',
		colorTagBackgroundSky: '#9EDBFF',
		colorTagTextSky: '#20455B',
		colorTagBackgroundOrange: '#FFB181',
		colorTagTextOrange: '#5C361F',
		colorTagBackgroundPink: '#FFBFDC',
		colorTagTextPink: '#51205B',
		colorTagBackgroundPurple: '#CCA7FF',
		colorTagTextPurple: '#38205B',

		colorTagBackgroundSalmon: '#FE9898',
		colorTagTextSalmon: '#5C2727',
		colorTagBackgroundYellow: '#FFDF7E',
		colorTagTextYellow: '#5C4D1F',
		colorTagBackgroundLime: '#CAF28E',
		colorTagTextLime: '#435C1F',
		colorTagBackgroundGrass: '#86DE8C',
		colorTagTextGrass: '#1F5C23',
		colorTagBackgroundTurquoise: '#BCFFFF',
		colorTagTextTurquoise: '#1F535C',
		colorTagBackgroundLightsky: '#80E3F4',
		colorTagTextLightsky: '#1F455C',
		colorTagBackgroundMainSky: '#B2D0FF',
		colorTagTextMainSky: '#202E5B',
		colorTagBackgroundViolet: '#B5B3FB',
		colorTagTextViolet: '#21205B',
		colorTagBackgroundMagenta: '#F4B8FF',
		colorTagTextMagenta: '#5B203A',
		colorTagBackgroundTickle: '#FF88A4',
		colorTagTextTickle: '#5C212F',

		octaviusColorPlaceholderBackground: '#ffffff',
		octaviusColorPromoBackground: '#EBEEF5',
		octaviusColorThreadFooterBackground: '#ebecef',

		octaviusColorButtonText: '#333333',
		octaviusColorButtonIcon: '#333333',

		octaviusColorButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.04)',
			active: 'rgba(0, 16, 61, 0.08)',
		},

		octaviusColorBackground: '#F6F7F8',
		octaviusColorBackgroundAccentTonedAlpha: toneOpacity(
			lightTheme.colors.colorBackgroundAccent,
			0.12,
		),
		octaviusColorOverlayBackground: 'transparent',

		// Header
		octaviusColorHeaderBackground: '#FFFFFF',
		octaviusColorHeaderButtonText: '#2C2D2E',
		octaviusColorHeaderButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.64)',
			active: 'rgba(255, 255, 255, 0.4)',
		},
		octaviusColorHeaderIcon: lightTheme.colors.colorIconContrast,
		octaviusColorHeaderIconUnread: '#0077ff',
		octaviusColorHeaderIconFavorite: '#FC2C38',
		octaviusColorHeaderIconAttach: '#D9DADD',
		octaviusColorHeaderTextSecondary: '#93969b',
		octaviusColorHeaderSearchIcon: '#b6b8be',
		octaviusColorHeaderSearchChipBackground: {
			normal: '#FFFFFF',
			hover: 'rgba(255, 255, 255, 0.64)',
			active: 'rgba(255, 255, 255, 0.4)',
		},
		octaviusColorHeaderSearchChipBackgroundEditable: '#ffffff',
		octaviusColorHeaderSearchChipBorderEditableAlpha: lightTheme.colors.colorFieldBorderAlpha,

		octaviusColorHeaderSearchBackground: '#f0f1f3',
		octaviusColorHeaderSearchBackgroundCollapsed: '#f0f1f3',

		octaviusColorHeaderSearchText: lightTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed: lightTheme.colors.colorTextSecondary,
		octaviusColorHeaderFilterTextAlpha: lightColors.colors.colorIconMediumAlpha,

		octaviusColorHeaderTabActiveThemedAlpha: 'rgba(0, 95, 249, .10)',
		octaviusColorHeaderTabTextActiveThemed: '#0077ff',
		octaviusColorPortalSearchBackgroundAlpha: 'rgba(255, 255, 255, .99)',
		octaviusColorPortalSearchIconThemedAlpha: 'rgba(0, 95, 255, .99)',

		octaviusColorPortalMenuBackground: lightTheme.colors.colorBackground,

		// Sidebar
		octaviusColorSidebarItemIconActive: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemIconPrimary: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemTextActive: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemTextPrimary: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonIcon: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarButtonText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonBackground: '#FFFFFF',

		octaviusColorSidebarCounterBackgroundAlpha: lightTheme.colors.colorTransparent,
		octaviusColorSidebarCounterText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemBackgroundAlpha: lightTheme.colors.colorTransparent,
		octaviusColorSidebarScrollbarAlpha: 'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarItemIcon: '#333333',
		octaviusColorSidebarItemText: '#333333',
		octaviusColorSidebarItemButtonBackgroundAlpha: 'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarItemIconSecondary: '#87898F',
		octaviusColorSidebarItemTextSecondary: '#87898F',

		octaviusColorSidebarShortItemIcon: '#333333',
		octaviusColorSidebarShortItemText: '#333333',
		octaviusColorSidebarShortItemTextActive: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarShortItemIconActive: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarShortItemIconSecondary: lightTheme.colors.colorIconSecondary,
		octaviusColorSidebarShortItemTextSecondary: lightTheme.colors.colorTextSecondary,

		octaviusColorSidebarComposeButtonBackground: '#ffffff',
		octaviusColorSidebarComposeButtonText: '#2c2d2e',
		octaviusColorSidebarComposeButtonIcon: '#2c2d2e',

		octaviusColorSidebarIconUnread: '#0077FF',
		octaviusColorSidebarIconFavorite: '#fc2c38',
		octaviusColorSidebarIconOrder: '#ff54aa',
		octaviusColorSidebarIconFinance: '#2fc885',
		octaviusColorSidebarIconRegistration: '#ff9e00',
		octaviusColorSidebarIconTravel: '#ba34fc',
		octaviusColorSidebarIconEvent: '#09a6fa',
		octaviusColorSidebarIconFees: '#e60000',

		octaviusColorContentScrollbarAlpha: 'rgba(0, 16, 61, 0.08)',

		octaviusColorActionArchive: '#1F5C23',

		// Category
		octaviusColorIconFavorite: '#fc2c38',
		octaviusColorIconOrder: '#ff54aa',
		octaviusColorIconFinance: '#2FC885',
		octaviusColorIconRegistration: '#ff9e00',
		octaviusColorIconTravel: '#ba34fc',
		octaviusColorIconEvent: '#09a6fa',
		octaviusColorIconFees: '#FF6262',

		octaviusColorIconEventAlpha: 'rgba(59, 186, 254, 0.1)',
		octaviusColorIconOrderAlpha: 'rgba(249, 76, 163, 0.1)',
		octaviusColorIconTravelAlpha: 'rgba(193, 93, 243, 0.1)',

		octaviusColorListLetterBackground: {
			normal: '#ffffff',
			hover: '#f5f5f7',
			active: '#ebecef',
		},
		octaviusColorListTextUnread: lightTheme.colors.colorTextPrimary,
		octaviusColorListTextPrimary: lightTheme.colors.colorTextPrimary,
		octaviusColorListIconPrimary: lightTheme.colors.colorIconPrimary,
		octaviusColorListLetterSeparatorAlpha: lightTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorListLetterAdvBackground: '#F0F5FF',
		octaviusColorListBackgroundPositiveAlpha: 'rgba(13, 194, 104, 0.08)',
		octaviusColorListBackgroundPositiveTagsOutline: '#F2FAF4',
		octaviusColorLetterListTextUnread: '#2c2d2e',

		octaviusColorDatasetBackground: lightTheme.colors.colorBackgroundContent,

		octaviusColorEmptyStateText: '#333333',
		octaviusColorButtonEmptyStateText: '#2C2D2E',
		octaviusColorButtonEmptyStateBackgroundAlpha: 'rgba(0, 16, 61, 0.06)',
		octaviusColorLayoutBorderAlpha: lightTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorLayoutLetterBorderAlpha: lightTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorEmptyStateTextLink: '#005bd1',
		octaviusColorLetterContactBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.08)',
			active: 'rgba(0, 16, 61, 0.16)',
		},
		octaviusColorLetterPreviewBackgroundPrimary: '#F9F9FA',
		octaviusColorLetterPreviewBackgroundSecondary: '#F3F3F5',
		octaviusColorNotificationBorder: '#ffffff',

		octaviusTextDecorationEmptyStateTextLink: {
			normal: 'none',
			hover: 'underline',
			active: 'underline',
		},

		octaviusColorBackgroundAccentTintAlpha: 'rgba(0, 95, 249, 0.12)',
		octaviusColorBackgroundNegativeTintAlpha: 'rgba(236, 71, 80, 0.12)',
		octaviusColorBackgroundPositiveTintAlpha: 'rgba(13, 194, 104, 0.1)',

		octaviusColorButtonBackgroundContrastAlpha: 'rgba(250, 250, 250, 0.99)',

		octaviusColorIconSocial: '#7288FF',
		octaviusColorIconMailings: '#FFA447',
		octaviusColorIconToMyself: '#1DC7D2',
		octaviusColorIconNews: '#26C0EB',
		octaviusColorIconOfficial: '#EC4750',
		octaviusColorIconSchool: '#C97EEC',
		octaviusColorIconGames: '#FDCC3E',
		octaviusColorIconReceipts: '#74BF05',

		octaviusColorTextFees: '#FF2F2F',
		octaviusColorTextFinance: '#27B275',
		octaviusColorTextSocial: '#556AD9',
		octaviusColorTextMailings: '#FC8A15',
		octaviusColorTextToMyself: '#13B4BF',
		octaviusColorTextNews: '#08ABD9',
		octaviusColorTextSchool: '#C97EEC',
		octaviusColorTextGames: '#EBAF00',

		octaviusColorSidebarWidgetBackgroundAlpha: {
			normal: 'rgba(255, 255, 255, 0.16)',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},

		// Snackbar
		octaviusColorSnackbarIconPositive: '#0DC268',
		octaviusColorSnackbarIconNegative: '#FF5C5C',
		octaviusColorSnackbarIconAccent: '#0077FF',
		octaviusColorSnackbarIconSecondary: '#9C9DA2',
		octaviusColorSnackbarIconWarning: '#FF9E00',

		octaviusColorSnackbarTextAccent: '#1A85FF',
		octaviusColorSnackbarTextContrast: '#FFFFFF',

		octaviusColorSnackbarBackground: '#303030',
		octaviusColorSnackbarTransparent: {
			normal: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.04)',
			hover: 'rgba(255, 255, 255, 0.08)',
		},
		octaviusColorIconUnread: '#0077FF',
		octaviusColorHeaderProgress: '#0077FF',
	},

	octaviusTextShadowEmptyStateText: 'none',
	octaviusPositionBackground: '50% 0',
	octaviusImageOverlayBackground: 'none',

	octaviusTextShadowSidebarItemText: 'none',
	octaviusFilterSidebarItemIcon: 'none',
	octaviusImageBackground: 'none',

	octaviusFontFamilyDefault: 'HelveticaNeue, Helvetica, Arial, sans-serif',

	octaviusFontFamilyMailSans:
		'VKSansDisplay, MailSans, HelveticaNeue, Helvetica, Arial, sans-serif',

	octaviusFontFamilyGlobal: 'Arial, Tahoma, Verdana, sans-serif',
	octaviusFontFamilyMac: 'Helvetica, Arial, Tahoma, Verdana, sans-serif',
	octaviusFontFamilyDisplay: 'inherit',

	octaviusColorLetterAttachListBackground:
		'linear-gradient(270deg,#fff 22.77%,rgba(255,255,255,0) 104.46%)',

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
		colorBackgroundThumbnailAlpha: 'rgba(255, 255, 255, 0.08)',
		octaviusColorPlaceholderBackground: '#000000',
		octaviusColorPromoBackground: '#303030',
		octaviusColorThreadFooterBackground: '#303030',

		octaviusColorPortalMenuBackground: '#232324',
		octaviusColorSidebarItemBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorBackground: '#19191A',
		octaviusColorBackgroundAccentTonedAlpha: toneOpacity(
			darkTheme.colors.colorBackgroundAccent,
			0.12,
		),

		// Header
		octaviusColorHeaderBackground: '#232324',
		octaviusColorHeaderButtonText: darkTheme.colors.colorTextContrast,
		octaviusColorHeaderIcon: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderIconUnread: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderIconFavorite: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderIconAttach: darkTheme.colors.colorIconContrast,

		octaviusColorHeaderSearchBackground: '#303030',
		octaviusColorHeaderSearchBackgroundCollapsed: darkTheme.colors.colorBackgroundModal,
		octaviusColorHeaderSearchChipBackground: '#404040',
		octaviusColorHeaderSearchChipBackgroundEditable: '#3e3e3e',
		octaviusColorHeaderSearchChipBorderEditableAlpha: 'rgba(255, 255, 255, .48)',
		octaviusColorHeaderSearchText: darkTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed: darkTheme.colors.colorTextSecondary,

		octaviusColorHeaderButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		octaviusColorHeaderTabActiveThemedAlpha: 'rgba(255, 255, 255, .8)',
		octaviusColorHeaderTabTextActiveThemed: '#E7E8EA',
		octaviusColorPortalSearchBackgroundAlpha: 'rgba(255, 255, 255, .08)',
		octaviusColorPortalSearchIconThemedAlpha: 'rgba(255, 255, 255, .3)',

		// Sidebar
		octaviusColorSidebarItemIconPrimary: '#E7E8EA',

		octaviusColorSidebarItemIcon: '#E7E8EA',
		octaviusColorSidebarItemText: '#E7E8EA',
		octaviusColorSidebarItemTextActive: '#ffffff',
		octaviusColorSidebarItemIconActive: '#ffffff',
		octaviusColorSidebarItemTextSecondary: '#8C8E94',
		octaviusColorSidebarItemIconSecondary: '#8C8E94',

		octaviusColorSidebarShortItemIcon: '#E7E8EA',
		octaviusColorSidebarShortItemText: '#E7E8EA',
		octaviusColorSidebarShortItemTextActive: '#ffffff',
		octaviusColorSidebarShortItemIconActive: '#ffffff',
		octaviusColorSidebarShortItemTextSecondary: darkTheme.colors.colorTextSecondary,
		octaviusColorSidebarShortItemIconSecondary: darkTheme.colors.colorIconSecondary,

		octaviusColorSidebarItemTextPrimary: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonIcon: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarButtonText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonBackground: '#FFFFFF',

		octaviusColorSidebarCounterBackgroundAlpha: darkTheme.colors.colorTransparent,

		octaviusColorSidebarCounterText: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarScrollbarAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorSidebarItemButtonBackgroundAlpha: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorSidebarIconUnread: '#0077FF',
		octaviusColorSidebarIconFavorite: '#FF4550',
		octaviusColorSidebarIconOrder: '#F94CA3',
		octaviusColorSidebarIconFinance: '#24C780',
		octaviusColorSidebarIconRegistration: '#FF9C37',
		octaviusColorSidebarIconTravel: '#C15DF3',
		octaviusColorSidebarIconEvent: '#3BBAFE',
		octaviusColorSidebarIconFees: '#EE3C3C',

		octaviusColorButtonText: '#E7E8EA',
		octaviusColorButtonIcon: '#E7E8EA',
		octaviusColorButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},

		octaviusColorContentScrollbarAlpha: 'rgba(255, 255, 255, 0.12)',

		octaviusColorActionArchive: '#0EAB67',

		// Category
		octaviusColorIconFavorite: '#FF4550',
		octaviusColorIconOrder: '#F94CA3',
		octaviusColorIconFinance: '#2FC885',
		octaviusColorIconRegistration: '#FF9C37',
		octaviusColorIconTravel: '#C15DF3',
		octaviusColorIconEvent: '#FF6262',
		octaviusColorIconFees: '#FF6262',

		octaviusColorIconSocial: '#5F7CE8',
		octaviusColorIconMailings: '#FFA447',
		octaviusColorIconToMyself: '#1DC7D2',
		octaviusColorIconNews: '#1DB8E4',
		octaviusColorIconOfficial: '#EC4750',
		octaviusColorIconSchool: '#C97EEC',
		octaviusColorIconGames: '#F8BA04',
		octaviusColorIconReceipts: '#74BF05',

		octaviusColorTextFees: '#FF6C6C',
		octaviusColorTextFinance: '#52C392',
		octaviusColorTextSocial: '#7688E9',
		octaviusColorTextMailings: '#FFA950',
		octaviusColorTextToMyself: '#41C9D2',
		octaviusColorTextNews: '#37C1E8',
		octaviusColorTextSchool: '#D392F2',
		octaviusColorTextGames: '#F6BE1A',

		octaviusColorIconEventAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorIconOrderAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorIconTravelAlpha: 'rgba(255, 255, 255, 0.12)',

		octaviusColorListLetterBackground: darkTheme.colors.colorBackgroundContent,
		octaviusColorListLetterSeparatorAlpha: darkTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorListLetterAdvBackground: '#151515',
		octaviusColorListBackgroundPositiveAlpha: 'rgba(13, 194, 104, 0.08)',
		octaviusColorListBackgroundPositiveTagsOutline: '#272F2A',

		octaviusColorDatasetBackground: darkTheme.colors.colorBackgroundContent,
		octaviusColorEmptyStateText: darkTheme.colors.colorTextPrimary,
		octaviusColorButtonEmptyStateText: '#E7E8EA',
		octaviusColorButtonEmptyStateBackgroundAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorLayoutBorderAlpha: 'transparent',
		octaviusColorLayoutLetterBorderAlpha: 'rgba(0, 0, 0, 0.4)',
		octaviusColorEmptyStateTextLink: '#E7E8EA',
		octaviusColorLetterListTextUnread: '#ffffff',
		octaviusColorLetterContactBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.08)',
			active: 'rgba(255, 255, 255, 0.16)',
		},
		octaviusColorLetterPreviewBackgroundPrimary: '#141414',
		octaviusColorLetterPreviewBackgroundSecondary: '#0F0F0F',
		octaviusColorNotificationBorder: '#000000',

		octaviusTextDecorationEmptyStateTextLink: {
			normal: 'underline',
			hover: 'none',
			active: 'none',
		},

		octaviusColorBackgroundNegativeTintAlpha: 'rgba(236, 71, 80, 0.16)',
		octaviusColorBackgroundPositiveTintAlpha: 'rgba(13, 194, 104, 0.12)',

		octaviusColorButtonBackgroundContrastAlpha: 'rgba(250, 250, 250, 0.12)',

		octaviusColorIconUnread: '#0077FF',
		octaviusColorHeaderProgress: '#0077FF',
	},
	octaviusColorLetterAttachListBackground:
		'linear-gradient(90deg, rgba(31, 31, 31, 0) 0%, #1f1f1f 80%)',
};

export const octaviusWhiteTheme: ThemeOctaviusDescription = {
	...lightTheme,
	themeName: 'octaviusWhite',
	themeNameBase: 'octavius',
	octaviusShadowSidebarItemText: 'none',
	octaviusShadowSidebarItemIcon: 'none',
	octaviusElevationCard: 'none',
	octaviusShadowEmptyStateText: 'none',
	octaviusElevationHeader: '0px 0px 16px rgba(2, 13, 41, 0.16)',
	colors: {
		...lightTheme.colors,
		...socialColors,

		// Thumnails
		colorBackgroundThumbnail: '#EBECEF',
		colorBackgroundThumbnailAlpha: 'rgba(0, 16, 61, 0.08)',

		// Палитра цветов
		colorPaletteRed1: '#fc2c38',
		colorPaletteRed2: '#eb1981',
		colorPaletteRed3: '#ff71bb',
		colorPaletteOrange1: '#ff8b2e',
		colorPaletteOrange1Alpha: getRGBA('#FF9E00', 0.12),
		colorPaletteYellow1: '#ffc311',
		colorPaletteGreen1: '#aee113',
		colorPaletteGreen2: '#59c354',
		colorPaletteGreen3: '#37eb94',
		colorPaletteGreen4: '#00b1b3',
		colorPaletteGreen1Alpha: getRGBA('#5CBA38', 0.12),
		colorPaletteGreen2Alpha: getRGBA('#00E6B4', 0.08),
		colorPaletteBlue1: '#2951ff',
		colorPaletteBlue2: '#00abf2',
		colorPaletteBlue3: '#26dfdf',
		colorPaletteBlue1Alpha: getRGBA('#005FF9', 0.12),
		colorPaletteViolet1: '#6c00ff',
		colorPaletteViolet2: '#ae73ff',
		colorAlert: '#c1341b',

		// Палитра для промо банеров
		colorTagBackgroundMint: '#96E9CD',
		colorTagTextMint: '#1F5C5C',
		colorTagBackgroundSky: '#9EDBFF',
		colorTagTextSky: '#20455B',
		colorTagBackgroundOrange: '#FFB181',
		colorTagTextOrange: '#5C361F',
		colorTagBackgroundPink: '#FFBFDC',
		colorTagTextPink: '#51205B',
		colorTagBackgroundPurple: '#CCA7FF',
		colorTagTextPurple: '#38205B',

		colorTagBackgroundSalmon: '#FE9898',
		colorTagTextSalmon: '#5C2727',
		colorTagBackgroundYellow: '#FFDF7E',
		colorTagTextYellow: '#5C4D1F',
		colorTagBackgroundLime: '#CAF28E',
		colorTagTextLime: '#435C1F',
		colorTagBackgroundGrass: '#86DE8C',
		colorTagTextGrass: '#1F5C23',
		colorTagBackgroundTurquoise: '#BCFFFF',
		colorTagTextTurquoise: '#1F535C',
		colorTagBackgroundLightsky: '#80E3F4',
		colorTagTextLightsky: '#1F455C',
		colorTagBackgroundMainSky: '#B2D0FF',
		colorTagTextMainSky: '#202E5B',
		colorTagBackgroundViolet: '#B5B3FB',
		colorTagTextViolet: '#21205B',
		colorTagBackgroundMagenta: '#F4B8FF',
		colorTagTextMagenta: '#5B203A',
		colorTagBackgroundTickle: '#FF88A4',
		colorTagTextTickle: '#5C212F',

		octaviusColorPlaceholderBackground: '#ffffff',
		octaviusColorPromoBackground: '#EBEEF5',
		octaviusColorThreadFooterBackground: '#ebecef',

		octaviusColorButtonText: '#333333',
		octaviusColorButtonIcon: '#333333',

		octaviusColorButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.04)',
			active: 'rgba(0, 16, 61, 0.08)',
		},

		octaviusColorBackground: '#F6F7F8',
		octaviusColorBackgroundAccentTonedAlpha: 'rgba(0,95,249,0.12)',
		colorBackgroundAccentThemed: '#005FF9',
		colorBackgroundAccentThemedAlpha: 'rgba(0, 95, 249, 0.2)',
		octaviusColorOverlayBackground: 'transparent',
		colorTextAccent: '#005FF9',
		colorTextAccentThemed: '#005FF9',
		colorTextNegative: '#ED0A34',
		colorTextLink: '#005BD1',
		colorTextLinkThemed: '#005BD1',
		colorIconAccent: '#005FF9',
		colorIconAccentThemed: '#005FF9',
		colorStrokeAccent: '#005FF9',
		colorStrokeAccentThemed: '#005FF9',
		colorAccentBlue: '#005FF9',
		colorActionSheetText: '#005FF9',
		colorPanelHeaderIcon: '#005FF9',
		colorWriteBarIcon: '#005FF9',
		colorButtonText: '#005FF9',
		colorButtonIcon: '#005FF9',
		colorButtonStroke: '#005FF9',

		// Header
		octaviusColorHeaderBackground: '#FFFFFF',
		octaviusColorHeaderButtonText: '#2C2D2E',
		octaviusColorHeaderButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.64)',
			active: 'rgba(255, 255, 255, 0.4)',
		},
		octaviusColorHeaderIcon: lightTheme.colors.colorIconContrast,
		octaviusColorHeaderIconUnread: '#005FF9',
		octaviusColorHeaderIconFavorite: '#FC2C38',
		octaviusColorHeaderIconAttach: '#D9DADD',
		octaviusColorHeaderTextSecondary: '#93969b',
		octaviusColorHeaderSearchIcon: '#b6b8be',
		octaviusColorHeaderSearchChipBackground: {
			normal: '#FFFFFF',
			hover: 'rgba(255, 255, 255, 0.64)',
			active: 'rgba(255, 255, 255, 0.4)',
		},
		octaviusColorHeaderSearchChipBackgroundEditable: '#ffffff',
		octaviusColorHeaderSearchChipBorderEditableAlpha: lightTheme.colors.colorFieldBorderAlpha,

		octaviusColorHeaderSearchBackground: '#f0f1f3',
		octaviusColorHeaderSearchBackgroundCollapsed: '#f0f1f3',

		octaviusColorHeaderSearchText: lightTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed: lightTheme.colors.colorTextSecondary,
		octaviusColorHeaderFilterTextAlpha: lightColors.colors.colorIconMediumAlpha,

		octaviusColorHeaderProgress: lightTheme.colors.colorBackgroundAccentAlternative,

		octaviusColorHeaderTabActiveThemedAlpha: 'rgba(0, 95, 249, .10)',
		octaviusColorHeaderTabTextActiveThemed: '#005FF9',
		octaviusColorPortalSearchBackgroundAlpha: 'rgba(255, 255, 255, .99)',
		octaviusColorPortalSearchIconThemedAlpha: 'rgba(0, 95, 255, .99)',

		octaviusColorPortalMenuBackground: lightTheme.colors.colorBackground,

		// Sidebar
		octaviusColorSidebarItemIconActive: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemIconPrimary: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemTextActive: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemTextPrimary: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonIcon: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarButtonText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonBackground: '#FFFFFF',

		octaviusColorSidebarCounterBackgroundAlpha: lightTheme.colors.colorTransparent,
		octaviusColorSidebarCounterText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemBackgroundAlpha: lightTheme.colors.colorTransparent,
		octaviusColorSidebarScrollbarAlpha: 'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarItemIcon: '#333333',
		octaviusColorSidebarItemText: '#333333',
		octaviusColorSidebarItemButtonBackgroundAlpha: 'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarItemIconSecondary: '#87898F',
		octaviusColorSidebarItemTextSecondary: '#87898F',

		octaviusColorSidebarShortItemIcon: '#333333',
		octaviusColorSidebarShortItemText: '#333333',
		octaviusColorSidebarShortItemTextActive: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarShortItemIconActive: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarShortItemIconSecondary: lightTheme.colors.colorIconSecondary,
		octaviusColorSidebarShortItemTextSecondary: lightTheme.colors.colorTextSecondary,

		octaviusColorSidebarComposeButtonBackground: '#ffffff',
		octaviusColorSidebarComposeButtonText: '#2c2d2e',
		octaviusColorSidebarComposeButtonIcon: '#2c2d2e',

		octaviusColorSidebarIconUnread: '#005FF9',
		octaviusColorSidebarIconFavorite: '#fc2c38',
		octaviusColorSidebarIconOrder: '#ff54aa',
		octaviusColorSidebarIconFinance: '#2fc885',
		octaviusColorSidebarIconRegistration: '#ff9e00',
		octaviusColorSidebarIconTravel: '#ba34fc',
		octaviusColorSidebarIconEvent: '#09a6fa',
		octaviusColorSidebarIconFees: '#e60000',

		octaviusColorContentScrollbarAlpha: 'rgba(0, 16, 61, 0.08)',

		octaviusColorActionArchive: '#1F5C23',

		// Category
		octaviusColorIconUnread: '#005FF9',
		octaviusColorIconFavorite: '#fc2c38',
		octaviusColorIconOrder: '#ff54aa',
		octaviusColorIconFinance: '#2fc885',
		octaviusColorIconRegistration: '#ff9e00',
		octaviusColorIconTravel: '#ba34fc',
		octaviusColorIconEvent: '#09a6fa',
		octaviusColorIconFees: '#e60000',

		octaviusColorTextFees: '#FF2F2F',
		octaviusColorTextFinance: '#27B275',
		octaviusColorTextSocial: '#556AD9',
		octaviusColorTextMailings: '#FC8A15',
		octaviusColorTextToMyself: '#13B4BF',
		octaviusColorTextNews: '#08ABD9',
		octaviusColorTextSchool: '#C97EEC',
		octaviusColorTextGames: '#EBAF00',

		octaviusColorIconEventAlpha: 'rgba(59, 186, 254, 0.1)',
		octaviusColorIconOrderAlpha: 'rgba(249, 76, 163, 0.1)',
		octaviusColorIconTravelAlpha: 'rgba(193, 93, 243, 0.1)',

		octaviusColorListLetterBackground: {
			normal: '#ffffff',
			hover: '#f5f5f7',
			active: '#ebecef',
		},
		octaviusColorListTextUnread: lightTheme.colors.colorTextPrimary,
		octaviusColorListTextPrimary: lightTheme.colors.colorTextPrimary,
		octaviusColorListIconPrimary: lightTheme.colors.colorIconPrimary,
		octaviusColorListLetterSeparatorAlpha: lightTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorListLetterAdvBackground: '#F0F5FF',
		octaviusColorListBackgroundPositiveAlpha: 'rgba(13, 194, 104, 0.08)',
		octaviusColorListBackgroundPositiveTagsOutline: '#F2FAF4',
		octaviusColorLetterListTextUnread: '#2c2d2e',

		octaviusColorDatasetBackground: lightTheme.colors.colorBackgroundContent,

		octaviusColorEmptyStateText: '#333333',
		octaviusColorButtonEmptyStateText: '#2C2D2E',
		octaviusColorButtonEmptyStateBackgroundAlpha: 'rgba(0, 16, 61, 0.06)',
		octaviusColorLayoutBorderAlpha: lightTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorLayoutLetterBorderAlpha: lightTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorEmptyStateTextLink: '#005bd1',
		octaviusColorLetterContactBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.08)',
			active: 'rgba(0, 16, 61, 0.16)',
		},
		octaviusColorLetterPreviewBackgroundPrimary: '#F9F9FA',
		octaviusColorLetterPreviewBackgroundSecondary: '#F3F3F5',
		octaviusColorNotificationBorder: '#ffffff',

		octaviusTextDecorationEmptyStateTextLink: {
			normal: 'none',
			hover: 'underline',
			active: 'underline',
		},

		octaviusColorBackgroundAccentTintAlpha: 'rgba(0, 95, 249, 0.12)',
		octaviusColorBackgroundNegativeTintAlpha: 'rgba(236, 71, 80, 0.12)',
		octaviusColorBackgroundPositiveTintAlpha: 'rgba(13, 194, 104, 0.1)',

		octaviusColorButtonBackgroundContrastAlpha: 'rgba(250, 250, 250, 0.99)',

		octaviusColorIconSocial: '#7288FF',
		octaviusColorIconMailings: '#FC8A15',
		octaviusColorIconToMyself: '#00BD93',
		octaviusColorIconNews: '#08ABD9',
		octaviusColorIconOfficial: '#EC4750',
		octaviusColorIconSchool: '#AC7EEC',
		octaviusColorIconGames: '#F8BA04',
		octaviusColorIconReceipts: '#74BF05',

		octaviusColorSidebarWidgetBackgroundAlpha: {
			normal: 'rgba(255, 255, 255, 0.16)',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},

		// Snackbar
		octaviusColorSnackbarIconPositive: '#0DC268',
		octaviusColorSnackbarIconNegative: '#FF5C5C',
		octaviusColorSnackbarIconAccent: '#589BFF',
		octaviusColorSnackbarIconSecondary: '#9C9DA2',
		octaviusColorSnackbarIconWarning: '#FF9E00',

		octaviusColorSnackbarTextAccent: '#589BFF',
		octaviusColorSnackbarTextContrast: '#FFFFFF',

		octaviusColorSnackbarBackground: '#303030',
		octaviusColorSnackbarTransparent: {
			normal: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.04)',
			hover: 'rgba(255, 255, 255, 0.08)',
		},
	},

	octaviusTextShadowEmptyStateText: 'none',
	octaviusPositionBackground: '50% 0',
	octaviusImageOverlayBackground: 'none',

	octaviusTextShadowSidebarItemText: 'none',
	octaviusFilterSidebarItemIcon: 'none',
	octaviusImageBackground: 'none',

	octaviusFontFamilyDefault: 'HelveticaNeue, Helvetica, Arial, sans-serif',

	octaviusFontFamilyMailSans:
		'VKSansDisplay, MailSans, HelveticaNeue, Helvetica, Arial, sans-serif',

	octaviusFontFamilyGlobal: 'Arial, Tahoma, Verdana, sans-serif',
	octaviusFontFamilyMac: 'Helvetica, Arial, Tahoma, Verdana, sans-serif',
	octaviusFontFamilyDisplay: 'inherit',

	octaviusColorLetterAttachListBackground:
		'linear-gradient(270deg,#fff 22.77%,rgba(255,255,255,0) 104.46%)',

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

export const octaviusWhiteDarkTheme: ThemeOctaviusDescription = {
	...octaviusWhiteTheme,
	...darkTheme,
	...darkThemeElevation,
	themeName: 'octaviusWhiteDark',
	colors: {
		...octaviusTheme.colors,
		...darkTheme.colors,
		colorBackgroundThumbnail: '#1F1F1F',
		colorBackgroundThumbnailAlpha: 'rgba(255, 255, 255, 0.08)',
		octaviusColorPlaceholderBackground: '#000000',
		octaviusColorPromoBackground: '#303030',
		octaviusColorThreadFooterBackground: '#303030',

		octaviusColorPortalMenuBackground: '#232324',
		octaviusColorSidebarItemBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorBackground: '#19191A',
		octaviusColorBackgroundAccentTonedAlpha: toneOpacity(
			darkTheme.colors.colorBackgroundAccent,
			0.12,
		),
		colorBackgroundAccent: '#2775FC',
		colorTextAccent: '#3C82FD',
		colorTextLink: '#589BFF',
		colorIconAccent: '#3C82FD',
		colorStrokeAccent: '#3C82FD',
		colorAccentBlue: '#2775FC',
		colorActionSheetText: '#3C82FD',
		colorPanelHeaderIcon: '#3C82FD',
		colorWriteBarIcon: '#3C82FD',

		colorBackgroundAccentTintThemedAlpha: 'rgba(0, 95, 249, 0.06)',
		colorBackgroundAccentTintAlpha: 'rgba(0, 95, 249, 0.06)',
		colorBackgroundAccentTintThemed: '#f0f4ff',

		colorBackgroundNegativeTintThemedAlpha: 'rgba(237, 10, 52, 0.08)',
		colorBackgroundNegativeTintAlpha: 'rgba(237, 10, 52, 0.08)',
		colorBackgroundNegativeTintThemed: '#faebeb',

		// Header
		octaviusColorHeaderBackground: '#232324',
		octaviusColorHeaderButtonText: darkTheme.colors.colorTextContrast,
		octaviusColorHeaderIcon: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderIconUnread: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderIconFavorite: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderIconAttach: darkTheme.colors.colorIconContrast,
		octaviusColorHeaderProgress: darkTheme.colors.colorBackgroundAccentAlternative,

		octaviusColorHeaderSearchBackground: '#303030',
		octaviusColorHeaderSearchBackgroundCollapsed: darkTheme.colors.colorBackgroundModal,
		octaviusColorHeaderSearchChipBackground: '#404040',
		octaviusColorHeaderSearchChipBackgroundEditable: '#3e3e3e',
		octaviusColorHeaderSearchChipBorderEditableAlpha: 'rgba(255, 255, 255, .48)',
		octaviusColorHeaderSearchText: darkTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed: darkTheme.colors.colorTextSecondary,

		octaviusColorHeaderButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		octaviusColorHeaderTabActiveThemedAlpha: 'rgba(255, 255, 255, .8)',
		octaviusColorHeaderTabTextActiveThemed: '#E7E8EA',
		octaviusColorPortalSearchBackgroundAlpha: 'rgba(255, 255, 255, .08)',
		octaviusColorPortalSearchIconThemedAlpha: 'rgba(255, 255, 255, .3)',

		// Sidebar
		octaviusColorSidebarItemIconPrimary: '#E7E8EA',

		octaviusColorSidebarItemIcon: '#E7E8EA',
		octaviusColorSidebarItemText: '#E7E8EA',
		octaviusColorSidebarItemTextActive: '#ffffff',
		octaviusColorSidebarItemIconActive: '#ffffff',
		octaviusColorSidebarItemTextSecondary: '#8C8E94',
		octaviusColorSidebarItemIconSecondary: '#8C8E94',

		octaviusColorSidebarShortItemIcon: '#E7E8EA',
		octaviusColorSidebarShortItemText: '#E7E8EA',
		octaviusColorSidebarShortItemTextActive: '#ffffff',
		octaviusColorSidebarShortItemIconActive: '#ffffff',
		octaviusColorSidebarShortItemTextSecondary: darkTheme.colors.colorTextSecondary,
		octaviusColorSidebarShortItemIconSecondary: darkTheme.colors.colorIconSecondary,

		octaviusColorSidebarItemTextPrimary: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonIcon: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarButtonText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonBackground: '#FFFFFF',

		octaviusColorSidebarCounterBackgroundAlpha: darkTheme.colors.colorTransparent,

		octaviusColorSidebarCounterText: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarScrollbarAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorSidebarItemButtonBackgroundAlpha: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorSidebarIconUnread: '#0C7CFF',
		octaviusColorSidebarIconFavorite: '#FF4550',
		octaviusColorSidebarIconOrder: '#F94CA3',
		octaviusColorSidebarIconFinance: '#24C780',
		octaviusColorSidebarIconRegistration: '#FF9C37',
		octaviusColorSidebarIconTravel: '#C15DF3',
		octaviusColorSidebarIconEvent: '#3BBAFE',
		octaviusColorSidebarIconFees: '#EE3C3C',

		octaviusColorButtonText: '#E7E8EA',
		octaviusColorButtonIcon: '#E7E8EA',
		octaviusColorButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},

		octaviusColorContentScrollbarAlpha: 'rgba(255, 255, 255, 0.12)',

		octaviusColorActionArchive: '#0EAB67',

		// Category
		octaviusColorIconUnread: '#0C7CFF',
		octaviusColorIconFavorite: '#FF4550',
		octaviusColorIconOrder: '#F94CA3',
		octaviusColorIconFinance: '#24C780',
		octaviusColorIconRegistration: '#FF9C37',
		octaviusColorIconTravel: '#C15DF3',
		octaviusColorIconEvent: '#3BBAFE',
		octaviusColorIconFees: '#EE3C3C',

		octaviusColorIconSocial: '#5F7CE8',
		octaviusColorIconMailings: '#FFA447',
		octaviusColorIconToMyself: '#1DC7D2',
		octaviusColorIconNews: '#1DB8E4',
		octaviusColorIconOfficial: '#EC4750',
		octaviusColorIconSchool: '#C97EEC',
		octaviusColorIconGames: '#F8BA04',
		octaviusColorIconReceipts: '#74BF05',

		octaviusColorTextFees: '#FF6C6C',
		octaviusColorTextFinance: '#52C392',
		octaviusColorTextSocial: '#7688E9',
		octaviusColorTextMailings: '#FFA950',
		octaviusColorTextToMyself: '#41C9D2',
		octaviusColorTextNews: '#37C1E8',
		octaviusColorTextSchool: '#D392F2',
		octaviusColorTextGames: '#F6BE1A',

		octaviusColorIconEventAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorIconOrderAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorIconTravelAlpha: 'rgba(255, 255, 255, 0.12)',

		octaviusColorListLetterBackground: darkTheme.colors.colorBackgroundContent,
		octaviusColorListLetterSeparatorAlpha: darkTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorListLetterAdvBackground: '#151515',
		octaviusColorListBackgroundPositiveAlpha: 'rgba(13, 194, 104, 0.08)',
		octaviusColorListBackgroundPositiveTagsOutline: '#272F2A',

		octaviusColorDatasetBackground: darkTheme.colors.colorBackgroundContent,
		octaviusColorEmptyStateText: darkTheme.colors.colorTextPrimary,
		octaviusColorButtonEmptyStateText: '#E7E8EA',
		octaviusColorButtonEmptyStateBackgroundAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorLayoutBorderAlpha: 'transparent',
		octaviusColorLayoutLetterBorderAlpha: 'rgba(0, 0, 0, 0.4)',
		octaviusColorEmptyStateTextLink: '#E7E8EA',
		octaviusColorLetterListTextUnread: '#ffffff',
		octaviusColorLetterContactBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.08)',
			active: 'rgba(255, 255, 255, 0.16)',
		},
		octaviusColorLetterPreviewBackgroundPrimary: '#141414',
		octaviusColorLetterPreviewBackgroundSecondary: '#0F0F0F',
		octaviusColorNotificationBorder: '#000000',

		octaviusTextDecorationEmptyStateTextLink: {
			normal: 'underline',
			hover: 'none',
			active: 'none',
		},

		octaviusColorBackgroundNegativeTintAlpha: 'rgba(236, 71, 80, 0.16)',
		octaviusColorBackgroundPositiveTintAlpha: 'rgba(13, 194, 104, 0.12)',

		octaviusColorButtonBackgroundContrastAlpha: 'rgba(250, 250, 250, 0.12)',
	},
	octaviusColorLetterAttachListBackground:
		'linear-gradient(90deg, rgba(31, 31, 31, 0) 0%, #1f1f1f 80%)',
};
