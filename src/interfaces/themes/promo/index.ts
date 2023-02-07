import { Property } from 'csstype';

import { Adaptive } from '@/interfaces/general/tools';
import { ViewportsOrdered } from '@/interfaces/general/tools/viewports';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export type PromoViewports = ViewportsOrdered;

// @todo: разобраться какого чёрта у нас не единая дизайн-система, а чёрт знает что
type PromoSpecificTokens = {
	sizeControlButtonSmallWidthMin: Adaptive<number>;

	fontWeightBold: Property.FontWeight;
	fontWeightMedium: Property.FontWeight;

	sizeMarginIllustrationM: Adaptive<number>;
	sizeMarginIllustrationXXL: Adaptive<number>;

	// перейдет в сетки не забыть переделать
	sizeContentBlockWidth: Adaptive<number | string>;

	// перейдет в сетки не забыть переделать
	sizeContentBlockHorizontalPadding: Adaptive<number>;

	// сетки; посмотреть
	sizeHeaderHeightMin: Adaptive<string>;

	// сетки; посмотреть
	sizeContentBlockVerticalPadding: Adaptive<number>;
	sizeGridColumn1X3: Adaptive<number | string>;
	sizeGridColumn2X3: Adaptive<number | string>;
	sizeGridColumn1X2: Adaptive<number | string>;
	sizeGridColumnAsymmetricalSmall: Adaptive<number | string>;
	sizeGridColumnAsymmetricalLarge: Adaptive<number | string>;

	// сетки; посмотреть
	sizeMarginXS: Adaptive<number>;
	sizeMarginS: Adaptive<number>;
	sizeMarginM: Adaptive<number>;
	sizeMarginL: Adaptive<number>;
};

export interface ThemePromo extends ParadigmTheme<PromoViewports>, PromoSpecificTokens {}

export interface ThemePromoDescription
	extends ParadigmThemeDescription<PromoViewports>,
		PromoSpecificTokens {}

export interface ThemePromoCssVars extends ParadigmThemeCssVars<PromoViewports, ThemePromo> {}
