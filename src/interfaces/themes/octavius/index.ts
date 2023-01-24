import { Property } from 'csstype';

import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
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
	[key in keyof ThemeOctaviusLocalSizes]: Adaptive<ThemeOctaviusLocalSizes[key]>;
};

export interface LocalOctaviusColorsDescriptionStruct {
	colorBackgroundThumbnail: ColorDescription;
	colorBackgroundThumbnailAlpha: ColorDescription;
	colorIconAccent: ColorDescription;
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
	colorPaletteOrange1Alpha: ColorDescription;
	colorPaletteYellow1: ColorDescription;
	colorPaletteGreen1: ColorDescription;
	colorPaletteGreen2: ColorDescription;
	colorPaletteGreen3: ColorDescription;
	colorPaletteGreen4: ColorDescription;
	colorPaletteGreen1Alpha: ColorDescription;
	colorPaletteGreen2Alpha: ColorDescription;
	colorPaletteBlue1: ColorDescription;
	colorPaletteBlue2: ColorDescription;
	colorPaletteBlue3: ColorDescription;
	colorPaletteBlue1Alpha: ColorDescription;
	colorPaletteViolet1: ColorDescription;
	colorPaletteViolet2: ColorDescription;
	colorAlert: ColorDescription;

	// Токены меток
	colorTagBackgroundMint: ColorDescription;
	colorTagTextMint: ColorDescription;
	colorTagBackgroundSky: ColorDescription;
	colorTagTextSky: ColorDescription;
	colorTagBackgroundOrange: ColorDescription;
	colorTagTextOrange: ColorDescription;
	colorTagBackgroundPink: ColorDescription;
	colorTagTextPink: ColorDescription;
	colorTagBackgroundPurple: ColorDescription;
	colorTagTextPurple: ColorDescription;

	// Токены кнопки
	octaviusColorButtonText: ColorDescription;
	octaviusColorButtonIcon: ColorDescription;
	octaviusColorButtonBackgroundAlpha: ColorDescription;
	octaviusColorButtonEmptyStateText: ColorDescription;
	octaviusColorButtonEmptyStateBackgroundAlpha: ColorDescription;

	// Фон страницы (отличается от colorBackground)
	octaviusColorBackground: ColorDescription;
	octaviusColorOverlayBackground: ColorDescription;

	// Токены синей шапки
	octaviusColorHeaderBackground: ColorDescription;
	octaviusColorHeaderButtonText: ColorDescription;
	octaviusColorHeaderButtonBackgroundAlpha: ColorDescription;
	octaviusColorHeaderIcon: ColorDescription;
	octaviusColorHeaderIconUnread: ColorDescription;
	octaviusColorHeaderIconFavorite: ColorDescription;
	octaviusColorHeaderIconAttach: ColorDescription;
	octaviusColorHeaderTextSecondary: ColorDescription;
	octaviusColorHeaderProgress: ColorDescription;
	octaviusColorHeaderFilterTextAlpha: ColorDescription;

	// Поиск
	octaviusColorHeaderSearchIcon: ColorDescription;
	octaviusColorHeaderSearchBackground: ColorDescription;
	octaviusColorHeaderSearchBackgroundCollapsed: ColorDescription;
	octaviusColorHeaderSearchText: ColorDescription;
	octaviusColorHeaderSearchTextCollapsed: ColorDescription;
	octaviusColorHeaderSearchChipBackground: ColorDescription;
	octaviusColorHeaderSearchChipBackgroundEditable: ColorDescription;
	octaviusColorHeaderSearchChipBorderEditableAlpha: ColorDescription;

	// Токены сайдбара
	octaviusColorSidebarItemBackgroundAlpha: ColorDescription;
	octaviusColorSidebarItemIconActive: ColorDescription;
	octaviusColorSidebarItemIconPrimary: ColorDescription;
	octaviusColorSidebarItemIconSecondary: ColorDescription;
	octaviusColorSidebarItemTextActive: ColorDescription;
	octaviusColorSidebarItemTextPrimary: ColorDescription;
	octaviusColorSidebarItemTextSecondary: ColorDescription;
	octaviusColorSidebarButtonIcon: ColorDescription;
	octaviusColorSidebarButtonText: ColorDescription;
	octaviusColorSidebarButtonBackground: ColorDescription;
	octaviusColorSidebarCounterBackgroundAlpha: ColorDescription;
	octaviusColorSidebarCounterText: ColorDescription;
	octaviusColorSidebarScrollbarAlpha: ColorDescription;
	octaviusColorSidebarItemIcon: ColorDescription;
	octaviusColorSidebarItemText: ColorDescription;
	octaviusColorSidebarItemButtonBackgroundAlpha: ColorDescription;

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
	octaviusColorContentScrollbarAlpha: ColorDescription;

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

	// Подложки в плашках заказов
	octaviusColorIconEventAlpha: ColorDescription;
	octaviusColorIconOrderAlpha: ColorDescription;
	octaviusColorIconTravelAlpha: ColorDescription;

	// Категории письма в sidebar
	octaviusColorSidebarIconUnread: ColorDescription;
	octaviusColorSidebarIconFavorite: ColorDescription;
	octaviusColorSidebarIconOrder: ColorDescription;
	octaviusColorSidebarIconFinance: ColorDescription;
	octaviusColorSidebarIconRegistration: ColorDescription;
	octaviusColorSidebarIconTravel: ColorDescription;
	octaviusColorSidebarIconEvent: ColorDescription;
	octaviusColorSidebarIconFees: ColorDescription;

	// Токены списка писем
	octaviusColorListLetterBackground: ColorDescription;
	octaviusColorListLetterSeparatorAlpha: ColorDescription;
	octaviusColorListBackgroundPositiveAlpha: ColorDescription;
	octaviusColorListBackgroundPositiveTagsOutline: ColorDescription;

	/**
	 * Фон подложки под письмами на списке писем. В некоторых темах этот фон
	 * полупрозрачный.
	 */
	octaviusColorDatasetBackground: ColorDescription;
	octaviusColorListLetterAdvBackground: ColorDescription;
	octaviusColorListTextUnread: ColorDescription;
	octaviusColorListTextPrimary: ColorDescription;
	octaviusColorListIconPrimary: ColorDescription;

	// Метатреды
	octaviusColorIconSocial: ColorDescription;
	octaviusColorIconMailings: ColorDescription;
	octaviusColorIconToMyself: ColorDescription;
	octaviusColorIconNews: ColorDescription;
	octaviusColorIconOfficial: ColorDescription;
	octaviusColorIconSchool: ColorDescription;
	octaviusColorIconGames: ColorDescription;
	octaviusColorIconReceipts: ColorDescription;

	// Другие стили
	/**
	 * Цвет текста подписи под картинкой пустого состояния.
	 * @see octaviusShadowTextBackgroundContrast
	 */
	octaviusColorEmptyStateText: ColorDescription;
	octaviusColorBackgroundAccentTonedAlpha: ColorDescription;
	octaviusColorLayoutBorderAlpha: ColorDescription;
	octaviusColorLayoutLetterBorderAlpha: ColorDescription;
	octaviusColorEmptyStateTextLink: ColorDescription;
	octaviusColorLetterContactBackgroundAlpha: ColorDescription;
	octaviusColorLetterPreviewBackgroundPrimary: ColorDescription;
	octaviusColorLetterPreviewBackgroundSecondary: ColorDescription;
	octaviusTextDecorationEmptyStateTextLink: ColorDescription;
	octaviusColorNotificationBorder: ColorDescription;
	octaviusColorPlaceholderBackground: ColorDescription;
	octaviusColorPromoBackground: ColorDescription;

	// Тонированные фоны
	octaviusColorBackgroundAccentTintAlpha: ColorDescription;
	octaviusColorBackgroundNegativeTintAlpha: ColorDescription;
	octaviusColorBackgroundPositiveTintAlpha: ColorDescription;
	octaviusColorButtonBackgroundContrastAlpha: ColorDescription;
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

export interface ThemeOctaviusCssVars extends ThemeCssVars<ThemeOctavius, 'breakpoints'> {}
