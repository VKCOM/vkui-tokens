import { ThemeVkIdOkDescription } from '@/interfaces/themes/vkIdOk';
import { ThemeVkIdOkDarkDescription } from '@/interfaces/themes/vkIdOkDark';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/vk';

export const vkIdOkTheme: ThemeVkIdOkDescription = {
	...lightTheme,
	themeName: 'vkIdOk',
	themeNameBase: 'vkIdOk',
	colors: {
		...lightTheme.colors,
		colorTextAccent: '#FF7700',
		colorTextAccentThemed: '#FF7700',
		colorTextPrimary: '#000000',
		colorTextLink: '#6D7885',
		colorTextLinkThemed: '#6D7885',
		colorTextLinkTint: '#818C99',
		colorTextLinkVisited: '#6D7885',
		colorIconAccent: '#FF7700',
		colorIconAccentThemed: '#818C99',
		colorIconPrimary: '#2C2D2E',
		colorBackgroundAccent: {
			normal: '#FF7700',
			hover: '#E57B04',
			active: '#D87402',
		},
		colorBackgroundAccentThemed: {
			normal: '#FF7700',
			hover: '#E57B04',
			active: '#D87402',
		},
		colorBackgroundContent: '#FFFFFF',
		colorBackgroundAccentThemedAlpha: 'rgba(238, 130, 8, 0.2)',
		colorBackgroundAccentTint: '#F38910',
		colorBackgroundAccentAlternative: '#FF7700',
		colorFieldBackground: '#FFFFFF',
		colorStrokeAccent: '#BEBFC1',
		colorStrokeAccentThemed: '#BEBFC1',
		colorAccentOrange: '#FF7700',
	},
};

export const vkIdOkThemeDark: ThemeVkIdOkDarkDescription = {
	...darkTheme,
	themeName: 'vkIdOkDark',
	themeNameBase: 'vkIdOk',
	colors: {
		...darkTheme.colors,
		colorTextAccent: '#FF7700',
		colorTextAccentThemed: '#FFFFFF',
		colorTextPrimary: '#FFFFFF',
		colorTextLink: '#969A9F',
		colorTextLinkThemed: '#FFFFFF',
		colorTextLinkTint: '#76787A',
		colorTextLinkVisited: '#969A9F',
		colorTextContrastThemed: {
			normal: '#FFFFFF',
			hover: '#FFFFFF',
			active: '#FFFFFF',
		},
		colorIconAccent: '#FF7700',
		colorIconAccentThemed: '#FFFFFF',
		colorIconPrimary: '#FFFFFF',
		colorBackgroundAccent: {
			normal: '#FF7700',
			hover: '#F38910',
			active: '#F58C15',
		},
		// сделано, чтобы accent-themed кнопки оставались оранжевыми в тёмной теме
		colorBackgroundAccentThemed: {
			normal: '#FF7700',
			hover: '#F38910',
			active: '#F58C15',
		},
		colorBackgroundContent: '#1A1A1C',
		colorBackgroundAccentThemedAlpha: 'rgba(255, 255, 255, 0.2)',
		colorBackgroundAccentTint: '#F38910',
		colorBackgroundAccentAlternative: '#F38910',
		colorFieldBackground: '#19191A',
		colorStrokeAccent: '#505253',
		colorStrokeAccentThemed: '#FFFFFF',
		colorAccentOrange: '#FF7700',
	},
};
