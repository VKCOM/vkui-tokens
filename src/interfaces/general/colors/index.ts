import {Property} from 'csstype';

/**
 * Интерфейс всех цветов на выходе
 */
export interface ColorWithStates {
	normal: Property.Color;
	hover: Property.Color;
	active: Property.Color;
}

export type ColorDescription = Property.Color | ColorWithStates;

/**
 * В описании цветов достаточно указать просто строку
 * (тогда состояния сгенерируются при сборке)
 * Либо можно указать состояния цвета вручную
 */
export interface ColorsDescriptionStruct {
	colorBackgroundAccent: ColorDescription;
	colorBackgroundAccentThemed: ColorDescription;
	colorBackgroundAccentAlternative: ColorDescription;
	colorIconAccent: ColorDescription;
	colorTextAccent: ColorDescription;
	colorTextAccentThemed: ColorDescription;
	colorStrokeAccent: ColorDescription;
	colorStrokeAccentThemed: ColorDescription;
	colorStrokeContrast: ColorDescription;
	colorActionSheetText: ColorDescription;
	colorBackgroundContent: ColorDescription;
	colorBackgroundSecondary: ColorDescription;
	colorBackgroundSecondaryAlpha: ColorDescription;
	colorBackgroundTertiary: ColorDescription;
	colorBackground: ColorDescription;
	colorBackgroundContrast: ColorDescription;
	colorCounterAccentBackground: ColorDescription;
	colorCounterAccentText: ColorDescription;
	colorCounterProminentBackground: ColorDescription;
	colorCounterProminentText: ColorDescription;
	colorCounterMutedBackground: ColorDescription;
	colorCounterMutedText: ColorDescription;
	colorBackgroundWarning: ColorDescription;
	colorBackgroundNegative: ColorDescription;
	colorIconNegative: ColorDescription;
	colorTextNegative: ColorDescription;
	colorStrokeNegative: ColorDescription;
	colorHeaderBackground: ColorDescription;
	colorPanelHeaderIcon: ColorDescription;
	colorIconPrimary: ColorDescription;
	colorIconPrimaryInvariably: ColorDescription;
	colorIconMedium: ColorDescription;
	colorIconMediumAlpha: ColorDescription;
	colorIconSecondary: ColorDescription;
	colorIconSecondaryAlpha: ColorDescription;
	colorIconTertiary: ColorDescription;
	colorIconTertiaryAlpha: ColorDescription;
	colorImageBorderAlpha: ColorDescription;
	colorWriteBarInputBackground: ColorDescription;
	colorWriteBarInputBorderAlpha: ColorDescription;
	colorTextLinkAlternate: ColorDescription;
	colorTrackBackground: ColorDescription;
	colorTrackBuffer: ColorDescription;
	colorBackgroundModal: ColorDescription;
	colorImagePlaceholder: ColorDescription;
	colorImagePlaceholderAlpha: ColorDescription;
	colorSearchFieldBackground: ColorDescription;
	colorFieldBorderAlpha: ColorDescription;
	colorSeparatorPrimaryAlpha: ColorDescription;
	colorSeparatorSecondary: ColorDescription;
	colorSeparatorPrimary: ColorDescription;
	colorTextLink: ColorDescription;
	colorTextLinkThemed: ColorDescription;
	colorTextMuted: ColorDescription;
	colorTextPrimary: ColorDescription;
	colorTextPrimaryInvariably: ColorDescription;
	colorTextSecondary: ColorDescription;
	colorTextSubhead: ColorDescription;
	colorTextTertiary: ColorDescription;
	colorWriteBarIcon: ColorDescription;
	colorAccentBlue: ColorDescription;
	colorAccentGray: ColorDescription;
	colorAccentRed: ColorDescription;
	colorAccentGreen: ColorDescription;
	colorAccentOrange: ColorDescription;
	colorAccentPurple: ColorDescription;
	colorAccentViolet: ColorDescription;
	colorSkeletonFrom: ColorDescription;
	colorSkeletonTo: ColorDescription;
	colorAccentSecondary: ColorDescription;
	colorTextLinkVisited: ColorDescription;
	colorTextContrast: ColorDescription;
	// цвет, который на тёмной теме становится тёмным
	// нужен для текста на primary accent кнопках
	colorTextContrastThemed: ColorDescription;
	colorIconContrast: ColorDescription;
	// цвет, который на тёмной теме становится тёмным
	// нужен для иконок на primary accent кнопках
	colorIconContrastThemed: ColorDescription;
	colorBackgroundPositive: ColorDescription;
	colorIconPositive: ColorDescription;
	colorTextPositive: ColorDescription;
	colorStrokePositive: ColorDescription;
	colorAvatarOverlay: ColorDescription;
	colorOverlayPrimary: ColorDescription;
	colorTransparent: ColorDescription;
	colorSceletonFrom: ColorDescription;
	colorSceletonTo: ColorDescription;
}

export type Colors = {
	[key in keyof ColorsDescriptionStruct]: ColorWithStates;
};
