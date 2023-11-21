import type { Property } from 'csstype';
import type { ThemeDescription } from "@/interfaces/general";
import type { Adaptive } from '@/interfaces/general/tools';
import type { Fonts, TypographyBaseProps } from '@/interfaces/general/typography';

export interface ThemeDescriptionDobro extends ThemeDescription {
  zIndexMailMenu: number;
  zIndexPopover: number;
  zIndexPopup: number;
  zIndexMenu: number;
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
	TypographyBaseProps & {
    fontFamilyDisplay: Property.FontFamily;
    fontFamilyDisplayMedium: Property.FontFamily;
    fontFamilyDisplayRegular: Property.FontFamily;
  };