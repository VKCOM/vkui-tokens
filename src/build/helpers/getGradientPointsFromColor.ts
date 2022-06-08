import color from 'color';
import {Property} from 'csstype';

import {GradientPoints} from '@/interfaces/general/gradients';

type OpacityMap = Array<[number, number]>;

export function getGradientPointsFromColor(
	colorArg: Property.Color,
	opacityMultiplier = 1,
): GradientPoints {
	const opacityMap: OpacityMap = [
		[0, 0],
		[0.036, 13],
		[0.15, 27],
		[0.79, 68],
		[0.95, 84],
		[1, 100],
	];
	const colorRGB: string = color(colorArg).rgb().array().join(', ');
	return opacityMap
		.map(function ([pointOpacity, pointCoordinate]) {
			return `rgba(${colorRGB}, ${Math.round(pointOpacity * opacityMultiplier * 1000) / 1000}) ${pointCoordinate}%`;
		})
		.join(', ');
}
