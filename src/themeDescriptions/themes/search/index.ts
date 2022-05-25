import {ThemeSearchDescription} from '@/interfaces/themes/search';
import {lightTheme} from '@/themeDescriptions/base/paradigm';

export const searchTheme: ThemeSearchDescription = {
	...lightTheme,
	themeName: 'search',
	themeNameBase: 'search',
	colors: {
		...lightTheme.colors,
		colorTextPrimary: '#2C2D2E',
	},
	sizeBorderRadius: {
		regular: 8,
	},
	sizeButtonLargeHeight: {
		regular: 44,
		compact: 36,
	},
	sizeButtonMediumHeight: {
		regular: 36,
		compact: 32,
	},
	sizeButtonSmallHeight: {
		regular: 30,
		compact: 28,
	},
};
