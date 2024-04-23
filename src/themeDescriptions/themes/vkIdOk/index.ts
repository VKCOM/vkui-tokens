import { ThemeVkIdOkDescription } from '@/interfaces/themes/vkIdOk';
import { ThemeVkIdOkDarkDescription } from '@/interfaces/themes/vkIdOkDark';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/vk';

export const vkIdOkTheme: ThemeVkIdOkDescription = {
	...lightTheme,
	themeName: 'vkIdOk',
	themeNameBase: 'vkIdOk',
	colors: {
		...lightTheme.colors,
		colorTextAccent: '#EE8208',
		colorTextAccentThemed: '#EE8208',
		colorBackgroundAccent: {
			normal: '#EE8208',
			hover: '#E57B04',
			active: '#D87402',
		},
		colorBackgroundAccentThemed: {
			normal: '#EE8208',
			hover: '#E57B04',
			active: '#D87402',
		},
		colorStrokeAccent: '#EE8208',
	},
};

export const vkIdOkThemeDark: ThemeVkIdOkDarkDescription = {
	...darkTheme,
	themeName: 'vkIdOkDark',
	themeNameBase: 'vkIdOk',
	colors: {
		...darkTheme.colors,
		colorTextAccent: '#EE8208',
		colorTextAccentThemed: '#EE8208',
		colorBackgroundAccent: {
			normal: '#EE8208',
			hover: '#E57B04',
			active: '#D87402',
		},
		colorBackgroundAccentThemed: {
			normal: '#EE8208',
			hover: '#F38910',
			active: '#F58C15',
		},
		colorStrokeAccent: '#EE8208',
	},
};
