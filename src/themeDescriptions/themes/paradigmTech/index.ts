import { ThemeParadigmTechDescription } from '@/interfaces/themes/paradigmTech';

import { octaviusDarkTheme, octaviusTheme } from '../octavius';

export const paradigmTechTheme: ThemeParadigmTechDescription = {
	...octaviusTheme,
	themeName: 'paradigmTech',
	colorsScheme: 'light',
	colors: {
		...octaviusTheme.colors,

		// Text
		colorTextAccent: '#006ee9',
		colorTextAccentThemed: '#006ee9',
		colorTextNegative: '#f23741',
		colorTextLink: '#006ee9',
		colorTextLinkTint: '#71AAEB',
		colorTextLinkThemed: '#0077ff',
		colorTextMuted: '#252629',
		colorTextPrimary: '#252629',
		colorTextPrimaryInvariably: '#252629',
		colorTextSecondary: '#818c9a',
		colorTextSubhead: '#88898d',
		colorTextTertiary: '#cfd0d4',
		colorTextLinkVisited: '#008cef',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#FFFFFF',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#00963e',

		// Icons
		colorIconAccent: '#0077ff',
		colorIconAccentThemed: '#0077ff',
		colorIconPrimary: '#252629',
		colorIconPrimaryInvariably: '#252629',
		colorIconMedium: '#8994a3',
		colorIconMediumAlpha: 'rgba(0, 22, 55, 0.46)',
		colorIconSecondary: '#939eac',
		colorIconSecondaryAlpha: 'rgba(0, 22, 55, 0.42)',
		colorIconTertiary: '#c9d0d9',
		colorIconTertiaryAlpha: 'rgba(0, 22, 55, 0.2)',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#FFFFFF',
		colorIconPositive: '#06a041',
		colorIconNegative: '#f23741',
		colorIconContrastSecondary: '#eff0f4',

		// Background
		colorBackgroundAccent: '#0077FF',
		colorBackgroundAccentThemed: '#0077FF',
		colorBackgroundAccentThemedAlpha: 'rgba(0, 119, 255, 0.2)',
		colorBackgroundAccentAlternative: '#FF9E00',
		colorBackgroundContent: '#FFFFFF',
		colorBackgroundContentAlpha: 'rgba(255, 255, 255, 0.8)',
		colorBackgroundContentInverse: '#1e1f22',
		colorBackgroundSecondary: '#eff0f4',
		colorBackgroundSecondaryAlpha: 'rgba(129, 140, 154, 0.12)',
		colorBackground: '#f6f7fb',
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.2)',
		colorBackgroundWarning: '#fac706',
		colorBackgroundNegative: '#f23741',
		colorBackgroundTertiary: '#f6f7fb',
		colorBackgroundTertiaryAlpha: 'rgba(138, 153, 177, 0.08)',
		colorBackgroundModal: '#FFFFFF',
		colorBackgroundPositive: '#24c649',
		colorBackgroundNegativeTint: '#ffeae7',
		colorBackgroundPositiveTint: '#eafff0',
		colorBackgroundModalInverse: '#2d2e31',
		colorBackgroundContrastInverse: '#333333',
		colorBackgroundContrastThemed: '#FFFFFF',

		colorFieldBackground: '#ffffff',

		// Тонированные цвета для проектов
		colorBackgroundAccentTintThemedAlpha: 'rgba(0, 119, 255, 0.08)',
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.08)',
		colorBackgroundAccentTintThemed: '#f2f9ff',

		colorBackgroundWarningTintThemedAlpha: 'rgba(250, 199, 6, 0.16)',
		colorBackgroundWarningTintAlpha: 'rgba(250, 199, 6, 0.16)',
		colorBackgroundWarningTintThemed: '#fef8d1',
		colorBackgroundWarningTint: '#fef8d1',

		colorBackgroundNegativeTintThemedAlpha: 'rgba(242, 55, 65, 0.08)',
		colorBackgroundNegativeTintAlpha: 'rgba(242, 55, 65, 0.08)',
		colorBackgroundNegativeTintThemed: '#feefeb',

		colorBackgroundPositiveTintThemedAlpha: 'rgba(11, 173, 65, 0.08)',
		colorBackgroundPositiveTintAlpha: 'rgba(11, 173, 65, 0.08)',
		colorBackgroundPositiveTintThemed: '#eafff0',

		// Stroke
		colorStrokeNegative: '#f23741',
		colorStrokePrimary: '#2C2D2E',
		colorImageBorderAlpha: 'rgba(129, 140, 154, 0.16)',
		colorFieldBorderAlpha: 'rgba(129, 140, 154, 0.28)',
		colorSeparatorPrimaryAlpha: 'rgba(129, 140, 154, 0.18)',
		colorSeparatorSecondary: '#e3e4e7',
		colorSeparatorPrimary: '#eaebee',
		colorStrokePositive: '#24c649',

		// Palette
		colorAccentBlue: '#0077FF',
		colorAccentGray: '#a3a4a8',
		colorAccentRed: '#f23741',
		colorAccentOrange: '#f77e13',
		colorAccentLime: '#B8FC75',
		colorAccentGreen: '#24c649',
		colorAccentCyan: '#24e9fe',
		colorAccentAzure: '#0077FF',
		colorAccentPurple: '#8f68fe',
		colorAccentViolet: '#a567e7',

		// Переопределяем токены Octavius
		octaviusColorBackground: '#f6f7fb',
		octaviusColorHeaderButtonText: '#252629',
		octaviusColorHeaderIconFavorite: '#f23741',
		octaviusColorSidebarIconFavorite: '#f23741',
		octaviusColorSnackbarIconPositive: '#24c649',
		octaviusColorSnackbarIconNegative: '#f23741',

		//
		// Локальные токены Paradigm Tech
		//
		paradigmTechBackgroundPortal: '#f6f7fb',

		// Avatars Pallete
		paradigmTechAvatarsSky: '#9dd5fe',
		paradigmTechAvatarsSeagreen: '#70ec9a',
		paradigmTechAvatarsMint: '#7beadb',
		paradigmTechAvatarsCyan: '#00d3e6',
		paradigmTechAvatarsBlue: '#2389ff',
		paradigmTechAvatarsRed: '#f85050',
		paradigmTechAvatarsYellow: '#ffd65c',
		paradigmTechAvatarsIndigo: '#7876ff',
		paradigmTechAvatarsPeach: '#fcbe99',
		paradigmTechAvatarsLavander: '#c9b7ff',
		paradigmTechAvatarsViolet: '#b780f3',
		paradigmTechAvatarsGreen: '#2acf56',
		paradigmTechAvatarsLime: '#c3f07f',
		paradigmTechAvatarsCoral: '#ffa9a3',
		paradigmTechAvatarsOrange: '#fb8422',
	},
};

export const paradigmTechDarkTheme: ThemeParadigmTechDescription = {
	...paradigmTechTheme,
	...octaviusDarkTheme,
	themeName: 'paradigmTechDark',
	colors: {
		...paradigmTechTheme.colors,
		...octaviusDarkTheme.colors,

		// Text
		colorTextAccent: '#2e90fb',
		colorTextAccentThemed: '#ffffff',
		colorTextNegative: '#f85050',
		colorTextLink: '#2e90fb',
		colorTextLinkTint: '#71AAEB',
		colorTextLinkThemed: '#ffffff',
		colorTextMuted: '#252629',
		colorTextPrimary: '#f6f7fb',
		colorTextPrimaryInvariably: '#252629',
		colorTextSecondary: '#8994a3',
		colorTextSubhead: '#cfd0d4',
		colorTextTertiary: '#76777b',
		colorTextLinkVisited: '#19a1f4',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#FFFFFF',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#24c649',

		// Icons
		colorIconAccent: '#0187f6',
		colorIconAccentThemed: '#fff',
		colorIconPrimary: '#f6f7fb',
		colorIconPrimaryInvariably: '#252629',
		colorIconMedium: '#818c9a',
		colorIconMediumAlpha: 'rgba(209, 226, 251, 0.56)',
		colorIconSecondary: '#798492',
		colorIconSecondaryAlpha: 'rgba(209, 226, 251, 0.52)',
		colorIconTertiary: '#626d7a',
		colorIconTertiaryAlpha: 'rgba(205, 225, 254, 0.4)',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#252629',
		colorIconPositive: '#24c649',
		colorIconNegative: '#fc6664',
		colorIconContrastSecondary: '#eff0f4',

		// Background
		colorBackgroundAccent: '#0077FF',
		colorBackgroundAccentThemed: '#ffffff',
		colorBackgroundAccentThemedAlpha: 'rgba(0, 119, 255, 0.2)',
		colorBackgroundAccentAlternative: '#FF9E00',
		colorBackgroundContent: '#1e1f22',
		colorBackgroundContentAlpha: 'rgba(255, 255, 255, 0.8)',
		colorBackgroundContentInverse: '#ffffff',
		colorBackgroundSecondary: '#343539',
		colorBackgroundSecondaryAlpha: 'rgba(221, 224, 235, 0.08)',
		colorBackground: '#17181b',
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.2)',
		colorBackgroundWarning: '#fed409',
		colorBackgroundNegative: '#f85050',
		colorBackgroundTertiary: '#2d2e31',
		colorBackgroundTertiaryAlpha: 'rgba(138, 153, 177, 0.08)',
		colorBackgroundModal: '#2d2e31',
		colorBackgroundPositive: '#35db6a',
		colorBackgroundNegativeTint: '#49060a',
		colorBackgroundPositiveTint: '#062d19',
		colorBackgroundModalInverse: '#ffffff',
		colorBackgroundContrastInverse: '#333333',
		colorBackgroundContrastThemed: '#FFFFFF',

		colorFieldBackground: '#252629',

		// Тонированные цвета для проектов
		colorBackgroundAccentTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.2)',
		colorBackgroundAccentTintThemed: '#ffffff',

		colorBackgroundWarningTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundWarningTintAlpha: 'rgba(250, 199, 6, 0.12)',
		colorBackgroundWarningTintThemed: '#ffffff',
		colorBackgroundWarningTint: '#754611',

		colorBackgroundNegativeTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundNegativeTintAlpha: 'rgba(242, 55, 65, 0.2)',
		colorBackgroundNegativeTintThemed: '#ffffff',

		colorBackgroundPositiveTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundPositiveTintAlpha: 'rgba(11, 173, 65, 0.16)',
		colorBackgroundPositiveTintThemed: '#eafff0',

		// Stroke
		colorStrokeNegative: '#f23741',
		colorStrokePrimary: '#2C2D2E',
		colorImageBorderAlpha: 'rgba(255, 255, 255, 0.08)',
		colorFieldBorderAlpha: 'rgba(255, 255, 255, 0.12)',
		colorSeparatorPrimaryAlpha: 'rgba(0, 0, 0, 0.4)',
		colorSeparatorSecondary: '#17181b',
		colorSeparatorPrimary: '#101114',
		colorStrokePositive: '#24c649',

		// Переопределяем токены Octavius
		octaviusColorBackground: '#17181b',
		octaviusColorHeaderButtonText: '#252629',
		octaviusColorHeaderIconFavorite: '#f23741',
		octaviusColorSidebarIconFavorite: '#f23741',
		octaviusColorSnackbarIconPositive: '#24c649',
		octaviusColorSnackbarIconNegative: '#f23741',

		//
		// Локальные токены Paradigm Tech
		//
		paradigmTechBackgroundPortal: '#17181b',
	},
};
