import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

type OtvetViewports = ['desktopS'];
export interface ThemeOtvet extends ParadigmTheme<OtvetViewports> {}
export interface ThemeOtvetDescription extends ParadigmThemeDescription<OtvetViewports> {}
export interface ThemeOtvetCssVars extends ParadigmThemeCssVars<OtvetViewports, ThemeOtvet> {}
