import { ThemeWorkspaceLandingsDescription } from '../../../interfaces/themes/workspaceLandings/index.ts';
import { darkTheme } from '../../base/paradigm.ts';

export const workspaceLandingsTheme: ThemeWorkspaceLandingsDescription = {
	...darkTheme,
	themeName: 'workspaceLandings',
	themeNameBase: 'workspaceLandings',
	colors: {
		...darkTheme.colors,
		workspaceLandingsColorBackgroundDark1: '#090909',
		workspaceLandingsColorBackgroundDark2: '#1D1D1F',
		workspaceLandingsColorBackgroundBlue: '#2688EB',
		workspaceLandingsColorTextGray: '#B3B3B4',
		workspaceLandingsColorTextGreen: '#00D3E6',
	},
};
