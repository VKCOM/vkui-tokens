import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../general/colors/index.ts';
import type { ThemeCssVars } from '../../general/index.ts';
import type { Adaptive } from '../../general/tools/index.ts';
import type {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
} from '../../namespaces/paradigm/index.ts';
import type {
	LocalOctaviusColorsDescriptionStruct,
	OctaviusLocalColors,
	ThemeOctaviusDescription,
	ThemeOctaviusLocalSizes,
	ThemeOctaviusOverValues,
} from '../../themes/octavius/index.ts';

export interface LocalParadigmTechDescriptionStruct {
	paradigmTechBackgroundPortal: ColorDescription;
	paradigmTechOtherSuperappMenuBackground: ColorDescription;

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
