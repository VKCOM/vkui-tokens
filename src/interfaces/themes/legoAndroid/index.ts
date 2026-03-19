import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from 'interfaces/general/colors/index.ts';
import type { ThemeCssVars } from 'interfaces/general/index.ts';
import type { Tokens } from 'interfaces/general/tools/tokenValue.ts';

import type { VkontakteAndroidGradients } from '../../themes/vkontakteAndroid/index.ts';
import type { ThemeVkBase, ThemeVkBaseDescription } from '../vkBase/index.ts';

export interface LocalLegoAndroidColorsDescriptionStruct {
	// Дополнительные цвета для темы
	colorBackgroundInverse: ColorDescription;
}

export type LegoAndroidLocalColors = {
	[key in keyof LocalLegoAndroidColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeLegoAndroid
	extends ThemeVkBase,
		LegoAndroidLocalColors,
		VkontakteAndroidGradients {}

export interface ThemeLegoAndroidDescription
	extends ThemeVkBaseDescription,
		Tokens<VkontakteAndroidGradients> {
	colors: LocalLegoAndroidColorsDescriptionStruct & ColorsDescriptionStruct;
}
export interface ThemeLegoAndroidCssVars extends ThemeCssVars<ThemeLegoAndroid> {}
