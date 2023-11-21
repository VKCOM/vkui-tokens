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
	zIndexMailMenu: number;
	zIndexPopover: number;
	zIndexPopup: number;
	zIndexMenu: number;
}

export interface ThemeDobroFonts {
	fontFamilyDisplay: string;
	fontFamilyDisplayMedium: string;
	fontFamilyDisplayRegular: string;
}

export interface ThemeDobroMedia {
	widthToTouchS: string;
	widthTouchM: string;
	widthToTouchM: string;
	widthTouchL: string;
	widthToTouch: string;
	widthFromTablet: string;
	widthTablet: string;
	widthToTablet: string;
	widthFromDesktopS: string;
	widthDesktopS: string;
	widthToDesktopS: string;
	widthFromDesktopM: string;
}

export type BaseFonts = Omit<
	{
		[key in keyof Fonts]: Adaptive<Fonts[key]>;
	},
	'fontHeadline'
> &
	TypographyBaseProps;
