import type {
	LocalVkontakteAndroidColorsDescriptionStruct,
	ThemeVkontakteAndroidDescription,
	VkontakteAndroidGradients,
} from '@/interfaces/themes/vkontakteAndroid';
import type { ThemeVkontakteAndroidDarkDescription } from '@/interfaces/themes/vkontakteAndroidDark';

import { darkTheme as vkDarkTheme, lightTheme as vkLightTheme } from '../../base/vk';

export const vkontakteLocalColorLight: LocalVkontakteAndroidColorsDescriptionStruct = {
	colorSnippetBorderAlpha: 'rgba(0, 0, 0, 0.15)',
	colorModalCardBorderAlpha: 'rgba(0, 0, 0, 0)',
	colorLandingSnippetBorderAlpha: 'rgba(0, 0, 0, 0.15)',
	colorActionSheetSeparatorAlpha: 'rgba(0, 0, 0, 0.12)',
	colorInputBorder: '#E1E3E6',

	colorImForwardLineAlpha: 'rgba(69, 103, 143, 0.24)',

	colorImBubbleBorderAlternateHighlightedAlpha: 'rgba(215, 216, 217, 1)',

	colorImBubbleIncoming: '#EBEDF0',
	colorImBubbleIncomingAlternate: '#FFFFFF',
	colorImBubbleIncomingExpiring: '#E6E9FF',

	colorImBubbleOutgoing: '#CCE4FF',
	colorImBubbleOutgoingExpiringHighlighted: '#ADB8FF',

	colorImBubbleGiftText: '#857250',
	colorImBubbleGiftTextSecondary: '#AB9871',

	colorImTextName: '#2D81E0',
};

export const vkontakteLocalColorDark: LocalVkontakteAndroidColorsDescriptionStruct = {
	colorSnippetBorderAlpha: 'rgba(255, 255, 255, 0.15)',
	colorModalCardBorderAlpha: 'rgba(255, 255, 255, 0.12)',
	colorLandingSnippetBorderAlpha: 'rgba(255, 255, 255, 0.15)',
	colorActionSheetSeparatorAlpha: 'rgba(255, 255, 255, 0.12)',
	colorInputBorder: '#2C2D2E',

	colorImForwardLineAlpha: 'rgba(255, 255, 255, 0.24)',

	colorImBubbleBorderAlternateHighlightedAlpha: 'rgba(0, 0, 0, 0.00)',

	colorImBubbleIncoming: '#2C2D2E',
	colorImBubbleIncomingAlternate: '#2C2D2E',
	colorImBubbleIncomingExpiring: '#262B4D',

	colorImBubbleOutgoing: '#454647',
	colorImBubbleOutgoingExpiringHighlighted: '#5965B3',

	colorImBubbleGiftText: '#FFFFFF',
	colorImBubbleGiftTextSecondary: '#E3D3AC',

	colorImTextName: '#529EF4',
};

const gradients: VkontakteAndroidGradients = {
	gradientAquamarineBlue: '#7DF1FA, #2BB4D6',
	gradientBlue: '#66CCFF, #3F8AE0',
	gradientCandy: '#FF99CC, #E52E6A',
	gradientCrimson: '#FF7373, #E53949, #BF1C38',
	gradientDisco: '#FFB726, #FF2693, #8122E0, #2693FF',
	gradientEmerald: '#00D948, #0D8046',
	gradientGray: '#C1CAD6, #878F99',
	gradientGreen: '#6CD97E, #12B312',
	gradientLagoon: '#2BD9D9, #5C9CE6',
	gradientLavender: '#928FFF, #4B47B2',
	gradientMarine: '#2EE54D, #0D7EFF',
	gradientMidnight: '#73D0FF, #3885E1, #0032A6',
	gradientOrange: '#FFBF80, #E66B2E',
	gradientPink: '#FF8880, #E62E6B',
	gradientPurple: '#A393F5, #735CE6',
	gradientRaspberryPink: '#FF80D5, #E645B1',
	gradientRed: '#FF7583, #E62E40',
	gradientRetrowave: '#30F2B1, #5967FF, #FF26A5',
	gradientSunset: '#FFD24D, #F26549, #E62E6B',
	gradientTurquoise: '#8AE6E6, #12B3B3',
	gradientTwilight: '#FF4D87, #9F40FF, #3399FF',
	gradientUnicorn: '#FF99CC, #A179F2, #5CA1E6',
	gradientViolet: '#D3A6FF, #903FE0',
	gradientYellow: '#FFC44D, #F07300',
	gradientYellowBright: '#FFD54F, #E7A902',
	gradientHalloweenOrange: '#CB1E3B, #F05C44, #FFA000',
	gradientHalloweenViolet: '#FFA000, #CD4C4B, #792EC0',
	gradientNewYear: '#BB64E4, #805BD7, #2866D5',
	gradientFrost: '#4FA0FF, #016CEA',
	gradientValentine: '#FF8A65, #F25383, #8F13DB',
	gradientWarmValentine: '#F3386A, #FF819E',
	gradientSberkot: '#9DF19D, #31C2A7, #21A19A, #107F8C',
	gradientMable: '#D9F4FF, #D9F4FF',
	gradientWomensDay: '#FF99CC, #E52E6A',
};

export const vkontakteTokens = {
	...gradients,
};

export const vkontakteAndroidTheme: ThemeVkontakteAndroidDescription = {
	...vkLightTheme,
	themeName: 'vkontakteAndroid',

	colors: {
		...vkLightTheme.colors,
		...vkontakteLocalColorLight,
	},
	...vkontakteTokens,
};

export const vkontakteAndroidThemeDark: ThemeVkontakteAndroidDarkDescription = {
	...vkDarkTheme,
	themeName: 'vkontakteAndroidDark',
	colorsScheme: 'dark',

	colors: {
		...vkDarkTheme.colors,
		...vkontakteLocalColorDark,
	},
	...vkontakteTokens,
};
