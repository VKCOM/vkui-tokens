import { ColorDescription, ColorWithStates } from '../../general/colors';
import { ParadigmThemeCssVars } from '../../namespaces/paradigm';
import { MediaViewportsTuple, ThemeMedia, ThemeMediaDescription } from '../../themes/media';

export interface ThemePharma extends ThemeMedia {
	colorSale: ColorWithStates;
}

export interface ThemePharmaDescription extends ThemeMediaDescription {
	colors: ThemeMediaDescription['colors'] & { colorSale: ColorDescription };
}

export interface ThemePharmaCssVars
	extends ParadigmThemeCssVars<MediaViewportsTuple, ThemePharma> {}
