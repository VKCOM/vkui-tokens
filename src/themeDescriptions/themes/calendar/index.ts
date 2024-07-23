import type { Property } from 'csstype';

import { ThemeCalendarDescription } from '@/interfaces/themes/calendar';
import { ThemeCalendarDarkDescription } from '@/interfaces/themes/calendarDark';
import { fontWeight } from '@/themeDescriptions/common/fontSizes';

import { darkTheme, darkThemeElevation, lightTheme } from '../../base/paradigm';
import { fontSizes, helpers } from '../../common';

const { x2, x4, x5 } = helpers;

export const fontFamily: Property.FontFamily = 'MailSans, Helvetica, Arial, sans-serif';

const fontSize2 = {
	...fontSizes.fontSize2,
	fontFamily,
};

const fontSize3 = {
	...fontSizes.fontSize3,
	fontFamily,
};

const fontSize4 = {
	...fontSizes.fontSize4,
	fontFamily,
};

const fontSize5 = {
	...fontSizes.fontSize5,
	fontFamily,
};

const fontSize6 = {
	...fontSizes.fontSize6,
	fontFamily,
};

const fontFootnote = {
	...fontSize2,
	lineHeight: '18px',
};

const fontCaption1 = {
	fontSize: 12,
	lineHeight: '16px',
	fontWeight,
	fontFamily,
};

const fontCaption2 = {
	fontSize: 11,
	lineHeight: '14px',
	fontWeight,
	fontFamily,
};

const fontCaption3 = {
	fontSize: 9,
	lineHeight: '12px',
	fontWeight,
	fontFamily,
};

export const calendarTheme: ThemeCalendarDescription = {
	...lightTheme,

	themeName: 'calendar',
	themeNameBase: 'calendar',

	colors: {
		...lightTheme.colors,
		colorStrokeAccent: '#0077FF',
		colorIconAccent: {
			normal: '#0077FF',
			hover: '#0073F7',
			active: '#0077FF',
		},
		colorStrokeAccentThemed: '#0077FF',
		colorTextAccent: '#0077FF',
		colorBackgroundAccent: {
			normal: '#0077FF',
			hover: '#0073F7',
			active: '#006FEF',
		},
		colorTextAccentThemed: '#0077FF',
		colorBackgroundAccentTint: '#0077FF',
		colorTextLink: '#0077FF',
		colorBackgroundAccentThemed: {
			normal: '#0077FF',
			hover: '#0073F7',
			active: '#006FEF',
		},
		colorTextLinkThemed: '#0077FF',
		colorIconAccentThemed: '#0077FF',
		colorTextNegative: '#ED330A',
		colorIconNegative: '#ED330A',
		colorBackgroundNegative: {
			normal: '#ED330A',
			hover: '#E4320C',
			active: '#DA300E',
		},
		colorBackgroundNegativeTintThemedAlpha: 'rgba(237, 51, 10, 0.08)',
		colorBackgroundNegativeTintAlpha: 'rgba(237, 51, 10, 0.08)',
		colorBackgroundNegativeTintThemed: '#FAEBEB',
		colorBackgroundNegativeTint: '#FAEBEB',
		colorStrokeNegative: '#ED330A',

		colorTextSecondary: '#93969B',
		colorBackgroundSecondary: '#EBECEF',
		colorIconSecondary: '#B6B8BE',

		// Цвета категорий ML писем
		calendarColorIconOrder: '#ff54aa',
		calendarColorIconFinance: '#24C780',
		calendarColorIconTravel: '#ba34fc',
		calendarColorIconEvent: '#3BBAFE',
		calendarColorIconOthers: '#005FF9',
		calendarColorIconAppointment: '#FE9898',

		// для кнопок, которые голубые в светлой теме и серые в темной
		calendarColorBackgroundAccentTintThemed: {
			normal: '#E3F0FD',
			hover: '#DAE4F3',
			active: '#E3F0FD',
		},
		colorBackgroundAccentTintThemedAlpha: 'rgba(0, 119, 255, 0.06)',
		calendarColorButtonGroupBackgroundPositiveTint: '#CEF5E8',
		calendarColorButtonGroupBackgroundNegativeTint: '#FDE2E2',
		calendarColorButtonGroupBackgroundAccentTint: '#E3F0FD',
		calendarColorButtonGroupTextPositive: '#056142',
		calendarColorButtonGroupTextNegative: '#CE1414',

		calendarColorBackground: lightTheme.colors.colorBackground,
		calendarColorOverlayBackground: 'transparent',

		// #region Event
		// Цвета событий
		calendarColorEventRed: '#F55252',
		calendarColorEventSalmon: '#FE9898',
		calendarColorEventOrange: '#FFB181',
		calendarColorEventYellow: '#FFDF7E',
		calendarColorEventLemon: '#FFEF9D',
		calendarColorEventLime: '#CAF28E',
		calendarColorEventGrass: '#86DE8C',
		calendarColorEventMint: '#96E9CD',
		calendarColorEventSea: '#7BEADB',
		calendarColorEventTurquoise: '#BCFFFF',
		calendarColorEventLightSky: '#80E3F4',
		calendarColorEventMainSky: '#9EDBFF',
		calendarColorEventSky: '#B2D0FF',
		calendarColorEventMidnightSky: '#7B9AFF',
		calendarColorEventViolet: '#B5B3FB',
		calendarColorEventPurple: '#CCA7FF',
		calendarColorEventMagenta: '#F4B8FF',
		calendarColorEventPink: '#FFBFDC',
		// #endregion Event

		// #region Text-Event
		calendarColorEventTextRed: '#5C1F1F',
		calendarColorEventTextOrange: '#5C361F',
		calendarColorEventTextYellow: '#5C4D1F',
		calendarColorEventTextLemon: '#595C1F',
		calendarColorEventTextLime: '#435C1F',
		calendarColorEventTextGrass: '#1F5C23',
		calendarColorEventTextMint: '#1F5C5C',
		calendarColorEventTextSea: '#1F5C53',
		calendarColorEventTextTurquoise: '#1F535C',
		calendarColorEventTextLightSky: '#1F455C',
		calendarColorEventTextMainSky: '#20455B',
		calendarColorEventTextSky: '#202E5B',
		calendarColorEventTextMidnightSky: '#21205B',
		calendarColorEventTextViolet: '#21205B',
		calendarColorEventTextPurple: '#38205B',
		calendarColorEventTextMagenta: '#5B203A',
		calendarColorEventTextPink: '#51205B',
		// #endregion Text-Event

		// #region Background-TintAlpha20-Alpha
		calendarColorBackgroundRedTintAlpha20: 'rgba(245, 82, 82, 0.2)',
		calendarColorBackgroundSalmonTintAlpha20: 'rgba(254, 152, 152, 0.2)',
		calendarColorBackgroundOrangeTintAlpha20: 'rgba(255, 177, 129, 0.2)',
		calendarColorBackgroundYellowTintAlpha20: 'rgba(255, 223, 126, 0.2)',
		calendarColorBackgroundLemonTintAlpha20: 'rgba(251, 255, 162, 0.2)',
		calendarColorBackgroundLimeTintAlpha20: 'rgba(202, 242, 142, 0.2)',
		calendarColorBackgroundGrassTintAlpha20: 'rgba(134, 222, 140, 0.2)',
		calendarColorBackgroundMintTintAlpha20: 'rgba(150, 233, 205, 0.2)',
		calendarColorBackgroundSeaTintAlpha20: 'rgba(123, 234, 219, 0.2)',
		calendarColorBackgroundTurquoiseTintAlpha20: 'rgba(188, 255, 255, 0.2)',
		calendarColorBackgroundLightSkyTintAlpha20: 'rgba(128, 227, 244, 0.2)',
		calendarColorBackgroundMainSkyTintAlpha20: 'rgba(158, 219, 255, 0.2)',
		calendarColorBackgroundSkyTintAlpha20: 'rgba(178, 208, 255, 0.2)',
		calendarColorBackgroundMidnightSkyTintAlpha20: 'rgba(123, 154, 255, 0.2)',
		calendarColorBackgroundVioletTintAlpha20: 'rgba(181, 179, 251, 0.2)',
		calendarColorBackgroundPurpleTintAlpha20: 'rgba(204, 167, 255, 0.2)',
		calendarColorBackgroundMagentaTintAlpha20: 'rgba(244, 184, 255, 0.2)',
		calendarColorBackgroundPinkTintAlpha20: 'rgba(255, 191, 220, 0.2)',
		calendarColorBackgroundPositiveTintAlpha4: 'rgba(56, 183, 152, 0.04)',
		// #endregion Background-TintAlpha20

		// #region Background-Tint
		// Тинтовые цвета событий без прозрачности. Нужны для растягивания событий, т.к. если под растягиваемым событие есть событие того же цвета, они сливаются
		calendarColorBackgroundRedTint: '#FDDCDC',
		calendarColorBackgroundSalmonTint: '#FFEAEA',
		calendarColorBackgroundOrangeTint: '#FFEFE6',
		calendarColorBackgroundYellowTint: '#FFF9E5',
		calendarColorBackgroundLemonTint: '#FEFFEC',
		calendarColorBackgroundLimeTint: '#F4FCE8',
		calendarColorBackgroundGrassTint: '#E7F8E8',
		calendarColorBackgroundMintTint: '#EAFBF5',
		calendarColorBackgroundSeaTint: '#E5FBF8',
		calendarColorBackgroundTurquoiseTint: '#F2FFFF',
		calendarColorBackgroundLightSkyTint: '#E6F9FD',
		calendarColorBackgroundMainSkyTint: '#ECF8FF',
		calendarColorBackgroundSkyTint: '#F0F6FF',
		calendarColorBackgroundMidnightSkyTint: '#E5EBFF',
		calendarColorBackgroundVioletTint: '#F0F0FE',
		calendarColorBackgroundPurpleTint: '#F5EDFF',
		calendarColorBackgroundMagentaTint: '#FDF1FF',
		calendarColorBackgroundPinkTint: '#FFF2F8',
		// #endregion Background-Tint

		//#region Токены сайдбара
		// цвет иконок в сайдбаре
		calendarColorSidebarItemIconPrimary: '#2C2D2E',
		// цвет текста в сайдбаре
		calendarColorSidebarItemTextPrimary: '#2C2D2E',
		// цвет второстепенных иконок в сайдбаре
		calendarColorSidebarItemIconSecondary: '#87898F',
		// цвет второстепенного текста в сайдбаре
		calendarColorSidebarItemTextSecondary: '#87898F',
		// цвет фона у кнопки в сайдбаре
		calendarColorSidebarComposeButtonBackground: '#FFFFFF',
		// цвет иконки у кнопки в сайдбаре
		calendarColorSidebarComposeButtonIcon: '#333333',
		// цвет текста у кнопки в сайдбаре
		calendarColorSidebarComposeButtonText: '#333333',
		// цвет скроллбара
		calendarColorSidebarScrollbar: '#C7C7C7',
		// цвет бордера
		calendarColorComposeButtonBorderAlpha: 'rgba(0, 16, 61, 0.12)',
		// #endregion Токены сайдбара

		// #region Header
		// Фон шапки страницы
		calendarColorHeaderBackground: '#FFFFFF',
		// Цвет фона активного табика
		calendarColorHeaderSecondaryAlpha: 'rgba(0, 119, 255, 0.1)',
		// Цвет текста или элементов на активном табе
		calendarColorHeaderonSecondary: '#0077FF',
		// Цвет иконки в поиске
		calendarColorHeaderonWidgetAlpha: 'rgba(0, 95, 249, 1)',
		// Цвет фона у поиска и других виджетов
		calendarColorHeaderWidgetBackgroundAlpha: 'rgba(255, 255, 255, 1)',
		// Цвет иконок в хедере
		calendarColorHeaderIcon: '#2C2D2E',
		// Второстепенный текст в хедере
		calendarColorHeaderTextSecondary: '#93969B',
		// Текст в кнопках в хедере в т.ч. кнопка Найти в поиске
		calendarColorHeaderButtonText: '#2C2D2E',
		// Цвет загрузки
		calendarColorHeaderProgress: '#FF9E00',

		// Цвет иконки поиска
		calendarColorHeaderSearchIcon: '#B6B8BE',
		// Цвет текста в поиске
		calendarColorHeaderSearchTextCollapsed: '#2C2D2E',
		// Фон поиска и кнопки Найти
		calendarColorHeaderSearchBackground: '#F0F1F3',
		// Фон поиска
		calendarColorHeaderSearchBackgroundCollapsed: '#F0F1F3',
		// Цвет текста в поиске
		calendarColorHeaderSearchText: '#2C2D2E',
		// #endregion Header

		// #region Grid
		// основной цвет текста в датах
		calendarColorTextDatePrimary: '#2C2D2E',
		// второстепенный цвет текста в датах
		calendarColorTextDateSecondary: '#93969B',
		// акцентный цвет текста в датах
		calendarColorTextDateAccent: '#0077FF',
		// цвет текста в таймлайне
		calendarColorTextTimeline: '#2C2D2E',
		// обводка сетки с событиями
		calendarColorStrokeFieldBorder: '#E0E2E8',
		// цвет заливки иконок
		calendarColorIconPrimary: '#2C2D2E',
		// #endregion Grid
	},

	// тень хедера
	calendarElevationHeader: '0 0 16px 0 rgba(2, 13, 41, 0.12)',

	// тень у формы
	calendarElevationEventForm: '0px 4px 64px 0px rgba(0, 16, 61, 0.2)',

	// фоновая картинка
	calendarImageBackground: 'none',

	calendarSizeBorderRadiusSmall: 4,
	calendarSizeBorderRadiusMedium: 6,
	calendarSizeBorderRadiusLarge: 8,

	calendarImageOverlayBackground: 'none',

	fontFamilyBase: fontFamily,
	fontFamilyAccent: fontFamily,

	fontTitle1: {
		regular: {
			...fontSize6,
			lineHeight: '28px',
			fontWeight: 500,
		},
		compact: {
			...fontSize6,
			lineHeight: '28px',
			fontWeight: 500,
		},
	},
	fontTitle2: {
		regular: {
			...fontSize5,
			lineHeight: '24px',
			fontWeight: 500,
		},
		compact: {
			...fontSize5,
			lineHeight: '24px',
			fontWeight: 500,
		},
	},
	fontTitle3: {
		regular: {
			...fontSize4,
			fontWeight: 500,
		},
		compact: {
			...fontSize4,
			fontWeight: 500,
		},
	},
	fontHeadline1: {
		regular: {
			fontSize: 16,
			lineHeight: '20px',
			fontWeight: 500,
			fontFamily,
		},
		compact: {
			...fontSize3,
			fontWeight: 500,
		},
	},
	fontText: {
		regular: {
			fontSize: 16,
			lineHeight: '20px',
			fontWeight,
			fontFamily,
		},
		compact: fontSize3,
	},
	fontParagraph: {
		regular: fontSize3,
		compact: fontSize3,
	},
	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: '18px',
			fontWeight,
			fontFamily,
		},
		compact: {
			...fontSize2,
			lineHeight: '18px',
			fontWeight: 500,
		},
	},
	fontFootnote: {
		regular: fontFootnote,
		compact: fontFootnote,
	},
	fontFootnoteCaps: {
		regular: {
			...fontFootnote,
			letterSpacing: '0.3px',
			textTransform: 'uppercase',
		},
		compact: {
			...fontFootnote,
			letterSpacing: '0.3px',
			textTransform: 'uppercase',
		},
	},
	fontCaption1: {
		regular: {
			...fontCaption1,
			lineHeight: '14px',
		},
		compact: {
			...fontCaption1,
			lineHeight: '14px',
		},
	},
	fontCaption1Caps: {
		regular: {
			...fontCaption1,
			lineHeight: '14px',
			letterSpacing: '0.26px',
			fontWeight: 500,
			textTransform: 'uppercase',
		},
		compact: {
			...fontCaption1,
			lineHeight: '14px',
			letterSpacing: '0.26px',
			fontWeight: 500,
			textTransform: 'uppercase',
		},
	},
	fontCaption2: {
		regular: fontCaption2,
		compact: fontCaption2,
	},
	fontCaption2Caps: {
		regular: {
			...fontCaption2,
			letterSpacing: '0.22px',
			textTransform: 'uppercase',
		},
		compact: {
			...fontCaption2,
			letterSpacing: '0.22px',
			textTransform: 'uppercase',
		},
	},
	fontCaption3: {
		regular: fontCaption3,
		compact: fontCaption3,
	},
	fontCaption3Caps: {
		regular: {
			...fontCaption3,
			letterSpacing: '0.16px',
			textTransform: 'uppercase',
		},
		compact: {
			...fontCaption3,
			letterSpacing: '0.16px',
			textTransform: 'uppercase',
		},
	},

	calendarFontTextEvent: {
		regular: fontSize4,
		compact: {
			...fontSize2,
			lineHeight: '18px',
			fontWeight: 500,
		},
	},
	calendarFontTextEventSmall: {
		regular: fontSize3,
		compact: {
			fontSize: 12,
			lineHeight: '12px',
			fontWeight: 400,
			fontFamily,
		},
	},

	sizeButtonPaddingHorizontal: {
		compact: x4,
		regular: x5,
	},
	sizeBasePadding: {
		regular: x5,
	},

	sizeAvatarXL: {
		compact: 120,
		regular: 160,
	},

	sizeFieldHorizontalPadding: {
		regular: x2,
	},

	sizeBorderRadius: {
		compact: 8,
		regular: 8,
	},
};

export const calendarDarkTheme: ThemeCalendarDarkDescription = {
	...calendarTheme,
	themeName: 'calendarDark',
	colorsScheme: 'dark',
	colors: {
		...calendarTheme.colors,
		...darkTheme.colors,
		colorTextAccent: '#1A85FF',
		colorTextLink: '#1A85FF',
		colorTextNegative: '#FF5C5C',
		colorIconNegative: '#FF5C5C',
		colorBackgroundNegative: '#FF5C5C',
		colorBackgroundNegativeTint: '#522E2E',
		colorStrokeNegative: '#FF5C5C',
		colorTextPrimary: '#E7E8EA',
		colorTextSecondary: '#8C8E94',
		colorIconPrimary: '#B4B4B4',
		colorIconSecondary: '#5F5F5F',

		// Цвета категорий ML писем
		calendarColorIconOrder: '#D03784',
		calendarColorIconFinance: '#24C780',
		calendarColorIconTravel: '#A447D3',
		calendarColorIconEvent: '#2DA9EB',
		calendarColorIconOthers: '#3C82FD',
		calendarColorIconAppointment: '#F8BA04',

		calendarColorBackgroundAccentTintThemed: {
			normal: '#3E3E3F',
			hover: '#2C2C2D',
			active: '#3E3E3F',
		},
		colorBackgroundAccentTintThemedAlpha: 'rgba(255, 255, 255, 0.08)',
		calendarColorButtonGroupBackgroundPositiveTint: '#056142',
		calendarColorButtonGroupBackgroundNegativeTint: '#BD2222',
		calendarColorButtonGroupBackgroundAccentTint: '#2775FC',
		calendarColorButtonGroupTextPositive: '#CEF5E8',
		calendarColorButtonGroupTextNegative: '#FDE2E2',

		calendarColorBackground: darkTheme.colors.colorBackground,
		calendarColorOverlayBackground: 'transparent',

		// #region Event
		// Цвета событий
		calendarColorEventRed: '#5C1F1F',
		// В темной теме цвет такой же как и calendarColorEventRed
		calendarColorEventSalmon: '#5C1F1F',
		calendarColorEventOrange: '#5C361F',
		calendarColorEventYellow: '#5C4D1F',
		calendarColorEventLemon: '#595C1F',
		calendarColorEventLime: '#435C1F',
		calendarColorEventGrass: '#1F5C23',
		calendarColorEventMint: '#1F5C5C',
		calendarColorEventSea: '#1F5C53',
		calendarColorEventTurquoise: '#1F535C',
		calendarColorEventLightSky: '#1F455C',
		calendarColorEventMainSky: '#20455B',
		calendarColorEventSky: '#202E5B',
		calendarColorEventMidnightSky: '#21205B',
		calendarColorEventViolet: '#21205B',
		calendarColorEventPurple: '#38205B',
		calendarColorEventMagenta: '#5B203A',
		calendarColorEventPink: '#51205B',
		// #endregion Event

		// #region Text-Event
		calendarColorEventTextRed: '#F77272',
		calendarColorEventTextOrange: '#FFB181',
		calendarColorEventTextYellow: '#FFDF7E',
		calendarColorEventTextLemon: '#FBFFA2',
		calendarColorEventTextLime: '#CAF28E',
		calendarColorEventTextGrass: '#86DE8C',
		calendarColorEventTextMint: '#96E9CD',
		calendarColorEventTextSea: '#7BEADB',
		calendarColorEventTextTurquoise: '#BCFFFF',
		calendarColorEventTextLightSky: '#80E3F4',
		calendarColorEventTextMainSky: '#9EDBFF',
		calendarColorEventTextSky: '#B2D0FF',
		calendarColorEventTextMidnightSky: '#7B9AFF',
		calendarColorEventTextViolet: '#B5B3FB',
		calendarColorEventTextPurple: '#CCA7FF',
		calendarColorEventTextMagenta: '#F4B8FF',
		calendarColorEventTextPink: '#FFBFDC',
		// #endregion Text-Event

		// #region Background-TintAlpha20-Alpha
		calendarColorBackgroundRedTintAlpha20: 'rgba(92, 31, 31, 0.2)',
		// В темной теме цвет такой же как и calendarColorBackgroundRedTintAlpha20
		calendarColorBackgroundSalmonTintAlpha20: 'rgba(92, 31, 31, 0.2)',
		calendarColorBackgroundOrangeTintAlpha20: 'rgba(92, 54, 31, 0.2)',
		calendarColorBackgroundYellowTintAlpha20: 'rgba(92, 77, 31, 0.2)',
		calendarColorBackgroundLemonTintAlpha20: 'rgba(89, 92, 31, 0.2)',
		calendarColorBackgroundLimeTintAlpha20: 'rgba(67, 92, 31, 0.2)',
		calendarColorBackgroundGrassTintAlpha20: 'rgba(31, 92, 35, 0.2)',
		calendarColorBackgroundMintTintAlpha20: 'rgba(31, 92, 92, 0.2)',
		calendarColorBackgroundSeaTintAlpha20: 'rgba(31, 92, 83, 0.2)',
		calendarColorBackgroundTurquoiseTintAlpha20: 'rgba(31, 83, 92, 0.2)',
		calendarColorBackgroundLightSkyTintAlpha20: 'rgba(31, 69, 92, 0.2)',
		calendarColorBackgroundMainSkyTintAlpha20: 'rgba(32, 69, 91, 0.2)',
		calendarColorBackgroundSkyTintAlpha20: 'rgba(32, 46, 91, 0.2)',
		calendarColorBackgroundMidnightSkyTintAlpha20: 'rgba(33, 32, 91, 0.2)',
		calendarColorBackgroundVioletTintAlpha20: 'rgba(33, 32, 91, 0.2)',
		calendarColorBackgroundPurpleTintAlpha20: 'rgba(56, 32, 91, 0.2)',
		calendarColorBackgroundMagentaTintAlpha20: 'rgba(91, 32, 58, 0.2)',
		calendarColorBackgroundPinkTintAlpha20: 'rgba(81, 32, 91, 0.2)',
		calendarColorBackgroundPositiveTintAlpha4: 'rgba(0, 0, 0, 0.16)',
		// #endregion Background-TintAlpha20

		// #region Background-Tint
		// Тинтовые цвета событий без прозрачности. Нужны для растягивания событий, т.к. если под растягиваемым событие есть событие того же цвета, они сливаются
		calendarColorBackgroundRedTint: '#261A1B',
		// В темной теме цвет такой же как и calendarColorBackgroundSalmonTint
		calendarColorBackgroundSalmonTint: '#261A1B',
		calendarColorBackgroundOrangeTint: '#261F1B',
		calendarColorBackgroundYellowTint: '#26231B',
		calendarColorBackgroundLemonTint: '#26261B',
		calendarColorBackgroundLimeTint: '#21261B',
		calendarColorBackgroundGrassTint: '#1A261C',
		calendarColorBackgroundMintTint: '#1A2627',
		calendarColorBackgroundSeaTint: '#1A2625',
		calendarColorBackgroundTurquoiseTint: '#1A2527',
		calendarColorBackgroundLightSkyTint: '#1A2227',
		calendarColorBackgroundMainSkyTint: '#1A2227',
		calendarColorBackgroundSkyTint: '#1A1D27',
		calendarColorBackgroundMidnightSkyTint: '#1B1A27',
		calendarColorBackgroundVioletTint: '#1B1A27',
		calendarColorBackgroundPurpleTint: '#1F1A27',
		calendarColorBackgroundMagentaTint: '#261A20',
		calendarColorBackgroundPinkTint: '#241A27',
		// #endregion Background-Tint

		//#region Токены сайдбара
		// цвет иконок в сайдбаре
		calendarColorSidebarItemIconPrimary: '#E7E8EA',
		// цвет текста в сайдбаре
		calendarColorSidebarItemTextPrimary: '#E7E8EA',
		// цвет второстепенных иконок в сайдбаре
		calendarColorSidebarItemIconSecondary: '#9C9DA2',
		// цвет второстепенного текста в сайдбаре
		calendarColorSidebarItemTextSecondary: '#8C8E94',
		// цвет фона у кнопки в сайдбаре
		calendarColorSidebarComposeButtonBackground: '#FFFFFF',
		// цвет иконки у кнопки в сайдбаре
		calendarColorSidebarComposeButtonIcon: '#333333',
		// цвет текста у кнопки в сайдбаре
		calendarColorSidebarComposeButtonText: '#333333',
		// цвет скроллбара
		calendarColorSidebarScrollbar: '#6F6F6F',
		// цвет бордера
		calendarColorComposeButtonBorderAlpha: 'rgba(0, 16, 61, 0.12)',
		// #endregion Токены сайдбара

		// #region Header
		// Фон шапки страницы
		calendarColorHeaderBackground: '#232324',
		// Цвет фона активного табика
		calendarColorHeaderSecondaryAlpha: 'rgba(255, 255, 255, 0.08)',
		// Цвет текста или элементов на активном табе
		calendarColorHeaderonSecondary: '#FFFFFF',
		// Цвет иконки в поиске
		calendarColorHeaderonWidgetAlpha: 'rgba(255, 255, 255, 0.3)',
		// Цвет фона у поиска и других виджетов
		calendarColorHeaderWidgetBackgroundAlpha: 'rgba(255, 255, 255, 0.08)',
		// Цвет иконок в хедере
		calendarColorHeaderIcon: '#FFFFFF',
		// Второстепенный текст в хедере
		calendarColorHeaderTextSecondary: '#8C8E94',
		// Текст в кнопках в хедере в т.ч. кнопка Найти в поиске
		calendarColorHeaderButtonText: '#FFFFFF',
		// Цвет загрузки
		calendarColorHeaderProgress: '#FF9E00',

		// Цвет иконки поиска
		calendarColorHeaderSearchIcon: '#E7E8EA',
		// Цвет текста в поиске
		calendarColorHeaderSearchTextCollapsed: '#E7E8EA',
		// Фон поиска и кнопки Найти
		calendarColorHeaderSearchBackground: '#303030',
		// Фон поиска
		calendarColorHeaderSearchBackgroundCollapsed: '#303030',
		// Цвет текста в поиске
		calendarColorHeaderSearchText: '#E7E8EA',
		// #endregion Header

		// #region Grid
		// основной цвет текста в датах
		calendarColorTextDatePrimary: '#E7E8EA',
		// второстепенный цвет текста в датах
		calendarColorTextDateSecondary: '#8C8E94',
		// акцентный цвет текста в датах
		calendarColorTextDateAccent: '#1A85FF',
		// цвет текста в таймлайне
		calendarColorTextTimeline: '#E7E8EA',
		// обводка сетки с событиями
		calendarColorStrokeFieldBorder: '#353536',
		// цвет заливки иконок
		calendarColorIconPrimary: '#B4B4B4',
		// #endregion Grid
	},

	...darkThemeElevation,

	// тень у формы
	calendarElevationEventForm: '0px 4px 64px 0px rgba(0, 0, 0, 0.44)',
};
