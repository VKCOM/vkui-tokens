import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../general/colors/index.js';
import { ThemeCssVars } from '../../general/index.js';
import { Adaptive } from '../../general/tools/index.js';
import { Font } from '../../general/typography/index.js';
import { ThemeVkBase, ThemeVkBaseDescription } from '../../themes/vkBase/index.js';

export interface ThemeTutoriaLocalSizes {
	tutoriaSizePaddingCard: number;
	tutoriaLayoutMaxWidth: number;

	tutoriaSizeButtonBaseSmallBorderRadius: number;
	tutoriaSizeButtonBaseMediumBorderRadius: number;
	tutoriaSizeButtonBaseLargeBorderRadius: number;
}

export interface ThemeTutoriaOverValues {
	// кастомные шрифты
}

export interface LocalTutoriaColorsDescriptionStruct {
	// токены цветов тутории
	tutoriaColorBackgroundPrimary: ColorDescription;
	tutoriaColorBackgroundContentInverse: ColorDescription;
	tutoriaColorBackgroundOverlayAlpha: ColorDescription;
	tutoriaColorBackgroundNeutral: ColorDescription;
	tutoriaColorBackgroundAccentTint: ColorDescription;
	tutoriaColorBackgroundWarning: ColorDescription;
	tutoriaColorBackgroundWarningTint: ColorDescription;
	tutoriaColorBackgroundPositiveTint: ColorDescription;
	tutoriaColorBackgroundNegativeTint: ColorDescription;
	tutoriaColorBackgroundInfo: ColorDescription;
	tutoriaColorBackgroundInfoTint: ColorDescription;
	tutoriaColorCardBoxShadowAlpha: ColorDescription;

	tutoriaColorTextWarning: ColorDescription;
	tutoriaColorTextInfo: ColorDescription;

	tutoriaColorIconWarning: ColorDescription;
	tutoriaColorIconInfo: ColorDescription;
	tutoriaColorIconLink: ColorDescription;

	tutoriaColorSeparatorPrimaryAlpha: ColorDescription;
	tutoriaColorSeparatorSecondaryAlpha: ColorDescription;

	tutoriaColorStrokePrimary: ColorDescription;
	tutoriaColorStrokeSecondary: ColorDescription;
	tutoriaColorStrokeTertiary: ColorDescription;
	tutoriaColorStrokeAccentTint: ColorDescription;
	tutoriaColorStrokePositiveTint: ColorDescription;
	tutoriaColorStrokeWarning: ColorDescription;
	tutoriaColorStrokeWarningTint: ColorDescription;
	tutoriaColorStrokeNegativeTint: ColorDescription;
	tutoriaColorStrokeInfo: ColorDescription;
	tutoriaColorStrokeInfoTint: ColorDescription;
}

export interface LocalTutoriaFontStruct {
	tutoriaFontTextTitle1: Font;
	tutoriaFontTextTitle2: Font;
	tutoriaFontTextTitle3: Font;
}

type ThemeTutoriaAdaptiveValues = LocalTutoriaFontStruct & ThemeTutoriaLocalSizes;
export type ThemeTutoriaAdaptiveTokens = {
	[key in keyof ThemeTutoriaAdaptiveValues]: Adaptive<ThemeTutoriaAdaptiveValues[key]>;
};

export type TutoriaLocalColors = {
	[key in keyof LocalTutoriaColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeTutoriaDescription
	extends ThemeVkBaseDescription,
		ThemeTutoriaOverValues,
		ThemeTutoriaAdaptiveTokens {
	colors: LocalTutoriaColorsDescriptionStruct & ColorsDescriptionStruct;
}
export interface ThemeTutoria
	extends ThemeVkBase,
		ThemeTutoriaOverValues,
		TutoriaLocalColors,
		ThemeTutoriaAdaptiveTokens {}

export interface ThemeTutoriaCssVars extends ThemeCssVars<ThemeTutoria> {}
