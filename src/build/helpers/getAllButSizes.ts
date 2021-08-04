const regexSize = /^(size|font|x\d+)/i;

export function getAllButSizes(
	theme: Record<string, any>,
	themeBase?: unknown,
): any {
	return Object.keys(theme).reduce<Record<string, any>>((acc, key) => {
		const value = theme[key];

		const lookupKey =
			typeof themeBase === 'string' && key.startsWith(themeBase)
				? key.slice(themeBase.length)
				: key;

		if (!regexSize.test(lookupKey)) {
			acc[key] = value;
		}

		return acc;
	}, {});
}
