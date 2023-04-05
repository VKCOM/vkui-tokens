import { Property } from 'csstype';

import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import { Font } from '@/interfaces/general/typography';
import { LocalParadigmColorsDescriptionStruct } from '@/interfaces/namespaces/paradigm';
import { ThemeParadigmBase, ThemeParadigmBaseDescription } from '@/interfaces/themes/paradigmBase';

export interface ThemeCalendarOverValues {
	calendarFontTextEvent: Adaptive<Font>;
	calendarFontTextEventSmall: Adaptive<Font>;
	// тень хедера
	calendarElevationHeader: Property.BoxShadow;
	calendarSizeBorderRadiusSmall: number;
	calendarSizeBorderRadiusMedium: number;
	calendarSizeBorderRadiusLarge: number;
	// маска на фоновые картинки тем
	calendarImageOverlayBackground: string;
	// тень у формы
	calendarElevationEventForm: string;
	// фоновая картинка
	calendarImageBackground: string;
}

export interface LocalCalendarColorDescriptionStruct {
	calendarColorBackgroundPositiveTintAlpha4: ColorDescription;
	calendarColorBackgroundAccentTintThemed: ColorDescription;
	calendarColorButtonGroupBackgroundPositiveTint: ColorDescription;
	calendarColorButtonGroupBackgroundNegativeTint: ColorDescription;
	calendarColorButtonGroupBackgroundAccentTint: ColorDescription;
	calendarColorButtonGroupTextPositive: ColorDescription;
	calendarColorButtonGroupTextNegative: ColorDescription;
	calendarColorEventTextMainSky: ColorDescription;
	calendarColorBackgroundMainSkyTint: ColorDescription;
	calendarColorBackgroundMainSkyTintAlpha20: ColorDescription;

	// Фон страницы (отличается от colorBackground)
	calendarColorBackground: ColorDescription;
	calendarColorOverlayBackground: ColorDescription;

	//#region Токены сайдбара
	// цвет иконок в сайдбаре
	calendarColorSidebarItemIconPrimary: ColorDescription;
	// цвет текста в сайдбаре
	calendarColorSidebarItemTextPrimary: ColorDescription;
	// цвет второстепенных иконок в сайдбаре
	calendarColorSidebarItemIconSecondary: ColorDescription;
	// цвет второстепенного текста в сайдбаре
	calendarColorSidebarItemTextSecondary: ColorDescription;
	// цвет фона у кнопки в сайдбаре
	calendarColorSidebarComposeButtonBackground: ColorDescription;
	// цвет иконки у кнопки в сайдбаре
	calendarColorSidebarComposeButtonIcon: ColorDescription;
	// цвет текста у кнопки в сайдбаре
	calendarColorSidebarComposeButtonText: ColorDescription;
	// цвет скроллбара
	calendarColorSidebarScrollbar: ColorDescription;
	// #endregion Токены сайдбара

	// #region Header
	// Фон шапки страницы
	calendarColorHeaderBackground: ColorDescription;
	// Цвет фона активного табика
	calendarColorHeaderSecondaryAlpha: ColorDescription;
	// Цвет текста или элементов на активном табе
	calendarColorHeaderonSecondary: ColorDescription;
	// Цвет иконки в поиске
	calendarColorHeaderonWidgetAlpha: ColorDescription;
	// Цвет фона у поиска и других виджетов
	calendarColorHeaderWidgetBackgroundAlpha: ColorDescription;
	// Цвет иконок в хедере
	calendarColorHeaderIcon: ColorDescription;
	// Второстепенный текст в хедере
	calendarColorHeaderTextSecondary: ColorDescription;
	// Текст в кнопках в хедере в т.ч. кнопка Найти в поиске
	calendarColorHeaderButtonText: ColorDescription;
	// Цвет загрузки
	calendarColorHeaderProgress: ColorDescription;

	// Цвет иконки поиска
	calendarColorHeaderSearchIcon: ColorDescription;
	// Цвет текста в поиске
	calendarColorHeaderSearchTextCollapsed: ColorDescription;
	// Фон поиска и кнопки Найти
	calendarColorHeaderSearchBackground: ColorDescription;
	// Фон поиска
	calendarColorHeaderSearchBackgroundCollapsed: ColorDescription;
	// Цвет текста в поиске
	calendarColorHeaderSearchText: ColorDescription;
	// #endregion Header

	// #region Grid
	// основной цвет текста в датах
	calendarColorTextDatePrimary: ColorDescription;
	// второстепенный цвет текста в датах
	calendarColorTextDateSecondary: ColorDescription;
	// акцентный цвет текста в датах
	calendarColorTextDateAccent: ColorDescription;
	// цвет текста в таймлайне
	calendarColorTextTimeline: ColorDescription;
	// обводка сетки с событиями
	calendarColorStrokeFieldBorder: ColorDescription;
	// #endregion Grid
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

export interface ThemeCalendarCssVars extends ThemeCssVars<ThemeCalendar, 'breakpoints'> {}
