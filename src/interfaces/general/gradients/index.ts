// TODO: Нормальный тип вместо unknown (поправить Type instantiation is excessively deep and possibly infinite)
export type GradientPoints = string | unknown;

export interface Gradients {
	/**
	 * @desc Параметры градиента черного цвета
	 * @tags gradient
	 * @deprecated используйте gradient или gradientTint
	 */
	// TODO [>=5]: удалить за ненадобностью
	gradientBlack: GradientPoints;

	/**
	 * @desc Параметры градиента белого цвета
	 * @tags gradient
	 * @deprecated используйте gradient или gradientTint
	 */
	// TODO [>=5]: удалить за ненадобностью
	gradientWhite: GradientPoints;

	/**
	 * @desc Параметры градиента нейтрального цвета
	 * @tags gradient
	 */
	gradientTint: GradientPoints;
	/**
	 * @desc Параметры градиента дефолтного цвета
	 * @tags gradient
	 */
	gradient: GradientPoints;
}
