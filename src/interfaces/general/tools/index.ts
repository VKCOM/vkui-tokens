import { DefaultViewports, ViewportsTuple } from './viewports.ts';

/**
 * Cтруктура адаптивной переменной.
 * Обязательное состояние по-умолчанию — regular
 * остальные состояния могут переопределять переменную полностью или
 * частично, если это объект
 */
export type Adaptive<T> = {
	/**
	 * основной параметр
	 */
	regular: T;

	/**
	 * Далее идут возможные адаптивные расширения токена
	 * Использовать в порядке снизу-вверх с учётом комментария
	 */
	compactX?: Partial<T>;
	compact?: Partial<T>;
	/* regular: T */
	large?: Partial<T>;
	largeX?: Partial<T>;
	largeXX?: Partial<T>;
};

export const adaptiveKeys: (keyof Adaptive<any>)[] = [
	'regular',
	'compactX',
	'compact',
	'large',
	'largeX',
	'largeXX',
];

/**
 * Брейкпоинты используемые в теме (можно не указывать), тогда тема будет как-бы flat
 */
export type Breakpoints<Vt extends ViewportsTuple = DefaultViewports> = {
	breakpoints?: {
		[key in Vt[number]]: {
			breakpoint: key extends Vt[0] ? 0 : number;
			adaptiveValue: keyof Adaptive<any>;
		};
	};
};

/*
 * Ниже приведен пример брейкпоинтов и правил перехода из одного в другой для адаптивных переменных
 * Это используется в основном в paradigm темах (исторически) и не является частью основной темы
 * Однако если необходимо получить тему в которой переменные будут переходить автоматически между состояниями
 * а также разные другие вещи такие как правила для media query имеет смысл указать эту секцию
const exampleBreakpoints: Breakpoints<['touch', 'tablet', 'desktopS']> = {
	breakpoints: {
		touch: {
			breakpoint: 0,
			adaptiveValue: 'compact',
		},
		tablet: {
			breakpoint: 768,
			adaptiveValue: 'compact',
		},
		desktopS: {
			breakpoint: 1024,
			adaptiveValue: 'regular',
		},
	},
};
*/
