import {
	isColorDescriptionCallable,
	isColorDescriptionStatic,
	isColorWithStates,
} from '@/build/helpers/cssHelpers';
import {expandColor} from '@/build/themeProcessors/expandColors/expandColors';
import {
	ColorDescription,
	ColorDescriptionStatic,
} from '@/interfaces/general/colors';

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
	value: ColorDescriptionStatic,
	emit: (message: string) => void,
): void {
	if (!/color/i.test(token)) {
		return;
	}

	if (isColorDescriptionCallable(value)) {
		const darkColor = expandColor(value, {colorsScheme: 'dark'});
		const lightColor = expandColor(value, {colorsScheme: 'light'});

		checkAlphaMismatch(token, darkColor, emit);
		checkAlphaMismatch(token, lightColor, emit);

		return;
	}

	if (isColorDescriptionStatic(value)) {
		const isAlphaName = /Alpha|Overlay/i.test(token);
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
