import {Animations} from './animations';
import {ColorDescription, Colors, ColorsDescriptionStruct} from './colors';
import {Elevation} from './elevation';
import {Sizes} from './geometry';
import {ToneValues} from './toneValues';
import {Adaptive} from './tools';
import {NamifyObject} from './tools/cssVars';
import {StringifyObject} from './tools/utils';
import {Fonts, TypographyBaseProps} from './typography';

interface AdaptiveInterfaceValues extends Sizes, Fonts {}

type AdaptiveTokens = {
	[key in keyof AdaptiveInterfaceValues]: Adaptive<
		AdaptiveInterfaceValues[key]
	>;
};

export interface ColorsScheme {
	colorsScheme: 'light' | 'dark';
}

export interface ColorsDescription<
	T extends {[key in keyof T]: ColorDescription} = ColorsDescriptionStruct
> extends ColorsScheme {
	colors: T;
}

export interface ColorsFinal extends Colors, ColorsScheme {}

export interface SpecialTokens {
	themeName: string;
	// Базовая тема, от которой наследуемся
	themeNameBase?: string;
	prefix?: string;
}

export interface WithThemeType {
	themeType: 'root' | 'flat' | 'pixelify' | 'cssVars' | 'cssVarsWide';
}

/**
 * Общий интерефейс между описанием и самой темой
 */
export interface ThemeGeneral
	extends AdaptiveTokens,
		SpecialTokens,
		ToneValues,
		TypographyBaseProps,
		Elevation,
		Animations {}

/**
 * Интерфейс описания Темы (в этом типе описываются все темы дизайн-системы)
 */
export interface ThemeDescription extends ThemeGeneral, ColorsDescription {}

/**
 * Основной интерфейс темы
 */
export interface Theme extends ThemeGeneral, ColorsFinal {
	themeType: 'root';
}

/**
 * Тема, в коротой все значения пикселизированы. Т.е. 16 -> '16px'
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type PixelifyTheme<
	T extends Partial<Record<keyof T, any>> = Theme
> = StringifyObject<Omit<T, 'breakpoints' | 'themeType'>> &
	Pick<T, Extract<'breakpoints', keyof T>> & {themeType: 'pixelify'};

/**
 * Тема, которая каждой переменной даёт name и value в виде названия
 * соответствующей css-переменной и ссылки на неё
 */
export type ThemeCssVars<T = Theme, Ex extends keyof T = never> = {
	[K in keyof Omit<T, Ex | 'themeType'>]: NamifyObject<
		StringifyObject<T>[K],
		true
	>;
} &
	Pick<T, Ex> & {themeType: 'cssVars'};

/**
 * Тоже самое, что и ThemeCssVars, только у переменных есть ещё  originValue
 * используется для генерации источников CSS-переменных
 */
export type ThemeCssVarsWide<T = Theme, Ex extends keyof T = never> = {
	[K in keyof Omit<T, Ex | 'themeType'>]: NamifyObject<StringifyObject<T>[K]>;
} &
	Pick<T, Ex> & {themeType: 'cssVarsWide'};
