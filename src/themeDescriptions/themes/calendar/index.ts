import { Property } from 'csstype';

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
		colorTextSecondary: '#93969B',
		colorBackgroundSecondary: '#EBECEF',
		colorIconSecondary: '#B6B8BE',
		calendarColorBackgroundPositiveTintAlpha4: 'rgba(13, 194, 104, 0.04)',

		// для кнопок, которые голубые в светлой теме и серые в темной
		calendarColorBackgroundAccentTintThemed: {
			normal: '#E3F0FD',
			hover: '#DAE4F3',
			active: '#E3F0FD',
		},
		calendarColorButtonGroupBackgroundPositiveTint: '#CEF5E8',
		calendarColorButtonGroupBackgroundNegativeTint: '#FDE2E2',
		calendarColorButtonGroupBackgroundAccentTint: '#E3F0FD',
		calendarColorButtonGroupTextPositive: '#056142',
		calendarColorButtonGroupTextNegative: '#CE1414',
		calendarColorEventTextMainSky: '#20455B',
		calendarColorBackgroundMainSkyTint: '#ECF8FF',
		calendarColorBackgroundMainSkyTintAlpha20: 'rgba(0, 16, 61, 0.122)',

		calendarColorBackground: lightTheme.colors.colorBackground,
		calendarColorOverlayBackground: 'transparent',

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
		// #endregion Токены сайдбара

		// #region Header
		// Фон шапки страницы
		calendarColorHeaderBackground: '#FFFFFF',
		// Цвет фона активного табика
		calendarColorHeaderSecondaryAlpha: 'rgba(0, 95, 249, 0.1)',
		// Цвет текста или элементов на активном табе
		calendarColorHeaderonSecondary: '#005FF9',
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
		calendarColorTextDateAccent: '#005FF9',
		// цвет текста в таймлайне
		calendarColorTextTimeline: '#2C2D2E',
		// обводка сетки с событиями
		calendarColorStrokeFieldBorder: '#E0E2E8',
		// #endregion Grid
	},

	// тень хедера
	calendarElevationHeader: '0 0 16px 0 rgba(2, 13, 41, 0.12)',

	calendarSizeBorderRadiusSmall: 4,
	calendarSizeBorderRadiusMedium: 6,
	calendarSizeBorderRadiusLarge: 8,

	fontFamilyBase: fontFamily,
	fontFamilyAccent: fontFamily,

	fontTitle1: {
		regular: {
			...fontSize6,
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
		regular: fontCaption1,
		compact: {
			...fontCaption1,
			lineHeight: '14px',
		},
	},
	fontCaption1Caps: {
		regular: {
			...fontCaption1,
			letterSpacing: '0.26px',
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
		colorTextPrimary: '#E7E8EA',
		colorTextSecondary: '#8C8E94',
		colorIconPrimary: '#B4B4B4',
		colorIconSecondary: '#5F5F5F',
		calendarColorBackgroundPositiveTintAlpha4: 'rgba(0, 0, 0, 0.16)',

		calendarColorBackgroundAccentTintThemed: {
			normal: '#3E3E3F',
			hover: '#2C2C2D',
			active: '#3E3E3F',
		},
		calendarColorButtonGroupBackgroundPositiveTint: '#056142',
		calendarColorButtonGroupBackgroundNegativeTint: '#BD2222',
		calendarColorButtonGroupBackgroundAccentTint: '#2775FC',
		calendarColorButtonGroupTextPositive: '#CEF5E8',
		calendarColorButtonGroupTextNegative: '#FDE2E2',
		calendarColorEventTextMainSky: '#E7E8EA',
		calendarColorBackgroundMainSkyTint: '#ECF8FF',
		calendarColorBackgroundMainSkyTintAlpha20: 'rgba(0, 16, 61, 0.122)',

		calendarColorBackground: darkTheme.colors.colorBackground,
		calendarColorOverlayBackground: 'transparent',

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
		// #endregion Токены сайдбара

		// #region Header
		// Фон шапки страницы
		calendarColorHeaderBackground: '#232324',
		// Цвет фона активного табика
		calendarColorHeaderSecondaryAlpha: 'rgba(255, 255, 255, 0.08)',
		// Цвет текста или элементов на активном табе
		calendarColorHeaderonSecondary: '#E7E8EA',
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
		calendarColorTextDateAccent: '#3C82FD',
		// цвет текста в таймлайне
		calendarColorTextTimeline: '#E7E8EA',
		// обводка сетки с событиями
		calendarColorStrokeFieldBorder: '#353536',
		// #endregion Grid
	},

	...darkThemeElevation,
};
