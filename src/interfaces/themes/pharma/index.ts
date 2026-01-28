import { ColorDescription, ColorWithStates } from '../../general/colors/index.js';
import { ParadigmThemeCssVars } from '../../namespaces/paradigm/index.js';
import {
	MediaViewportsTuple,
	ThemeMedia,
	ThemeMediaDescription,
} from '../../themes/media/index.js';

export interface ThemePharma extends ThemeMedia {
	colorSale: ColorWithStates;
}

export interface ThemePharmaDescription extends ThemeMediaDescription {
	colors: ThemeMediaDescription['colors'] & { colorSale: ColorDescription };
}

export interface ThemePharmaCssVars
	extends ParadigmThemeCssVars<MediaViewportsTuple, ThemePharma> {}
