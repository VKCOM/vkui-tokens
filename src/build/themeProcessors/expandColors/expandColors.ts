import type { Property } from 'csstype';

import {
	isColorDescriptionCallable,
	isColorWithStates,
} from '../../../build/helpers/cssHelpers.ts';
import type {
	ColorDescription,
	ColorDescriptionStatic,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../../interfaces/general/colors/index.ts';
import type { ColorsDescription, ColorsFinal } from '../../../interfaces/general/index.ts';
import { mixColors } from './mixColors.ts';

export const colorStateMap = {
	light: '#00103D',
	dark: '#FFFFFF',
} as const;

// параметры для состояний
const toneValueHover = 0.04;
const toneValueActive = 0.08;

const getColorWithStates = ({
	colorArg,
	colorState,
	toneValueActive,
	toneValueHover,
}: {
	colorArg: Property.Color;
	colorState: Property.Color;
	toneValueActive: number;
	toneValueHover: number;
}): ColorWithStates => {
	// Исправляет hover и action цвета в темной теме для белого цвета
	if (
		typeof colorArg === 'string' &&
		colorArg.toLowerCase() === '#ffffff' &&
		colorState === '#FFFFFF'
	) {
		return {
			normal: '#FFFFFF',
			hover: '#EBEDF0',
			active: '#D7D8DB',
		};
	}

	return {
		normal: colorArg,
		hover: mixColors(colorArg, colorState, toneValueHover),
		active: mixColors(colorArg, colorState, toneValueActive),
	};
};

function expandCallableColor<T extends { [key in keyof T]: ColorDescription }>(
	color: ColorDescription<T>,
	theme: Partial<ColorsDescription<T>>,
): ColorDescriptionStatic {
	if (!isColorDescriptionCallable(color)) {
		return color;
	}

	// TODO: Придумать, как избавиться от any
	return expandCallableColor(color(theme), theme as any);
}

export function expandColor<
	T extends { [key in keyof T]: ColorDescription } = ColorsDescriptionStruct,
>(color: ColorDescription<T>, theme: Partial<ColorsDescription<T>>): ColorWithStates {
	const expandedColor = expandCallableColor(color, theme);

	if (isColorWithStates(expandedColor)) {
		return expandedColor;
	}

	const colorState = colorStateMap[theme.colorsScheme];

	return getColorWithStates({
		colorArg: expandedColor,
		colorState,
		toneValueHover,
		toneValueActive,
	});
}

/**
 * Процессор, который формирует из описания темы (ThemeDescription)
 * цвета со всеми состояниями active, hover и normal
 *
 * (и добавляет эти состояния только тем цветам, которые там действительно нужны)
 */
export function getExpandedThemeColors<
	T extends { [key in keyof T]: ColorDescription } = ColorsDescriptionStruct,
>(colorsDescription: Partial<ColorsDescription<T>>): ColorsFinal {
	const { colorsScheme, colors } = colorsDescription;

	if (!colorsScheme || !colors) {
		return null;
	}

	const theme: Partial<ColorsFinal> = {
		colorsScheme,
	};

	Object.entries(colors).forEach(([key, colorValue]: [keyof ColorsDescription, Property.Color]) => {
		theme[key] = expandColor(colorValue, colorsDescription);
	});

	return theme as ColorsFinal;
}
