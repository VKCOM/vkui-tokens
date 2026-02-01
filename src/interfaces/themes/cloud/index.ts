import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../general/colors/index.ts';
import type { Adaptive } from '../../general/tools/index.ts';
import type { DefaultViewports } from '../../general/tools/viewports.ts';
import type { Font } from '../../general/typography/index.ts';
import type {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '../../namespaces/paradigm/index.ts';

interface ThemeCloudTypohraphy {
	/**
	 * @desc Caption 1 CAPS • DEMIBOLD
	 * @tags font
	 * */
	fontCaption1CapsDemibold: {
		regular: Font;
	};
	/**
	 * @desc Caption 2 CAPS • DEMIBOLD
	 * @tags font
	 * */
	fontCaption2CapsDemibold: {
		regular: Font;
	};
	/**
	 * @desc Caption 3 CAPS • DEMIBOLD
	 * @tags font
	 * */
	fontCaption3CapsDemibold: {
		regular: Font;
	};
	/**
	 * @desc Заголовок Title 2 • Custom
	 * @tags font
	 * */
	fontTitle2Custom: Adaptive<Font>;
	/**
	 * @desc Заголовок Title3 • Custom
	 * @tags font
	 * */
	fontTitle3Custom: Adaptive<Font>;
	/**
	 * @desc Заголовок Subtitle • Medium
	 * @tags font
	 * */
	fontSubtitleMedium: Font;
	/**
	 * @desc Заголовок Subtitle • Regular
	 * @tags font
	 * */
	fontSubtitleCustom: Font;
	/**
	 * @desc Заголовок HeadlineLarge• Medium.
	 * Используется для обозначения занятого места в блоке с чистилкой
	 * @tags font
	 * */
	fontHeadlineLargeMedium: Font;
	/**
	 * @desc LargeText • Regular.
	 * Используется как текст под заголовком в тултипах
	 * @tags font
	 * */
	fontLargeText: Font;
}

export interface LocalCloudColorsDescriptionStruct {
	// Текст
	cloudColorTextSecondaryAlpha: ColorDescription;
	cloudColorTextAccentAlternative: ColorDescription;
	cloudColorTextSnackbarAccent: ColorDescription;
	cloudColorTextContrastThemedAlpha: ColorDescription;

	// Background
	cloudColorToolbarBackground: ColorDescription;
	cloudColorViewerBackground: ColorDescription;
	cloudColorTabbarBackgroundAlpha: ColorDescription;
	cloudColorHeaderIconBackgroundAlpha: ColorDescription;
	cloudColorBackgroundDragAndDrop: ColorDescription;
	cloudColorBackgroundCTA: ColorDescription;
	cloudColorHeaderSearchBackground: ColorDescription;
	cloudColorHeaderSearchBackgroundCollapsed: ColorDescription;
	cloudColorBackgroundPortal: ColorDescription;
	cloudColorBackgroundAlternative: ColorDescription;
	cloudColorBackgroundContentAlternative: ColorDescription;
	cloudColorBackgroundFastScroll: ColorDescription;

	// Icons
	cloudColorIconAccentAlternative: ColorDescription;
	cloudColorIconRating: ColorDescription;
	cloudColorIconFolder: ColorDescription;

	// Stroke
	cloudColorLandingStrokeTariff: ColorDescription;

	// Pallette
	cloudColorSweetblue: ColorDescription;
	cloudColorBlueAccentThemed: ColorDescription;
	cloudColorSweetgreen: ColorDescription;
	cloudColorGreenAccentThemed: ColorDescription;
	cloudColorSweetorange: ColorDescription;
	cloudColorOrangeAccentThemed: ColorDescription;
	cloudColorSweetpurple: ColorDescription;
	cloudColorPurpleAccentThemed: ColorDescription;
	cloudColorIconIDCardThemedAlpha: ColorDescription;
	cloudColorIconIDCard: ColorDescription;
	cloudColorIconOfficialThemedAlpha: ColorDescription;
	cloudColorIconOfficial: ColorDescription;
	cloudColorIconTransportThemed: ColorDescription;
	cloudColorIconTransport: ColorDescription;
	cloudColorIconFinanceThemed: ColorDescription;
	cloudColorIconFinance: ColorDescription;
	cloudColorIconFileDocumentInvariably: ColorDescription;
	cloudColorIconFilePresentationInvariably: ColorDescription;
	cloudColorIconFileTableInvariably: ColorDescription;
	cloudColorBackgroundFileDocument: ColorDescription;
	cloudColorBackgroundFilePresentation: ColorDescription;
	cloudColorBackgroundFileTable: ColorDescription;
	cloudColorBackgroundFileOtherAlpha: ColorDescription;
	cloudColorBackgroundProfileTariff: ColorDescription;
	cloudColorIconProfileTariff: ColorDescription;
	cloudColorBackgroundProfileAccess: ColorDescription;
	cloudColorIconProfileAccess: ColorDescription;
	cloudColorBackgroundProfileUploading: ColorDescription;
	cloudColorIconProfileUploading: ColorDescription;
	cloudColorBackgroundProfileTrash: ColorDescription;
	cloudColorIconProfileTrash: ColorDescription;
	cloudColorBackgroundProfileSettings: ColorDescription;
	cloudColorIconProfileSettings: ColorDescription;
	cloudColorBackgroundProfileMail: ColorDescription;
	cloudColorIconProfileMail: ColorDescription;

	// Other
	cloudColorLandingBackground: ColorDescription;
	cloudColorLandingSecondaryBackground: ColorDescription;
	cloudColorLandingTertiaryBackground: ColorDescription;
	cloudColorLandingMediumBackground: ColorDescription;
	cloudColorLandingButtonBackground: ColorDescription;
	cloudColorLandingLabelBackground: ColorDescription;
	cloudColorLandingLabelInverseBackground: ColorDescription;
	cloudColorLandingControlPrimaryBackground: ColorDescription;
	cloudColorLandingControlSecondaryBackground: ColorDescription;
	cloudColorSubscriptionButtonBackground: ColorDescription;
	cloudColorScrollIndicatorAlpha: ColorDescription;

	// Сайдбар
	cloudColorSidebarItemText: ColorDescription;
	cloudColorSidebarItemTextPrimary: ColorDescription;
	cloudColorSidebarItemTextSecondary: ColorDescription;
	cloudColorSidebarItemBackgroundAlpha: ColorDescription;

	// Фон страницы
	cloudColorBackground: ColorDescription;
	cloudColorOverlayBackground: ColorDescription;
}

export type CloudLocalColors = {
	[key in keyof LocalCloudColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeCloud extends ParadigmTheme, ThemeCloudTypohraphy, CloudLocalColors {}
export interface ThemeCloudDescription extends ParadigmThemeDescription, ThemeCloudTypohraphy {
	colors: LocalCloudColorsDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}

export interface ThemeCloudCssVars extends ParadigmThemeCssVars<DefaultViewports, ThemeCloud> {}
