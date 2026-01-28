import { ThemeParadigmTechDescription } from '../../../interfaces/themes/paradigmTech/index.js';
import { octaviusDarkTheme, octaviusTheme } from '../octavius/index.js';

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
		colorTextLinkThemed: '#006ee9',
		colorTextMuted: '#252629',
		colorTextPrimary: '#252629',
		colorTextPrimaryInvariably: '#252629',
		colorTextSecondary: '#697481',
		colorTextSubhead: '#707B89',
		colorTextTertiary: '#C9D0D9',
		colorTextLinkVisited: '#2E90FB',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#FFFFFF',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#00963e',

		// Icons
		colorIconAccent: '#0077ff',
		colorIconAccentThemed: '#0077ff',
		colorIconPrimary: '#252629',
		colorIconPrimaryInvariably: '#252629',
		colorIconMedium: '#798492',
		colorIconMediumAlpha: 'rgba(0, 22, 55, 0.46)',
		colorIconSecondary: '#939eac',
		colorIconSecondaryAlpha: 'rgba(0, 22, 55, 0.42)',
		colorIconTertiary: '#c9d0d9',
		colorIconTertiaryAlpha: 'rgba(3, 37, 76, 0.2)',
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
		colorBackgroundWarning: '#FEF099',
		colorBackgroundNegative: '#f23741',
		colorBackgroundTertiary: '#f6f7fb',
		colorBackgroundTertiaryAlpha: 'rgba(138, 153, 177, 0.08)',
		colorBackgroundModal: '#FFFFFF',
		colorBackgroundPositive: '#0BAD41',
		colorBackgroundNegativeTint: '#FEEFF0',
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

		colorBackgroundPositiveTintThemedAlpha: 'rgba(11, 255, 89, 0.08)',
		colorBackgroundPositiveTintAlpha: 'rgba(11, 255, 89, 0.08)',
		colorBackgroundPositiveTintThemed: '#eafff0',

		// Stroke
		colorStrokeNegative: '#f23741',
		colorStrokePrimary: '#2C2D2E',
		colorImageBorderAlpha: 'rgba(129, 140, 154, 0.16)',
		colorFieldBorderAlpha: 'rgba(129, 140, 154, 0.28)',
		colorSeparatorPrimaryAlpha: 'rgba(129, 140, 154, 0.18)',
		colorSeparatorSecondary: '#e3e4e7',
		colorSeparatorPrimary: '#eaebee',
		colorStrokePositive: '#0BAD41',

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
		octaviusColorSnackbarIconNegative: '#F85050',

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
		colorTextSubhead: '#9DA7B5',
		colorTextTertiary: '#707B89',
		colorTextLinkVisited: '#56A7FB',
		colorTextContrast: '#FFFFFF',
		colorTextContrastThemed: '#FFFFFF',
		colorLinkContrast: '#FFFFFF',
		colorTextPositive: '#24c649',

		// Icons
		colorIconAccent: '#0187f6',
		colorIconAccentThemed: '#fff',
		colorIconPrimary: '#f6f7fb',
		colorIconPrimaryInvariably: '#252629',
		colorIconMedium: '#939EAC',
		colorIconMediumAlpha: 'rgba(215, 231, 254, 0.56)',
		colorIconSecondary: '#798492',
		colorIconSecondaryAlpha: 'rgba(209, 226, 251, 0.52)',
		colorIconTertiary: '#626d7a',
		colorIconTertiaryAlpha: 'rgba(184, 205, 235, 0.4)',
		colorIconContrast: '#FFFFFF',
		colorIconContrastThemed: '#252629',
		colorIconPositive: '#24c649',
		colorIconNegative: '#F85050',
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
		colorBackgroundSecondaryAlpha: 'rgba(255, 255, 255, 0.12)',
		colorBackground: '#17181b',
		colorBackgroundContrast: '#FFFFFF',
		colorBackgroundContrastSecondaryAlpha: 'rgba(255, 255, 255, 0.2)',
		colorBackgroundWarning: '#5E480D',
		colorBackgroundNegative: '#f85050',
		colorBackgroundTertiary: '#252629',
		colorBackgroundTertiaryAlpha: 'rgba(255, 255, 255, 0.04)',
		colorBackgroundModal: '#2d2e31',
		colorBackgroundPositive: '#24C649',
		colorBackgroundNegativeTint: '#543034',
		colorBackgroundPositiveTint: '#284F37',
		colorBackgroundModalInverse: '#ffffff',
		colorBackgroundContrastInverse: '#333333',
		colorBackgroundContrastThemed: '#FFFFFF',
		colorBackgroundAccentTint: '#56A7FB',

		colorFieldBackground: '#1E1F22',

		// Тонированные цвета для проектов
		colorBackgroundAccentTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundAccentTintAlpha: 'rgba(0, 119, 255, 0.2)',
		colorBackgroundAccentTintThemed: '#ffffff',

		colorBackgroundWarningTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundWarningTintAlpha: 'rgba(250, 199, 6, 0.12)',
		colorBackgroundWarningTintThemed: '#ffffff',
		colorBackgroundWarningTint: '#46402C',

		colorBackgroundNegativeTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundNegativeTintAlpha: 'rgba(242, 55, 65, 0.2)',
		colorBackgroundNegativeTintThemed: '#ffffff',

		colorBackgroundPositiveTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		colorBackgroundPositiveTintAlpha: 'rgba(11, 255, 89, 0.16)',
		colorBackgroundPositiveTintThemed: '#FFFFFF',

		// Stroke
		colorStrokeNegative: '#F85050',
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
		octaviusColorSnackbarIconNegative: '#F85050',

		//
		// Локальные токены Paradigm Tech
		//
		paradigmTechBackgroundPortal: '#17181b',
	},
};
