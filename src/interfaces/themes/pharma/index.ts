import {ColorDescription, ColorWithStates} from '@/interfaces/general/colors';
import {ParadigmThemeCssVars} from '@/interfaces/namespaces/paradigm';
import {
	MediaViewportsTuple,
	ThemeMedia,
	ThemeMediaDescription,
} from '@/interfaces/themes/media';

export interface ThemePharma
	extends Omit<ThemeMedia, 'fontFamily' | 'gridLayoutArticleMargin'> {
	colorSale: ColorWithStates;
}

export interface ThemePharmaDescription
	extends Omit<ThemeMediaDescription, 'fontFamily'> {
	colors: ThemeMediaDescription['colors'] & {colorSale: ColorDescription};
}

export interface ThemePharmaCssVars
	extends ParadigmThemeCssVars<MediaViewportsTuple, ThemePharma> {}
