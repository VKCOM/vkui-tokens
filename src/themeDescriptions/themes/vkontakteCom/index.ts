import lodash from 'lodash';

import { DeepPartial } from '../../../interfaces/general/tools/utils.js';
import { LocalVkontakteAndroidColorsDescriptionStruct } from '../../../interfaces/themes/vkontakteAndroid/index.js';
import { ThemeVkontakteComDescription } from '../../../interfaces/themes/vkontakteCom/index.js';
import { ThemeVkontakteComDarkDescription } from '../../../interfaces/themes/vkontakteComDark/index.js';
import { vkComFonts, vkComTheme, vkComThemeDark } from '../vkCom/index.js';
import { vkontakteDisplayTitleFontsPartial, vkontakteTokens } from '../vkontakteAndroid/index.js';

const themeNameBase = 'vkontakteCom';

const vkontakteComLocalColorLight: LocalVkontakteAndroidColorsDescriptionStruct = {
	vkontakteColorSnippetBorderAlpha: 'rgba(0, 0, 0, 0.12)',
	vkontakteColorSnippetBackground: '#FFFFFF',
	vkontakteColorModalCardBorderAlpha: 'rgba(0, 0, 0, 0)',
	vkontakteColorLandingSnippetBorderAlpha: 'rgba(0, 0, 0, 0.12)',
	vkontakteColorActionSheetSeparatorAlpha: 'rgba(0, 0, 0, 0.12)',
	vkontakteColorInputBorder: '#D3D9DE',
	vkontakteColorSearchBarBackground: '#e5ebf1',
	vkontakteColorSearchBarFieldTint: '#818c99',
	vkontakteBackgroundHoverAlpha: 'rgba(174, 183, 194, 0.12)',
	vkontakteColorAccentAlternate: '#0077ff',
	vkontakteColorBackgroundSuggestions: '#FFFFFF',
	vkontakteColorBackgroundKeyboard: '#dce1e6',
	vkontakteColorContentPlaceholderIcon: '#b2b2b2',
	vkontakteColorContentTintForeground: '#939393',
	vkontakteColorTextName: '#2a5885',

	vkontakteColorControlBackground: '#edeef0',
	vkontakteColorControlForeground: '#447bba',
	vkontakteColorControlTintMuted: '#828282',

	vkontakteColorHeaderSearchFieldBackground: '#edeef0',
	vkontakteColorHeaderSearchFieldTint: '#818c99',
	vkontakteColorHeaderTabActiveIndicator: '#397dcc',

	vkontakteColorIconOutlineMedium: '#818c99',
	vkontakteColorIconOutlineSecondary: '#99a2ad',

	vkontakteColorSkeletonShimmerFrom: '#FFFFFF',
	vkontakteColorAlphaSkeletonShimmerTo: 'transparent',

	vkontakteColorLoaderBackground: '#edeef0',
	vkontakteColorLoaderTint: '#828282',

	vkontakteColorMusicPlaybackIcon: '#000000',

	vkontakteColorStatusBackground: '#edeef0',

	vkontakteColorPlaceholderIconForegroundPrimary: '#99a2ad',
	vkontakteColorPlaceholderIconForegroundSecondary: '#aeb7c2',
	vkontakteColorPlaceholderIconTint: '#1d3a5c',

	vkontakteColorPollOptionBackground: '#447bba',

	vkontakteColorTabbarActiveIcon: '#447bba',
	vkontakteColorTabbarBackground: '#f7f8fa',
	vkontakteColorTabbarInactiveIcon: '#99a2ad',
	vkontakteColorTabbarTabletTextSecondary: '#818c99',

	vkontakteColorToolbarAttachBackgroundFrom: '#dce1e6',

	vkontakteColorSplashScreenIcon: '#dce1e6',

	vkontakteColorIconName: '#8fadc8',

	vkontakteColorPanelTabActiveText: '#4e5966',

	vkontakteColorBackgroundTextAlpha: 'rgba(81, 129, 184, 0.2)',

	vkontakteColorModalCardHeaderClose: '#000000',

	vkontakteImBubbleButtonOutgoingBackgroundAlpha: 'rgba(255, 255, 255, 0.72)',
	vkontakteImBubbleButtonForeground: '#000000',
	vkontakteImBubbleIncomingHighlighted: '#d3d9de',
	vkontakteImBubbleGiftBackground: '#f4e7c3',
	vkontakteImBubbleGiftBackgroundHighlighted: '#e3d3ac',
	vkontakteImBubbleOutgoingAlternate: '#FFFFFF',

	vkontakteImAttachTint: '#447bba',

	vkontakteImReplySeparator: '#2a5885',

	vkontakteImToolbarVoiceMsgBackground: '#99a2ad',

	vkontakteColorImForwardLineAlpha: 'rgba(0, 20, 51, 0.12)',

	vkontakteColorImBubbleBorderAlternateHighlightedAlpha: 'rgba(204, 204, 204, 1)',

	vkontakteColorImBubbleIncoming: '#EDEEF0',
	vkontakteColorImBubbleIncomingAlternate: '#FFFFFF',
	vkontakteColorImBubbleIncomingExpiring: '#E6E9FF',

	vkontakteColorImBubbleOutgoing: '#CCE4FF',
	vkontakteColorImBubbleOutgoingExpiringHighlighted: '#ADB8FF',

	vkontakteColorImBubbleGiftText: '#857250',
	vkontakteColorImBubbleGiftTextSecondary: '#AB9871',

	vkontakteColorImTextName: '#2A5885',

	vkontakteButtonMutedBackground: '#e5ebf1',
	vkontakteButtonTertiaryBackground: 'rgba(0, 0, 0, 0)',
	vkontakteButtonTertiaryForeground: '#346297',
	vkontakteFloatButtonForeground: '#99a2ad',
	vkontakteLandingBackground: '#ffffff',
	vkontakteImBubbleIncomingAlternateHighlighted: '#f7f8fa',
	vkontakteImBubbleIncomingExpiringHighlighted: '#ccd3ff',
	vkontakteImBubbleOutgoingHighlighted: '#add3ff',

	vkontakteImBubbleButtonBackground: '#F9F9F9',
	vkontakteImBubbleButtonBackgroundHighlighted: '#D7D8D9',
	vkontakteImBubbleMableOutgoing: '#D9F4FF',
	vkontakteImBubbleMableOutgoingExpiringHighlighted: '#C2CBFF',
	vkontakteImBubbleMableOutgoingHighlighted: '#B0E8FF',
	vkontakteImBubbleMableWallpaperOutgoing: '#D9F4FF',
	vkontakteImBubbleMableWallpaperOutgoingHighlighted: '#B0E8FF',
	vkontakteImBubbleWallpaperButtonForeground: '#000000',

	vkontakteImServiceMessageText: '#818C99',

	vkontakteLandingSecondaryButtonBackground: 'rgba(0, 57, 115, 0.102)',
	vkontakteStoriesSkeletonLoaderBackground: '#cccccc',

	vkontaktePaletteBlack: '#000000',
};

const vkontakteComLocalColorDark: LocalVkontakteAndroidColorsDescriptionStruct = {
	vkontakteColorSnippetBorderAlpha: 'rgba(255, 255, 255, 0.16)',
	vkontakteColorSnippetBackground: '#272727',
	vkontakteColorModalCardBorderAlpha: 'rgba(255, 255, 255, 0.12)',
	vkontakteColorLandingSnippetBorderAlpha: 'rgba(255, 255, 255, 0.16)',
	vkontakteColorActionSheetSeparatorAlpha: 'rgba(255, 255, 255, 0.16)',
	vkontakteColorInputBorder: '#555555',
	vkontakteColorSearchBarBackground: '#222222',
	vkontakteColorSearchBarFieldTint: '#b2b2b2',
	vkontakteBackgroundHoverAlpha: 'rgba(255, 255, 255, 0.08)',
	vkontakteColorAccentAlternate: '#FFFFFF',
	vkontakteColorBackgroundSuggestions: '#333333',
	vkontakteColorBackgroundKeyboard: '#333333',
	vkontakteColorContentPlaceholderIcon: '#b2b2b2',
	vkontakteColorContentTintForeground: '#939393',
	vkontakteColorTextName: '#e1e3e6',

	vkontakteColorControlBackground: '#555555',
	vkontakteColorControlForeground: '#e1e3e6',
	vkontakteColorControlTintMuted: '#939393',

	vkontakteColorHeaderSearchFieldBackground: '#424242',
	vkontakteColorHeaderSearchFieldTint: '#b2b2b2',
	vkontakteColorHeaderTabActiveIndicator: '#397dcc',

	vkontakteColorIconOutlineMedium: '#b2b2b2',
	vkontakteColorIconOutlineSecondary: '#939393',

	vkontakteColorSkeletonShimmerFrom: '#222222',
	vkontakteColorAlphaSkeletonShimmerTo: 'transparent',

	vkontakteColorLoaderBackground: '#555555',
	vkontakteColorLoaderTint: '#828282',

	vkontakteColorMusicPlaybackIcon: '#FFFFFF',

	vkontakteColorStatusBackground: '#222222',

	vkontakteColorPlaceholderIconForegroundPrimary: '#939393',
	vkontakteColorPlaceholderIconForegroundSecondary: '#656565',
	vkontakteColorPlaceholderIconTint: '#FFFFFF',

	vkontakteColorPollOptionBackground: '#FFFFFF',

	vkontakteColorTabbarActiveIcon: '#FFFFFF',
	vkontakteColorTabbarBackground: '#333333',
	vkontakteColorTabbarInactiveIcon: '#828282',
	vkontakteColorTabbarTabletTextSecondary: '#828282',

	vkontakteColorToolbarAttachBackgroundFrom: '#828282',

	vkontakteColorSplashScreenIcon: '#333333',

	vkontakteColorIconName: '#b2b2b2',

	vkontakteColorPanelTabActiveText: '#e1e3e6',

	vkontakteColorBackgroundTextAlpha: 'rgba(81, 129, 184, 0.2)',

	vkontakteColorModalCardHeaderClose: '#FFFFFF',

	vkontakteImBubbleButtonOutgoingBackgroundAlpha: 'rgba(255, 255, 255, 0.24)',
	vkontakteImBubbleButtonForeground: '#e1e3e6',
	vkontakteImBubbleIncomingHighlighted: '#656565',
	vkontakteImBubbleGiftBackground: '#857250',
	vkontakteImBubbleGiftBackgroundHighlighted: '#ab9871',
	vkontakteImBubbleOutgoingAlternate: '#555555',

	vkontakteImAttachTint: '#FFFFFF',

	vkontakteImReplySeparator: '#FFFFFF',

	vkontakteImToolbarVoiceMsgBackground: '#555555',

	vkontakteColorImForwardLineAlpha: 'rgba(255, 255, 255, 0.24)',

	vkontakteColorImBubbleBorderAlternateHighlightedAlpha: 'rgba(0, 0, 0, 0.00)',

	vkontakteColorImBubbleIncoming: '#333333',
	vkontakteColorImBubbleIncomingAlternate: '#333333',
	vkontakteColorImBubbleIncomingExpiring: '#262B4D',

	vkontakteColorImBubbleOutgoing: '#555555',
	vkontakteColorImBubbleOutgoingExpiringHighlighted: '#5965B3',

	vkontakteColorImBubbleGiftText: '#FFFFFF',
	vkontakteColorImBubbleGiftTextSecondary: '#E3D3AC',

	vkontakteColorImTextName: '#71AAEB',
	vkontakteButtonMutedBackground: '#333333',
	vkontakteButtonTertiaryBackground: 'rgba(0, 0, 0, 0)',
	vkontakteButtonTertiaryForeground: '#e1e3e6',
	vkontakteFloatButtonForeground: '#b2b2b2',
	vkontakteLandingBackground: '#222222',
	vkontakteImBubbleIncomingAlternateHighlighted: '#656565',
	vkontakteImBubbleIncomingExpiringHighlighted: '#404980',
	vkontakteImBubbleOutgoingHighlighted: '#656565',

	vkontakteImBubbleButtonBackground: '#FFFFFF29',
	vkontakteImBubbleButtonBackgroundHighlighted: '#FFFFFF3D',
	vkontakteImBubbleMableOutgoing: '#346CAD',
	vkontakteImBubbleMableOutgoingExpiringHighlighted: '#5965B3',
	vkontakteImBubbleMableOutgoingHighlighted: '#4772A6',
	vkontakteImBubbleMableWallpaperOutgoing: '#346CAD',
	vkontakteImBubbleMableWallpaperOutgoingHighlighted: '#4772A6',
	vkontakteImBubbleWallpaperButtonForeground: '#E1E3E6',

	vkontakteImServiceMessageText: '#76787A',

	vkontakteLandingSecondaryButtonBackground: 'rgba(255, 255, 255, 0.16)',
	vkontakteStoriesSkeletonLoaderBackground: '#555555',

	vkontaktePaletteBlack: '#000000',
};

const vkontakteComFonts = lodash.merge<typeof vkComFonts, DeepPartial<typeof vkComFonts>>(
	lodash.cloneDeep(vkComFonts),
	vkontakteDisplayTitleFontsPartial,
);

export const vkontakteComTheme: ThemeVkontakteComDescription = {
	...vkComTheme,
	themeName: themeNameBase,
	themeNameBase,
	themeInheritsFrom: vkComTheme.themeName,

	colors: {
		...vkComTheme.colors,
		...vkontakteComLocalColorLight,
	},
	...vkontakteComFonts,
	...vkontakteTokens,
};

export const vkontakteComThemeDark: ThemeVkontakteComDarkDescription = {
	...vkComThemeDark,
	themeName: `${themeNameBase}Dark`,
	themeNameBase,
	themeInheritsFrom: vkComThemeDark.themeName,
	colorsScheme: 'dark',

	colors: {
		...vkComThemeDark.colors,
		...vkontakteComLocalColorDark,
	},
	...vkontakteComFonts,
	...vkontakteTokens,
};
