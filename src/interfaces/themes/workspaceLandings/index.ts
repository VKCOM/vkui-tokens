import { ThemeCssVars } from '../../general';
import { ColorDescription, ColorWithStates } from '../../general/colors';
import { ParadigmTheme, ParadigmThemeDescription } from '../../namespaces/paradigm';

export interface LocalWorkspaceLandingsColorDescriptionStruct {
	workspaceLandingsColorBackgroundDark1: ColorDescription;
	workspaceLandingsColorBackgroundDark2: ColorDescription;
	workspaceLandingsColorBackgroundBlue: ColorDescription;
	workspaceLandingsColorTextGray: ColorDescription;
	workspaceLandingsColorTextGreen: ColorDescription;
}

export type WorkspaceLandingsLocalColors = {
	[key in keyof LocalWorkspaceLandingsColorDescriptionStruct]: ColorWithStates;
};

export interface ThemeWorkspaceLandings extends ParadigmTheme, WorkspaceLandingsLocalColors {}

export interface ThemeWorkspaceLandingsDescription extends ParadigmThemeDescription {
	colors: LocalWorkspaceLandingsColorDescriptionStruct & ParadigmThemeDescription['colors'];
}

export interface ThemeWorkspaceLandingsCssVars
	extends ThemeCssVars<ThemeWorkspaceLandings, 'breakpoints'> {}
