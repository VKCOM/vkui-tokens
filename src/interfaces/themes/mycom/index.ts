import { Property } from 'csstype';

import { ColorWithStates } from '@/interfaces/general/colors';
import { ParadigmThemeCssVars } from '@/interfaces/namespaces/paradigm';
import { MediaViewportsTuple, ThemeMedia, ThemeMediaDescription } from '@/interfaces/themes/media';

export interface ThemeMycom extends Omit<ThemeMedia, 'fontFamily'> {
	colorSale: ColorWithStates;
	fontFamily: Property.FontFamily;
}

export interface ThemeMycomDescription extends Omit<ThemeMediaDescription, 'fontFamily'> {
	fontFamily: Property.FontFamily;
	colors: ThemeMediaDescription['colors'] & { colorSale: Property.Color };
}

export interface ThemeMycomCssVars extends ParadigmThemeCssVars<MediaViewportsTuple, ThemeMycom> {}
