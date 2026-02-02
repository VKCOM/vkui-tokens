import type { ThemePortalUIDescription } from '../../../interfaces/themes/portalUI/index.ts';
import { darkTheme, lightTheme } from '../../base/paradigm.ts';

export const portalUITheme: ThemePortalUIDescription = {
	...lightTheme,
	portalElevation1: '0px 6px 20px 0px rgba(0, 16, 61, 0.07)',
	portalElevation2: '0px 10px 24px 0px rgba(0, 16, 61, 0.11)',
	portalElevation3: '0px 16px 48px 0px rgba(0, 16, 61, 0.28)',
	portalGradientBackground:
		'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundHover:
		'linear-gradient(90deg, rgba(245, 246, 247, 0) 0%, #F5F6F7 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundActive:
		'linear-gradient(90deg, rgba(235, 236, 240, 0) 0%, #EBECF0 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundSecondary:
		'linear-gradient(90deg, rgba(249, 249, 250, 0) 0%, #F9F9FA 113.75%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundTertiary:
		'linear-gradient(90deg, rgba(249, 249, 250, 0) 0%, #F9F9FA 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundContent:
		'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundCard:
		'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundCardHover:
		'linear-gradient(90deg, rgba(245, 246, 247, 0) 0%, #F5F6F7 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundCardActive:
		'linear-gradient(90deg, rgba(235, 236, 240, 0) 0%, #EBECF0 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundModal:
		'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundModalHover:
		'linear-gradient(90deg, rgba(245, 246, 247, 0) 0%, #F5F6F7 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundModalActive:
		'linear-gradient(90deg, rgba(235, 236, 240, 0) 0%, #EBECF0 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	portalGradientBackgroundAccent:
		'linear-gradient(90deg, rgba(230, 239, 255, 0) 0%, #E6EFFF 100%),' +
		'linear-gradient(0deg, rgba(0, 16, 61, 0.12), rgba(0, 16, 61, 0.12))',
	colors: {
		...lightTheme.colors,
		portalColorTextLinkVisitedAlternative: '#540354',
		portalColorTextBlueAccentThemed: '#1C4479',
		portalColorTextGreenAccentThemed: '#087C6D',
		portalColorTextOrangeAccentThemed: '#78472A',
		portalColorTextPurpleAccentThemed: '#73519F',
		portalColorBackgroundAccentAlpha: {
			normal: 'rgba(0, 95, 249, 0.1)',
			hover: 'rgba(0, 95, 249, 0.14)',
			active: 'rgba(0, 95, 249, 0.18)',
		},
		portalColorBackgroundAccent: '#E6EFFE',
		portalColorBackgroundAccentTabAlpha: 'rgba(0, 95, 249, 0.1)',
		portalColorBackgroundCard: '#FFFFFF',
		portalColorBackground: '#F9F9FA',
		portalColorBackgroundInvariable: '#F0F1F3',
		portalColorOverlayPrimaryAlpha: 'rgba(0, 0, 0, 0.15)',
		portalColorBackgroundDark: {
			normal: '#19191A',
			hover: '#2B2B2C',
			active: '#3E3E3F',
		},
		portalColorPaletteSweetBlue: '#DDE9FF',
		portalColorPaletteSweetGreen: '#CEEEE6',
		portalColorPaletteSweetOrange: '#F9D3BD',
		portalColorPaletteSweetPurple: '#F2E8FF',
		portalColorPaletteLightBlue: '#5A9EFF',
	},
	themeName: 'portalUI',
	themeNameBase: 'portalUI',
};

export const portalUIDarkTheme: ThemePortalUIDescription = {
	...darkTheme,
	portalElevation1: '0px 6px 20px 0px rgba(0, 16, 61, 0.07)',
	portalElevation2: '0px 10px 24px 0px rgba(0, 16, 61, 0.11)',
	portalElevation3: '0px 16px 48px 0px rgba(0, 16, 61, 0.28)',
	portalGradientBackground:
		'linear-gradient(90deg, rgba(25, 25, 26, 0) 0%, #19191A 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundHover:
		'linear-gradient(90deg, rgba(34, 34, 35, 0) 0%, #222223 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundActive:
		'background: linear-gradient(90deg, rgba(64, 64, 64, 0) 0%, #404040 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundSecondary:
		'linear-gradient(90deg, rgba(25, 25, 26, 0) 0%, #19191A 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundTertiary:
		'linear-gradient(90deg, rgba(37, 37, 37, 0) 0%, #252525 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundContent:
		'linear-gradient(90deg, rgba(35, 35, 36, 0) 0%, #232324 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundCard:
		'linear-gradient(90deg, rgba(42, 42, 43, 0) 0%, #2A2A2B 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundCardHover:
		'linear-gradient(90deg, rgba(50, 50, 51, 0) 0%, #323233 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundCardActive:
		'background: linear-gradient(90deg, rgba(59, 59, 60, 0) 0%, #3B3B3C 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundModal:
		'linear-gradient(90deg, rgba(48, 48, 48, 0) 0%, #303030 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundModalHover:
		'linear-gradient(90deg, rgba(56, 56, 56, 0) 0%, #383838 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundModalActive:
		'linear-gradient(90deg, rgba(64, 64, 64, 0) 0%, #404040 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	portalGradientBackgroundAccent:
		'linear-gradient(90deg, rgba(20, 39, 71, 0) 0%, #142747 100%),' +
		'linear-gradient(0deg, rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))',
	colors: {
		...darkTheme.colors,
		portalColorTextLinkVisitedAlternative: '#AA68AA',
		portalColorTextBlueAccentThemed: '#FFFFFF',
		portalColorTextGreenAccentThemed: '#FFFFFF',
		portalColorTextOrangeAccentThemed: '#FFFFFF',
		portalColorTextPurpleAccentThemed: '#FFFFFF',
		portalColorBackgroundAccentAlpha: {
			normal: 'rgba(0, 95, 249, 0.2)',
			hover: 'rgba(0, 95, 249, 0.24)',
			active: 'rgba(0, 95, 249, 0.28)',
		},
		portalColorBackgroundAccent: '#142747',
		portalColorBackgroundAccentTabAlpha: 'rgba(255, 255, 255, 0.08)',
		portalColorBackgroundCard: '#2A2A2B',
		portalColorBackground: '#19191A',
		portalColorBackgroundInvariable: '#F0F1F3',
		portalColorOverlayPrimaryAlpha: 'rgba(0, 0, 0, 0.48)',
		portalColorBackgroundDark: {
			normal: '#2A2A2B',
			hover: '#3B3B3C',
			active: '#4C4C4D',
		},
		portalColorPaletteSweetBlue: '#1C4479',
		portalColorPaletteSweetGreen: '#087C6D',
		portalColorPaletteSweetOrange: '#78472A',
		portalColorPaletteSweetPurple: '#73519F',
		portalColorPaletteLightBlue: '#1C4479',
	},
	themeName: 'portalUIDark',
};
