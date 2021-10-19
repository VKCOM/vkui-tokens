import {ColorDescription, ColorWithStates} from '@/interfaces/general/colors';

function isColorWithStates(value: unknown): value is ColorWithStates {
	return (
		value &&
		typeof value === 'object' &&
		typeof value['normal'] === 'string' &&
		typeof value['hover'] === 'string' &&
		typeof value['active'] === 'string'
	);
}

function isColorDescription(value: unknown): value is ColorDescription {
	return typeof value === 'string' || isColorWithStates(value);
}

function isAlphaColor(color: ColorDescription): boolean {
	if (isColorWithStates(color)) {
		return (
			isAlphaColor(color.normal) &&
			isAlphaColor(color.hover) &&
			isAlphaColor(color.active)
		);
	}

	if (typeof color === 'string') {
		return /^rgba\(/i.test(color);
	}

	return false;
}

export function checkAlphaMismatch(
	token: string,
	value: unknown,
	emit: (message: string) => void,
): void {
	if (/color/i.test(token) && isColorDescription(value)) {
		const isAlphaName = /Alpha/i.test(token);
		const isAlphaValue = isAlphaColor(value);

		if (isAlphaName !== isAlphaValue) {
			emit(
				`Color token type mismatch: ${
					isAlphaName ? 'alpha' : 'opaque'
				} token name but ${isAlphaValue ? 'alpha' : 'opaque'} value`,
			);
		}
	}
}
