import { ThemeCssVars } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { GradientPoints } from '@/interfaces/general/gradients';
import { Tokens } from '@/interfaces/general/tools/tokenValue';

import { ThemeVkBase, ThemeVkBaseDescription } from '../vkBase';

export interface VkontakteAndroidGradients {
	/**
	 * @desc Градиент AquamarineBlue
	 * @tags gradient
	 */
	vkontakteGradientAquamarineBlue: GradientPoints;
	/**
	 * @desc Градиент Blue
	 * @tags gradient
	 */
	vkontakteGradientBlue: GradientPoints;
	/**
	 * @desc Градиент Candy
	 * @tags gradient
	 */
	vkontakteGradientCandy: GradientPoints;
	/**
	 * @desc Градиент Crimson
	 * @tags gradient
	 */
	vkontakteGradientCrimson: GradientPoints;
	/**
	 * @desc Градиент Disco
	 * @tags gradient
	 */
	vkontakteGradientDisco: GradientPoints;
	/**
	 * @desc Градиент Emerald
	 * @tags gradient
	 */
	vkontakteGradientEmerald: GradientPoints;
	/**
	 * @desc Градиент Gray
	 * @tags gradient
	 */
	vkontakteGradientGray: GradientPoints;
	/**
	 * @desc Градиент Green
	 * @tags gradient
	 */
	vkontakteGradientGreen: GradientPoints;
	/**
	 * @desc Градиент Lagoon
	 * @tags gradient
	 */
	vkontakteGradientLagoon: GradientPoints;
	/**
	 * @desc Градиент Lavender
	 * @tags gradient
	 */
	vkontakteGradientLavender: GradientPoints;
	/**
	 * @desc Градиент Marine
	 * @tags gradient
	 */
	vkontakteGradientMarine: GradientPoints;
	/**
	 * @desc Градиент Midnight
	 * @tags gradient
	 */
	vkontakteGradientMidnight: GradientPoints;
	/**
	 * @desc Градиент Orange
	 * @tags gradient
	 */
	vkontakteGradientOrange: GradientPoints;
	/**
	 * @desc Градиент Pink
	 * @tags gradient
	 */
	vkontakteGradientPink: GradientPoints;
	/**
	 * @desc Градиент Purple
	 * @tags gradient
	 */
	vkontakteGradientPurple: GradientPoints;
	/**
	 * @desc Градиент RaspberryPink
	 * @tags gradient
	 */
	vkontakteGradientRaspberryPink: GradientPoints;
	/**
	 * @desc Градиент Red
	 * @tags gradient
	 */
	vkontakteGradientRed: GradientPoints;
	/**
	 * @desc Градиент Retrowave
	 * @tags gradient
	 */
	vkontakteGradientRetrowave: GradientPoints;
	/**
	 * @desc Градиент Sunset
	 * @tags gradient
	 */
	vkontakteGradientSunset: GradientPoints;
	/**
	 * @desc Градиент Turquoise
	 * @tags gradient
	 */
	vkontakteGradientTurquoise: GradientPoints;
	/**
	 * @desc Градиент Twilight
	 * @tags gradient
	 */
	vkontakteGradientTwilight: GradientPoints;
	/**
	 * @desc Градиент Unicorn
	 * @tags gradient
	 */
	vkontakteGradientUnicorn: GradientPoints;
	/**
	 * @desc Градиент Violet
	 * @tags gradient
	 */
	vkontakteGradientViolet: GradientPoints;
	/**
	 * @desc Градиент Yellow
	 * @tags gradient
	 */
	vkontakteGradientYellow: GradientPoints;
	/**
	 * @desc Градиент YellowBright
	 * @tags gradient
	 */
	vkontakteGradientYellowBright: GradientPoints;
	/**
	 * @desc Градиент HalloweenOrange
	 * @tags gradient
	 */
	vkontakteGradientHalloweenOrange: GradientPoints;
	/**
	 * @desc Градиент HalloweenViolet
	 * @tags gradient
	 */
	vkontakteGradientHalloweenViolet: GradientPoints;
	/**
	 * @desc Градиент NewYear
	 * @tags gradient
	 */
	vkontakteGradientNewYear: GradientPoints;
	/**
	 * @desc Градиент Frost
	 * @tags gradient
	 */
	vkontakteGradientFrost: GradientPoints;
	/**
	 * @desc Градиент Valentine
	 * @tags gradient
	 */
	vkontakteGradientValentine: GradientPoints;
	/**
	 * @desc Градиент WarmValentine
	 * @tags gradient
	 */
	vkontakteGradientWarmValentine: GradientPoints;
	/**
	 * @desc Градиент Sberkot
	 * @tags gradient
	 */
	vkontakteGradientSberkot: GradientPoints;
	/**
	 * @desc Градиент Mable
	 * @tags gradient
	 */
	vkontakteGradientMable: GradientPoints;
	/**
	 * @desc Градиент WomensDay
	 * @tags gradient
	 */
	vkontakteGradientWomensDay: GradientPoints;
}

export interface LocalVkontakteAndroidColorsDescriptionStruct {
	vkontakteColorSnippetBorderAlpha: ColorDescription;
	vkontakteColorSnippetBackground: ColorDescription;
	vkontakteColorModalCardBorderAlpha: ColorDescription;
	vkontakteColorLandingSnippetBorderAlpha: ColorDescription;
	vkontakteColorActionSheetSeparatorAlpha: ColorDescription;
	vkontakteColorInputBorder: ColorDescription;
	vkontakteColorSearchBarBackground: ColorDescription;
	vkontakteBackgroundHoverAlpha: ColorDescription;
	vkontakteColorBackgroundSuggestions: ColorDescription;

	vkontakteColorTextName: ColorDescription;
	vkontakteColorAccentAlternate: ColorDescription;
	vkontakteColorBackgroundKeyboard: ColorDescription;
	vkontakteColorContentPlaceholderIcon: ColorDescription;
	vkontakteColorContentTintForeground: ColorDescription;
	vkontakteColorControlBackground: ColorDescription;
	vkontakteColorControlForeground: ColorDescription;
	vkontakteColorControlTintMuted: ColorDescription;

	vkontakteColorHeaderSearchFieldBackground: ColorDescription;
	vkontakteColorHeaderSearchFieldTint: ColorDescription;
	vkontakteColorHeaderTabActiveIndicator: ColorDescription;

	vkontakteColorIconOutlineMedium: ColorDescription;
	vkontakteColorIconOutlineSecondary: ColorDescription;

	vkontakteColorSkeletonShimmerFrom: ColorDescription;
	vkontakteColorAlphaSkeletonShimmerTo: ColorDescription;

	vkontakteColorLoaderBackground: ColorDescription;
	vkontakteColorLoaderTint: ColorDescription;

	vkontakteColorMusicPlaybackIcon: ColorDescription;

	vkontakteColorStatusBackground: ColorDescription;

	vkontakteColorPlaceholderIconForegroundPrimary: ColorDescription;
	vkontakteColorPlaceholderIconForegroundSecondary: ColorDescription;
	vkontakteColorPlaceholderIconTint: ColorDescription;

	vkontakteColorPollOptionBackground: ColorDescription;

	vkontakteColorSearchBarFieldTint: ColorDescription;

	vkontakteColorTabbarActiveIcon: ColorDescription;
	vkontakteColorTabbarBackground: ColorDescription;
	vkontakteColorTabbarInactiveIcon: ColorDescription;
	vkontakteColorTabbarTabletTextSecondary: ColorDescription;

	vkontakteColorToolbarAttachBackgroundFrom: ColorDescription;

	vkontakteColorSplashScreenIcon: ColorDescription;

	vkontakteColorIconName: ColorDescription;

	vkontakteColorPanelTabActiveText: ColorDescription;

	vkontakteColorBackgroundTextAlpha: ColorDescription;

	vkontakteImReplySeparator: ColorDescription;

	vkontakteImToolbarVoiceMsgBackground: ColorDescription;

	vkontakteColorModalCardHeaderClose: ColorDescription;

	vkontakteImBubbleButtonOutgoingBackgroundAlpha: ColorDescription;
	vkontakteImBubbleButtonForeground: ColorDescription;
	vkontakteImBubbleIncomingHighlighted: ColorDescription;
	vkontakteImBubbleGiftBackground: ColorDescription;
	vkontakteImBubbleGiftBackgroundHighlighted: ColorDescription;
	vkontakteImBubbleOutgoingAlternate: ColorDescription;

	vkontakteImAttachTint: ColorDescription;

	vkontakteColorImForwardLineAlpha: ColorDescription;

	vkontakteColorImBubbleBorderAlternateHighlightedAlpha: ColorDescription;

	vkontakteColorImBubbleIncoming: ColorDescription;
	vkontakteColorImBubbleIncomingAlternate: ColorDescription;
	vkontakteColorImBubbleIncomingExpiring: ColorDescription;

	vkontakteColorImBubbleOutgoing: ColorDescription;
	vkontakteColorImBubbleOutgoingExpiringHighlighted: ColorDescription;

	vkontakteColorImBubbleGiftText: ColorDescription;
	vkontakteColorImBubbleGiftTextSecondary: ColorDescription;

	vkontakteColorImTextName: ColorDescription;

	vkontakteButtonMutedBackground: ColorDescription;
	vkontakteButtonTertiaryBackground: ColorDescription;
	vkontakteButtonTertiaryForeground: ColorDescription;
	vkontakteFloatButtonForeground: ColorDescription;
	vkontakteLandingBackground: ColorDescription;

	vkontakteImBubbleIncomingAlternateHighlighted: ColorDescription;
	vkontakteImBubbleIncomingExpiringHighlighted: ColorDescription;
	vkontakteImBubbleOutgoingHighlighted: ColorDescription;
}

export type VkontakteAndroidLocalColors = {
	[key in keyof LocalVkontakteAndroidColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeVkontakteAndroid
	extends ThemeVkBase,
		VkontakteAndroidLocalColors,
		VkontakteAndroidGradients {}
export interface ThemeVkontakteAndroidDescription
	extends ThemeVkBaseDescription,
		Tokens<VkontakteAndroidGradients> {
	colors: LocalVkontakteAndroidColorsDescriptionStruct & ColorsDescriptionStruct;
}
export interface ThemeVkontakteAndroidCssVars extends ThemeCssVars<ThemeVkontakteAndroid> {}
