import type { ColorsDescription } from '../../../interfaces/general/index.ts';
import type { ThemeDobroDescription } from '../../../interfaces/themes/dobro/index.ts';
import { colorFromFigma, darkElevation, darkGradient, fonts, lightTheme } from '../../base/vk.ts';

const lightColors: ColorsDescription = colorFromFigma('light');

const darkColors: ColorsDescription = colorFromFigma('dark');

export const dobroTheme: ThemeDobroDescription = {
  ...lightTheme,
  ...lightColors,
  ...fonts,

  themeName: 'dobro',
  themeNameBase: 'dobro',

  dobroFontFamily600: 'VK Sans Display, sans-serif, Arial',
  dobroFontFamily500: 'VK Sans Display Medium, sans-serif, Arial',
  dobroFontFamily400: 'VK Sans Display Regular, sans-serif, Arial',

  dobroPortalZIndex: 96,
  dobroPopoutZIndex: 96,
  dobroModalZIndex: 97,
  dobroMenuZIndex: 98,

  breakpoints: {
    touch: {
      breakpoint: 0,
      adaptiveValue: 'regular',
    },
    tablet: {
      breakpoint: 768,
      adaptiveValue: 'regular',
    },
    desktopS: {
      breakpoint: 1004,
      adaptiveValue: 'compact',
    },
    desktopM: {
      breakpoint: 1244,
      adaptiveValue: 'compact',
    },
  },
};

export const dobroDarkTheme: ThemeDobroDescription = {
  ...dobroTheme,
  ...darkColors,
  ...darkGradient,
  ...darkElevation,
  themeName: 'dobroDark',
  themeInheritsFrom: 'dobro',
  colorsScheme: 'dark',
};
