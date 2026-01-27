export interface ToneValues {
	/**
	 * @desc Прозрачность неинтерактивных элементов
	 * @tags opacity
	 */
	opacityDisable: number;

	/**
	 * @desc Прозрачность неинтерактивных элементов, подходящая под параметры доступности
	 * @tags opacity
	 * @deprecated
	 * Неинтерактивные элементы не обязаны соответствовать требованиям доступности по контрастности
	 * https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html#inactive-controls
	 */
	opacityDisableAccessibility: number;

	/**
	 * @desc Прозрачность нажатых элементов (если не используются active-версии цветов)
	 * @tags opacity
	 */
	opacityActive: number;
}
