/**
 * Тип, который возвращает дифф между двумя объектами
 */
export type Diff<T, U> = T extends U ? never : T;

/**
 * Получить размер кортежа
 */
export type GetLength<T extends readonly any[]> = T['length'];

/**
 * Получить кортеж БЕЗ первого элемента
 */
export type DropFirstInTuple<T extends readonly any[]> = ((...args: T) => any) extends (
	arg: any,
	...rest: infer U
) => any
	? U
	: T;

/**
 * Тип, позволяющий получить последний кортежа
 */
export type GetLast<T extends readonly any[]> = T[GetLength<DropFirstInTuple<T>>];

/**
 * Тип который может deep изменять свойства number -> number | string
 */
export type StringifyObject<Base> = {
	[Key in keyof Base]: Base[Key] extends number
		? number | string
		: Base[Key] extends Record<string, any>
		? StringifyObject<Base[Key]>
		: Base[Key];
};

/**
 * Как Partial, но уходящий вглубь.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
	  }
	: T;
