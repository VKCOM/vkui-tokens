import {ThemeCssVars} from '@/interfaces/general';
import {Adaptive} from '@/interfaces/general/tools';
import {Font} from '@/interfaces/general/typography';
import {
	ThemeOctavius,
	ThemeOctaviusDescription,
} from '@/interfaces/themes/octavius';

export interface ThemeCalendarOverValues {
	fontEventM: Adaptive<Font>;
	fontEventS: Adaptive<Font>;
	fontEventXS: Adaptive<Font>;
	fontTime: Adaptive<Font>;
	fontBodyIOS: Adaptive<Font>;
	fontBodyAndroid: Adaptive<Font>;
}

export interface ThemeCalendar extends ThemeOctavius, ThemeCalendarOverValues {}
export interface ThemeCalendarDescription
	extends ThemeOctaviusDescription,
		ThemeCalendarOverValues {}

export interface ThemeCalendarCssVars
	extends ThemeCssVars<ThemeCalendar, 'breakpoints'> {}
