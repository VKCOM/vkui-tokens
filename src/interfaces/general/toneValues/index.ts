export interface ToneValues {
	/**
	 * @desc Прозрачность дисейбленных элементов
	 * @tags opacity
	 */
	opacityDisable: number;

	/**
	 * @desc Прозрачность дисейбленных элементов, подходящая под параметры доступности
	 * @tags opacity
	 */
	opacityDisableAccessibility: number;

	/**
	 * @desc Прозрачность нажатых элементов (если не используются active-версии цветов)
	 * @tags opacity
	 */
	opacityActive: number;
}
