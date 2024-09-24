import { convertSnakeToCamel } from '@/build/helpers/convertSnakeToCamel';
import type { Theme } from '@/interfaces/general';

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

interface StructGradientPoint {
	color: string;
	token?: string;
}

function parseRawToken(rawToken: string): StructGradientPoint {
	rawToken = rawToken.replace(/^,\s/g, '').replace(/\d+$/g, '').trim();

	if (rawToken.startsWith('var(')) {
		const varNameRaw = /^var\(([\w\-_]+)/.exec(rawToken);

		if (varNameRaw) {
			const varName = varNameRaw[1];
			const varValue = rawToken.slice(varNameRaw[0].length, -1).trim().slice(1).trim();

			return { color: varValue, token: convertSnakeToCamel(varName) };
		}

		return { color: rawToken };
	}

	return { color: rawToken };
}

function compileStructGradients(
	cssGradients: Record<string, string>,
): Record<string, StructGradientPoint[]> {
	const structGradients: Record<string, StructGradientPoint[]> = {};
	const keys = Object.keys(cssGradients);

	for (const key of keys) {
		const rawPoints = cssGradients[key].split('%').slice(0, -1);
		structGradients[key] = rawPoints.map(parseRawToken);
	}

	return structGradients;
}

/**
 * Компилирует структурируемый json с темой
 */
export const compileStructJSON = <T = Theme>(theme: T): string => {
	const structTheme = {};

	Object.keys(theme).forEach((key) => {
		const group = groups.find((predicate) => key.startsWith(predicate)) || 'other';

		if (!structTheme[group]) {
			structTheme[group] = {};
		}

		structTheme[group][key] = theme[key];
	});

	if (structTheme['gradient']) {
		structTheme['gradient'] = compileStructGradients(structTheme['gradient']);
	}

	return JSON.stringify(structTheme, null, '\t');
};
