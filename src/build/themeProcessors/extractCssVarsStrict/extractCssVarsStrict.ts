import type { Theme, ThemeCssVars, ThemeCssVarsWide } from '../../../interfaces/general/index.ts';

function removeOriginValue(object: Record<string, any>) {
	if (typeof object === 'object') {
		if ('originalValue' in object) {
			// eslint-disable-next-line no-param-reassign
			delete object.originalValue;
			return;
		}

		Object.entries(object).forEach(([key, value]) => {
			if (key === 'themeType') {
				// eslint-disable-next-line no-param-reassign
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
