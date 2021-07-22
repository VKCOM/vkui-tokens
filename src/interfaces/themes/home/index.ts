import {Property} from 'csstype';

import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export interface HomeUniqTokens {
	portalFontFamily: Property.FontFamily;
	portalFontWeight: Property.FontWeight;
	portalFontWeightBold: Property.FontWeight;
}

type HomeViewports = ['desktopS'];

export interface ThemeHome
	extends ParadigmTheme<HomeViewports>,
		HomeUniqTokens {}

export interface ThemeHomeDescription
	extends ParadigmThemeDescription<HomeViewports>,
		HomeUniqTokens {}

export interface ThemeHomeCssVars
	extends ParadigmThemeCssVars<HomeViewports, ThemeHome> {}
