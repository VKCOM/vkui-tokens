import { createPseudoRootFromCssVars } from '../build/themeProcessors/createPseudoRootFromCssVars/createPseudoRootFromCssVars';
import { processCustomMedia } from '../build/themeProcessors/customMedia/customMedia';
import { getExpandedThemeColors } from '../build/themeProcessors/expandColors/expandColors';
import { extractCssVarsStrict } from '../build/themeProcessors/extractCssVarsStrict/extractCssVarsStrict';
import { extractGeneralTokens } from '../build/themeProcessors/extractGeneralTokens/extractGeneralTokens';
import { extractVarsNames } from '../build/themeProcessors/extractVarsNames/extractVarsNames';
import { pixelifyValues } from '../build/themeProcessors/pixelifyValues/pixelifyValues';
import {
	PixelifyTheme,
	Theme,
	ThemeCssVars,
	ThemeCssVarsWide,
	ThemeDescription,
} from '../interfaces/general';
import { StaticTokens } from '../interfaces/general/tools/tokenValue';

export interface ExpandedThemeObject<T = Theme> {
	theme: StaticTokens<T>;
	pixelifyTheme: StaticTokens<PixelifyTheme<T>>;
	cssVarsThemeWide: StaticTokens<ThemeCssVarsWide<T>>;
	cssVarsTheme: StaticTokens<ThemeCssVars<T>>;
	pseudoThemeCssVars: StaticTokens<StaticTokens<T>>;
}

/**
 * На основе описания темы, генерирует рутовую тему
 */
export function expandRootTheme<TD = ThemeDescription, T = Theme>(
	themeDescription: TD,
): StaticTokens<T> {
	const expandedColors = getExpandedThemeColors(themeDescription);
	const generalTokens = extractGeneralTokens(themeDescription);
	const customMedia = processCustomMedia(themeDescription);

	return {
		...generalTokens,
		...expandedColors,
		...customMedia,
		themeType: 'root',
	} as any as StaticTokens<T>;
}

/**
 * Генерирует все виды ts-тем, на основе описания темы
 * Может работать и с любым интерфейсом и количеством переменных в теме
 */
export function expandAll<TD = ThemeDescription, T = Theme>(
	themeDescription: TD,
): ExpandedThemeObject<StaticTokens<T>> {
	const theme = expandRootTheme<TD, T>(themeDescription);
	const pixelifyTheme = pixelifyValues(theme);

	const cssVarsThemeWide = extractVarsNames<StaticTokens<T>>(theme);
	const cssVarsTheme = extractCssVarsStrict<StaticTokens<T>>(cssVarsThemeWide);

	const pseudoThemeCssVars = createPseudoRootFromCssVars<StaticTokens<T>>(theme, cssVarsThemeWide);

	return {
		theme,
		pixelifyTheme,
		cssVarsTheme,
		cssVarsThemeWide,
		pseudoThemeCssVars,
	} as any as ExpandedThemeObject<StaticTokens<T>>;
}
