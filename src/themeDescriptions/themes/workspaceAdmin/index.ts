import { ThemeWorkspaceAdminDescription } from '@/interfaces/themes/workspaceAdmin';
import { ThemeWorkspaceAdminDarkDescription } from '@/interfaces/themes/workspaceAdminDark';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/paradigm';
import { fontFamilyAccent } from '@/themeDescriptions/common/fontSizes';

const fontWeightAccent1 = 500;
const fontWeightAccent2 = 500;

export const workspaceAdminTheme: ThemeWorkspaceAdminDescription = {
	...lightTheme,
	themeName: 'workspaceAdmin',
	themeNameBase: 'workspaceAdmin',
	colors: {
		...lightTheme.colors,

		colorBackground: '#F6F7F8',
		colorBackgroundNegativeTint: {
			normal: '#FAEBEB',
			hover: '#FDE2E7',
			active: '#FCD8DF',
		},
		colorBackgroundPositiveTintAlpha: {
			normal: 'rgba(13, 194, 104, 0.12)',
			hover: 'rgba(13, 194, 104, 0.14)',
			active: 'rgba(13, 194, 104, 0.18)',
		},
		colorBackgroundWarningTintAlpha: {
			normal: 'rgba(255, 158, 0, 0.16)',
			hover: 'rgba(255, 158, 0, 0.24)',
			active: 'rgba(255, 158, 0, 0.28)',
		},
		colorBackgroundNegativeTintAlpha: {
			normal: 'rgba(237, 10, 52, 0.10)',
			hover: 'rgba(237, 10, 52, 0.14)',
			active: 'rgba(237, 10, 52, 0.18)',
		},
		colorBackgroundAccentTintAlpha: {
			normal: 'rgba(0, 95, 249, 0.06)',
			hover: 'rgba(0, 95, 249, 0.1)',
			active: 'rgba(0, 95, 249, 0.14)',
		},
		colorBackgroundSecondaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.12)',
			hover: 'rgba(255, 255, 255, 0.16)',
			active: 'rgba(255, 255, 255, 0.20)',
		},
		colorBackgroundTertiaryAlpha: {
			normal: 'rgba(58, 58, 90, 0.04)',
			hover: 'rgba(58, 58, 90, 0.08)',
			active: 'rgba(58, 58, 90, 0.12)',
		},

		colorIconNegativeSnackbar: '#FF5C5C',
		colorTextSecondary: '#797A80',
	},

	fontTitle2: {
		regular: {
			fontSize: 20,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},
	fontTitle3: {
		regular: {
			fontSize: 17,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
		},
	},

	fontHeadline3: {
		fontSize: 13,
		lineHeight: 16,
		fontStyle: 'normal',
		fontFamily: fontFamilyAccent,
		fontWeight: fontWeightAccent2,
	},
};

export const workspaceAdminDarkTheme: ThemeWorkspaceAdminDarkDescription = {
	...workspaceAdminTheme,
	...darkTheme,
	themeName: 'workspaceAdminDark',
	themeNameBase: 'workspaceAdminDark',

	colors: {
		...darkTheme.colors,

		colorBackgroundPositiveTintAlpha: {
			normal: 'rgba(13, 194, 104, 0.16)',
			hover: 'rgba(13, 194, 104, 0.18)',
			active: 'rgba(13, 194, 104, 0.2)',
		},
		colorBackgroundWarningTintAlpha: {
			normal: 'rgba(255, 158, 0, 0.2)',
			hover: 'rgba(255, 158, 0, 0.24)',
			active: 'rgba(255, 158, 0, 0.28)',
		},
		colorBackgroundNegativeTintAlpha: {
			normal: 'rgba(255, 58, 58, 0.24)',
			hover: 'rgba(255, 58, 58, 0.28)',
			active: 'rgba(255, 58, 58, 0.32)',
		},
		colorBackgroundAccentTintAlpha: {
			normal: 'rgba(39, 117, 252, 0.12)',
			hover: 'rgba(39, 117, 252, 0.16)',
			active: 'rgba(39, 117, 252, 0.2)',
		},
		colorBackgroundTertiaryAlpha: {
			normal: 'rgba(255, 255, 255, 0.04)',
			hover: 'rgba(255, 255, 255, 0.1)',
			active: 'rgba(255, 255, 255, 0.14)',
		},

		colorIconNegativeSnackbar: '#FF5C5C',
		colorTextSecondary: '#BFC1C5',
	},
};
