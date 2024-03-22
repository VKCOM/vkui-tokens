/**
 * camelCase -> snake_case
 */

// 2Xs, 3Xs, 4S
const SIZE_SUB_GROUP = '\\d[A-Z][a-z]{0,1}(?![0-9])';
const REPLACE_REGEXP = new RegExp(`(${SIZE_SUB_GROUP}|[A-Z])`, 'g');
export function convertCamelToSnake(str: string): string {
	return str.replace(REPLACE_REGEXP, (letter) => `_${letter.toLowerCase()}`).replace(/^_/, '');
}
