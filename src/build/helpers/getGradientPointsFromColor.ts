import color from 'color';
import type { Property } from 'csstype';

import { GradientPoints } from '@/interfaces/general/gradients';

type OpacityMap = Array<[number, number]>;

export function getGradientPointsFromColor(
	colorArg: Property.Color,
	opacityMultiplier = 1,
): GradientPoints {
	const opacityMap: OpacityMap = [
		[0, 0],
		[0.05, 15],
		[0.2, 30],
		[0.8, 70],
		[0.95, 85],
		[1, 100],
	];

	const colorRGB: string = color(colorArg).rgb().array().join(', ');

	return opacityMap
		.map(([pointOpacity, pointCoordinate]) => {
			return `rgba(${colorRGB}, ${
				Math.round(pointOpacity * opacityMultiplier * 1000) / 1000
			}) ${pointCoordinate}%`;
		})
		.join(', ');
}
