import { describe, expect, it } from '@jest/globals';

import { themes } from '../themeDescriptions/index.ts';
import { expandAll } from './expandTheme.ts';

describe('shapshots', () => {
	themes.forEach((theme) => {
		describe(`${(theme as { themeName: string }).themeName} theme`, () => {
			const expandedThemeObject = expandAll(theme);

			it('should match root theme snapshot', () => {
				expect(expandedThemeObject.theme).toMatchSnapshot();
			});

			it('should match pixelify theme snapshot', () => {
				expect(expandedThemeObject.pixelifyTheme).toMatchSnapshot();
			});

			it('should match cssVars snapshot', () => {
				expect(expandedThemeObject.cssVarsTheme).toMatchSnapshot();
			});

			it('should match pseudo theme from CssVars', () => {
				expect(expandedThemeObject.pseudoThemeCssVars).toMatchSnapshot();
			});
		});
	});
});
