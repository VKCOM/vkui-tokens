import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export interface LocalHomeColorsDescriptionStruct {
	homeColorSocialVk: ColorDescription;
	homeColorSocialOk: ColorDescription;
	homeColorSocialFb: ColorDescription;
	homeColorFilinFailPrimary: ColorDescription;
	homeColorFilinFailSecondary: ColorDescription;
}

export type LocalHomeColors = {
	[key in keyof LocalHomeColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeHomeOverValues {
	homeElevation1: string;
	homeElevation2: string;
	homeElevation3: string;
	homeFontFamilyDefault: string;
	homeFontWeightNormal: string;
	homeFontWeightBold: string;
}

type HomeViewports = ['touch', 'desktopS'];

export interface ThemeHome
	extends ParadigmTheme<HomeViewports>,
		ThemeHomeOverValues,
		LocalHomeColors {}

export interface ThemeHomeDescription
	extends ParadigmThemeDescription<HomeViewports>,
		ThemeHomeOverValues {
	colors: LocalHomeColorsDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}

// Интерфейс ниже не используем в коде, но нужен для сборки
export interface ThemeHomeCssVars
	extends ParadigmThemeCssVars<HomeViewports, ThemeHome> {}
