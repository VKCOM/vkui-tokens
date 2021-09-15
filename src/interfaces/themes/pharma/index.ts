import {ColorDescription, ColorWithStates} from '@/interfaces/general/colors';
import {ParadigmThemeCssVars} from '@/interfaces/namespaces/paradigm';
import {
	MediaViewportsTuple,
	ThemeMedia,
	ThemeMediaDescription,
} from '@/interfaces/themes/media';

export interface ThemePharma extends ThemeMedia {
	colorSale: ColorWithStates;
}

export interface ThemePharmaDescription extends ThemeMediaDescription {
	colors: ThemeMediaDescription['colors'] & {colorSale: ColorDescription};
}

export interface ThemePharmaCssVars
	extends ParadigmThemeCssVars<MediaViewportsTuple, ThemePharma> {}
