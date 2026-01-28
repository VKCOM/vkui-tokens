import type { Property } from 'csstype';

import { ThemeDescription } from '../../interfaces/general/index.js';
import { Token } from '../../interfaces/general/tools/tokenValue.js';
import {
	defaultOpacityPoints,
	getGradientPointsFromColor,
	makeGradientPointRaw,
	OpacityPoints,
} from './getGradientPointsFromColor.js';

export type TokenFunction<T extends ThemeDescription> = (theme: Partial<T>) => Token<any, T>;
export type NamedTokenFunction<T extends ThemeDescription> = (
	theme: Partial<T>,
) => [string | undefined, Token<any, T>];

export type OpacityPoint = [number, number];

function readThemeToken(theme: any, token: string): Token<any, any> {
	return theme[token] ?? (theme['colors'] ?? {})[token];
}

/**
 * Функция выполняет подстановку значения другого токена.
 * @param token Имя токена. Можно использовать токены из текущей темы либо из всех тем,
 * от которой наследуется текущая.
 */
export function alias<T extends ThemeDescription>(token: string): TokenFunction<T> {
	return (theme) => readThemeToken(theme, token);
}

/**
 * Функция создаёт runtime-ссылку на другой токен темы выполняет подстановку fallback-значения этого токена.
 * @param token Имя токена. Можно использовать токены из текущей темы либо из всех тем,
 * от которой наследуется текущая.
 */
export function namedAlias<T extends ThemeDescription>(token: string): NamedTokenFunction<T> {
	return (theme) => [token, readThemeToken(theme, token)];
}

/**
 * Функция создаёт runtime-ссылку на другой токен темы.
 * @param token Имя токена. Можно использовать любые токены, которые находятся в контексте страницы.
 */
export function staticRef<T>(value: Token<T, any>): T {
	if (typeof value === 'function') {
		throw new Error('Cannot use callable token value in static ref');
	}

	return value;
}

function makeOpacityPoints(count: number): OpacityPoints {
	const result: OpacityPoints = [];

	for (let i = 0; i < count; i++) {
		const percent = Math.round(i * (1 / (count - 1)) * 100);
		result.push([1, percent]);
	}

	return result;
}

export function gradient<T extends ThemeDescription>(
	...stops: (Property.Color | NamedTokenFunction<T>)[]
): TokenFunction<T> {
	const opacityPoints = stops.length > 1 ? makeOpacityPoints(stops.length) : defaultOpacityPoints;
	return (theme) => {
		return opacityPoints
			.map(([pointOpacity, pointCoordinate], index) => {
				const stop = stops[index] ?? stops[stops.length - 1];
				const [stopKey, stopValue] = typeof stop === 'function' ? stop(theme) : [undefined, stop];

				const pointRaw = makeGradientPointRaw(
					stopValue,
					// Привязываем к переменной только стопы с оригинальной прозрачностью
					pointOpacity === 1 ? stopKey : undefined,
				);

				return getGradientPointsFromColor(pointRaw, 1, [[pointOpacity, pointCoordinate]]);
			})
			.join(', ');
	};
}
