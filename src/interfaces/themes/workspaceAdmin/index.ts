import { ThemeCssVars } from '@/interfaces/general';
import { ParadigmTheme, ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';

export interface ThemeWorkspaceAdmin extends ParadigmTheme {}

export interface ThemeWorkspaceAdminDescription extends ParadigmThemeDescription {}

export interface ThemeWorkspaceAdminCssVars
	extends ThemeCssVars<ThemeWorkspaceAdmin, 'breakpoints'> {}
