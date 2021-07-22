import {flatifyTheme} from '@/build/helpers/flatifyTheme';
import {ThemeHomeDescription} from '@/interfaces/themes/home';
import {ThemeHomeDarkDescription} from '@/interfaces/themes/homeDark';

import {octaviusDarkTheme, octaviusTheme} from '../octavius';

const octaviusThemeRegular = flatifyTheme(octaviusTheme);

export const homeTheme: ThemeHomeDescription = {
	...octaviusThemeRegular,
	themeName: 'home',
	breakpoints: {
		desktopS: {
			breakpoint: 0,
			adaptiveValue: 'regular',
		},
	},
	elevation4: '0 0 48px 0 rgba(0, 11, 41, 0.2)',
	portalFontFamily: 'MailSans, Helvetica, Arial, sans-serif',
	portalFontWeight: 400,
	portalFontWeightBold: 600,
};

export const homeDarkTheme: ThemeHomeDarkDescription = {
	...homeTheme,
	themeName: 'homeDark',
	colors: {
		...homeTheme.colors,
		...octaviusDarkTheme.colors,
	},
};
