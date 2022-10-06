import {Property} from 'csstype';

/**
 * Переменные отвечающие за параметры анимаций
 */
export interface Animations {
	/**
	 * @desc Параметры кривой анимации по умолчанию
	 * @tags animation
	 */
	animationEasingDefault: Property.TransitionTimingFunction;
	animationEasingPlatform: Property.TransitionTimingFunction;
	animationDurationS: string;
	animationDurationM: string;
	animationDurationL: string;
}
