import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../general/colors/index.ts';
import type { ThemeCssVars } from '../../general/index.ts';
import type { Adaptive } from '../../general/tools/index.ts';
import type { Font } from '../../general/typography/index.ts';
import type {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeDescription,
} from '../../namespaces/paradigm/index.ts';

export interface ThemeWorkspaceOverValues {
	fontHeadline3: Adaptive<Font>;
	fontCaption1500: Adaptive<Font>;
	fontSubhead500: Adaptive<Font>;
}
export interface LocalWorkspaceAdminColorsDescriptionStruct {
	colorAvatarsBlue: ColorDescription;
	colorAvatarsCoral: ColorDescription;
	colorAvatarsGreen: ColorDescription;
	colorAvatarsIndigo: ColorDescription;
	colorAvatarsLavender: ColorDescription;
	colorAvatarsLime: ColorDescription;
	colorAvatarsMint: ColorDescription;
	colorAvatarsOrange: ColorDescription;
	colorAvatarsPeach: ColorDescription;
	colorAvatarsRed: ColorDescription;
	colorAvatarsSea: ColorDescription;
	colorAvatarsSeagreen: ColorDescription;
	colorAvatarsSky: ColorDescription;
	colorAvatarsViolet: ColorDescription;
	colorAvatarsYellow: ColorDescription;
	colorIconNegativeSnackbar: ColorDescription;
	wsadminColorAvatarTextRed: ColorDescription;
	wsadminColorAvatarTextOrange: ColorDescription;
	wsadminColorAvatarTextPeach: ColorDescription;
	wsadminColorAvatarTextYellow: ColorDescription;
	wsadminColorAvatarTextLime: ColorDescription;
	wsadminColorAvatarTextGreen: ColorDescription;
	wsadminColorAvatarTextCyan: ColorDescription;
	wsadminColorAvatarTextMint: ColorDescription;
	wsadminColorAvatarTextSeagreen: ColorDescription;
	wsadminColorAvatarTextSky: ColorDescription;
	wsadminColorAvatarTextBlue: ColorDescription;
	wsadminColorAvatarTextIndigo: ColorDescription;
	wsadminColorAvatarTextViolet: ColorDescription;
	wsadminColorAvatarTextLavender: ColorDescription;
	wsadminColorAvatarTextCoral: ColorDescription;
	wsadminColorAvatarTextPink: ColorDescription;
	wsadminColorTooltipBackgroundYellow: ColorDescription;
	wsadminColorTooltipBackgroundGrass: ColorDescription;
	wsadminColorTooltipBackgroundMint: ColorDescription;
	wsadminColorTooltipBackgroundPurple: ColorDescription;
	wsadminColorTooltipBackgroundMagenta: ColorDescription;
	wsadminColorTooltipBackgroundMidnightsky: ColorDescription;
	wsadminColorTooltipTextYellow: ColorDescription;
	wsadminColorTooltipTextGrass: ColorDescription;
	wsadminColorTooltipTextMint: ColorDescription;
	wsadminColorTooltipTextPurple: ColorDescription;
	wsadminColorTooltipTextMagenta: ColorDescription;
	wsadminColorTooltipTextMidnightsky: ColorDescription;
}

export type WorkspaceAdminLocalColors = {
	[key in keyof LocalWorkspaceAdminColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeWorkspaceAdmin
	extends ParadigmTheme,
		ThemeWorkspaceOverValues,
		WorkspaceAdminLocalColors {}

export interface ThemeWorkspaceAdminDescription
	extends ParadigmThemeDescription,
		ThemeWorkspaceOverValues {
	colors: LocalWorkspaceAdminColorsDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}

export interface ThemeWorkspaceAdminCssVars
	extends ThemeCssVars<ThemeWorkspaceAdmin, 'breakpoints'> {}
