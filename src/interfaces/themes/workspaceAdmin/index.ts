import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../general/colors/index.ts';
import { ThemeCssVars } from '../../general/index.ts';
import { Adaptive } from '../../general/tools/index.ts';
import { Font } from '../../general/typography/index.ts';
import {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeDescription,
} from '../../namespaces/paradigm/index.ts';

export interface ThemeWorkspaceOverValues {
	fontHeadline3: Adaptive<Font>;
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
	colorOnboarding: ColorDescription;
	colorSearchResultsAlpha: ColorDescription;
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
