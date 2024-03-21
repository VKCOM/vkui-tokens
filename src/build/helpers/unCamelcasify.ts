// 2Xs, 3Xs, 4S
const SIZE_SUB_GROUP = '\\d[A-Z][a-z]{0,1}(?![^A-Z])';
const REPLACE_REGEXP = new RegExp(`(?:^\\w|${SIZE_SUB_GROUP}|[A-Z]|\\b\\w)`, 'g');

export function unCamelcasify(str: string, delimeter = '-'): string {
	return str.replace(REPLACE_REGEXP, (letter, index) => {
		return `${index === 0 ? '' : delimeter}${letter.toLowerCase()}`;
	});
}
