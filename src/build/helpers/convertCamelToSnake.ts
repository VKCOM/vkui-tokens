/**
 * camelCase -> snake_case
 */
export function convertCamelToSnake(str: string): string {
	return str
		.replace(/w*([A-Z])/g, (letter) => `_${letter.toLowerCase()}`)
		.replace(/^_/, '');
}
