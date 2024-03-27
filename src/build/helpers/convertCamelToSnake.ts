/**
 * camelCase -> snake_case
 */

// 2Xs, 3Xs, 4S
export const SIZE_SUB_GROUP = '[0-9][X,S,M,L][s,m,l]{0,1}(?=([A-Z]|[0-9][A-Z]|$))';
const REPLACE_REGEXP = new RegExp(`(${SIZE_SUB_GROUP}|[A-Z])`, 'g');

export function convertCamelToSnake(str: string): string {
	return str.replace(REPLACE_REGEXP, (letter) => `_${letter.toLowerCase()}`).replace(/^_/, '');
}
