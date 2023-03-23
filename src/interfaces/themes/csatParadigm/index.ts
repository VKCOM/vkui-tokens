import { ThemeCssVars } from '@/interfaces/general';
import { ParadigmTheme, ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';
import { CsatLocalColors, LocalCsatColorsDescriptionStruct } from '@/interfaces/themes/csat';

export interface ThemeCsatParadigm extends ParadigmTheme, CsatLocalColors {}

export interface ThemeCsatParadigmDescription extends ParadigmThemeDescription {
	colors: ParadigmThemeDescription['colors'] & LocalCsatColorsDescriptionStruct;
}

export interface ThemeCsatParadigmCssVars extends ThemeCssVars<ThemeCsatParadigm, 'breakpoints'> {}
