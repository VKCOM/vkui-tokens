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
import {Property} from 'csstype';

export interface ThemeOctaviusOverValues {
	octaviusShadowSidebarItemText: Property.BoxShadow;
	octaviusShadowSidebarItemIcon: Property.BoxShadow;
	octaviusElevationCard: Property.BoxShadow;
	octaviusElevationHeader: Property.BoxShadow;
	octaviusShadowEmptyStateText: Property.BoxShadow;

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

	// Фон страницы (отличается от colorBackground)
	octaviusColorBackground: ColorDescription;

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

	// Токены портального меню
	octaviusColorPortalMenuBackground: ColorDescription;

	// Контент страницы
	octaviusColorContentScrollbar: ColorDescription;

	// Категории письма
	octaviusColorIconUnread: ColorDescription;
	octaviusColorIconFavorite: ColorDescription;
	octaviusColorIconOrder: ColorDescription;
	octaviusColorIconFinance: ColorDescription;
	octaviusColorIconRegistration: ColorDescription;
	octaviusColorIconTravel: ColorDescription;
	octaviusColorIconEvent: ColorDescription;
	octaviusColorIconFees: ColorDescription;

	// Стили списка писем
	octaviusColorListLetterBackground: ColorDescription;
	octaviusColorListLetterSeparator: ColorDescription;
	octaviusColorDatasetBackground: ColorDescription;
	octaviusColorListTextUnread: ColorDescription;
	octaviusColorListTextPrimary: ColorDescription;
	octaviusColorListIconPrimary: ColorDescription;

	// Другие стили
	octaviusColorEmptyStateText: ColorDescription;
	octaviusColorBackgroundAccentToned: ColorDescription;
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
