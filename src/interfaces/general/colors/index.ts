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
	colorBackgroundAccentAlternative: ColorDescription;
	colorIconAccent: ColorDescription;
	colorTextAccent: ColorDescription;
	colorStrokeAccent: ColorDescription;
	colorActionSheetText: ColorDescription;
	colorBackgroundContent: ColorDescription;
	colorBackgroundSecondary: ColorDescription;
	colorBackgroundTertiary: ColorDescription;
	colorBackground: ColorDescription;
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
	colorIconMedium: ColorDescription;
	colorIconMediumAlpha: ColorDescription;
	colorIconSecondary: ColorDescription;
	colorIconSecondaryAlpha: ColorDescription;
	colorIconTertiary: ColorDescription;
	colorIconTertiaryAlpha: ColorDescription;
	colorImageBorder: ColorDescription;
	colorWriteBarInputBackground: ColorDescription;
	colorWriteBarInputBorder: ColorDescription;
	colorTextLinkAlternate: ColorDescription;
	colorTrackBackground: ColorDescription;
	colorTrackBuffer: ColorDescription;
	colorBackgroundModal: ColorDescription;
	colorImagePlaceholder: ColorDescription;
	colorImagePlaceholderOpaque: ColorDescription;
	colorSearchFieldBackground: ColorDescription;
	colorFieldBorder: ColorDescription;
	colorCheckboxBorder: ColorDescription;
	colorSeparatorPrimaryAlpha: ColorDescription;
	colorSeparatorSecondary: ColorDescription;
	colorSeparatorPrimary: ColorDescription;
	colorTextLink: ColorDescription;
	colorTextMuted: ColorDescription;
	colorTextPrimary: ColorDescription;
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
	colorIconContrast: ColorDescription;
	colorLinkContrast: ColorDescription;
	colorBackgroundPositive: ColorDescription;
	colorIconPositive: ColorDescription;
	colorTextPositive: ColorDescription;
	colorStrokePositive: ColorDescription;
	colorAvatarOverlay: ColorDescription;
	colorOverlayPrimary: ColorDescription;
	colorTransparent: ColorDescription;
}

export type Colors = {
	[key in keyof ColorsDescriptionStruct]: ColorWithStates;
};
