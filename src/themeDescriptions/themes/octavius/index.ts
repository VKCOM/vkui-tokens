import {ParadigmThemeDescription} from '@/interfaces/namespaces/paradigm';
import {ThemeOctaviusDescription} from '@/interfaces/themes/octavius';
import {
	darkTheme,
	darkThemeElevation,
	lightTheme,
} from '@/themeDescriptions/base/paradigm';

export const octaviusTheme: ThemeOctaviusDescription = {
	...lightTheme,
	themeName: 'octavius',
	colors: {
		...lightTheme.colors,
	},
};

export const octaviusDarkTheme: ParadigmThemeDescription = {
	...octaviusTheme,
	...darkTheme,
	...darkThemeElevation,
	themeName: 'octaviusDark',
	colors: {
		...darkTheme.colors,
	},
};
