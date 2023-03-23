import { ThemeCsatHomeTouchDescription } from '@/interfaces/themes/csatHomeTouch';
import { ThemeCsatHomeTouchDarkDescription } from '@/interfaces/themes/csatHomeTouchDark';
import { ThemeCsatParadigmDescription } from '@/interfaces/themes/csatParadigm';
import { ThemeCsatParadigmDarkDescription } from '@/interfaces/themes/csatParadigmDark';
import { darkTheme, lightTheme } from '@/themeDescriptions/base/paradigm';

export const csatParadigmTheme: ThemeCsatParadigmDescription = {
	...lightTheme,
	themeNameBase: 'csatParadigm',
	themeName: 'csatParadigm',
	colors: {
		...lightTheme.colors,
		csatPlateBackground: lightTheme.colors.colorBackgroundModal,
		csatRatingIconStar: {
			normal: '#F0F1F3',
			active: '#FFC700',
			hover: '#FFC700',
		},
	},
};

export const csatParadigmDarkTheme: ThemeCsatParadigmDarkDescription = {
	...darkTheme,
	themeNameBase: 'csatParadigm',
	themeName: 'csatParadigmDark',
	colors: {
		...darkTheme.colors,
		csatPlateBackground: darkTheme.colors.colorBackgroundModal,
		csatRatingIconStar: {
			normal: 'rgba(255, 255, 255, 0.12)',
			active: '#FFC700',
			hover: '#FFC700',
		},
	},
};

export const csatHomeTouchTheme: ThemeCsatHomeTouchDescription = {
	...lightTheme,
	themeNameBase: 'csatHomeTouch',
	themeName: 'csatHomeTouch',
	colors: {
		...lightTheme.colors,
		csatPlateBackground: lightTheme.colors.colorBackgroundAccentTintThemed,
		csatRatingIconStar: {
			normal: 'rgba(0, 16, 61, 0.06)',
			active: '#FFC700',
			hover: '#FFC700',
		},
	},
};

export const csatHomeTouchDarkTheme: ThemeCsatHomeTouchDarkDescription = {
	...darkTheme,
	themeNameBase: 'csatHomeTouch',
	themeName: 'csatHomeTouchDark',
	colors: {
		...darkTheme.colors,
		csatPlateBackground: darkTheme.colors.colorBackgroundModal,
		csatRatingIconStar: {
			normal: 'rgba(255, 255, 255, 0.08)',
			active: '#FFC700',
			hover: '#FFC700',
		},
	},
};
