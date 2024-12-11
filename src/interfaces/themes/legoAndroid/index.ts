import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import {
	LocalVkontakteAndroidColorsDescriptionStruct,
	ThemeVkontakteAndroid,
	ThemeVkontakteAndroidDescription,
} from '@/interfaces/themes/vkontakteAndroid';

// Описание локальных цветов
export interface LocalLegoAndroidColorsDescriptionStruct {
	colorStrokePrimary: ColorDescription;
}

// Резолв локальных цветов
export type LegoAndroidLocalColors = {
	[key in keyof LocalLegoAndroidColorsDescriptionStruct]: ColorWithStates;
};

// Эскпорт интерфейсов описанной + наследованной темы
export interface ThemeLegoAndroid extends ThemeVkontakteAndroid, LegoAndroidLocalColors {}
export interface ThemeLegoAndroidDescription extends ThemeVkontakteAndroidDescription {
	colors: LocalLegoAndroidColorsDescriptionStruct &
		LocalVkontakteAndroidColorsDescriptionStruct &
		ColorsDescriptionStruct;
}
export interface ThemeLegoAndroidCssVars extends ThemeCssVars<ThemeLegoAndroid> {}
