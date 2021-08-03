import {ThemeCssVars} from '@/interfaces/general';
import {Adaptive} from '@/interfaces/general/tools';
import {Font} from '@/interfaces/general/typography';
import {
	ThemeParadigmBase,
	ThemeParadigmBaseDescription,
} from '@/interfaces/themes/paradigmBase';

export interface ThemeCalendarOverValues {
	fontEventM: Adaptive<Font>;
	fontEventS: Adaptive<Font>;
	fontEventXS: Adaptive<Font>;
	fontTime: Adaptive<Font>;
	fontBodyIOS: Adaptive<Font>;
	fontBodyAndroid: Adaptive<Font>;
}

export interface ThemeCalendar extends ThemeParadigmBase, ThemeCalendarOverValues {}
export interface ThemeCalendarDescription
	extends ThemeParadigmBaseDescription,
		ThemeCalendarOverValues {}

export interface ThemeCalendarCssVars
	extends ThemeCssVars<ThemeCalendar, 'breakpoints'> {}
