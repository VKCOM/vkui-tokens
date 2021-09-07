import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export interface HomeUniqTokens {}

type HomeViewports = ['desktopS'];

export interface ThemeHome
	extends ParadigmTheme<HomeViewports>,
		HomeUniqTokens {}

export interface ThemeHomeDescription
	extends ParadigmThemeDescription<HomeViewports>,
		HomeUniqTokens {}

// Интерфейс ниже не используем в коде, но нужен для сборки
export interface ThemeHomeCssVars
	extends ParadigmThemeCssVars<HomeViewports, ThemeHome> {}
