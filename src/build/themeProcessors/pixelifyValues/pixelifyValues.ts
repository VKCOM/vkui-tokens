import type { PixelifyTheme, Theme } from '../../../interfaces/general/index.ts';

const numericCSSProperties = /^(breakpoints$|fontWeight|zIndex|opacity|tone)/i;

/**
 * Ключи, внутри которых числовые значения не нужно пикселифицировать
 */
const noPixelifyParentKeys = new Set(['fontVariationSettings']);

/**
 * Процессор, который превращает численные значения переменных в строковые
 * пример fontSize: 14 -> fontSize: "14px"
 */
export function pixelifyValues<T = Theme>(sourceTheme: T, parentKey?: string): PixelifyTheme<T> {
	const theme: Partial<PixelifyTheme> = JSON.parse(JSON.stringify(sourceTheme));

	Object.entries(theme).forEach(([key, value]) => {
		if (numericCSSProperties.test(key)) {
			return;
		}

		if (key === 'themeType') {
			theme[key as string] = 'pixelify';
		}

		if (typeof value === 'object') {
			theme[key] = pixelifyValues(value as any as Partial<T>, key);
		}

		if (typeof value === 'number' && !noPixelifyParentKeys.has(parentKey ?? '')) {
			theme[key] = `${value}px`;
		}
	});

	return theme as PixelifyTheme<T>;
}
