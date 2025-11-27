import {
	ColorDescriptionStatic,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import { DefaultViewports } from '@/interfaces/general/tools/viewports';
import { Font } from '@/interfaces/general/typography';
import {
	LocalParadigmColorsDescriptionStruct,
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

export interface LocalOtvetColorDescriptionStruct {
	otvetColorBackgroundAnswer: ColorDescriptionStatic;
}

type ThemeOtvetAdaptiveTokens = {
	[key in keyof ThemeOtveLocalSizes]: Adaptive<ThemeOtveLocalSizes[key]>;
};

export type OtvetLocalColors = {
	[key in keyof LocalOtvetColorDescriptionStruct]: ColorWithStates;
};

export interface ThemeOtvet
	extends ParadigmTheme<DefaultViewports>,
		ThemeOtvetTypography,
		ThemeOtvetAdaptiveTokens,
		OtvetLocalColors {}
export interface ThemeOtvetDescription
	extends ParadigmThemeDescription<DefaultViewports>,
		ThemeOtvetTypography,
		ThemeOtvetAdaptiveTokens {
	colors: LocalOtvetColorDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}
export interface ThemeOtvetCssVars extends ParadigmThemeCssVars<DefaultViewports, ThemeOtvet> {}
