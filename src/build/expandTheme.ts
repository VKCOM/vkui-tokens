import { createPseudoRootFromCssVars } from '../build/themeProcessors/createPseudoRootFromCssVars/createPseudoRootFromCssVars.ts';
import { processCustomMedia } from '../build/themeProcessors/customMedia/customMedia.ts';
import { getExpandedThemeColors } from '../build/themeProcessors/expandColors/expandColors.ts';
import { extractCssVarsStrict } from '../build/themeProcessors/extractCssVarsStrict/extractCssVarsStrict.ts';
import { extractGeneralTokens } from '../build/themeProcessors/extractGeneralTokens/extractGeneralTokens.ts';
import { extractVarsNames } from '../build/themeProcessors/extractVarsNames/extractVarsNames.ts';
import { pixelifyValues } from '../build/themeProcessors/pixelifyValues/pixelifyValues.ts';
import type {
	PixelifyTheme,
	Theme,
	ThemeCssVars,
	ThemeCssVarsWide,
	ThemeDescription,
} from '../interfaces/general/index.ts';
import type { StaticTokens } from '../interfaces/general/tools/tokenValue.ts';

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
