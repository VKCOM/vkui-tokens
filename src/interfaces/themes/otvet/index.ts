import { DefaultViewports } from '@/interfaces/general/tools/viewports';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export interface ThemeOtvet extends ParadigmTheme<DefaultViewports> {}
export interface ThemeOtvetDescription extends ParadigmThemeDescription<DefaultViewports> {}
export interface ThemeOtvetCssVars extends ParadigmThemeCssVars<DefaultViewports, ThemeOtvet> {}
