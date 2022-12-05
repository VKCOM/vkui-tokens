import {Property} from 'csstype';

export interface Elevation {
	/**
	 * @desc Параметры тени уровень 4
	 * @tags elevation
	 */
	elevation4: Property.BoxShadow;

	/**
	 * @desc Параметры тени уровень 3
	 * @tags elevation
	 */
	elevation3: Property.BoxShadow;

	/**
	 * @desc Параметры тени уровень 2
	 * @tags elevation
	 */
	elevation2: Property.BoxShadow;

	/**
	 * @desc Параметры тени уровень 1. Самая маленькая
	 * @tags elevation
	 */
	elevation1: Property.BoxShadow;

	/**
	 * @desc Параметры тени уровень 1. Самая маленькая. Инвертированная.
	 *       Для элементов появляющихся в нижней части окна
	 * @tags elevation
	 */
	elevation1InvertY: Property.BoxShadow;
}
