import { ThemeWidgetsDescription } from '@/interfaces/themes/widgets';
import { ThemeWidgetsDarkDescription } from '@/interfaces/themes/widgetsDark';
import { darkTheme, darkThemeElevation, lightTheme } from '@/themeDescriptions/base/paradigm';

export const widgetsTheme: ThemeWidgetsDescription = {
	...lightTheme,
	themeName: 'widgets',
	colors: {
		...lightTheme.colors,
		colorStrokeAccent: '#0077FF',
		colorIconAccent: {
			normal: '#0077FF',
			hover: '#0073F7',
			active: '#0077FF',
		},
		colorStrokeAccentThemed: '#0077FF',
		colorTextAccent: '#0077FF',
		colorBackgroundAccent: {
			normal: '#0077FF',
			hover: '#0073F7',
			active: '#006FEF',
		},
		colorTextAccentThemed: '#0077FF',
		colorBackgroundAccentTint: '#0077FF',
		colorTextLink: '#0077FF',
		colorBackgroundAccentThemed: {
			normal: '#0077FF',
			hover: '#0073F7',
			active: '#006FEF',
		},
		colorTextLinkThemed: '#0077FF',
		colorIconAccentThemed: '#0077FF',
		colorTextNegative: '#ED330A',
		colorIconNegative: '#ED330A',
		colorBackgroundNegative: {
			normal: '#ED330A',
			hover: '#E4320C',
			active: '#DA300E',
		},
		colorBackgroundNegativeTintThemedAlpha: 'rgba(237, 51, 10, 0.08)',
		colorBackgroundNegativeTintAlpha: 'rgba(237, 51, 10, 0.08)',
		colorBackgroundNegativeTintThemed: '#FAEBEB',
		colorBackgroundNegativeTint: '#FAEBEB',
		colorStrokeNegative: '#ED330A',
		colorBackgroundAccentTintThemedAlpha: 'rgba(0, 119, 255, 0.06)',
	},
};

export const widgetsDarkTheme: ThemeWidgetsDarkDescription = {
	...widgetsTheme,
	...darkTheme,
	...darkThemeElevation,
	themeName: 'widgetsDark',
	colors: {
		...widgetsTheme.colors,
		...darkTheme.colors,
		colorTextAccent: '#1A85FF',
		colorTextLink: '#1A85FF',
		colorTextNegative: '#FF5C5C',
		colorIconNegative: '#FF5C5C',
		colorBackgroundNegative: '#FF5C5C',
		colorBackgroundNegativeTint: '#522E2E',
		colorStrokeNegative: '#FF5C5C',
		colorBackgroundAccentTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
	},
};
