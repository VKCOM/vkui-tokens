/**
 * Структура переменной в CssVars теме
 */
import {Adaptive} from '.';

export interface CssVarValue {
	/**
	 * Имя переменной. Например '--paradigm--padding_base--touch'
	 */
	name: string;
	/**
	 * Значение, которое можно подставить в стили.
	 * Например 'var(--paradigm--padding_base--touch, 16px)'
	 */
	value: string;
}

export interface WideCssVarValue<T> extends CssVarValue {
	originalValue: T;
}

type Valuefy<
	T,
	WithoutValue extends boolean = false
> = WithoutValue extends true ? CssVarValue : WideCssVarValue<T>;

export type NamifyObject<T, W extends boolean = false> = T extends Adaptive<
	T[keyof T]
>
	? {
			auto: NamifyObject<T['regular'], true>;
			regular: NamifyObject<T['regular'], W>;
	  } & {
			[key in Exclude<keyof T, 'regular'>]?: NamifyObject<
				Partial<T['regular']>,
				W
			>;
	  }
	: T extends Record<string, unknown>
	? {
			[key in keyof T]: NamifyObject<T[key], W>;
	  }
	: Valuefy<T, W>;
