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
	gradientAquamarineBlue: GradientPoints;
	/**
	 * @desc Градиент Blue
	 * @tags gradient
	 */
	gradientBlue: GradientPoints;
	/**
	 * @desc Градиент Candy
	 * @tags gradient
	 */
	gradientCandy: GradientPoints;
	/**
	 * @desc Градиент Crimson
	 * @tags gradient
	 */
	gradientCrimson: GradientPoints;
	/**
	 * @desc Градиент Disco
	 * @tags gradient
	 */
	gradientDisco: GradientPoints;
	/**
	 * @desc Градиент Emerald
	 * @tags gradient
	 */
	gradientEmerald: GradientPoints;
	/**
	 * @desc Градиент Gray
	 * @tags gradient
	 */
	gradientGray: GradientPoints;
	/**
	 * @desc Градиент Green
	 * @tags gradient
	 */
	gradientGreen: GradientPoints;
	/**
	 * @desc Градиент Lagoon
	 * @tags gradient
	 */
	gradientLagoon: GradientPoints;
	/**
	 * @desc Градиент Lavender
	 * @tags gradient
	 */
	gradientLavender: GradientPoints;
	/**
	 * @desc Градиент Marine
	 * @tags gradient
	 */
	gradientMarine: GradientPoints;
	/**
	 * @desc Градиент Midnight
	 * @tags gradient
	 */
	gradientMidnight: GradientPoints;
	/**
	 * @desc Градиент Orange
	 * @tags gradient
	 */
	gradientOrange: GradientPoints;
	/**
	 * @desc Градиент Pink
	 * @tags gradient
	 */
	gradientPink: GradientPoints;
	/**
	 * @desc Градиент Purple
	 * @tags gradient
	 */
	gradientPurple: GradientPoints;
	/**
	 * @desc Градиент RaspberryPink
	 * @tags gradient
	 */
	gradientRaspberryPink: GradientPoints;
	/**
	 * @desc Градиент Red
	 * @tags gradient
	 */
	gradientRed: GradientPoints;
	/**
	 * @desc Градиент Retrowave
	 * @tags gradient
	 */
	gradientRetrowave: GradientPoints;
	/**
	 * @desc Градиент Sunset
	 * @tags gradient
	 */
	gradientSunset: GradientPoints;
	/**
	 * @desc Градиент Turquoise
	 * @tags gradient
	 */
	gradientTurquoise: GradientPoints;
	/**
	 * @desc Градиент Twilight
	 * @tags gradient
	 */
	gradientTwilight: GradientPoints;
	/**
	 * @desc Градиент Unicorn
	 * @tags gradient
	 */
	gradientUnicorn: GradientPoints;
	/**
	 * @desc Градиент Violet
	 * @tags gradient
	 */
	gradientViolet: GradientPoints;
	/**
	 * @desc Градиент Yellow
	 * @tags gradient
	 */
	gradientYellow: GradientPoints;
	/**
	 * @desc Градиент YellowBright
	 * @tags gradient
	 */
	gradientYellowBright: GradientPoints;
	/**
	 * @desc Градиент HalloweenOrange
	 * @tags gradient
	 */
	gradientHalloweenOrange: GradientPoints;
	/**
	 * @desc Градиент HalloweenViolet
	 * @tags gradient
	 */
	gradientHalloweenViolet: GradientPoints;
	/**
	 * @desc Градиент NewYear
	 * @tags gradient
	 */
	gradientNewYear: GradientPoints;
	/**
	 * @desc Градиент Frost
	 * @tags gradient
	 */
	gradientFrost: GradientPoints;
	/**
	 * @desc Градиент Valentine
	 * @tags gradient
	 */
	gradientValentine: GradientPoints;
	/**
	 * @desc Градиент WarmValentine
	 * @tags gradient
	 */
	gradientWarmValentine: GradientPoints;
	/**
	 * @desc Градиент Sberkot
	 * @tags gradient
	 */
	gradientSberkot: GradientPoints;
	/**
	 * @desc Градиент Mable
	 * @tags gradient
	 */
	gradientMable: GradientPoints;
	/**
	 * @desc Градиент WomensDay
	 * @tags gradient
	 */
	gradientWomensDay: GradientPoints;
}

export interface LocalVkontakteAndroidColorsDescriptionStruct {
	colorSnippetBorderAlpha: ColorDescription;
	colorModalCardBorderAlpha: ColorDescription;
	colorLandingSnippetBorderAlpha: ColorDescription;
	colorActionSheetSeparatorAlpha: ColorDescription;
	colorInputBorder: ColorDescription;

	colorImForwardLineAlpha: ColorDescription;

	colorImBubbleBorderAlternateHighlightedAlpha: ColorDescription;

	colorImBubbleIncoming: ColorDescription;
	colorImBubbleIncomingAlternate: ColorDescription;
	colorImBubbleIncomingExpiring: ColorDescription;

	colorImBubbleOutgoing: ColorDescription;
	colorImBubbleOutgoingExpiringHighlighted: ColorDescription;

	colorImBubbleGiftText: ColorDescription;
	colorImBubbleGiftTextSecondary: ColorDescription;

	colorImTextName: ColorDescription;
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
