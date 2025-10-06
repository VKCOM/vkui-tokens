import { ThemeDescription } from '@/interfaces/general';
import { Adaptive } from '@/interfaces/general/tools';

export function flatifyTheme<T = ThemeDescription>(
	theme: T,
	removeStates: (keyof Adaptive<any>)[] = ['compactX', 'compact', 'large', 'largeX', 'largeXX'],
): T {
	return Object.entries(theme).reduce((acc, [themeKey, themeValue]) => {
		if (typeof themeValue === 'object') {
			const clonedValue = JSON.parse(JSON.stringify(themeValue));
			removeStates.forEach((state) => {
				if (state in clonedValue) {
					delete clonedValue[state];
				}
			});
			acc[themeKey] = clonedValue;
		} else {
			acc[themeKey] = themeValue;
		}
		return acc;
	}, {} as T);
}
