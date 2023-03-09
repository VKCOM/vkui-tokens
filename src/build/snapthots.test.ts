import { themes } from '@/themeDescriptions';

import { expandAll } from './expandTheme';

describe('shapshots', () => {
	themes.forEach((theme) => {
		describe(`${theme.themeName} theme`, () => {
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
