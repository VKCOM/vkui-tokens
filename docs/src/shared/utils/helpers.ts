export const isExist = (obj: any, key: string) =>
	Object.prototype.hasOwnProperty.call(obj, key);
