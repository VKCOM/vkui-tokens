// eslint-disable-next-line @typescript-eslint/ban-types
export function isNotFunction<T>(value: T): value is Exclude<T, Function> {
	return typeof value !== 'function';
}
