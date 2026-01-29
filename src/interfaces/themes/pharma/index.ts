import { ColorDescription, ColorWithStates } from '../../general/colors/index.ts';
import { ParadigmThemeCssVars } from '../../namespaces/paradigm/index.ts';
import {
	MediaViewportsTuple,
	ThemeMedia,
	ThemeMediaDescription,
} from '../../themes/media/index.ts';

export interface ThemePharma extends ThemeMedia {
	colorSale: ColorWithStates;
}

export interface ThemePharmaDescription extends ThemeMediaDescription {
	colors: ThemeMediaDescription['colors'] & { colorSale: ColorDescription };
}

export interface ThemePharmaCssVars
	extends ParadigmThemeCssVars<MediaViewportsTuple, ThemePharma> {}
