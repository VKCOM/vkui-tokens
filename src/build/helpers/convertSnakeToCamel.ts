/**
 * snake_case -> camelCase
 */
export function convertSnakeToCamel(snake: string, prefix = 'vkui'): string {
	return snake
		.replace(new RegExp(`^--${prefix}--`), '')
		.toLowerCase()
		.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''));
}
