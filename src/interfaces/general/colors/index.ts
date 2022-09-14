import {Property} from 'csstype';

import {ColorsDescription, ColorsScheme} from '@/interfaces/general';

/**
 * Интерфейс всех цветов на выходе
 */
export interface ColorWithStates {
	normal: Property.Color;
	hover: Property.Color;
	active: Property.Color;
}

export type ColorDescriptionStatic = Property.Color | ColorWithStates;

export type ColorDescriptionCallable<
	// eslint-disable-next-line no-use-before-define
	T extends {[key in keyof T]: ColorDescription} = ColorsDescriptionStruct,
> = (
	theme: Partial<ColorsScheme & ColorsDescription<T>>,
	// eslint-disable-next-line no-use-before-define
) => ColorDescription;

export type ColorDescription<
	// eslint-disable-next-line no-use-before-define
	T extends {[key in keyof T]: ColorDescription} = ColorsDescriptionStruct,
> = ColorDescriptionStatic | ColorDescriptionCallable<T>;

/**
 * В описании цветов достаточно указать просто строку
 * (тогда состояния сгенерируются при сборке)
 * Либо можно указать состояния цвета вручную
 */
export interface ColorsDescriptionStruct {
	// Background
	colorBackgroundAccent: ColorDescription;
	colorBackgroundAccentThemed: ColorDescription;
	colorBackgroundAccentTint: ColorDescription;
	colorBackgroundAccentAlternative: ColorDescription;
	colorBackground: ColorDescription;
	colorBackgroundContent: ColorDescription;
	colorBackgroundSecondary: ColorDescription;
	colorBackgroundSecondaryAlpha: ColorDescription;
	colorBackgroundTertiary: ColorDescription;
	colorBackgroundTertiaryAlpha: ColorDescription;
	colorBackgroundContrast: ColorDescription;
	colorBackgroundContrastSecondaryAlpha: ColorDescription;
	colorBackgroundContrastInverse: ColorDescription;
	colorBackgroundModal: ColorDescription;
	colorBackgroundModalInverse: ColorDescription;
	colorBackgroundWarning: ColorDescription;
	colorBackgroundPositive: ColorDescription;
	colorBackgroundNegative: ColorDescription;
	colorBackgroundNegativeTint: ColorDescription;
	colorBackgroundPositiveTint: ColorDescription;
	colorFieldBackground: ColorDescription;
	colorHeaderBackground: ColorDescription;

	// Text
	colorTextAccent: ColorDescription;
	colorTextAccentThemed: ColorDescription;
	colorTextPrimary: ColorDescription;
	colorTextPrimaryInvariably: ColorDescription;
	colorTextSecondary: ColorDescription;
	colorTextSubhead: ColorDescription;
	colorTextTertiary: ColorDescription;
	colorTextContrast: ColorDescription;
	colorTextContrastThemed: ColorDescription;
	colorTextPositive: ColorDescription;
	colorTextNegative: ColorDescription;
	colorTextLink: ColorDescription;
	colorTextLinkThemed: ColorDescription;
	colorTextLinkVisited: ColorDescription;
	colorTextMuted: ColorDescription;
	colorLinkContrast: ColorDescription;

	// Icons
	colorIconAccent: ColorDescription;
	colorIconAccentThemed: ColorDescription;
	colorIconPrimary: ColorDescription;
	colorIconPrimaryInvariably: ColorDescription;
	colorIconMedium: ColorDescription;
	colorIconMediumAlpha: ColorDescription;
	colorIconSecondary: ColorDescription;
	colorIconSecondaryAlpha: ColorDescription;
	colorIconTertiary: ColorDescription;
	colorIconTertiaryAlpha: ColorDescription;
	colorIconContrast: ColorDescription;
	colorIconContrastThemed: ColorDescription;
	colorIconContrastSecondary: ColorDescription;
	colorIconPositive: ColorDescription;
	colorIconNegative: ColorDescription;

	// Stroke
	colorStrokeAccent: ColorDescription;
	colorStrokeAccentThemed: ColorDescription;
	colorStrokePositive: ColorDescription;
	colorStrokeNegative: ColorDescription;
	colorStrokeContrast: ColorDescription;
	colorImageBorderAlpha: ColorDescription;
	colorFieldBorderAlpha: ColorDescription;
	colorSeparatorPrimaryAlpha: ColorDescription;
	colorSeparatorSecondary: ColorDescription;
	colorSeparatorPrimary: ColorDescription;
	colorSeparatorPrimary2x: ColorDescription;
	colorSeparatorPrimary3x: ColorDescription;

	// Palette
	colorAccentBlue: ColorDescription;
	colorAccentGray: ColorDescription;
	colorAccentRed: ColorDescription;
	colorAccentGreen: ColorDescription;
	colorAccentOrange: ColorDescription;
	colorAccentPurple: ColorDescription;
	colorAccentViolet: ColorDescription;
	colorAccentSecondary: ColorDescription;

	// Other
	colorOverlayPrimary: ColorDescription;
	colorAvatarOverlay: ColorDescription;
	colorAvatarOverlayInverseAlpha: ColorDescription;
	colorImagePlaceholder: ColorDescription;
	colorImagePlaceholderAlpha: ColorDescription;
	colorSkeletonFrom: ColorDescription;
	colorSkeletonTo: ColorDescription;
	colorWriteBarIcon: ColorDescription;
	colorWriteBarInputBackground: ColorDescription;
	colorWriteBarInputBorderAlpha: ColorDescription;
	colorActionSheetText: ColorDescription;
	colorTrackBackground: ColorDescription;
	colorTrackBuffer: ColorDescription;
	colorSearchFieldBackground: ColorDescription;
	colorPanelHeaderIcon: ColorDescription;
	colorTransparent: ColorDescription;
	colorSegmentedControl: ColorDescription;

	// Themed цвета, в тёмной теме становится белыми
}

export type Colors = {
	[key in keyof ColorsDescriptionStruct]: ColorWithStates;
};
