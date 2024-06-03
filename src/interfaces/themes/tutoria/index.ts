import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import { Font } from '@/interfaces/general/typography';
import { ThemeVkBase, ThemeVkBaseDescription } from '@/interfaces/themes/vkBase';

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
	tutoriaColorBackgroundColorPrimary: ColorDescription;
	tutoriaColorBackgroundPositiveTint: ColorDescription;
	tutoriaColorBackgroundNegativeTint: ColorDescription;
	tutoriaColorBackgroundInfo: ColorDescription;
	tutoriaColorBackgroundInfoTint: ColorDescription;
	tutoriaColorCardBoxShadow: ColorDescription;

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
