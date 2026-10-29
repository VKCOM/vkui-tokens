import { staticRef } from '../../../build/helpers/tokenHelpers.ts';
import type { Adaptive } from '../../../interfaces/general/tools/index.ts';
import type { Font } from '../../../interfaces/general/typography/index.ts';
import type { ThemeWorkspaceAdminDescription } from '../../../interfaces/themes/workspaceAdmin/index.ts';
import type { ThemeWorkspaceAdminDarkDescription } from '../../../interfaces/themes/workspaceAdminDark/index.ts';
import { darkTheme, lightTheme } from '../../base/paradigm.ts';

export const workspaceAdminTheme: ThemeWorkspaceAdminDescription = {
	...lightTheme,
	themeName: 'workspaceAdmin',
	themeNameBase: 'workspaceAdmin',
	colors: {
		...lightTheme.colors,
		colorBackground: {
			normal: '#F6F7F8',
			hover: '#ECEEF1',
			active: '#E2E5E9',
		},
		colorBackgroundWarning: {
			normal: '#FFF1AD',
			hover: '#F5E8A9',
			active: '#EBDFA4',
		},
		colorBackgroundTertiary: {
			normal: '#F6F7F8',
			hover: '#ECEEF1',
			active: '#E2E5E9',
		},
		colorAvatarsBlue: '#4C91FF',
		colorAvatarsCoral: '#FEA4A4',
		colorAvatarsGreen: '#43CC4C',
		colorAvatarsIndigo: '#7772F8',
		colorAvatarsLavender: '#D3B2FF',
		colorAvatarsLime: '#C3F07F',
		colorAvatarsMint: '#7BEADB',
		colorAvatarsOrange: '#F68E42',
		colorAvatarsPeach: '#FFB980',
		colorAvatarsRed: '#F55252',
		colorAvatarsSea: '#22CEEC',
		colorAvatarsSeagreen: '#42D7A5',
		colorAvatarsSky: '#9EDBFF',
		colorAvatarsViolet: '#B884FF',
		colorAvatarsYellow: '#FFD65C',
		colorIconNegativeSnackbar: '#FF5C5C',
		wsadminColorAvatarTextRed: '#FFE4E0',
		wsadminColorAvatarTextOrange: '#FFF0E5',
		wsadminColorAvatarTextPeach: '#C25B21',
		wsadminColorAvatarTextYellow: '#C76722',
		wsadminColorAvatarTextLime: '#2A9231',
		wsadminColorAvatarTextGreen: '#ECFEDF',
		wsadminColorAvatarTextCyan: '#F0FDFF',
		wsadminColorAvatarTextMint: '#189686',
		wsadminColorAvatarTextSeagreen: '#EBFFF8',
		wsadminColorAvatarTextSky: '#0088D6',
		wsadminColorAvatarTextBlue: '#E0ECFF',
		wsadminColorAvatarTextIndigo: '#E6E5FF',
		wsadminColorAvatarTextViolet: '#F2EAFE',
		wsadminColorAvatarTextLavender: '#874DD6',
		wsadminColorAvatarTextCoral: '#CD3D50',
		wsadminColorAvatarTextPink: '#C2345C',
		wsadminColorTooltipBackgroundYellow: '#F8F8BC',
		wsadminColorTooltipBackgroundGrass: '#DBFFE2',
		wsadminColorTooltipBackgroundMint: '#C3FBFF',
		wsadminColorTooltipBackgroundPurple: '#E4CFFF',
		wsadminColorTooltipBackgroundMagenta: '#FFDBFB',
		wsadminColorTooltipBackgroundMidnightsky: '#C2DEFF',
		wsadminColorTooltipTextYellow: '#695A1E',
		wsadminColorTooltipTextGrass: '#155E55',
		wsadminColorTooltipTextMint: '#236066',
		wsadminColorTooltipTextPurple: '#5E3394',
		wsadminColorTooltipTextMagenta: '#9E3678',
		wsadminColorTooltipTextMidnightsky: '#104D7E',
	},

	fontTitle2: {
		regular: {
			...(lightTheme.fontTitle2 as Adaptive<Font>).regular,
			lineHeight: 24,
		},
	},
	fontTitle3: {
		regular: {
			...(lightTheme.fontTitle3 as Adaptive<Font>).regular,
			lineHeight: 24,
		},
	},

	fontHeadline3: {
		regular: {
			...(lightTheme.fontHeadline2 as Adaptive<Font>).regular,
			fontSize: 14,
			lineHeight: 18,
		},
		compact: {
			...(lightTheme.fontHeadline2 as Adaptive<Font>).regular,
			fontSize: 13,
			lineHeight: 16,
		},
	},

	fontSubhead500: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontFamily: staticRef(lightTheme.fontFamilyAccent),
			fontWeight: 500,
		},
		compact: {
			fontSize: 13,
			lineHeight: 18,
			fontFamily: staticRef(lightTheme.fontFamilyAccent),
			fontWeight: 500,
		},
	},

	fontCaption1500: {
		regular: {
			fontSize: 14,
			lineHeight: 19,
			fontFamily: staticRef(lightTheme.fontFamilyAccent),
			fontWeight: 500,
		},
		compact: {
			fontSize: 12,
			lineHeight: 16,
			fontFamily: staticRef(lightTheme.fontFamilyAccent),
			fontWeight: 500,
		},
	},
};

export const workspaceAdminDarkTheme: ThemeWorkspaceAdminDarkDescription = {
	...workspaceAdminTheme,
	...darkTheme,
	themeName: 'workspaceAdminDark',
	themeNameBase: 'workspaceAdminDark',

	colors: {
		...darkTheme.colors,

		colorBackgroundWarning: {
			normal: '#6C4E00',
			hover: '#72550A',
			active: '#785C14',
		},
		colorBackgroundTertiary: {
			normal: '#252525',
			hover: '#2E2E2E',
			active: '#363636',
		},

		colorAvatarsBlue: '#4C91FF',
		colorAvatarsCoral: '#FEA4A4',
		colorAvatarsGreen: '#43CC4C',
		colorAvatarsIndigo: '#7772F8',
		colorAvatarsLavender: '#D3B2FF',
		colorAvatarsLime: '#C3F07F',
		colorAvatarsMint: '#7BEADB',
		colorAvatarsOrange: '#F68E42',
		colorAvatarsPeach: '#FFB980',
		colorAvatarsRed: '#F55252',
		colorAvatarsSea: '#22CEEC',
		colorAvatarsSeagreen: '#42D7A5',
		colorAvatarsSky: '#9EDBFF',
		colorAvatarsViolet: '#B884FF',
		colorAvatarsYellow: '#FFD65C',
		colorIconNegativeSnackbar: '#FF5C5C',
		wsadminColorAvatarTextRed: '#FFE4E0',
		wsadminColorAvatarTextOrange: '#FFF0E5',
		wsadminColorAvatarTextPeach: '#C25B21',
		wsadminColorAvatarTextYellow: '#C76722',
		wsadminColorAvatarTextLime: '#2A9231',
		wsadminColorAvatarTextGreen: '#ECFEDF',
		wsadminColorAvatarTextCyan: '#F0FDFF',
		wsadminColorAvatarTextMint: '#189686',
		wsadminColorAvatarTextSeagreen: '#EBFFF8',
		wsadminColorAvatarTextSky: '#0088D6',
		wsadminColorAvatarTextBlue: '#E0ECFF',
		wsadminColorAvatarTextIndigo: '#E6E5FF',
		wsadminColorAvatarTextViolet: '#F2EAFE',
		wsadminColorAvatarTextLavender: '#874DD6',
		wsadminColorAvatarTextCoral: '#CD3D50',
		wsadminColorAvatarTextPink: '#C2345C',
		wsadminColorTooltipBackgroundYellow: '#745D00',
		wsadminColorTooltipBackgroundGrass: '#237D61',
		wsadminColorTooltipBackgroundMint: '#0A7680',
		wsadminColorTooltipBackgroundPurple: '#73519F',
		wsadminColorTooltipBackgroundMagenta: '#A2377B',
		wsadminColorTooltipBackgroundMidnightsky: '#1C4479',
		wsadminColorTooltipTextYellow: '#FFFFFF',
		wsadminColorTooltipTextGrass: '#FFFFFF',
		wsadminColorTooltipTextMint: '#FFFFFF',
		wsadminColorTooltipTextPurple: '#FFFFFF',
		wsadminColorTooltipTextMagenta: '#FFFFFF',
		wsadminColorTooltipTextMidnightsky: '#FFFFFF',
	},
};
