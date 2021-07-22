export function unCamelcasify(str: string, delimeter = '-'): string {
	return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
		return `${index === 0 ? '' : delimeter}${letter.toLowerCase()}`;
	});
}
