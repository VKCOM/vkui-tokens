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
	// calendarColorBackgroundPositiveTintAlpha4: ColorDescription;
	calendarColorBackgroundAccentTintThemed: ColorDescription;
	calendarColorButtonGroupBackgroundPositiveTint: ColorDescription;
	calendarColorButtonGroupBackgroundNegativeTint: ColorDescription;
	calendarColorButtonGroupBackgroundAccentTint: ColorDescription;
	calendarColorButtonGroupTextPositive: ColorDescription;
	calendarColorButtonGroupTextNegative: ColorDescription;

	// calendarColorBackgroundMainSkyTintAlpha20: ColorDescription;

	// #region Event
	// Цвета событий
	calendarColorEventRed: ColorDescription;
	calendarColorEventSalmon: ColorDescription;
	calendarColorEventOrange: ColorDescription;
	calendarColorEventYellow: ColorDescription;
	calendarColorEventLemon: ColorDescription;
	calendarColorEventLime: ColorDescription;
	calendarColorEventGrass: ColorDescription;
	calendarColorEventMint: ColorDescription;
	calendarColorEventSea: ColorDescription;
	calendarColorEventTurquoise: ColorDescription;
	calendarColorEventLightSky: ColorDescription;
	calendarColorEventMainSky: ColorDescription;
	calendarColorEventSky: ColorDescription;
	calendarColorEventMidnightSky: ColorDescription;
	calendarColorEventViolet: ColorDescription;
	calendarColorEventPurple: ColorDescription;
	calendarColorEventMagenta: ColorDescription;
	calendarColorEventPink: ColorDescription;
	// #endregion Event

	// #region Text-Event
	calendarColorEventTextRed: ColorDescription;
	calendarColorEventTextOrange: ColorDescription;
	calendarColorEventTextYellow: ColorDescription;
	calendarColorEventTextLemon: ColorDescription;
	calendarColorEventTextLime: ColorDescription;
	calendarColorEventTextGrass: ColorDescription;
	calendarColorEventTextMint: ColorDescription;
	calendarColorEventTextSea: ColorDescription;
	calendarColorEventTextTurquoise: ColorDescription;
	calendarColorEventTextLightSky: ColorDescription;
	calendarColorEventTextMainSky: ColorDescription;
	calendarColorEventTextSky: ColorDescription;
	calendarColorEventTextMidnightSky: ColorDescription;
	calendarColorEventTextViolet: ColorDescription;
	calendarColorEventTextPurple: ColorDescription;
	calendarColorEventTextMagenta: ColorDescription;
	calendarColorEventTextPink: ColorDescription;
	// #endregion Text-Event

	// #region Background-TintAlpha20-Alpha
	calendarColorBackgroundRedTintAlpha20: ColorDescription;
	calendarColorBackgroundSalmonTintAlpha20: ColorDescription;
	calendarColorBackgroundOrangeTintAlpha20: ColorDescription;
	calendarColorBackgroundYellowTintAlpha20: ColorDescription;
	calendarColorBackgroundLemonTintAlpha20: ColorDescription;
	calendarColorBackgroundLimeTintAlpha20: ColorDescription;
	calendarColorBackgroundGrassTintAlpha20: ColorDescription;
	calendarColorBackgroundMintTintAlpha20: ColorDescription;
	calendarColorBackgroundSeaTintAlpha20: ColorDescription;
	calendarColorBackgroundTurquoiseTintAlpha20: ColorDescription;
	calendarColorBackgroundLightSkyTintAlpha20: ColorDescription;
	calendarColorBackgroundMainSkyTintAlpha20: ColorDescription;
	calendarColorBackgroundSkyTintAlpha20: ColorDescription;
	calendarColorBackgroundMidnightSkyTintAlpha20: ColorDescription;
	calendarColorBackgroundVioletTintAlpha20: ColorDescription;
	calendarColorBackgroundPurpleTintAlpha20: ColorDescription;
	calendarColorBackgroundMagentaTintAlpha20: ColorDescription;
	calendarColorBackgroundPinkTintAlpha20: ColorDescription;
	calendarColorBackgroundPositiveTintAlpha4: ColorDescription;
	// #endregion Background-TintAlpha20

	// #region Background-Tint
	// Тинтовые цвета событий без прозрачности. Нужны для растягивания событий, т.к. если под растягиваемым событие есть событие того же цвета, они сливаются
	calendarColorBackgroundRedTint: ColorDescription;
	calendarColorBackgroundSalmonTint: ColorDescription;
	calendarColorBackgroundOrangeTint: ColorDescription;
	calendarColorBackgroundYellowTint: ColorDescription;
	calendarColorBackgroundLemonTint: ColorDescription;
	calendarColorBackgroundLimeTint: ColorDescription;
	calendarColorBackgroundGrassTint: ColorDescription;
	calendarColorBackgroundMintTint: ColorDescription;
	calendarColorBackgroundSeaTint: ColorDescription;
	calendarColorBackgroundTurquoiseTint: ColorDescription;
	calendarColorBackgroundLightSkyTint: ColorDescription;
	calendarColorBackgroundMainSkyTint: ColorDescription;
	calendarColorBackgroundSkyTint: ColorDescription;
	calendarColorBackgroundMidnightSkyTint: ColorDescription;
	calendarColorBackgroundVioletTint: ColorDescription;
	calendarColorBackgroundPurpleTint: ColorDescription;
	calendarColorBackgroundMagentaTint: ColorDescription;
	calendarColorBackgroundPinkTint: ColorDescription;
	// #endregion Background-Tint

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
	// цвет бордера
	calendarColorComposeButtonBorderAlpha: ColorDescription;
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
	// цвет заливки иконок
	calendarColorIconPrimary: ColorDescription;
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
