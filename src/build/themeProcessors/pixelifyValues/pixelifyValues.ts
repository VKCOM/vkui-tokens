import {PixelifyTheme, Theme} from '@/interfaces/general';

const numericCSSProperties = new Set(['breakpoints', 'fontWeight']);

/**
 * Процессор, который превращает численные значения переменных в строковые
 * пример fontSize: 14 -> fontSize: "14px"
 */
export function pixelifyValues<T = Theme>(sourceTheme: T): PixelifyTheme<T> {
	const theme: Partial<PixelifyTheme> = JSON.parse(
		JSON.stringify(sourceTheme),
	);

	Object.entries(theme).forEach(([key, value]) => {
		if (numericCSSProperties.has(key)) {
			return;
		}

		if (key === 'themeType') {
			theme[key as string] = 'pixelify';
		}

		if (typeof value === 'object') {
			theme[key] = pixelifyValues(value as Partial<T>);
		}

		if (Number.isInteger(value)) {
			theme[key] = `${value}px`;
		}
	});

	return theme as PixelifyTheme<T>;
}
