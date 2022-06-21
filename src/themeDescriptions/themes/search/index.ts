import {ThemeSearchDescription} from '@/interfaces/themes/search';
import {lightTheme} from '@/themeDescriptions/base/paradigm';

export const searchTheme: ThemeSearchDescription = {
	...lightTheme,
	themeName: 'search',
	themeNameBase: 'search',
	fontFamilyBase: 'Arial, sans-serif',
	sizeBorderRadius: {
		regular: 8,
	},
};
