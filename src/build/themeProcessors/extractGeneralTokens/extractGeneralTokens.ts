import lodash from 'lodash';

import { AdaptiveTokens, ThemeDescription, ThemeGeneral } from '@/interfaces/general';

/**
 * Процессор, который возвращает новый объект на основе описания темы (ThemeDescription),
 * в котором содержатся значения общие между Theme и Description
 *
 * Другими словами, процессор извлекает все токены которые находятся в ThemeGeneral
 *
 */
export function extractGeneralTokens<TD = ThemeDescription, TG = ThemeGeneral>(
	themeDescription: TD,
): TG {
	const copyDescription: any = JSON.parse(JSON.stringify(themeDescription));
	const tokens = Object.keys(themeDescription);

	// Разворачиваем токены-функции
	for (const token of tokens) {
		const tokenValue = themeDescription[token];

		// заполняем пустые значения режима compact значениями из regular
		copyDescription[token] = mergeCompactAdativityWithRegular(tokenValue);

		if (typeof tokenValue === 'function') {
			copyDescription[token] = tokenValue(themeDescription);
		}
	}

	delete copyDescription.colors;
	delete copyDescription.colorsScheme;

	return copyDescription;
}

function isAdoptiveToken(
	tokenValue: ThemeGeneral[keyof ThemeGeneral],
): tokenValue is AdaptiveTokens[keyof AdaptiveTokens] {
	return typeof tokenValue === 'object' && 'regular' in tokenValue;
}

function mergeCompactAdativityWithRegular(tokenValue: ThemeGeneral[keyof ThemeGeneral]) {
	if (!isAdoptiveToken(tokenValue)) {
		return tokenValue;
	}

	const compact =
		typeof tokenValue.regular === 'object'
			? lodash.merge(lodash.cloneDeep(tokenValue.regular), tokenValue.compact)
			: tokenValue.compact ?? tokenValue.regular;

	return { ...tokenValue, compact };
}
