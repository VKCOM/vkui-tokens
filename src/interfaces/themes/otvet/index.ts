import type { Property } from 'csstype';

import {
	ColorDescriptionStatic,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../general/colors';
import { GradientPoints } from '../../general/gradients';
import { Adaptive } from '../../general/tools';
import { DefaultViewports } from '../../general/tools/viewports';
import { Font } from '../../general/typography';
import {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '../../namespaces/paradigm';

export interface ThemeOtvetOverValues {
	otvetBoxShadowIsland: Property.BoxShadow;
}
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
	colorBackgroundNavBarOtvetui: ColorDescriptionStatic;
	colorRangHigherBrain: ColorDescriptionStatic;
	colorRangAi: ColorDescriptionStatic;
	colorRangGenius: ColorDescriptionStatic;
	colorRangOracul: ColorDescriptionStatic;
	colorRangProLight: ColorDescriptionStatic;
	colorRangMudriy: ColorDescriptionStatic;
	colorRangMyslitel: ColorDescriptionStatic;
	colorRangGuru: ColorDescriptionStatic;
	colorRangMaster: ColorDescriptionStatic;
	colorRangPro: ColorDescriptionStatic;
	colorRangExpert: ColorDescriptionStatic;
	colorRangStudent: ColorDescriptionStatic;
	colorAvatarsRed: ColorDescriptionStatic;
	colorAvatarsOrange: ColorDescriptionStatic;
	colorAvatarsPeach: ColorDescriptionStatic;
	colorAvatarsYellow: ColorDescriptionStatic;
	colorAvatarsLime: ColorDescriptionStatic;
	colorAvatarsGreen: ColorDescriptionStatic;
	colorAvatarsSea: ColorDescriptionStatic;
	colorAvatarsMint: ColorDescriptionStatic;
	colorAvatarsSeagreen: ColorDescriptionStatic;
	colorAvatarsSky: ColorDescriptionStatic;
	colorAvatarsBlue: ColorDescriptionStatic;
	colorAvatarsIndigo: ColorDescriptionStatic;
	colorAvatarsViolet: ColorDescriptionStatic;
	colorAvatarsLavender: ColorDescriptionStatic;
	colorAvatarsCoral: ColorDescriptionStatic;
	colorStrokeBorderAlpha: ColorDescriptionStatic;
}

export interface ThemeOtvetGradients {
	gradientContent0: GradientPoints;
	gradientContent86: GradientPoints;
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
		ThemeOtvetOverValues,
		ThemeOtvetAdaptiveTokens,
		OtvetLocalColors,
		ThemeOtvetGradients {}
export interface ThemeOtvetDescription
	extends ParadigmThemeDescription<DefaultViewports>,
		ThemeOtvetTypography,
		ThemeOtvetOverValues,
		ThemeOtvetAdaptiveTokens,
		ThemeOtvetGradients {
	colors: LocalOtvetColorDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}
export interface ThemeOtvetCssVars extends ParadigmThemeCssVars<DefaultViewports, ThemeOtvet> {}
