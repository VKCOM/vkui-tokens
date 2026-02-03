import type { Theme, ThemeDescription } from '../../general/index.ts';
import type { CustomMediaByViewport } from '../../general/tools/customMedia.ts';
import type { Breakpoints } from '../../general/tools/index.ts';
import type { DefaultViewports, ViewportsTuple } from '../../general/tools/viewports.ts';
import type { ParadigmThemeCssVars } from '../../namespaces/paradigm/index.ts';

type DobroViewportsTuple = ['touch', 'tablet', 'desktopS', 'desktopM'];

interface ThemeDobroCustomTokens {
  dobroPortalZIndex: number;
  dobroPopoutZIndex: number;
  dobroModalZIndex: number;
  dobroMenuZIndex: number;
}

interface ThemeDobroFonts {
  dobroFontFamily600: string;
  dobroFontFamily500: string;
  dobroFontFamily400: string;
}

interface ThemeDobroStatic<Vt extends ViewportsTuple = DefaultViewports>
  extends Theme,
    ThemeDobroCustomTokens,
    ThemeDobroFonts,
    Breakpoints<Vt> {}

type ThemeDobroStaticType<Vt extends ViewportsTuple = DefaultViewports> = ThemeDobroStatic<Vt> &
  CustomMediaByViewport<Vt>;

interface ThemeDobroDescriptionStatic<Vt extends ViewportsTuple = DefaultViewports>
  extends ThemeDescription,
    ThemeDobroCustomTokens,
    ThemeDobroFonts,
    Breakpoints<Vt> {}

interface ThemeDobroCssVarsStatic extends ParadigmThemeCssVars<DobroViewportsTuple, ThemeDobro> {}

export type ThemeDobro = ThemeDobroStaticType<DobroViewportsTuple>;
export type ThemeDobroDescription = ThemeDobroDescriptionStatic<DobroViewportsTuple>;
export type ThemeDobroCssVars = ThemeDobroCssVarsStatic;
