import {createPseudoRootFromCssVars} from '@/build/themeProcessors/createPseudoRootFromCssVars/createPseudoRootFromCssVars';
import {processCustomMedia} from '@/build/themeProcessors/customMedia/customMedia';
import {getExpandedThemeColors} from '@/build/themeProcessors/expandColors/expandColors';
import {extractCssVarsStrict} from '@/build/themeProcessors/extractCssVarsStrict/extractCssVarsStrict';
import {extractGeneralTokens} from '@/build/themeProcessors/extractGeneralTokens/extractGeneralTokens';
import {extractVarsNames} from '@/build/themeProcessors/extractVarsNames/extractVarsNames';
import {pixelifyValues} from '@/build/themeProcessors/pixelifyValues/pixelifyValues';
import {
	PixelifyTheme,
	Theme,
	ThemeCssVars,
	ThemeCssVarsWide,
	ThemeDescription,
} from '@/interfaces/general';

export interface ExpandedThemeObject<T = Theme> {
	theme: T;
	pixelifyTheme: PixelifyTheme<T>;
	cssVarsThemeWide: ThemeCssVarsWide<T>;
	cssVarsTheme: ThemeCssVars<T>;
	pseudoThemeCssVars: PixelifyTheme<T>;
}

/**
 * На основе описания темы, генерирует рутовую тему
 */
export function expandRootTheme<TD = ThemeDescription, T = Theme>(
	themeDescription: TD,
): T {
	const expandedColors = getExpandedThemeColors(themeDescription);
	const generalTokens = extractGeneralTokens(themeDescription);
	const customMedia = processCustomMedia(themeDescription);

	return ({
		...generalTokens,
		...expandedColors,
		...customMedia,
		themeType: 'root',
	} as any) as T;
}

/**
 * Генерирует все виды ts-тем, на основе описания темы
 * Может работать и с любым интерфейсом и количеством переменных в теме
 */
export function expandAll<TD = ThemeDescription, T = Theme>(
	themeDescription: TD,
): ExpandedThemeObject<T> {
	const theme = expandRootTheme<TD, T>(themeDescription);
	const pixelifyTheme = pixelifyValues(theme);

	const cssVarsThemeWide = extractVarsNames<T>(theme);
	const cssVarsTheme = extractCssVarsStrict<T>(cssVarsThemeWide);

	const pseudoThemeCssVars = createPseudoRootFromCssVars<T>(
		theme,
		cssVarsThemeWide,
	);

	return {
		theme,
		pixelifyTheme,
		cssVarsTheme,
		cssVarsThemeWide,
		pseudoThemeCssVars,
	};
}
