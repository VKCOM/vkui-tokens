import type { ThemeVkIdOkIOSDescription } from '../../../interfaces/themes/vkIdOkIOS/index.ts';
import type { ThemeVkIdOkIOSDarkDescription } from '../../../interfaces/themes/vkIdOkIOSDark/index.ts';
import { vkIdOkTheme, vkIdOkThemeDark } from '../../themes/vkIdOk/index.ts';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS/index.ts';

export const vkIdOkIOSTheme: ThemeVkIdOkIOSDescription = {
  ...vkIOSTheme,
  themeName: 'vkIdOkIOS',
  themeNameBase: 'vkIdOkIOS',
  colors: {
    ...vkIOSTheme.colors,
    ...vkIdOkTheme.colors,
  },
};

export const vkIdOkIOSThemeDark: ThemeVkIdOkIOSDarkDescription = {
  ...vkIOSThemeDark,
  themeName: 'vkIdOkIOSDark',
  themeNameBase: 'vkIdOkIOS',
  colors: {
    ...vkIOSThemeDark.colors,
    ...vkIdOkThemeDark.colors,
  },
};
