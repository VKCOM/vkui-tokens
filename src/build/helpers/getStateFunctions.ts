import color from 'color';

import {colorStateMap} from '@/build/themeProcessors/expandColors/expandColors';

type ColorStateObject = {
	colorsScheme: 'light' | 'dark';
	toneValueHover: number;
	toneValueActive: number;
	toneValueFocus: number;
	opacityDisable: number;
};

export interface StateFunctions {
	stateHover(colorHover: string): string;
	stateActive(colorActive: string): string;
	stateFocus(colorFocus: string): string;
	stateDisabled(colorDisabled: string): string;
}

export function getStateFunctions(theme: ColorStateObject): StateFunctions {
	const colorState = colorStateMap[theme.colorsScheme];
	return {
		stateHover(colorHover: string) {
			if (colorHover === 'transparent') {
				return `rgba(${colorState},${theme.toneValueHover})`;
			}
			return color(colorHover)
				.mix(color(colorState), theme.toneValueHover)
				.hex();
		},
		stateActive(colorActive: string) {
			if (colorActive === 'transparent') {
				return `rgba(${colorState},${theme.toneValueActive})`;
			}
			return color(colorActive)
				.mix(color(colorState), theme.toneValueActive)
				.hex();
		},
		stateFocus(colorFocus: string) {
			if (colorFocus === 'transparent') {
				return `rgba(${colorState},${theme.toneValueFocus})`;
			}
			return color(colorFocus)
				.mix(color(colorState), theme.toneValueFocus)
				.hex();
		},
		stateDisabled(colorDisabled: string) {
			return color(colorDisabled)
				.alpha(theme.opacityDisable)
				.rgb()
				.string();
		},
	};
}
