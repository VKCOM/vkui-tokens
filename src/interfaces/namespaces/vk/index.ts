import { Theme, ThemeCssVars, ThemeDescription } from '@/interfaces/general';
import { GradientPoints } from '@/interfaces/general/gradients';
import { Tokens } from '@/interfaces/general/tools/tokenValue';

export interface VkGradients {
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

export interface VkTheme extends Theme, VkGradients {}
export interface VkThemeDescription extends ThemeDescription, Tokens<VkGradients> {}
export interface VkThemeCssVars extends ThemeCssVars<VkTheme> {}
