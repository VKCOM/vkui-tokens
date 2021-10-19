import {Property} from 'csstype';

import {ThemeCssVars} from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import {Adaptive} from '@/interfaces/general/tools';
import {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export interface ThemeOctaviusOverValues {
	octaviusElevationCard: Property.BoxShadow;
	octaviusElevationHeader: Property.BoxShadow;
	octaviusTextShadowEmptyStateText: Property.TextShadow;

	octaviusPositionBackground: string;
	octaviusImageOverlayBackground: string;

	octaviusTextShadowSidebarItemText: Property.TextShadow;
	octaviusFilterSidebarItemIcon: string;
	/**
	 * Нужен для градиента у кнопки раскрытия аттачей в письме
	 */
	octaviusColorLetterAttachListBackground: string;

	octaviusShadowSidebarItemText: Property.BoxShadow;
	octaviusShadowSidebarItemIcon: Property.BoxShadow;
	/**
	 * Тень текста подписи под картинкой пустого состояния папки на некоторых
	 * темах с фоном-картинкой
	 */
	octaviusShadowEmptyStateText: Property.BoxShadow;
	/**
	 * Нужен для тем у которых есть неадаптивный фон
	 */
	octaviusImageBackground: string;

	// Кастомные шрифты
	octaviusFontFamilyDefault: string;
	octaviusFontFamilyMailSans: string;
	octaviusFontFamilyGlobal: string;
	octaviusFontFamilyMac: string;
	octaviusFontFamilyDisplay: string;
}

export interface ThemeOctaviusLocalSizes {
	octaviusSizeHeadlineHeight: number;
	octaviusSizeLayoutWidthMin: number;
	octaviusSizeLayoutWidthMax: number;
	octaviusSizeSidebarPaddingTop: number;
	octaviusSizeSidebarWidgetsHeightMin: number;
	octaviusSizeSidebarWidgetsHeightCompactMin: number;
}

type ThemeOctaviusAdaptiveTokens = {
	[key in keyof ThemeOctaviusLocalSizes]: Adaptive<
		ThemeOctaviusLocalSizes[key]
	>;
};

export interface LocalOctaviusColorsDescriptionStruct {
	colorBackgroundThumbnail: ColorDescription;
	colorBackgroundThumbnailAlpha: ColorDescription;
	colorIconAccent: ColorDescription;
	colorBgContrast: ColorDescription;
	colorSocialVk: ColorDescription;
	colorSocialOk: ColorDescription;
	colorSocialMir: ColorDescription;
	colorSocialFb: ColorDescription;
	colorSocialTwitter: ColorDescription;
	colorSocialDribbble: ColorDescription;
	colorSocialBehance: ColorDescription;
	colorPaletteRed1: ColorDescription;
	colorPaletteRed2: ColorDescription;
	colorPaletteRed3: ColorDescription;
	colorPaletteOrange1: ColorDescription;
	colorPaletteOrange2Alpha: ColorDescription;
	colorPaletteYellow1: ColorDescription;
	colorPaletteGreen1: ColorDescription;
	colorPaletteGreen2: ColorDescription;
	colorPaletteGreen3: ColorDescription;
	colorPaletteGreen4: ColorDescription;
	colorPaletteGreen5Alpha: ColorDescription;
	colorPaletteGreen6Alpha: ColorDescription;
	colorPaletteBlue1: ColorDescription;
	colorPaletteBlue2: ColorDescription;
	colorPaletteBlue3: ColorDescription;
	colorPaletteBlue4Alpha: ColorDescription;
	colorPaletteViolet1: ColorDescription;
	colorPaletteViolet2: ColorDescription;
	colorAlert: ColorDescription;
	colorBgPlaceholder: ColorDescription;
	colorBgPromo: ColorDescription;

	// Токены кнопки
	octaviusColorButtonText: ColorDescription;
	octaviusColorButtonIcon: ColorDescription;
	octaviusColorButtonBackground: ColorDescription;

	// Фон страницы (отличается от colorBackground)
	octaviusColorBackground: ColorDescription;
	octaviusColorOverlayBackground: ColorDescription;

	// Токены синей шапки
	octaviusColorHeaderBackground: ColorDescription;
	octaviusColorHeaderButtonText: ColorDescription;
	octaviusColorHeaderButtonBackground: ColorDescription;
	octaviusColorHeaderIcon: ColorDescription;
	octaviusColorHeaderTextSecondary: ColorDescription;
	octaviusColorHeaderProgress: ColorDescription;
	octaviusColorHeaderFilterText: ColorDescription;

	// Поиск
	octaviusColorHeaderSearchIcon: ColorDescription;
	octaviusColorHeaderSearchBackground: ColorDescription;
	octaviusColorHeaderSearchBackgroundCollapsed: ColorDescription;
	octaviusColorHeaderSearchText: ColorDescription;
	octaviusColorHeaderSearchTextCollapsed: ColorDescription;
	octaviusColorHeaderSearchChipBackground: ColorDescription;
	octaviusColorHeaderSearchChipBackgroundEditable: ColorDescription;
	octaviusColorHeaderSearchChipBorderEditable: ColorDescription;

	// Токены сайдбара
	octaviusColorSidebarItemBackground: ColorDescription;
	octaviusColorSidebarItemIconActive: ColorDescription;
	octaviusColorSidebarItemIconPrimary: ColorDescription;
	octaviusColorSidebarItemIconSecondary: ColorDescription;
	octaviusColorSidebarItemTextActive: ColorDescription;
	octaviusColorSidebarItemTextPrimary: ColorDescription;
	octaviusColorSidebarItemTextSecondary: ColorDescription;
	octaviusColorSidebarButtonIcon: ColorDescription;
	octaviusColorSidebarButtonText: ColorDescription;
	octaviusColorSidebarButtonBackground: ColorDescription;
	octaviusColorSidebarCounterBackground: ColorDescription;
	octaviusColorSidebarCounterText: ColorDescription;
	octaviusColorSidebarScrollbar: ColorDescription;
	octaviusColorSidebarItemIcon: ColorDescription;
	octaviusColorSidebarItemText: ColorDescription;
	octaviusColorSidebarItemButtonBackground: ColorDescription;

	octaviusColorSidebarShortItemIcon: ColorDescription;
	octaviusColorSidebarShortItemText: ColorDescription;
	octaviusColorSidebarShortItemIconActive: ColorDescription;
	octaviusColorSidebarShortItemTextActive: ColorDescription;
	octaviusColorSidebarShortItemTextSecondary: ColorDescription;
	octaviusColorSidebarShortItemIconSecondary: ColorDescription;

	octaviusColorSidebarComposeButtonBackground: ColorDescription;
	octaviusColorSidebarComposeButtonText: ColorDescription;
	octaviusColorSidebarComposeButtonIcon: ColorDescription;

	// Токены портального меню
	octaviusColorPortalMenuBackground: ColorDescription;

	// Контент страницы
	octaviusColorContentScrollbar: ColorDescription;

	// Токены письма
	octaviusColorLetterListTextUnread: ColorDescription;

	// TODO: убрать когда появится colorBackgroundSecondaryAlpha
	octaviusColorThreadFooterBackground: ColorDescription;

	// Категории письма
	octaviusColorIconUnread: ColorDescription;
	octaviusColorIconFavorite: ColorDescription;
	octaviusColorIconOrder: ColorDescription;
	octaviusColorIconFinance: ColorDescription;
	octaviusColorIconRegistration: ColorDescription;
	octaviusColorIconTravel: ColorDescription;
	octaviusColorIconEvent: ColorDescription;
	octaviusColorIconFees: ColorDescription;

	// Токены списка писем
	octaviusColorListLetterBackground: ColorDescription;
	octaviusColorListLetterSeparator: ColorDescription;

	/**
	 * Фон подложки под письмами на списке писем. В некоторых темах этот фон
	 * полупрозрачный.
	 */
	octaviusColorDatasetBackground: ColorDescription;
	octaviusColorListLetterAdvBackground: ColorDescription;
	octaviusColorListTextUnread: ColorDescription;
	octaviusColorListTextPrimary: ColorDescription;
	octaviusColorListIconPrimary: ColorDescription;

	// Другие стили
	/**
	 * Цвет текста подписи под картинкой пустого состояния.
	 * @see octaviusShadowTextBackgroundContrast
	 */
	octaviusColorEmptyStateText: ColorDescription;
	octaviusColorBackgroundAccentToned: ColorDescription;
	octaviusColorLayoutBorder: ColorDescription;
	octaviusColorLayoutLetterBorder: ColorDescription;
	octaviusColorEmptyStateTextLink: ColorDescription;
	octaviusColorLetterPreviewBackgroundPrimary: ColorDescription;
	octaviusColorLetterPreviewBackgroundSecondary: ColorDescription;
	octaviusTextDecorationEmptyStateTextLink: ColorDescription;
	octaviusColorNotificationBorder: ColorDescription;
}

export type OctaviusLocalColors = {
	[key in keyof LocalOctaviusColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeOctaviusDescription
	extends ParadigmThemeDescription,
		ThemeOctaviusOverValues,
		ThemeOctaviusAdaptiveTokens {
	colors: LocalOctaviusColorsDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}
export interface ThemeOctavius
	extends ParadigmTheme,
		ThemeOctaviusOverValues,
		OctaviusLocalColors,
		ThemeOctaviusAdaptiveTokens {}

export interface ThemeOctaviusCssVars
	extends ThemeCssVars<ThemeOctavius, 'breakpoints'> {}
