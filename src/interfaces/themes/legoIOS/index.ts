import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { ThemeVkIOS, ThemeVkIOSDescription } from '@/interfaces/themes/vkIOS';

// Описание локальных цветов
export interface LocalLegoIOSColorsDescriptionStruct {
	colorStrokePrimary: ColorDescription;
}

// Резолв локальных цветов
export type LegoIOSLocalColors = {
	[key in keyof LocalLegoIOSColorsDescriptionStruct]: ColorWithStates;
};

// Эскпорт интерфейсов описанной + наследованной темы
export interface ThemeLegoIOS extends ThemeVkIOS, LegoIOSLocalColors {}
export interface ThemeLegoIOSDescription extends ThemeVkIOSDescription {
	colors: LocalLegoIOSColorsDescriptionStruct & ColorsDescriptionStruct;
}
export interface ThemeLegoIOSCssVars extends ThemeCssVars<ThemeLegoIOS> {}
