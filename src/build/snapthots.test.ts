import { describe, it } from 'node:test';

import { themes } from '../themeDescriptions/index.ts';
import { expandAll } from './expandTheme.ts';

describe('snapshots', () => {
  themes.forEach((theme) => {
    describe(`${(theme as { themeName: string }).themeName} theme`, () => {
      const expandedThemeObject = expandAll(theme);

      it('should match root theme snapshot', (t) => {
        t.assert.snapshot(expandedThemeObject.theme);
      });

      it('should match pixelify theme snapshot', (t) => {
        t.assert.snapshot(expandedThemeObject.pixelifyTheme);
      });

      it('should match cssVars snapshot', (t) => {
        t.assert.snapshot(expandedThemeObject.cssVarsTheme);
      });

      it('should match pseudo theme from CssVars', (t) => {
        t.assert.snapshot(expandedThemeObject.pseudoThemeCssVars);
      });
    });
  });
});
