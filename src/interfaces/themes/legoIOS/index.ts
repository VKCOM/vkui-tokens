import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from 'interfaces/general/colors/index.ts';
import type { ThemeCssVars } from 'interfaces/general/index.ts';

import type { ThemeVkBase, ThemeVkBaseDescription } from '../vkBase/index.ts';

export interface LocalVkontakteIOSColorsDescriptionStruct {
	colorBackgroundInverse: ColorDescription;
}

export type LegoIOSLocalColors = {
	[key in keyof LocalVkontakteIOSColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeLegoIOS extends ThemeVkBase, LegoIOSLocalColors {}

export interface ThemeLegoIOSDescription extends ThemeVkBaseDescription {
	colors: LocalVkontakteIOSColorsDescriptionStruct & ColorsDescriptionStruct;
}
export interface ThemeLegoIOSCssVars extends ThemeCssVars<ThemeLegoIOS> {}
