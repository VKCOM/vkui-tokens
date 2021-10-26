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
		colorPaletteOrange2Alpha: getRGBA('#FF9E00', 0.12),
		colorPaletteYellow1: '#ffc311',
		colorPaletteGreen1: '#aee113',
		colorPaletteGreen2: '#59c354',
		colorPaletteGreen3: '#37eb94',
		colorPaletteGreen4: '#00b1b3',
		colorPaletteGreen5Alpha: getRGBA('#5CBA38', 0.12),
		colorPaletteGreen6Alpha: getRGBA('#00E6B4', 0.08),
		colorPaletteBlue1: '#2951ff',
		colorPaletteBlue2: '#00abf2',
		colorPaletteBlue3: '#26dfdf',
		colorPaletteBlue4Alpha: getRGBA('#005FF9', 0.12),
		colorPaletteViolet1: '#6c00ff',
		colorPaletteViolet2: '#ae73ff',
		colorAlert: '#c1341b',
		colorBgPlaceholder: '#ffffff',
		colorBgPromo: '#EBEEF5',
		octaviusColorThreadFooterBackground: '#ebecef',
		colorBackgroundSecondary: '#F0F1F3',

		octaviusColorButtonText: '#333333',
		octaviusColorButtonIcon: '#333333',

		octaviusColorButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.04)',
			active: 'rgba(0, 16, 61, 0.08)',
		},

		octaviusColorBackground: lightTheme.colors.colorBackground,
		octaviusColorBackgroundAccentTonedAlpha: toneOpacity(
			lightTheme.colors.colorBackgroundAccent,
			0.12,
		),
		octaviusColorOverlayBackground: 'transparent',

		octaviusColorHeaderBackground: lightTheme.colors.colorBackgroundAccent,
		octaviusColorHeaderButtonText: lightTheme.colors.colorTextContrast,
		octaviusColorHeaderButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: toneOpacity('#00103D', 0.12),
			active: toneOpacity('#00103D', 0.24),
		},
		octaviusColorHeaderIcon: lightTheme.colors.colorIconContrast,
		octaviusColorHeaderTextSecondary: '#93969b',
		octaviusColorHeaderSearchIcon: '#b6b8be',
		octaviusColorHeaderSearchChipBackground:
			lightTheme.colors.colorBackgroundSecondary,
		octaviusColorHeaderSearchChipBackgroundEditable: '#ffffff',
		octaviusColorHeaderSearchChipBorderEditableAlpha:
			lightTheme.colors.colorFieldBorderAlpha,

		octaviusColorHeaderSearchBackground: '#ffffff',
		octaviusColorHeaderSearchBackgroundCollapsed: '#ffffff',

		octaviusColorHeaderSearchText: lightTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			lightTheme.colors.colorTextSecondary,
		octaviusColorHeaderFilterTextAlpha: 'rgba(255, 255, 255, .48)',

		octaviusColorHeaderProgress:
			lightTheme.colors.colorBackgroundAccentAlternative,

		octaviusColorPortalMenuBackground: lightTheme.colors.colorBackground,

		octaviusColorSidebarItemIconActive: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemIconPrimary: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarItemTextActive: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemTextPrimary: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonIcon: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarButtonText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonBackground: '#FFFFFF',

		octaviusColorSidebarCounterBackgroundAlpha:
			lightTheme.colors.colorTransparent,
		octaviusColorSidebarCounterText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarItemBackgroundAlpha:
			lightTheme.colors.colorTransparent,
		octaviusColorSidebarScrollbarAlpha: 'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarItemIcon: '#333333',
		octaviusColorSidebarItemText: '#333333',
		octaviusColorSidebarItemButtonBackgroundAlpha: 'rgba(0, 16, 61, 0.08)',
		octaviusColorSidebarItemIconSecondaryAlpha: 'rgba(51, 51, 51, 0.64)',
		octaviusColorSidebarItemTextSecondaryAlpha: 'rgba(51, 51, 51, 0.64)',

		octaviusColorSidebarShortItemIcon: '#333333',
		octaviusColorSidebarShortItemText: '#333333',
		octaviusColorSidebarShortItemTextActive:
			lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarShortItemIconActive:
			lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarShortItemIconSecondary:
			lightTheme.colors.colorIconSecondary,
		octaviusColorSidebarShortItemTextSecondary:
			lightTheme.colors.colorTextSecondary,

		octaviusColorSidebarComposeButtonBackground: '#ffffff',
		octaviusColorSidebarComposeButtonText: '#2c2d2e',
		octaviusColorSidebarComposeButtonIcon: '#2c2d2e',

		octaviusColorContentScrollbarAlpha: 'rgba(0, 16, 61, 0.16)',

		octaviusColorIconUnread: '#005FF9',
		octaviusColorIconFavorite: '#fc2c38',
		octaviusColorIconOrder: '#ff54aa',
		octaviusColorIconFinance: '#2fc885',
		octaviusColorIconRegistration: '#ff9e00',
		octaviusColorIconTravel: '#ba34fc',
		octaviusColorIconEvent: '#09a6fa',
		octaviusColorIconFees: '#e60000',

		octaviusColorSidebarIconUnread: '#005FF9',
		octaviusColorSidebarIconFavorite: '#fc2c38',
		octaviusColorSidebarIconOrder: '#ff54aa',
		octaviusColorSidebarIconFinance: '#2fc885',
		octaviusColorSidebarIconRegistration: '#ff9e00',
		octaviusColorSidebarIconTravel: '#ba34fc',
		octaviusColorSidebarIconEvent: '#09a6fa',
		octaviusColorSidebarIconFees: '#e60000',

		octaviusColorListLetterBackground: {
			normal: '#ffffff',
			hover: '#f5f5f7',
			active: '#ebecef',
		},
		octaviusColorListTextUnread: lightTheme.colors.colorTextPrimary,
		octaviusColorListTextPrimary: lightTheme.colors.colorTextPrimary,
		octaviusColorListIconPrimary: lightTheme.colors.colorIconPrimary,
		octaviusColorListLetterSeparator:
			lightTheme.colors.colorSeparatorPrimary,
		octaviusColorListLetterAdvBackground: '#F0F5FF',
		octaviusColorLetterListTextUnread: '#2c2d2e',

		octaviusColorDatasetBackground:
			lightTheme.colors.colorBackgroundContent,

		octaviusColorEmptyStateText: '#333333',
		octaviusColorLayoutBorder: '#E0E2E8',
		octaviusColorLayoutLetterBorder: '#E0E2E8',
		octaviusColorEmptyStateTextLink: '#005bd1',
		octaviusColorLetterPreviewBackgroundPrimary: '#F9F9FA',
		octaviusColorLetterPreviewBackgroundSecondary: '#F3F3F5',
		octaviusColorNotificationBorder: '#ffffff',

		octaviusTextDecorationEmptyStateTextLink: {
			normal: 'none',
			hover: 'underline',
			active: 'underline',
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
		'MailSans, HelveticaNeue, Helvetica, Arial, sans-serif',

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
		colorBgPlaceholder: '#000000',
		colorBgPromo: '#303030',
		octaviusColorThreadFooterBackground: '#303030',

		octaviusColorPortalMenuBackground: '#19191A',
		octaviusColorSidebarItemBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorBackground: '#000000',
		octaviusColorBackgroundAccentTonedAlpha: toneOpacity(
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
		octaviusColorHeaderSearchChipBorderEditableAlpha:
			'rgba(255, 255, 255, .48)',
		octaviusColorHeaderSearchText: darkTheme.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			darkTheme.colors.colorTextSecondary,

		octaviusColorSidebarItemIconPrimary: '#E7E8EA',

		octaviusColorSidebarItemIcon: '#E7E8EA',
		octaviusColorSidebarItemText: '#E7E8EA',
		octaviusColorSidebarItemTextActive: '#ffffff',
		octaviusColorSidebarItemIconActive: '#ffffff',
		octaviusColorSidebarItemTextSecondaryAlpha: 'rgba(231, 232, 234, 0.64)',
		octaviusColorSidebarItemIconSecondaryAlpha: 'rgba(231, 232, 234, 0.64)',

		octaviusColorSidebarShortItemIcon: '#E7E8EA',
		octaviusColorSidebarShortItemText: '#E7E8EA',
		octaviusColorSidebarShortItemTextActive: '#ffffff',
		octaviusColorSidebarShortItemIconActive: '#ffffff',
		octaviusColorSidebarShortItemTextSecondary:
			darkTheme.colors.colorTextSecondary,
		octaviusColorSidebarShortItemIconSecondary:
			darkTheme.colors.colorIconSecondary,

		octaviusColorHeaderButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.2)',
		},

		octaviusColorButtonText: '#E7E8EA',
		octaviusColorButtonIcon: '#E7E8EA',
		octaviusColorButtonBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.04)',
			active: 'rgba(255, 255, 255, 0.08)',
		},
		octaviusColorSidebarItemTextPrimary: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonIcon: lightTheme.colors.colorIconPrimary,
		octaviusColorSidebarButtonText: lightTheme.colors.colorTextPrimary,
		octaviusColorSidebarButtonBackground: '#FFFFFF',

		octaviusColorSidebarCounterBackgroundAlpha:
			darkTheme.colors.colorTransparent,

		octaviusColorSidebarCounterText: darkTheme.colors.colorTextPrimary,
		octaviusColorSidebarScrollbarAlpha: 'rgba(255, 255, 255, 0.12)',
		octaviusColorSidebarItemButtonBackgroundAlpha: {
			normal: 'rgba(255, 255, 255, 0.08)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		octaviusColorContentScrollbarAlpha: 'rgba(255, 255, 255, 0.12)',

		octaviusColorIconUnread: '#0C7CFF',
		octaviusColorIconFavorite: '#FF4550',
		octaviusColorIconOrder: '#F94CA3',
		octaviusColorIconFinance: '#24C780',
		octaviusColorIconRegistration: '#FF9C37',
		octaviusColorIconTravel: '#C15DF3',
		octaviusColorIconEvent: '#3BBAFE',
		octaviusColorIconFees: '#EE3C3C',

		octaviusColorSidebarIconUnread: '#0C7CFF',
		octaviusColorSidebarIconFavorite: '#FF4550',
		octaviusColorSidebarIconOrder: '#F94CA3',
		octaviusColorSidebarIconFinance: '#24C780',
		octaviusColorSidebarIconRegistration: '#FF9C37',
		octaviusColorSidebarIconTravel: '#C15DF3',
		octaviusColorSidebarIconEvent: '#3BBAFE',
		octaviusColorSidebarIconFees: '#EE3C3C',

		octaviusColorListLetterBackground:
			darkTheme.colors.colorBackgroundContent,
		octaviusColorListLetterSeparator:
			darkTheme.colors.colorSeparatorPrimaryAlpha,
		octaviusColorListLetterAdvBackground: '#151515',

		octaviusColorDatasetBackground: darkTheme.colors.colorBackgroundContent,
		octaviusColorEmptyStateText: darkTheme.colors.colorTextPrimary,
		octaviusColorLayoutBorder: 'transparent',
		octaviusColorLayoutLetterBorder: 'rgba(0, 0, 0, 0.4)',
		octaviusColorEmptyStateTextLink: '#E7E8EA',
		octaviusColorLetterListTextUnread: '#ffffff',
		octaviusColorLetterPreviewBackgroundPrimary: '#141414',
		octaviusColorLetterPreviewBackgroundSecondary: '#0F0F0F',
		octaviusColorNotificationBorder: '#000000',

		octaviusTextDecorationEmptyStateTextLink: {
			normal: 'underline',
			hover: 'none',
			active: 'none',
		},
	},
	octaviusColorLetterAttachListBackground:
		'linear-gradient(90deg, rgba(31, 31, 31, 0) 0%, #1f1f1f 80%)',
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
		octaviusColorHeaderFilterTextAlpha: '#919399',
		octaviusColorHeaderSearchChipBackgroundEditable: '#ffffff',
		octaviusColorHeaderSearchChipBorderEditableAlpha: '#FFFFFF',
		octaviusColorHeaderButtonBackgroundAlpha: '#FFFFFF',
	},

	octaviusElevationHeader: '0px 0px 16px rgba(2, 13, 41, 0.16)',
};
