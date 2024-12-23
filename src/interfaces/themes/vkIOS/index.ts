import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import { ThemeVkBase, ThemeVkBaseDescription } from '@/interfaces/themes/vkBase';

// Описание локальных цветов
export interface LocalVkIOSColorsDescriptionStruct {
	colorStrokePrimary: ColorDescription;
	colorBackgroundContentAlpha: ColorDescription;
}

export interface VkIOSGeometry {
	// Для соответствия Lego-теме
	sizeButtonExtraSmallHeight: Adaptive<number>;
}

// Резолв локальных цветов
export type VkIOSLocalColors = {
	[key in keyof LocalVkIOSColorsDescriptionStruct]: ColorWithStates;
};

// Эскпорт интерфейсов описанной + наследованной темы
export interface ThemeVkIOS extends ThemeVkBase, VkIOSLocalColors, VkIOSGeometry {}
export interface ThemeVkIOSDescription extends ThemeVkBaseDescription, VkIOSGeometry {
	colors: LocalVkIOSColorsDescriptionStruct & ColorsDescriptionStruct;
}
export interface ThemeVkIOSCssVars extends ThemeCssVars<ThemeVkIOS> {}
