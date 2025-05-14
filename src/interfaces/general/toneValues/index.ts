export interface ToneValues {
	/**
	 * @desc Прозрачность неинтерактивных элементов
	 * @tags opacity
	 */
	opacityDisable: number;

	/**
	 * @desc Прозрачность неинтерактивных элементов, подходящая под параметры доступности
	 * @tags opacity
	 */
	opacityDisableAccessibility: number;

	/**
	 * @desc Прозрачность нажатых элементов (если не используются active-версии цветов)
	 * @tags opacity
	 */
	opacityActive: number;
}
