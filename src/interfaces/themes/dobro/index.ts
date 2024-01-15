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
	dobroZIndexMailMenu: number;
	dobroZIndexPopover: number;
	dobroZIndexPopup: number;
	dobroZIndexMenu: number;
}

export interface ThemeDobroFonts {
	dobroFontFamilyDisplay: string;
	dobroFontFamilyDisplayMedium: string;
	dobroFontFamilyDisplayRegular: string;
}

export interface ThemeDobroMedia {
	dobroWidthToTouchS: string;
	dobroWidthTouchM: string;
	dobroWidthToTouchM: string;
	dobroWidthTouchL: string;
	dobroWidthToTouch: string;
	dobroWidthFromTablet: string;
	dobroWidthTablet: string;
	dobroWidthToTablet: string;
	dobroWidthFromDesktopS: string;
	dobroWidthDesktopS: string;
	dobroWidthToDesktopS: string;
	dobroWidthFromDesktopM: string;
}

export type BaseFonts = Omit<
	{
		[key in keyof Fonts]: Adaptive<Fonts[key]>;
	},
	'fontHeadline'
> &
	TypographyBaseProps;
