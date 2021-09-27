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
	octaviusElevationCard: string;
	octaviusElevationHeader: string;
	octaviusTextShadowEmptyStateText: string;

	octaviusPositionBackground: string;
	octaviusImageOverlayBackground: string;

	octaviusTextShadowSidebarItemText: string;
	octaviusFilterSidebarItemIcon: string;

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
	colorBgThumbnail: ColorDescription;
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
	colorPaletteOrange2: ColorDescription;
	colorPaletteYellow1: ColorDescription;
	colorPaletteGreen1: ColorDescription;
	colorPaletteGreen2: ColorDescription;
	colorPaletteGreen3: ColorDescription;
	colorPaletteGreen4: ColorDescription;
	colorPaletteGreen5: ColorDescription;
	colorPaletteGreen6: ColorDescription;
	colorPaletteBlue1: ColorDescription;
	colorPaletteBlue2: ColorDescription;
	colorPaletteBlue3: ColorDescription;
	colorPaletteBlue4: ColorDescription;
	colorPaletteViolet1: ColorDescription;
	colorPaletteViolet2: ColorDescription;
	colorAlert: ColorDescription;
	colorBgPlaceholder: ColorDescription;
	colorBgPromo: ColorDescription;
	colorTrueBlack: ColorDescription;
	colorTrueWhite: ColorDescription;

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
	octaviusColorSidebarItemIconPrimary: ColorDescription;
	octaviusColorSidebarCounterBackground: ColorDescription;
	octaviusColorSidebarCounterText: ColorDescription;
	octaviusColorSidebarScrollbar: ColorDescription;
	octaviusColorSidebarItemIcon: ColorDescription;
	octaviusColorSidebarItemText: ColorDescription;
	octaviusColorSidebarItemIconActive: ColorDescription;
	octaviusColorSidebarItemTextActive: ColorDescription;
	octaviusColorSidebarItemTextSecondary: ColorDescription;
	octaviusColorSidebarItemIconSecondary: ColorDescription;
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

	// Другие стили
	octaviusColorEmptyStateText: ColorDescription;
	octaviusColorBackgroundAccentToned: ColorDescription;
	octaviusColorLayoutBorder: ColorDescription;
	octaviusColorEmptyStateTextLink: ColorDescription;
	octaviusColorLetterPreviewBackgroundPrimary: ColorDescription;
	octaviusColorLetterPreviewBackgroundSecondary: ColorDescription;
	octaviusTextDecorationEmptyStateTextLink: ColorDescription;
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
