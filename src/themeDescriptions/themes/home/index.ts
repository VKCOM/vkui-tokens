import {ThemeHomeDescription} from '@/interfaces/themes/home';
import {ThemeHomeDarkDescription} from '@/interfaces/themes/homeDark';
import {darkTheme, lightTheme} from '@/themeDescriptions/base/paradigm';

const breakpoints = {
	desktopS: {
		breakpoint: 0,
		adaptiveValue: 'regular',
	},
};

export const homeTheme: ThemeHomeDescription = {
	...lightTheme,
	themeName: 'home',
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	breakpoints,
};

export const homeDarkTheme: ThemeHomeDarkDescription = {
	...darkTheme,
	themeName: 'homeDark',
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	breakpoints,
};
