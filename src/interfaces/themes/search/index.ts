import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

type SearchViewports = ['touch', 'desktopS'];

export interface ThemeSearch extends ParadigmTheme<SearchViewports> {}

export interface ThemeSearchDescription
	extends ParadigmThemeDescription<SearchViewports> {}

// Интерфейс ниже не используем в коде, но нужен для сборки
export interface ThemeSearchCssVars
	extends ParadigmThemeCssVars<SearchViewports, ThemeSearch> {}
