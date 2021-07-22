export function capitalize(str: string): string {
	if (!str.length) {
		return str;
	}

	return `${str[0].toUpperCase()}${str.slice(1, str.length)}`;
}
