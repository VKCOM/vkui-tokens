import {
	LocalHomeColorsDescriptionStruct,
	ThemeHomeDescription,
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

export const homeTheme: ThemeHomeDescription = {
	...lightTheme,
	themeName: 'home',
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	breakpoints,
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
	colors: {
		...darkTheme.colors,
		...localHomeColors,
	},
};
