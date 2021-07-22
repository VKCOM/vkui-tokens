import {Property} from 'csstype';

import {ColorsDescription, ColorsFinal} from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';

import {mixColors} from './mixColors';

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
}): ColorWithStates => ({
	normal: colorArg,
	hover: mixColors(colorArg, colorState, toneValueHover),
	active: mixColors(colorArg, colorState, toneValueActive),
});

/**
 * Процессор, который формирует из описания темы (ThemeDescription)
 * цвета со всеми состояниями active, hover и normal
 *
 * (и добавляет эти состояния только тем цветам, которые там действительно нужны)
 */
export function getExpandedThemeColors<
	T extends {[key in keyof T]: ColorDescription} = ColorsDescriptionStruct
>(colorsDescription: Partial<ColorsDescription<T>>): ColorsFinal {
	const {colorsScheme, colors} = colorsDescription;

	if (!colorsScheme || !colors) {
		return null;
	}

	const colorState = colorStateMap[colorsScheme];

	const colorWithStates = (
		colorArg: Property.Color | ColorWithStates,
	): ColorWithStates => {
		if (typeof colorArg === 'object' && 'active' in colorArg) {
			return colorArg;
		}

		return getColorWithStates({
			colorArg,
			colorState,
			toneValueHover,
			toneValueActive,
		});
	};

	const theme: Partial<ColorsFinal> = {
		colorsScheme,
	};

	Object.entries(colors).forEach(
		([key, colorValue]: [keyof ColorsDescription, Property.Color]) => {
			theme[key] = colorWithStates(colorValue);
		},
	);

	return theme as ColorsFinal;
}
