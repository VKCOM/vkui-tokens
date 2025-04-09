import Color from 'color';

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
	'blur',
	// Todo: Раскомментить в VKUI Tokens 5.0
	// 'spacing',
	'other',
] as const;

interface StructGradientPoint {
	step?: number;
	color: string;
	token?: string;
	alpha?: number;
}

function parseRawToken(rawToken: string): StructGradientPoint {
	const percentMatch = rawToken.match(/\d+$/);

	const step =
		percentMatch && percentMatch.length > 0 ? parseFloat(percentMatch[0]) / 100 : undefined;

	rawToken = rawToken.replace(/^,\s/g, '').replace(/\d+$/g, '').trim();

	if (rawToken.startsWith('var(')) {
		const varNameRaw = /^var\(([\w\-_]+)/.exec(rawToken);

		if (varNameRaw) {
			const varName = varNameRaw[1];
			const varValue = rawToken.slice(varNameRaw[0].length, -1).trim().slice(1).trim();

			return {
				step,
				color: varValue,
				token: convertSnakeToCamel(varName),
				alpha: new Color(varValue).alpha(),
			};
		}
	}

	return {
		color: rawToken,
		step,
		alpha: new Color(rawToken).alpha(),
	};
}

function compileStructGradients(
	cssGradients: Record<string, string>,
): Record<string, StructGradientPoint[]> {
	const structGradients: Record<string, StructGradientPoint[]> = {};
	const keys = Object.keys(cssGradients);

	for (const key of keys) {
		const rawPoints = cssGradients[key].split('%').slice(0, -1);

		structGradients[key] = rawPoints.map(parseRawToken).map((structToken, index, array) => {
			if (!structToken.token) {
				return {
					step: structToken.step,
					color: structToken.color,
					// Только последнее значение распространяется на все точки
					// (как в градиенте, сгенерированном по 1 переменной)
					// Тут могут всплыть ошибки, так что заранее сорри
					token: structToken.token ?? array[array.length - 1].token,
					alpha: structToken.alpha,
				};
			}

			return structToken;
		});
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
