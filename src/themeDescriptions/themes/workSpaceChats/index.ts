import type { ThemeWorkSpaceChatsDescription } from '../../../interfaces/themes/workSpaceChats/index.ts';
import { darkTheme as paradigmBaseDark, lightTheme as paradigmBase } from '../../base/paradigm.ts';

export const workSpaceChatsTheme: ThemeWorkSpaceChatsDescription = {
	...paradigmBase,
	themeName: 'workSpaceChats',
	themeNameBase: 'workSpaceChats',
	colorsScheme: 'light',

	colors: {
		...paradigmBase.colors,

		// Text
		colorTextMediumAlpha: 'rgba(44, 45, 46, 0.56)',

		// Icon
		colorIconNotificationNeutralAlpha: 'rgba(67, 83, 103, 0.28)',
		colorIconNotificationRed: '#FF5C5C',
		colorIconNotificationAccent: '#0077FF',

		// Bubble
		colorBubbleBackgroundAccent: '#DEECFF',
		colorBubbleBackgroundNeutral: '#FFFFFF',
		colorBubbleHighlightAccent: 'rgba(0, 119, 255, 0.16)',
		colorBubbleTextRed: '#C43131',
		colorBubbleTextOrange: '#C84900',
		colorBubbleTextPeach: '#BE6116',
		colorBubbleTextYellow: '#987202',
		colorBubbleTextLime: '#5B841D',
		colorBubbleTextGreen: '#1C8022',
		colorBubbleTextSea: '#097F94',
		colorBubbleTextMint: '#1E7D70',
		colorBubbleTextSeagreen: '#0F815B',
		colorBubbleTextSky: '#2B6D94',
		colorBubbleTextBlue: '#205EC2',
		colorBubbleTextIndigo: '#4C47C8',
		colorBubbleTextViolet: '#7042AC',
		colorBubbleTextLavender: '#6D5292',
		colorBubbleTextCoral: '#A53848',

		// Other
		colorOtherPullBackgroundAccent: 'rgba(0, 119, 255, 0.06)',
		colorOtherPullProgressAccent: 'rgba(0, 119, 255, 0.08)',
		colorOtherBackgroundBlur: 'rgba(255, 255, 255, 0.01)',

		// States
		colorBubbleTransparentHover: 'rgba(0, 16, 61, 0.08)',
		colorBubbleTransparentActive: 'rgba(0, 16, 61, 0.12)',
	},
};

export const workSpaceChatsDarkTheme: ThemeWorkSpaceChatsDescription = {
	...workSpaceChatsTheme,
	...paradigmBaseDark,
	themeName: 'workSpaceChatsDark',
	themeNameBase: 'workSpaceChats',
	colorsScheme: 'dark',
	colors: {
		...workSpaceChatsTheme.colors,
		...paradigmBaseDark.colors,

		// Text
		colorTextMediumAlpha: 'rgba(255, 255, 255, 0.64)',

		// Icon
		colorIconNotificationNeutralAlpha: 'rgba(250, 252, 255, 0.28)',
		colorIconNotificationRed: '#FF5C5C',
		colorIconNotificationAccent: '#5A9EFF',

		// Bubble
		colorBubbleBackgroundAccent: '#12335A',
		colorBubbleBackgroundNeutral: '#303030',
		colorBubbleHighlightAccent: 'rgba(255, 255, 255, 0.12)',
		colorBubbleTextRed: '#FF6464',
		colorBubbleTextOrange: '#F68E42',
		colorBubbleTextPeach: '#FFB980',
		colorBubbleTextYellow: '#FFD65C',
		colorBubbleTextLime: '#C3F07F',
		colorBubbleTextGreen: '#43CC4C',
		colorBubbleTextSea: '#22CEEC',
		colorBubbleTextMint: '#7BEADB',
		colorBubbleTextSeagreen: '#42D7A5',
		colorBubbleTextSky: '#9EDBFF',
		colorBubbleTextBlue: '#629FFF',
		colorBubbleTextIndigo: '#8E89FF',
		colorBubbleTextViolet: '#B884FF',
		colorBubbleTextLavender: '#D3B2FF',
		colorBubbleTextCoral: '#FEA4A4',

		// Other
		colorOtherPullBackgroundAccent: 'rgba(255, 255, 255, 0.08)',
		colorOtherPullProgressAccent: 'rgba(0, 119, 255, 0.24)',
		colorOtherBackgroundBlur: 'rgba(255, 255, 255, 0.01)',

		// States
		colorBubbleTransparentHover: 'rgba(255, 255, 255, 0.08)',
		colorBubbleTransparentActive: 'rgba(255, 255, 255, 0.12)',
	},
};
