import {
	LocalHomeColorsDescriptionStruct,
	ThemeHomeDescription,
	ThemeHomeOverValues,
} from '@/interfaces/themes/home';
import {ThemeHomeDarkDescription} from '@/interfaces/themes/homeDark';
import {darkTheme, lightTheme} from '@/themeDescriptions/base/paradigm';

const localHomeColors: LocalHomeColorsDescriptionStruct = {
	homeColorSocialVk: '#2787F5',
	homeColorSocialOk: '#EE8208',
	homeColorSocialFb: '#0561AF',
	homeColorFilinFailPrimary: '#333333',
	homeColorFilinFailSecondary: '#C7C7C7',
};

const localHomeOverValues: ThemeHomeOverValues = {
	homeFontFamilyDefault: 'Helvetica, Arial, sans-serif',
	homeFontWeightNormal: '400',
	homeFontWeightBold: '700',
};

const elevations = {
	elevation1: '0px 4px 12px rgba(18, 25, 43, 0.12)',
	elevation2: '0px 4px 20px rgba(18, 25, 43, 0.2)',
	elevation3: '0px 16px 48px rgba(18, 25, 43, 0.28)',
};

export const homeTheme: ThemeHomeDescription = {
	...lightTheme,
	themeName: 'home',
	themeNameBase: 'home',
	...elevations,
	...localHomeOverValues,
	colors: {
		...lightTheme.colors,
		...localHomeColors,
	},
};

export const homeDarkTheme: ThemeHomeDarkDescription = {
	...darkTheme,
	themeName: 'homeDark',
	...elevations,
	...localHomeOverValues,
	colors: {
		...darkTheme.colors,
		...localHomeColors,
	},
};
