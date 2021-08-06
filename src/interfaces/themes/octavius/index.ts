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
	octaviusShadowLetterList: string;
	octaviusElevationHeader: string;
	octaviusShadowTextBackgroundContrast: string;

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

	// Фон страницы (отличается от colorBackground)
	octaviusColorBackground: ColorDescription;

	// Токены синей шапки
	octaviusColorHeaderBackground: ColorDescription;
	octaviusColorHeaderButtonText: ColorDescription;
	octaviusColorHeaderIcon: ColorDescription;
	octaviusColorHeaderTextSecondary: ColorDescription;

	// Поиск
	octaviusColorHeaderSearchIcon: ColorDescription;
	octaviusColorHeaderSearchBackground: ColorDescription;
	octaviusColorHeaderSearchBackgroundCollapsed: ColorDescription;
	octaviusColorHeaderSearchChipBackground: ColorDescription;

	// Токены сайдбара
	octaviusColorSidebarItemBackground: ColorDescription;
	octaviusColorSidebarItemIconPrimary: ColorDescription;
	octaviusColorSidebarCounterBackground: ColorDescription;
	octaviusColorSidebarCounterText: ColorDescription;

	// Токены портального меню
	octaviusColorPortalMenuBackground: ColorDescription;

	// Категории письма
	octaviusColorIconUnread: ColorDescription;
	octaviusColorIconFavorite: ColorDescription;
	octaviusColorIconOrder: ColorDescription;
	octaviusColorIconFinance: ColorDescription;
	octaviusColorIconRegistration: ColorDescription;
	octaviusColorIconTravel: ColorDescription;
	octaviusColorIconEvent: ColorDescription;
	octaviusColorIconFees: ColorDescription;

	// Другие стили
	octaviusColorListLetterBackground: ColorDescription;
	octaviusColorDatasetBackground: ColorDescription;
	octaviusColorTextBackgroundContrast: ColorDescription;
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
