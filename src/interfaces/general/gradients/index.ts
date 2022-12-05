export type GradientPoints = string;

export interface Gradients {
	/**
	 * @desc Параметры градиента черного цвета
	 * @tags gradient
	 */
	gradientBlack: GradientPoints;

	/**
	 * @desc Параметры градиента белого цвета
	 * @tags gradient
	 */
	gradientWhite: GradientPoints;

	/**
	 * @desc Параметры градиента нейтрального цвета
	 * @tags gradient
	 */
	gradientTint: GradientPoints;
}
