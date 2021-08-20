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
	octaviusShadowTextBackgroundContrast: string;

	octaviusPositionBackground: string;
	octaviusImageOverlayBackground: string;

	octaviusShadowSidebarNavItemText: string;
	octaviusFilterSidebarNavItemIcon: string;

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

	// Токены страницы
	octaviusColorText: ColorDescription;
	octaviusColorIcon: ColorDescription;

	// Токены кнопки
	octaviusColorButtonText: ColorDescription;
	octaviusButtonColor: ColorDescription;
	octaviusColorButtonTextSecondary: ColorDescription;

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
	octaviusColorSidebarBackground: ColorDescription;
	octaviusColorSidebarItemBackground: ColorDescription;
	octaviusColorSidebarItemIconPrimary: ColorDescription;
	octaviusColorSidebarCounterBackground: ColorDescription;
	octaviusColorSidebarCounterText: ColorDescription;
	octaviusColorSidebarScrollbar: ColorDescription;
	octaviusColorSidebarNavItemIcon: ColorDescription;
	octaviusColorSidebarNavItemText: ColorDescription;
	octaviusColorSidebarNavItemButtonBackground: ColorDescription;
	octaviusColorSidebarShortNavItemButtonBackground: ColorDescription;

	octaviusColorSidebarComposeButtonBackground: ColorDescription;
	octaviusColorSidebarComposeButtonText: ColorDescription;
	octaviusColorSidebarComposeButtonIcon: ColorDescription

	// Токены портального меню
	octaviusColorPortalMenuBackground: ColorDescription;

	// Контент страницы
	octaviusColorContentScrollbar: ColorDescription;

	// Токены письма
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

	// Токены списка
	octaviusColorListBackground: ColorDescription;
	octaviusColorListText: ColorDescription;
	octaviusColorListIcon: ColorDescription;

	// Другие стили
	octaviusColorListLetterBackground: ColorDescription;
	octaviusColorListLetterSeparator: ColorDescription;
	octaviusColorDatasetBackground: ColorDescription;

	// Другие стили
	octaviusColorTextBackgroundContrast: ColorDescription;
	octaviusIconBackgroundContrastColor: ColorDescription;
	octaviusColorBadgeBackground: ColorDescription;
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
