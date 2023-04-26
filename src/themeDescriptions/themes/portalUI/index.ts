import { ThemePortalUIDescription } from '@/interfaces/themes/portalUI';
import { lightTheme } from '@/themeDescriptions/base/paradigm';

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
