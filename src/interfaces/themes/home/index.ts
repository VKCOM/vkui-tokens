import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../general/colors/index.ts';
import type {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '../../namespaces/paradigm/index.ts';

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
export interface ThemeHomeCssVars extends ParadigmThemeCssVars<HomeViewports, ThemeHome> {}
