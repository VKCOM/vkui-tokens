import {
	LocalHomeColorsDescriptionStruct,
	ThemeHomeDescription,
	ThemeHomeOverValues,
} from '../../../interfaces/themes/home';
import { ThemeHomeDarkDescription } from '../../../interfaces/themes/homeDark';
import { darkTheme, lightTheme } from '../../base/paradigm';

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

export const homeTheme: ThemeHomeDescription = {
	...lightTheme,
	themeName: 'home',
	themeNameBase: 'home',
	...localHomeOverValues,
	colors: {
		...lightTheme.colors,
		...localHomeColors,
	},
};

export const homeDarkTheme: ThemeHomeDarkDescription = {
	...darkTheme,
	themeName: 'homeDark',
	...localHomeOverValues,
	colors: {
		...darkTheme.colors,
		...localHomeColors,
	},
};
