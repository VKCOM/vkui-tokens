import { ThemeOctaviusCompactDescription } from '@/interfaces/themes/octaviusCompact';

import { ThemeOctaviusDescription } from '../../../interfaces/themes/octavius';
import { octaviusDarkTheme, octaviusWhiteTheme } from '../octavius';

export const octaviusNew2024Theme: ThemeOctaviusCompactDescription = {
	...octaviusWhiteTheme,
	themeName: 'octaviusNew2024',
	colors: {
		...octaviusWhiteTheme.colors,
		colorTextAccent: '#0070F0',
		colorTextAccentThemed: '#0070F0',
		colorTextLink: '#0070F0',
		colorTextLinkThemed: '#0070F0',
		colorIconAccent: '#0070F0',
		colorIconAccentThemed: '#0070FF',
		colorBackgroundAccentThemed: '#0070FF',
		colorBackgroundAccent: '#0070FF',
		colorStrokeAccent: '#0070FF',
		colorStrokeAccentThemed: '#0070FF',
		octaviusColorIconUnread: '#0070FF',
	},
};

export const octaviusNew2024DarkTheme: ThemeOctaviusDescription = {
	...octaviusDarkTheme,
	themeName: 'octaviusNew2024Dark',
	colors: {
		...octaviusDarkTheme.colors,
		colorTextAccent: '#1A85FF',
		colorTextAccentThemed: '#FFFFFF',
		colorTextLink: '#1A85FF',
		colorTextLinkThemed: '#FFFFFF',
		colorIconAccent: '#0077FF',
		colorIconAccentThemed: '#FFFFFF',
		colorBackgroundAccentThemed: '#FFFFFF',
		colorBackgroundAccent: '#0077FF',
		colorStrokeAccent: '#0077FF',
		colorStrokeAccentThemed: '#FFFFFF',
		octaviusColorIconUnread: '#0077FF',
	},
};
