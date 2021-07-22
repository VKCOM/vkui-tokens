import {ThemeDescription, ThemeGeneral} from '@/interfaces/general';

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

	delete copyDescription.colors;
	delete copyDescription.colorsScheme;

	return copyDescription;
}
