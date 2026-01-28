import type { Property } from 'csstype';

import { ColorDescription, ColorWithStates } from '../../general/colors/index.js';
import { ParadigmThemeCssVars } from '../../namespaces/paradigm/index.js';
import {
	MediaViewportsTuple,
	ThemeMedia,
	ThemeMediaDescription,
} from '../../themes/media/index.js';

export interface ThemeMycom extends Omit<ThemeMedia, 'fontFamily'> {
	colorSale: ColorWithStates;
	fontFamily: Property.FontFamily;
}

export interface ThemeMycomDescription extends Omit<ThemeMediaDescription, 'fontFamily'> {
	fontFamily: Property.FontFamily;
	colors: ThemeMediaDescription['colors'] & { colorSale: ColorDescription };
}

export interface ThemeMycomCssVars extends ParadigmThemeCssVars<MediaViewportsTuple, ThemeMycom> {}
