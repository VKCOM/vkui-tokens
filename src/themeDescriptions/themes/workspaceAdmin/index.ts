import type { Adaptive } from '../../../interfaces/general/tools/index.ts';
import type { Font } from '../../../interfaces/general/typography/index.ts';
import type { ThemeWorkspaceAdminDescription } from '../../../interfaces/themes/workspaceAdmin/index.ts';
import type { ThemeWorkspaceAdminDarkDescription } from '../../../interfaces/themes/workspaceAdminDark/index.ts';
import { darkTheme, lightTheme } from '../../base/paradigm.ts';

export const workspaceAdminTheme: ThemeWorkspaceAdminDescription = {
  ...lightTheme,
  themeName: 'workspaceAdmin',
  themeNameBase: 'workspaceAdmin',
  colors: {
    ...lightTheme.colors,

    colorBackground: '#F6F7F8',
    colorBackgroundAccent: {
      normal: '#0077FF',
      hover: '#0073F7',
      active: '#006FEF',
    },
    colorBackgroundAccentTintAlpha: {
      normal: 'rgba(0, 119, 255, 0.06)',
      hover: 'rgba(0, 119, 255, 0.1)',
      active: 'rgba(0, 119, 255, 0.14)',
    },
    colorBackgroundAccentTintThemed: {
      normal: '#F0F7FF',
      hover: '#E5F1FF',
      active: '#DBECFF',
    },
    colorBackgroundAccentTintThemedAlpha: {
      normal: 'rgba(0, 119, 255, 0.06)',
      hover: 'rgba(0, 119, 255, 0.1)',
      active: 'rgba(0, 119, 255, 0.14)',
    },
    colorBackgroundNegative: {
      normal: '#ED0A34',
      hover: '#E40A34',
      active: '#DA0A35',
    },
    colorBackgroundNegativeTint: {
      normal: '#FAEBEB',
      hover: '#FDE2E7',
      active: '#FCD8DF',
    },
    colorBackgroundNegativeTintAlpha: {
      normal: 'rgba(237, 10, 52, 0.1)',
      hover: 'rgba(237, 10, 52, 0.14)',
      active: 'rgba(237, 10, 52, 0.18)',
    },
    colorBackgroundNegativeTintThemed: {
      normal: '#FAEBEB',
      hover: '#FDE2E7',
      active: '#FCD8DF',
    },
    colorBackgroundNegativeTintThemedAlpha: {
      normal: 'rgba(237, 10, 52, 0.1)',
      hover: 'rgba(237, 10, 52, 0.14)',
      active: 'rgba(237, 10, 52, 0.16)',
    },
    colorBackgroundPositiveTintAlpha: {
      normal: 'rgba(13, 194, 104, 0.12)',
      hover: 'rgba(13, 194, 104, 0.14)',
      active: 'rgba(13, 194, 104, 0.18)',
    },
    colorBackgroundTertiaryAlpha: {
      normal: 'rgba(58, 58, 90, 0.04)',
      hover: 'rgba(58, 58, 90, 0.08)',
      active: 'rgba(58, 58, 90, 0.12)',
    },
    colorBackgroundWarningTintAlpha: {
      normal: 'rgba(255, 241, 173, 0.64)',
      hover: 'rgba(255, 241, 173, 0.72)',
      active: 'rgba(255, 241, 173, 0.76)',
    },
    colorIconNegative: {
      normal: '#ED033A',
      hover: '#E4043A',
      active: '#DA043A',
    },
    colorSegmentedControl: {
      normal: '#FFFFFF',
      hover: '#F5F5F7',
      active: '#EBECEF',
    },
    colorStrokeNegative: {
      normal: '#ED0A34',
      hover: '#E40A34',
      active: '#DA0A35',
    },
    colorTextNegative: {
      normal: '#ED0A34',
      hover: '#E40A34',
      active: '#DA0A35',
    },
    colorAvatarsBlue: '#4C91FF',
    colorAvatarsCoral: '#FEA4A4',
    colorAvatarsGreen: '#43CC4C',
    colorAvatarsIndigo: '#7772F8',
    colorAvatarsLavender: '#D3B2FF',
    colorAvatarsLime: '#C3F07F',
    colorAvatarsMint: '#7BEADB',
    colorAvatarsOrange: '#F68E42',
    colorAvatarsPeach: '#FFB980',
    colorAvatarsRed: '#F55252',
    colorAvatarsSea: '#22CEEC',
    colorAvatarsSeagreen: '#42D7A5',
    colorAvatarsSky: '#9EDBFF',
    colorAvatarsViolet: '#B884FF',
    colorAvatarsYellow: '#FFD65C',
    colorIconNegativeSnackbar: '#FF5C5C',
    colorOnboarding: '#2979FA',
    colorSearchResultsAlpha: 'rgba(255, 241, 173, 0.48)',
    colorTextSecondary: '#797A80',
  },

  fontTitle2: {
    regular: {
      ...(lightTheme.fontTitle2 as Adaptive<Font>).regular,
      lineHeight: 24,
    },
  },
  fontTitle3: {
    regular: {
      ...(lightTheme.fontTitle3 as Adaptive<Font>).regular,
      lineHeight: 24,
    },
  },

  fontHeadline3: {
    regular: {
      ...(lightTheme.fontHeadline2 as Adaptive<Font>).regular,
      fontSize: 13,
      lineHeight: 16,
      fontStyle: 'normal',
    },
  },
};

export const workspaceAdminDarkTheme: ThemeWorkspaceAdminDarkDescription = {
  ...workspaceAdminTheme,
  ...darkTheme,
  themeName: 'workspaceAdminDark',
  themeNameBase: 'workspaceAdminDark',

  colors: {
    ...darkTheme.colors,

    colorBackgroundAccentTintAlpha: {
      normal: 'rgba(0, 119, 255, 0.2)',
      hover: 'rgba(39, 117, 252, 0.24)',
      active: 'rgba(39, 117, 252, 0.28)',
    },
    colorBackgroundNegative: {
      normal: '#FF5C5C',
      hover: '#FF6363',
      active: '#FF6969',
    },
    colorBackgroundNegativeTintAlpha: {
      normal: 'rgba(255, 58, 58, 0.24)',
      hover: 'rgba(255, 58, 58, 0.28)',
      active: 'rgba(255, 58, 58, 0.32)',
    },
    colorBackgroundPositiveTintAlpha: {
      normal: 'rgba(13, 194, 104, 0.16)',
      hover: 'rgba(13, 194, 104, 0.18)',
      active: 'rgba(13, 194, 104, 0.2)',
    },
    colorBackgroundTertiaryAlpha: {
      normal: 'rgba(255, 255, 255, 0.04)',
      hover: 'rgba(255, 255, 255, 0.1)',
      active: 'rgba(255, 255, 255, 0.14)',
    },
    colorBackgroundWarningTintAlpha: {
      normal: 'rgba(255, 158, 0, 0.16)',
      hover: 'rgba(255, 158, 0, 0.24)',
      active: 'rgba(255, 158, 0, 0.28)',
    },
    colorIconNegative: {
      normal: '#FF5C5C',
      hover: '#FF6363',
      active: '#FF6969',
    },
    colorSegmentedControl: {
      normal: '#454546',
      hover: '#4E4E4F',
      active: '#3D3D3E',
    },
    colorStrokeNegative: {
      normal: '#FF5C5C',
      hover: '#FF6363',
      active: '#FF6969',
    },
    colorTextNegative: {
      normal: '#FF5C5C',
      hover: '#FF6363',
      active: '#FF6969',
    },
    colorAvatarsBlue: '#4C91FF',
    colorAvatarsCoral: '#FEA4A4',
    colorAvatarsGreen: '#43CC4C',
    colorAvatarsIndigo: '#7772F8',
    colorAvatarsLavender: '#D3B2FF',
    colorAvatarsLime: '#C3F07F',
    colorAvatarsMint: '#7BEADB',
    colorAvatarsOrange: '#F68E42',
    colorAvatarsPeach: '#FFB980',
    colorAvatarsRed: '#F55252',
    colorAvatarsSea: '#22CEEC',
    colorAvatarsSeagreen: '#42D7A5',
    colorAvatarsSky: '#9EDBFF',
    colorAvatarsViolet: '#B884FF',
    colorAvatarsYellow: '#FFD65C',
    colorIconNegativeSnackbar: '#FF5C5C',
    colorOnboarding: '#2979FA',
    colorSearchResultsAlpha: 'rgba(255, 158, 0, 0.2)',
    colorTextSecondary: '#BFC1C5',
  },
};
