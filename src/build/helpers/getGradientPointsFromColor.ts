import color from 'color';
import type { Property } from 'csstype';

import { GradientPoints } from '@/interfaces/general/gradients';

// opacityMap.json требуется для android и ios клиентов
import opacityMap from './opacityMap.json';

export function getGradientPointsFromColor(
	colorArg: Property.Color,
	opacityMultiplier = 1,
): GradientPoints {
	const colorRGB: string = color(colorArg).rgb().array().join(', ');

	return opacityMap
		.map(([pointOpacity, pointCoordinate]) => {
			return `rgba(${colorRGB}, ${
				Math.round(pointOpacity * opacityMultiplier * 1000) / 1000
			}) ${pointCoordinate}%`;
		})
		.join(', ');
}
