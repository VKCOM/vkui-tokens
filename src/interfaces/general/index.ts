import type { Property } from 'csstype';

import { StaticTokens, Tokens } from '../general/tools/tokenValue.js';
import { Animations } from './animations/index.js';
import { ColorDescription, Colors, ColorsDescriptionStruct } from './colors/index.js';
import { Effects } from './effects/index.js';
import { Elevation } from './elevation/index.js';
import { Sizes, SpacingSizes } from './geometry/index.js';
import { Gradients } from './gradients/index.js';
import { ToneValues } from './toneValues/index.js';
import { NamifyObject } from './tools/cssVars.js';
import { Adaptive } from './tools/index.js';
import { StringifyObject } from './tools/utils.js';
import { Fonts, TypographyBaseProps } from './typography/index.js';
import { ZIndex } from './zIndex/index.js';

interface AdaptiveInterfaceValues extends Sizes, Fonts {}

type AdaptiveTokens = {
	[key in keyof AdaptiveInterfaceValues]: Adaptive<AdaptiveInterfaceValues[key]>;
};

export interface ColorsScheme {
	/**
	 * @desc Цветовая схема темы
	 * @tags service
	 * @deprecated
	 */
	colorsScheme: 'light' | 'dark';
}

export interface ColorsDescription<
	T extends { [key in keyof T]: ColorDescription } = ColorsDescriptionStruct,
> extends ColorsScheme {
	colors: T;
}

export interface ColorsFinal extends Colors, ColorsScheme {}

export interface SpecialTokens {
	/**
	 * @desc Имя темы
	 * @tags service
	 */
	themeName: string;

	/**
	 * @desc Имя темы, от которой наследуется текущая
	 * @tags service
	 */
	themeNameBase?: string;

	/**
	 * @desc Имя темы, от которой наследуются значения при инкрементальной сборке
	 * @tags service
	 */
	themeInheritsFrom?: string;

	/**
	 * @desc Префикс токенов
	 * @tags service
	 */
	prefix?: string;
}

export interface WithThemeType {
	themeType: 'root' | 'flat' | 'pixelify' | 'cssVars' | 'cssVarsWide';
}

/**
 * Общий интерфейс между описанием и самой темой
 */
export interface ThemeGeneral
	extends AdaptiveTokens,
		SpecialTokens,
		ToneValues,
		ZIndex,
		TypographyBaseProps,
		Elevation,
		Gradients,
		Animations,
		Effects,
		SpacingSizes {}

/**
 * Интерфейс описания Темы (в этом типе описываются все темы дизайн-системы)
 */
export interface ThemeDescription extends Tokens<ThemeGeneral>, ColorsDescription {}

/**
 * Основной интерфейс темы
 */
export interface Theme extends ThemeGeneral, ColorsFinal {
	/**
	 * @desc Тип темы. Используется только при компиляции
	 * @tags service
	 */
	themeType: 'root';
}

/**
 * Тема, в которой все значения пикселизированы. Т.е. 16 -> '16px'
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type PixelifyTheme<T extends Partial<Record<keyof T, any>> = StaticTokens<Theme>> =
	StringifyObject<Omit<T, 'breakpoints' | 'themeType'>> &
		Pick<T, Extract<'breakpoints', keyof T>> & {
			themeType: 'pixelify';
			themeName: string;
			colorScheme: Property.ColorScheme;
		};

/**
 * Тема, которая каждой переменной даёт name и value в виде названия
 * соответствующей css-переменной и ссылки на неё
 */
export type ThemeCssVars<T = Theme, Ex extends keyof T = never> = {
	[K in keyof Omit<T, Ex | 'themeType'>]: NamifyObject<StringifyObject<T>[K], true>;
} & Pick<T, Ex> & { themeType: 'cssVars' };

/**
 * Тоже самое, что и ThemeCssVars, только у переменных есть ещё  originValue
 * используется для генерации источников CSS-переменных
 */
export type ThemeCssVarsWide<T = Theme, Ex extends keyof T = never> = {
	[K in keyof Omit<T, Ex | 'themeType'>]: NamifyObject<StringifyObject<T>[K]>;
} & Pick<T, Ex> & { themeType: 'cssVarsWide' };
