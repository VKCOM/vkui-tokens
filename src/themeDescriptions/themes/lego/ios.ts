import type { ThemeLegoIOSDescription } from '../../../interfaces/themes/legoIOS/index.ts';
import type { ThemeLegoIOSDarkDescription } from '../../../interfaces/themes/legoIOSDark/index.ts';
import { darkElevation, darkGradient } from '../../base/vk.ts';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS/index.ts';
import { vkontakteIOSTheme, vkontakteIOSThemeDark } from '../../themes/vkontakteIOS/index.ts';
import figma from './figma.json' with { type: 'json' };
import { overwriteFromFigmaJSON } from './helpers/overwriteFromFigmaJSON.ts';

export const legoIOSTheme: ThemeLegoIOSDescription = {
  ...vkIOSTheme, // импорт светлой базовой темы

  themeName: 'legoIOS', // название текущей темы
  themeNameBase: 'legoIOS', // название светлой (базовой) темы
  themeInheritsFrom: 'vkIOS', // название родительской темы

  colors: {
    ...vkIOSTheme.colors,
    // Переопределение переменных
    ...overwriteFromFigmaJSON(vkontakteIOSTheme.colors, 'appearance', 'light', figma),
  },
  sizeBasePaddingHorizontal: {
    regular: figma.tokens.sizeBasePaddingHorizontal.iOS,
  },
  sizeCellHeight: {
    regular: figma.tokens.sizeCellHeight.iOS,
    compact: figma.tokens.sizeCellHeight.desktop,
  },
  sizeButtonExtraSmallHeight: {
    regular: figma.tokens.sizeButtonExtraSmallHeight.iOS,
    compact: figma.tokens.sizeButtonExtraSmallHeight.desktop,
  },
  sizeButtonSmallHeight: {
    regular: figma.tokens.sizeButtonSmallHeight.iOS,
    compact: figma.tokens.sizeButtonSmallHeight.desktop,
  },
  sizeButtonMediumHeight: {
    regular: figma.tokens.sizeButtonMediumHeight.iOS,
    compact: figma.tokens.sizeButtonMediumHeight.desktop,
  },
  sizeButtonLargeHeight: {
    regular: figma.tokens.sizeButtonLargeHeight.iOS,
    compact: figma.tokens.sizeButtonLargeHeight.desktop,
  },
  opacityDisable: figma.tokens.opacityDisabled.iOS / 100,
  opacityDisableAccessibility: figma.tokens.opacityDisabled.iOS / 100,
};

export const legoIOSThemeDark: ThemeLegoIOSDarkDescription = {
  ...vkIOSThemeDark, // импорт тёмной базовой темы
  ...legoIOSTheme, // импорт светлой версии текущей темы,
  ...darkGradient, // переключаем наследованные градиенты на тёмную тему
  ...darkElevation, // переключаем наследованные тени на тёмную тему

  themeName: 'legoIOSDark', // название текущей темы
  themeNameBase: 'legoIOS', // название светлой (базовой) темы
  themeInheritsFrom: 'vkIOSDark', // название родительской темы
  colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

  colors: {
    ...vkIOSThemeDark.colors,
    // Переопределение переменных
    ...overwriteFromFigmaJSON(vkontakteIOSThemeDark.colors, 'appearance', 'dark', figma),
  },
};
