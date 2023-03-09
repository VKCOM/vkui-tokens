import { Theme, ThemeCssVars, ThemeCssVarsWide } from '@/interfaces/general';

function removeOriginValue(object: Record<string, any>) {
	if (typeof object === 'object') {
		if ('originalValue' in object) {
			delete object.originalValue;
			return;
		}

		Object.entries(object).forEach(([key, value]) => {
			if (key === 'themeType') {
				object[key] = 'cssVars';
				return;
			}

			removeOriginValue(value);
		});
	}
}

export function extractCssVarsStrict<T = Theme>(sourceTheme: ThemeCssVarsWide<T>): ThemeCssVars<T> {
	const theme = JSON.parse(JSON.stringify(sourceTheme));

	removeOriginValue(theme);

	return theme as ThemeCssVars<T>;
}
