import type {Theme} from '@/interfaces/general';

export type ValuesOf<T extends any[]> = T[number];

const groups = [
	'fontFamily',
	'fontWeight',
	'colorsScheme',
	'size',
	'opacity',
	'zIndex',
	'elevation',
	'gradient',
	'animation',
	'color',
	'font',
	'theme',
	'other',
] as const;

/**
 * Компилирует структурируемый json с темой
 */
export const compileStructJSON = <T = Theme>(theme: T): string => {
	const structTheme = {};

	Object.keys(theme).forEach((key) => {
		const group =
			groups.find((predicate) => key.startsWith(predicate)) || 'other';

		if (!structTheme[group]) {
			structTheme[group] = {};
		}

		structTheme[group][key] = theme[key];
	});

	return JSON.stringify(structTheme, null, '\t');
};
