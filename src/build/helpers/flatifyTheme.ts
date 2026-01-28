import { ThemeDescription } from '../../interfaces/general/index.js';
import { Adaptive } from '../../interfaces/general/tools/index.js';

export function flatifyTheme<T = ThemeDescription>(
	theme: T,
	removeStates: (keyof Adaptive<any>)[] = ['compactX', 'compact', 'large', 'largeX', 'largeXX'],
): T {
	return Object.entries(theme).reduce((acc, [themeKey, themeValue]) => {
		if (typeof themeValue === 'object') {
			let processedValue = themeValue;
			let rebuildVar = false;
			removeStates.forEach((state) => {
				if (state in themeValue) {
					if (!rebuildVar) {
						processedValue = JSON.parse(JSON.stringify(themeValue));
						rebuildVar = true;
					}

					delete processedValue[state];
				}
			});
			acc[themeKey] = processedValue;
		} else {
			acc[themeKey] = themeValue;
		}
		return acc;
	}, {} as T);
}
