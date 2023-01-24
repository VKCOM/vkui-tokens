const regexSize = /^(size|font|x\d+)/i;

export function getAllButSizes(theme: Record<string, any>, themeNameBase?: unknown): any {
	return Object.keys(theme).reduce<Record<string, any>>((acc, key) => {
		const value = theme[key];

		const lookupKey =
			typeof themeNameBase === 'string' && key.startsWith(themeNameBase)
				? key.slice(themeNameBase.length)
				: key;

		if (!regexSize.test(lookupKey)) {
			acc[key] = value;
		}

		return acc;
	}, {});
}
