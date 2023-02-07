import color from 'color';
import { Property } from 'csstype';

export const mixColors = (
	colorArg: Property.Color,
	colorState: Property.Color,
	opacity: number,
): Property.Color => {
	if (colorArg === 'transparent') {
		return color(colorState)
			.alpha(0.01 * Math.round(Math.min(1, opacity) * 100))
			.rgb()
			.string();
	}

	const colorObj = color(colorArg);
	const alpha = colorObj.alpha();
	if (alpha !== 1) {
		return colorObj
			.alpha(0.01 * Math.round(Math.min(1, alpha + opacity) * 100))
			.rgb()
			.string();
	}

	return colorObj.mix(color(colorState), opacity).hex();
};
