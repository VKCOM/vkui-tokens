import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
} from '@/interfaces/namespaces/paradigm';
import {
	LocalOctaviusColorsDescriptionStruct,
	OctaviusLocalColors,
	ThemeOctaviusDescription,
	ThemeOctaviusLocalSizes,
	ThemeOctaviusOverValues,
} from '@/interfaces/themes/octavius';

export interface LocalParadigmTechDescriptionStruct {
	paradigmTechBackgroundPortal: ColorDescription;

	// Аватары
	paradigmTechAvatarsSky: ColorDescription;
	paradigmTechAvatarsSeagreen: ColorDescription;
	paradigmTechAvatarsMint: ColorDescription;
	paradigmTechAvatarsCyan: ColorDescription;
	paradigmTechAvatarsBlue: ColorDescription;
	paradigmTechAvatarsRed: ColorDescription;
	paradigmTechAvatarsYellow: ColorDescription;
	paradigmTechAvatarsIndigo: ColorDescription;
	paradigmTechAvatarsPeach: ColorDescription;
	paradigmTechAvatarsLavander: ColorDescription;
	paradigmTechAvatarsViolet: ColorDescription;
	paradigmTechAvatarsGreen: ColorDescription;
	paradigmTechAvatarsLime: ColorDescription;
	paradigmTechAvatarsCoral: ColorDescription;
	paradigmTechAvatarsOrange: ColorDescription;
}

type ParadigmTechLocalColors = {
	[key in keyof LocalParadigmTechDescriptionStruct]: ColorWithStates;
};

type ThemeOctaviusAdaptiveTokens = {
	[key in keyof ThemeOctaviusLocalSizes]: Adaptive<ThemeOctaviusLocalSizes[key]>;
};

export interface ThemeParadigmTech
	extends ParadigmTheme,
		ThemeOctaviusOverValues,
		OctaviusLocalColors,
		ThemeOctaviusAdaptiveTokens,
		ParadigmTechLocalColors {}

export interface ThemeParadigmTechDescription extends ThemeOctaviusDescription {
	colors: LocalOctaviusColorsDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct &
		LocalParadigmTechDescriptionStruct;
}
export interface ThemeParadigmTechCssVars extends ThemeCssVars<ThemeParadigmTech, 'breakpoints'> {}
