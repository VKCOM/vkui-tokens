import { ThemeCssVars } from '@/interfaces/general';
import { ParadigmTheme, ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';

export interface ThemeWorkspaceAdminDark extends ParadigmTheme {}

export interface ThemeWorkspaceAdminDarkDescription extends ParadigmThemeDescription {}

export interface ThemeWorkspaceAdminDarkCssVars
	extends ThemeCssVars<ThemeWorkspaceAdminDark, 'breakpoints'> {}
