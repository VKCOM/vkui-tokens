import {ThemeSearchDescription} from '@/interfaces/themes/search';
import {lightTheme} from '@/themeDescriptions/base/paradigm';

export const searchTheme: ThemeSearchDescription = {
	...lightTheme,
	themeName: 'search',
	themeNameBase: 'search',
	sizeBorderRadius: {
		regular: 8,
	},
};
