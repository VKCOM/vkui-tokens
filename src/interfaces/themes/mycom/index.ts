import type { Property } from 'csstype';

import type { ColorDescription, ColorWithStates } from '../../general/colors/index.ts';
import type { ParadigmThemeCssVars } from '../../namespaces/paradigm/index.ts';
import type {
	MediaViewportsTuple,
	ThemeMedia,
	ThemeMediaDescription,
} from '../../themes/media/index.ts';

export interface ThemeMycom extends Omit<ThemeMedia, 'fontFamily'> {
	colorSale: ColorWithStates;
	fontFamily: Property.FontFamily;
}

export interface ThemeMycomDescription extends Omit<ThemeMediaDescription, 'fontFamily'> {
	fontFamily: Property.FontFamily;
	colors: ThemeMediaDescription['colors'] & { colorSale: ColorDescription };
}

export interface ThemeMycomCssVars extends ParadigmThemeCssVars<MediaViewportsTuple, ThemeMycom> {}
