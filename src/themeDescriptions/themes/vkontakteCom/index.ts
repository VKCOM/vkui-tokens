import { LocalVkontakteAndroidColorsDescriptionStruct } from '../../../interfaces/themes/vkontakteAndroid';
import { ThemeVkontakteComDescription } from '../../../interfaces/themes/vkontakteCom';
import { ThemeVkontakteComDarkDescription } from '../../../interfaces/themes/vkontakteComDark';
import { vkComTheme, vkComThemeDark } from '../vkCom';
import { vkontakteTokens } from '../vkontakteAndroid';

const vkontakteComLocalColorLight: LocalVkontakteAndroidColorsDescriptionStruct = {
	colorSnippetBorderAlpha: 'rgba(0, 0, 0, 0.12)',
	colorModalCardBorderAlpha: 'rgba(0, 0, 0, 0)',
	colorLandingSnippetBorderAlpha: 'rgba(0, 0, 0, 0.12)',
	colorActionSheetSeparatorAlpha: 'rgba(0, 0, 0, 0.12)',
	colorInputBorder: '#D3D9DE',

	colorImForwardLineAlpha: 'rgba(0, 20, 51, 0.12)',

	colorImBubbleBorderAlternateHighlightedAlpha: 'rgba(204, 204, 204, 1)',

	colorImBubbleIncoming: '#EDEEF0',
	colorImBubbleIncomingAlternate: '#FFFFFF',
	colorImBubbleIncomingExpiring: '#E6E9FF',

	colorImBubbleOutgoing: '#CCE4FF',
	colorImBubbleOutgoingExpiringHighlighted: '#ADB8FF',

	colorImBubbleGiftText: '#857250',
	colorImBubbleGiftTextSecondary: '#AB9871',

	colorImTextName: '#2A5885',
};

const vkontakteComLocalColorDark: LocalVkontakteAndroidColorsDescriptionStruct = {
	colorSnippetBorderAlpha: 'rgba(255, 255, 255, 0.16)',
	colorModalCardBorderAlpha: 'rgba(255, 255, 255, 0.12)',
	colorLandingSnippetBorderAlpha: 'rgba(255, 255, 255, 0.16)',
	colorActionSheetSeparatorAlpha: 'rgba(255, 255, 255, 0.16)',
	colorInputBorder: '#555555',

	colorImForwardLineAlpha: 'rgba(255, 255, 255, 0.24)',

	colorImBubbleBorderAlternateHighlightedAlpha: 'rgba(0, 0, 0, 0.00)',

	colorImBubbleIncoming: '#333333',
	colorImBubbleIncomingAlternate: '#333333',
	colorImBubbleIncomingExpiring: '#262B4D',

	colorImBubbleOutgoing: '#555555',
	colorImBubbleOutgoingExpiringHighlighted: '#5965B3',

	colorImBubbleGiftText: '#FFFFFF',
	colorImBubbleGiftTextSecondary: '#E3D3AC',

	colorImTextName: '#71AAEB',
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
