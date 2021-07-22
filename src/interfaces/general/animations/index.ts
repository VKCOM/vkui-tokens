import {Property} from 'csstype';

/**
 * Переменные отвечающие за параметры анимаций
 */
export interface Animations {
	animationEasingDefault: Property.TransitionTimingFunction;
	animationDurationS: string;
	animationDurationM: string;
	animationDurationL: string;
}
