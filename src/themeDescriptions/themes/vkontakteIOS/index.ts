import type { ThemeVkontakteIOSDescription } from '../../../interfaces/themes/vkontakteIOS/index.ts';
import type { ThemeVkontakteIOSDarkDescription } from '../../../interfaces/themes/vkontakteIOSDark/index.ts';
import { vkIOSTheme, vkIOSThemeDark } from '../vkIOS/index.ts';
import {
  vkontakteLocalColorDark,
  vkontakteLocalColorLight,
  vkontakteMobileFonts,
  vkontakteTokens,
} from '../vkontakteAndroid/index.ts';

const themeNameBase = 'vkontakteIOS';

export const vkontakteIOSTheme: ThemeVkontakteIOSDescription = {
  ...vkIOSTheme,
  themeName: themeNameBase,
  themeNameBase,
  themeInheritsFrom: vkIOSTheme.themeName,

  colors: {
    ...vkIOSTheme.colors,
    ...vkontakteLocalColorLight,
  },
  ...vkontakteTokens,
};

export const vkontakteIOSThemeDark: ThemeVkontakteIOSDarkDescription = {
  ...vkIOSThemeDark,
  themeName: `${themeNameBase}Dark`,
  themeNameBase,
  themeInheritsFrom: vkIOSThemeDark.themeName,
  colorsScheme: 'dark',

  colors: {
    ...vkIOSThemeDark.colors,
    ...vkontakteLocalColorDark,
  },
  ...vkontakteMobileFonts,
  ...vkontakteTokens,
};
