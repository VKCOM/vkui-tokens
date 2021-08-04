import {ThemeCssVars} from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import {Adaptive} from '@/interfaces/general/tools';
import {Font} from '@/interfaces/general/typography';
import {LocalParadigmColorsDescriptionStruct} from '@/interfaces/namespaces/paradigm';
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

export interface LocalCalendarColorDescriptionStruct {
	colorBgThumbnail: ColorDescription;
}

export type CalendarLocalColors = {
	[key in keyof LocalCalendarColorDescriptionStruct]: ColorWithStates;
};

export interface ThemeCalendar
	extends ThemeParadigmBase,
		ThemeCalendarOverValues,
		CalendarLocalColors {}

export interface ThemeCalendarDescription
	extends ThemeParadigmBaseDescription,
		ThemeCalendarOverValues {
	colors: LocalCalendarColorDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}

export interface ThemeCalendarCssVars
	extends ThemeCssVars<ThemeCalendar, 'breakpoints'> {}
