import { ThemeWorkspaceAdminDescription } from '@/interfaces/themes/workspaceAdmin';
import { ThemeWorkspaceAdminDarkDescription } from '@/interfaces/themes/workspaceAdminDark';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/paradigm';

export const workspaceAdminTheme: ThemeWorkspaceAdminDescription = {
	...lightTheme,
	themeName: 'workspaceAdmin',
	themeNameBase: 'workspaceAdmin',
	colors: {
		...lightTheme.colors,

		colorBackground: '#F6F7F8',
	},
};

export const workspaceAdminDarkTheme: ThemeWorkspaceAdminDarkDescription = {
	...darkTheme,
	themeName: 'workspaceAdminDark',
	themeNameBase: 'workspaceAdminDark',
};
