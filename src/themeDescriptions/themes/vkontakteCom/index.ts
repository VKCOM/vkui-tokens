import { LocalVkontakteAndroidColorsDescriptionStruct } from '../../../interfaces/themes/vkontakteAndroid';
import { ThemeVkontakteComDescription } from '../../../interfaces/themes/vkontakteCom';
import { ThemeVkontakteComDarkDescription } from '../../../interfaces/themes/vkontakteComDark';
import { vkComTheme, vkComThemeDark } from '../vkCom';
import { vkontakteTokens } from '../vkontakteAndroid';

const vkontakteComLocalColorLight: LocalVkontakteAndroidColorsDescriptionStruct = {
	vkontakteColorSnippetBorderAlpha: 'rgba(0, 0, 0, 0.12)',
	vkontakteColorModalCardBorderAlpha: 'rgba(0, 0, 0, 0)',
	vkontakteColorLandingSnippetBorderAlpha: 'rgba(0, 0, 0, 0.12)',
	vkontakteColorActionSheetSeparatorAlpha: 'rgba(0, 0, 0, 0.12)',
	vkontakteColorInputBorder: '#D3D9DE',
	vkontakteColorSnippetBackground: '#FFFFFF',

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
};

const vkontakteComLocalColorDark: LocalVkontakteAndroidColorsDescriptionStruct = {
	vkontakteColorSnippetBorderAlpha: 'rgba(255, 255, 255, 0.16)',
	vkontakteColorModalCardBorderAlpha: 'rgba(255, 255, 255, 0.12)',
	vkontakteColorLandingSnippetBorderAlpha: 'rgba(255, 255, 255, 0.16)',
	vkontakteColorActionSheetSeparatorAlpha: 'rgba(255, 255, 255, 0.16)',
	vkontakteColorInputBorder: '#555555',
	vkontakteColorSnippetBackground: 'rgba(255, 255, 255, 0.004)',

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
};

export const vkontakteComTheme: ThemeVkontakteComDescription = {
	...vkComTheme,
	themeName: 'vkontakteCom',

	colors: {
		...vkComTheme.colors,
		...vkontakteComLocalColorLight,
	},
	...vkontakteTokens,
};

export const vkontakteComThemeDark: ThemeVkontakteComDarkDescription = {
	...vkComThemeDark,
	themeName: 'vkontakteComDark',
	colorsScheme: 'dark',

	colors: {
		...vkComThemeDark.colors,
		...vkontakteComLocalColorDark,
	},
	...vkontakteTokens,
};
