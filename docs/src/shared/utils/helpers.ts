export function isExist(obj: unknown, key: string): boolean {
	return Object.prototype.hasOwnProperty.call(obj, key);
}
