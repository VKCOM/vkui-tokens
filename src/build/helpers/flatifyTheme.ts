import { ThemeDescription } from '@/interfaces/general';
import { Adaptive } from '@/interfaces/general/tools';

export function flatifyTheme<T = ThemeDescription>(
	theme: T,
	removeStates: (keyof Adaptive<any>)[] = ['compactX', 'compact', 'large', 'largeX', 'largeXX'],
): T {
	return Object.entries(theme).reduce((acc, [themeKey, themeValue]) => {
		if (typeof themeValue === 'object') {
			const rebuildVar = false;
			removeStates.forEach((state) => {
				if (state in themeValue) {
					if (!rebuildVar) {
						themeValue = JSON.parse(JSON.stringify(themeValue));
					}

					delete themeValue[state];
				}
			});
		}
		acc[themeKey] = themeValue;
		return acc;
	}, {} as T);
}
