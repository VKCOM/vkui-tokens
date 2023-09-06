import type { Property } from 'csstype';

/**
 * Переменные отвечающие за параметры анимаций
 */
export interface Animations {
	/**
	 * @desc Параметры кривой анимации по умолчанию
	 * @tags animation
	 */
	animationEasingDefault: Property.TransitionTimingFunction;

	/**
	 * @desc Параметры кривой анимации в зависимости от платформы
	 * @tags animation
	 */
	animationEasingPlatform: Property.TransitionTimingFunction;

	/**
	 * @desc Длительность анимации (минимальное значение)
	 * @tags animation
	 */
	animationDurationS: string;

	/**
	 * @desc Длительность анимации (среднее значение)
	 * @tags animation
	 */
	animationDurationM: string;

	/**
	 * @desc Длительность анимации (максимальное значение)
	 * @tags animation
	 */
	animationDurationL: string;
}
