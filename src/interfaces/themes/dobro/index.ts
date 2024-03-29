import type { Theme, ThemeDescription } from '@/interfaces/general';
import type { Breakpoints } from '@/interfaces/general/tools';
import type { CustomMediaByViewport } from '@/interfaces/general/tools/customMedia';
import type { DefaultViewports, ViewportsTuple } from '@/interfaces/general/tools/viewports';
import type { ParadigmThemeCssVars } from '@/interfaces/namespaces/paradigm';

type DobroViewportsTuple = ['touch', 'tablet', 'desktopS', 'desktopM'];

interface ThemeDobroCustomTokens {
	dobroPortalZIndex: number;
	dobroPopoutZIndex: number;
	dobroModalZIndex: number;
	dobroMenuZIndex: number;
}

interface ThemeDobroFonts {
	dobroFontFamily600: string;
	dobroFontFamily500: string;
	dobroFontFamily400: string;
}

interface ThemeDobroStatic<Vt extends ViewportsTuple = DefaultViewports>
	extends Theme,
		ThemeDobroCustomTokens,
		ThemeDobroFonts,
		Breakpoints<Vt> {}

type ThemeDobroStaticType<Vt extends ViewportsTuple = DefaultViewports> = ThemeDobroStatic<Vt> &
	CustomMediaByViewport<Vt>;

interface ThemeDobroDescriptionStatic<Vt extends ViewportsTuple = DefaultViewports>
	extends ThemeDescription,
		ThemeDobroCustomTokens,
		ThemeDobroFonts,
		Breakpoints<Vt> {}

interface ThemeDobroCssVarsStatic extends ParadigmThemeCssVars<DobroViewportsTuple, ThemeDobro> {}

export type ThemeDobro = ThemeDobroStaticType<DobroViewportsTuple>;
export type ThemeDobroDescription = ThemeDobroDescriptionStatic<DobroViewportsTuple>;
export type ThemeDobroCssVars = ThemeDobroCssVarsStatic;
