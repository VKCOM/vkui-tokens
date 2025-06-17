import { ColorDescription, ColorsDescriptionStruct } from '@/interfaces/general/colors';
import { LocalParadigmColorsDescriptionStruct } from '@/interfaces/namespaces/paradigm';
import {
	LocalOctaviusColorsDescriptionStruct,
	ThemeOctavius,
	ThemeOctaviusCssVars,
	ThemeOctaviusDescription,
} from '@/interfaces/themes/octavius';

export interface ThemeParadigmTech extends ThemeOctavius {}
export interface ThemeParadigmTechDescription extends ThemeOctaviusDescription {
	colors: LocalOctaviusColorsDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct & {
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
		};
}
export interface ThemeParadigmTechCssVars extends ThemeOctaviusCssVars {}
