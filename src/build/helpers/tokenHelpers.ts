import type { Property } from 'csstype';

import { ThemeDescription } from '@/interfaces/general';
import { Token } from '@/interfaces/general/tools/tokenValue';

import { getGradientPointsFromColor, makeGradientPointRaw } from './getGradientPointsFromColor';

export type TokenFunction<T extends ThemeDescription> = (theme: Partial<T>) => Token<any, T>;
export type NamedTokenFunction<T extends ThemeDescription> = (
	theme: Partial<T>,
) => [string | undefined, Token<any, T>];

export type OpacityPoint = [number, number];

function readThemeToken(theme: any, token: string): Token<any, any> {
	return theme[token] ?? (theme['colors'] ?? {})[token];
}

export function alias<T extends ThemeDescription>(token: string): TokenFunction<T> {
	return (theme) => readThemeToken(theme, token);
}

export function namedAlias<T extends ThemeDescription>(token: string): NamedTokenFunction<T> {
	return (theme) => [token, readThemeToken(theme, token)];
}

export function staticRef<T>(value: Token<T, any>): T {
	if (typeof value === 'function') {
		throw new Error('Cannot use callable token value in static ref');
	}

	return value;
}

export function gradient<T extends ThemeDescription>(
	stops: (Property.Color | NamedTokenFunction<T>)[],
	opacityPoints: OpacityPoint[] = [
		[1, 0],
		[1, 100],
	],
): TokenFunction<T> {
	if (stops.length !== opacityPoints.length) {
		throw new Error(
			`Gradient stops length (${
				stops.length
			}) is not equal to the number of opacity points given (${opacityPoints.length})`,
		);
	}

	return (theme) => {
		return opacityPoints
			.map(([pointOpacity, pointCoordinate], index) => {
				const stop = stops[index];
				const [stopKey, stopValue] = typeof stop === 'function' ? stop(theme) : [undefined, stop];

				const pointRaw = makeGradientPointRaw(stopValue, stopKey);

				return getGradientPointsFromColor(pointRaw, 1, [[pointOpacity, pointCoordinate]]);
			})
			.join(', ');
	};
}
