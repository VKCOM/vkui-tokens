import {
  ColorDescription,
  ColorsDescriptionStruct,
  ColorWithStates,
} from '@/interfaces/general/colors';
import {
  LocalParadigmColorsDescriptionStruct,
  ParadigmTheme,
  ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';
import {
    LocalOctaviusColorsDescriptionStruct,
  ThemeOctavius,
} from '@/interfaces/themes/octavius';
import { ThemeCssVars } from '@/interfaces/general';

export interface LocalParadigmTechColorsDescriptionStruct {
  // Фон
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

export type ParadigmTechLocalColors = {
  [key in keyof LocalParadigmTechColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeParadigmTechDescription 
    extends ParadigmThemeDescription {
  colors: LocalParadigmTechColorsDescriptionStruct &
    LocalParadigmColorsDescriptionStruct &
    LocalOctaviusColorsDescriptionStruct &
    ColorsDescriptionStruct;
}

export interface ThemeParadigmTech
  extends ThemeOctavius,
    ParadigmTheme,
    ParadigmTechLocalColors {}


export interface ThemeParadigmTechCssVars extends ThemeCssVars<ThemeParadigmTech, 'breakpoints'> {}




