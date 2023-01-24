import { PixelifyTheme, Theme, ThemeCssVars, ThemeCssVarsWide } from '@/interfaces/general';

function fillNewValues({
	objectTo,
	objectFrom,
	key,
}: {
	objectTo: Record<string, any>;
	objectFrom: Record<string, any>;
	key: string;
}) {
	if (key === 'breakpoints') {
		return;
	}

	if (key === 'themeType') {
		objectTo[key] = 'pixelify';
		return;
	}

	const value = objectTo[key];

	if (typeof value !== 'object' && 'value' in objectFrom[key]) {
		objectTo[key] = objectFrom[key].value;
		return;
	}

	Object.keys(value).forEach((nestedKey) => {
		fillNewValues({
			objectTo: value,
			objectFrom: objectFrom[key],
			key: nestedKey,
		});
	});
}

export function createPseudoRootFromCssVars<T = Theme>(
	pseudoTheme: T,
	cssVarsTheme: ThemeCssVars<T> | ThemeCssVarsWide<T>,
): PixelifyTheme<T> {
	const theme: PixelifyTheme<T> = JSON.parse(JSON.stringify(pseudoTheme));

	Object.keys(theme).forEach((key) => {
		fillNewValues({ objectTo: theme, objectFrom: cssVarsTheme, key });
	});

	return theme;
}
