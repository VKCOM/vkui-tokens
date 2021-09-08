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

type HomeViewports = ['touch', 'desktopS'];

export interface ThemeHome
	extends ParadigmTheme<HomeViewports>,
		LocalHomeColors {}

export interface ThemeHomeDescription
	extends ParadigmThemeDescription<HomeViewports> {
	colors: LocalHomeColorsDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}

// Интерфейс ниже не используем в коде, но нужен для сборки
export interface ThemeHomeCssVars
	extends ParadigmThemeCssVars<HomeViewports, ThemeHome> {}
