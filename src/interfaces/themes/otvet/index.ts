import { Adaptive } from '@/interfaces/general/tools';
import { DefaultViewports } from '@/interfaces/general/tools/viewports';
import { Font } from '@/interfaces/general/typography';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export interface ThemeOtvetTypography {
	fontTitleXXL: Adaptive<Font>;
	fontTitleXL: Adaptive<Font>;
	fontTitle1Bold: Adaptive<Font>;
	fontTitle2Bold: Adaptive<Font>;
	fontTitle4: Adaptive<Font>;
	fontHeadline2Bold: Adaptive<Font>;
	fontSubheadBold: Adaptive<Font>;
	fontCaption2Bold: Adaptive<Font>;
	fontCaption3CapsBold: Adaptive<Font>;
	fontCaption3Bold: Adaptive<Font>;
}

export interface ThemeOtveLocalSizes {
	sizeBorder: number;
}

type ThemeOtvetAdaptiveTokens = {
	[key in keyof ThemeOtveLocalSizes]: Adaptive<ThemeOtveLocalSizes[key]>;
};

export interface ThemeOtvet
	extends ParadigmTheme<DefaultViewports>,
		ThemeOtvetTypography,
		ThemeOtvetAdaptiveTokens {}
export interface ThemeOtvetDescription
	extends ParadigmThemeDescription<DefaultViewports>,
		ThemeOtvetTypography,
		ThemeOtvetAdaptiveTokens {}
export interface ThemeOtvetCssVars extends ParadigmThemeCssVars<DefaultViewports, ThemeOtvet> {}
