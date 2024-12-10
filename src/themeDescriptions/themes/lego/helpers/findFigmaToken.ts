function toFigmaName(key: string, prefix = '') {
	const figmaPascalCaseName = key.replace('color', '');
	if (prefix) {
		return prefix + figmaPascalCaseName;
	}
	return figmaPascalCaseName.charAt(0).toLowerCase() + figmaPascalCaseName.slice(1);
}

export function findFigmaToken(json: any, key: string) {
	// Группировка в фигме может различаться, поэтому преобразование имени может быть с разными префиксами
	// Токены без особой группы в коде могут лежать в разных группах в фигме: Other, Palette и т.д.

	return (
		json.appearance[toFigmaName(key)] ||
		json.appearance[toFigmaName(key, 'other')] ||
		json.appearance[toFigmaName(key, 'palette')] ||
		json.appearance[toFigmaName(key, 'stroke')] ||
		json.appearance[toFigmaName(key, 'background')] ||
		null
	);
}
