import {
	LocalHomeColorsDescriptionStruct,
	ThemeHomeDescription,
	ThemeHomeOverValues,
} from '@/interfaces/themes/home';
import {ThemeHomeDarkDescription} from '@/interfaces/themes/homeDark';
import {darkTheme, lightTheme} from '@/themeDescriptions/base/paradigm';

const breakpoints = {
	desktopS: {
		breakpoint: 0,
		adaptiveValue: 'compact',
	},
	touch: {
		breakpoint: 0,
		adaptiveValue: 'regular',
	},
};

const localHomeColors: LocalHomeColorsDescriptionStruct = {
	homeColorSocialVk: '#2787F5',
	homeColorSocialOk: '#EE8208',
	homeColorSocialFb: '#0561AF',
	homeColorFilinFailPrimary: '#333333',
	homeColorFilinFailSecondary: '#C7C7C7',
};

const localHomeOverValues: ThemeHomeOverValues = {
	homeElevation1: '0px 4px 12px rgba(18, 25, 43, 0.12)',
	homeElevation2: '0px 4px 20px rgba(18, 25, 43, 0.2)',
	homeElevation3: '0px 16px 48px rgba(18, 25, 43, 0.28)',
	homeFontFamilyDefault: 'Helvetica, Arial, sans-serif',
	homeFontWeightNormal: '400',
	homeFontWeightBold: '700',
};

export const homeTheme: ThemeHomeDescription = {
	...lightTheme,
	themeName: 'home',
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	breakpoints,
	...localHomeOverValues,
	colors: {
		...lightTheme.colors,
		...localHomeColors,
	},
};

export const homeDarkTheme: ThemeHomeDarkDescription = {
	...darkTheme,
	themeName: 'homeDark',
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	breakpoints,
	...localHomeOverValues,
	colors: {
		...darkTheme.colors,
		...localHomeColors,
	},
};
