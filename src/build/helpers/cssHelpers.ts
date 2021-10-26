import {
	ColorDescriptionCallable,
	ColorDescriptionStatic,
	ColorWithStates,
} from '@/interfaces/general/colors';

const hexToRgb = (hex: string) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
				result[3],
				16,
		  )}`
		: '';
};

export function isColorWithStates(value: unknown): value is ColorWithStates {
	return (
		value &&
		typeof value === 'object' &&
		typeof value['normal'] === 'string' &&
		typeof value['hover'] === 'string' &&
		typeof value['active'] === 'string'
	);
}

export function isColorDescriptionCallable(
	value: unknown,
): value is ColorDescriptionCallable<any> {
	return typeof value === 'function';
}

export function isColorDescriptionStatic(
	value: unknown,
): value is ColorDescriptionStatic {
	return typeof value === 'string' || isColorWithStates(value);
}

export function getRGBA(color: string, opacity: number): string {
	return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export function toneOpacity(
	color: string | ColorWithStates,
	opacity: number,
): string {
	if (typeof color === 'string') {
		return getRGBA(color, opacity);
	}

	return getRGBA(color.normal, opacity);
}
