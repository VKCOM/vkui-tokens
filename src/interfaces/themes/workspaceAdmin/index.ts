import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Font } from '@/interfaces/general/typography';
import {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export interface ThemeWorkspaceOverValues {
	fontHeadline3: Font;
}

export interface LocalWorkspaceAdminColorsDescriptionStruct {
	colorIconNegativeSnackbar: ColorDescription;
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
