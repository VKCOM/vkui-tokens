const regexSize = /^(size|font|x\d+)/;

export function getAllButSizes(theme: Record<string, any>): any {
	return Object.keys(theme).reduce<Record<string, any>>((acc, key) => {
		const value = theme[key];

		if (!regexSize.test(key)) {
			acc[key] = value;
		}

		return acc;
	}, {});
}
