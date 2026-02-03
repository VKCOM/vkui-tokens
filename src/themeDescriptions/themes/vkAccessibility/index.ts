import type { ThemeVkAccessibilityDescription } from '../../../interfaces/themes/vkAccessibility/index.ts';
import type { ThemeVkAccessibilityDarkDescription } from '../../../interfaces/themes/vkAccessibilityDark/index.ts';
import { darkColors, darkTheme, lightColors, lightTheme } from '../../base/vk.ts';

export const vkAccessibilityTheme: ThemeVkAccessibilityDescription = {
  ...lightTheme,
  themeName: 'vkAccessibility',
  themeNameBase: 'vkAccessibility',
  themeInheritsFrom: 'vkBase',

  colors: {
    ...lightColors.colors,

    // Text
    colorTextSubhead: '#58636F',
    colorTextSecondary: '#65707D',
    colorTextTertiary: '#848D98',

    // Icon
    colorIconMedium: '#65707D',
    colorIconMediumAlpha: 'rgba(0, 0, 0, 55%)',
    colorIconSecondary: '#868d97',
    colorIconSecondaryAlpha: 'rgba(0, 0, 0, 44%)',
    colorIconTertiary: '#a6adb7',
    colorIconTertiaryAlpha: 'rgba(0, 0, 0, 32%)',

    // Background
    colorFieldBackground: '#F5F5F5',
    colorSearchFieldBackground: '#F2F3F5',

    // Other
    colorImagePlaceholder: '#F5F5F5',
    colorWriteBarInputBackground: '#F5F5F5',
  },
};

export const vkAccessibilityThemeDark: ThemeVkAccessibilityDarkDescription = {
  ...vkAccessibilityTheme,
  ...darkTheme,

  themeName: 'vkAccessibilityDark',
  themeNameBase: 'vkAccessibility',
  themeInheritsFrom: 'vkBaseDark',
  colorsScheme: 'dark',

  colors: {
    ...darkColors.colors,

    // Text
    colorTextSubhead: '#B9BABF',
    colorTextSecondary: '#909294',
    colorTextTertiary: '#6B6D6F',

    // Icon
    colorIconMedium: '#B9BABF',
    colorIconMediumAlpha: 'rgba(247, 248, 255, 70%)',
    colorIconSecondary: '#898B8D',
    colorIconSecondaryAlpha: 'rgba(248, 252, 255, 50%)',
    colorIconTertiary: '#5D5F61',
    colorIconTertiaryAlpha: 'rgba(246, 250, 255, 37%)',

    // Background
    colorFieldBackground: '#232324',
    colorSearchFieldBackground: '#2A2A2B',
  },
};
