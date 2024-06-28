import { ThemeWorkspaceAdminDescription } from '@/interfaces/themes/workspaceAdmin';
import { ThemeWorkspaceAdminDarkDescription } from '@/interfaces/themes/workspaceAdminDark';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/paradigm';
import { fontFamilyAccent } from '@/themeDescriptions/common/fontSizes';

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
		colorIconNegativeSnackbar: '#FF5C5C',
		colorTextSecondary: '#797A80',
	},

	fontHeadline3: {
		fontSize: 13,
		lineHeight: 18,
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

		colorIconNegativeSnackbar: '#FF5C5C',
		colorTextSecondary: '#BFC1C5',
	},
};
