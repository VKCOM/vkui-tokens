import vkPalette from '@vkontakte/appearance/main.valette/palette.json';

/* eslint-disable @typescript-eslint/naming-convention */
export interface ClusterData {
	color_identifier: string;
	alpha_multiplier?: number;
}
/* eslint-enable @typescript-eslint/naming-convention */

export function resolveColor(
	clusterData: ClusterData,
	palette: Record<string, string> = vkPalette,
): string {
	const color = palette[clusterData.color_identifier];
	const alphaMultiplier = clusterData.alpha_multiplier ? Number(clusterData.alpha_multiplier) : 1;

	if (!color) {
		throw new Error(`Missing color: ${clusterData.color_identifier}`);
	} else if (color.indexOf('#') === 0 && color.length === 9) {
		// ahex
		return ahex2rgba(color.replace('#', ''), alphaMultiplier);
	} else if (color.indexOf('#') === 0 && clusterData.alpha_multiplier) {
		return opacify(color.replace('#', ''), alphaMultiplier);
	}

	return color;
}

function ahex2rgba(ahex: string, multiplier = 1): string {
	const opacity = (parseInt(ahex.slice(0, 2), 16) / 255) * multiplier;
	const colorHex = ahex.slice(2);
	return opacify(colorHex, opacity);
}

function opacify(hex: string, opacity: number): string {
	return `rgba(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(
		hex.slice(4),
		16,
	)}, ${opacity.toFixed(2)})`;
}
