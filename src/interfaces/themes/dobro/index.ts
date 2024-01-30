import type { Theme, ThemeCssVars, ThemeDescription } from '@/interfaces/general';
import type { Adaptive } from '@/interfaces/general/tools';
import type { Fonts, TypographyBaseProps } from '@/interfaces/general/typography';

export interface ThemeDobro
	extends Theme,
		ThemeDobroMedia,
		ThemeDobroCustomTokens,
		ThemeDobroFonts {}

export interface ThemeDobroDescription
	extends ThemeDescription,
		ThemeDobroMedia,
		ThemeDobroCustomTokens,
		ThemeDobroFonts {}

export interface ThemeDobroCssVars extends ThemeCssVars<ThemeDobro> {}

interface ThemeDobroCustomTokens {
	dobroPortalZIndex: number;
	dobroPopoutZIndex: number;
	dobroModalZIndex: number;
	dobroMenuZIndex: number;
}

export interface ThemeDobroFonts {
	dobroFontFamily600: string;
	dobroFontFamily500: string;
	dobroFontFamily400: string;
}

export interface ThemeDobroMedia {
	dobroLayoutWidthToMobileS: string;
	dobroLayoutWidthMobileM: string;
	dobroLayoutWidthToMobileM: string;
	dobroLayoutWidthMobileL: string;
	dobroLayoutWidthToMobile: string;
	dobroLayoutWidthFromTablet: string;
	dobroLayoutWidthTablet: string;
	dobroLayoutWidthToTablet: string;
	dobroLayoutWidthFromDesktopS: string;
	dobroLayoutWidthDesktopS: string;
	dobroLayoutWidthToDesktopS: string;
	dobroLayoutWidthDesktopM: string;
}

export type BaseFonts = Omit<
	{
		[key in keyof Fonts]: Adaptive<Fonts[key]>;
	},
	'fontHeadline'
> &
	TypographyBaseProps;
