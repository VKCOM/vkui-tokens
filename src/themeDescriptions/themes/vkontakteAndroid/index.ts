import type {
	LocalVkontakteAndroidColorsDescriptionStruct,
	ThemeVkontakteAndroidDescription,
	VkontakteAndroidGradients,
} from '@/interfaces/themes/vkontakteAndroid';
import type { ThemeVkontakteAndroidDarkDescription } from '@/interfaces/themes/vkontakteAndroidDark';

import { darkTheme as vkDarkTheme, lightTheme as vkLightTheme } from '../../base/vk';

export const vkontakteLocalColorLight: LocalVkontakteAndroidColorsDescriptionStruct = {
	vkontakteColorSnippetBorderAlpha: 'rgba(0, 0, 0, 0.15)',
	vkontakteColorModalCardBorderAlpha: 'rgba(0, 0, 0, 0)',
	vkontakteColorLandingSnippetBorderAlpha: 'rgba(0, 0, 0, 0.15)',
	vkontakteColorActionSheetSeparatorAlpha: 'rgba(0, 0, 0, 0.12)',
	vkontakteColorInputBorder: '#E1E3E6',

	vkontakteColorImForwardLineAlpha: 'rgba(69, 103, 143, 0.24)',

	vkontakteColorImBubbleBorderAlternateHighlightedAlpha: 'rgba(215, 216, 217, 1)',

	vkontakteColorImBubbleIncoming: '#EBEDF0',
	vkontakteColorImBubbleIncomingAlternate: '#FFFFFF',
	vkontakteColorImBubbleIncomingExpiring: '#E6E9FF',

	vkontakteColorImBubbleOutgoing: '#CCE4FF',
	vkontakteColorImBubbleOutgoingExpiringHighlighted: '#ADB8FF',

	vkontakteColorImBubbleGiftText: '#857250',
	vkontakteColorImBubbleGiftTextSecondary: '#AB9871',

	vkontakteColorImTextName: '#2D81E0',
};

export const vkontakteLocalColorDark: LocalVkontakteAndroidColorsDescriptionStruct = {
	vkontakteColorSnippetBorderAlpha: 'rgba(255, 255, 255, 0.15)',
	vkontakteColorModalCardBorderAlpha: 'rgba(255, 255, 255, 0.12)',
	vkontakteColorLandingSnippetBorderAlpha: 'rgba(255, 255, 255, 0.15)',
	vkontakteColorActionSheetSeparatorAlpha: 'rgba(255, 255, 255, 0.12)',
	vkontakteColorInputBorder: '#2C2D2E',

	vkontakteColorImForwardLineAlpha: 'rgba(255, 255, 255, 0.24)',

	vkontakteColorImBubbleBorderAlternateHighlightedAlpha: 'rgba(0, 0, 0, 0.00)',

	vkontakteColorImBubbleIncoming: '#2C2D2E',
	vkontakteColorImBubbleIncomingAlternate: '#2C2D2E',
	vkontakteColorImBubbleIncomingExpiring: '#262B4D',

	vkontakteColorImBubbleOutgoing: '#454647',
	vkontakteColorImBubbleOutgoingExpiringHighlighted: '#5965B3',

	vkontakteColorImBubbleGiftText: '#FFFFFF',
	vkontakteColorImBubbleGiftTextSecondary: '#E3D3AC',

	vkontakteColorImTextName: '#529EF4',
};

const gradients: VkontakteAndroidGradients = {
	vkontakteGradientAquamarineBlue: '#7DF1FA, #2BB4D6',
	vkontakteGradientBlue: '#66CCFF, #3F8AE0',
	vkontakteGradientCandy: '#FF99CC, #E52E6A',
	vkontakteGradientCrimson: '#FF7373, #E53949, #BF1C38',
	vkontakteGradientDisco: '#FFB726, #FF2693, #8122E0, #2693FF',
	vkontakteGradientEmerald: '#00D948, #0D8046',
	vkontakteGradientGray: '#C1CAD6, #878F99',
	vkontakteGradientGreen: '#6CD97E, #12B312',
	vkontakteGradientLagoon: '#2BD9D9, #5C9CE6',
	vkontakteGradientLavender: '#928FFF, #4B47B2',
	vkontakteGradientMarine: '#2EE54D, #0D7EFF',
	vkontakteGradientMidnight: '#73D0FF, #3885E1, #0032A6',
	vkontakteGradientOrange: '#FFBF80, #E66B2E',
	vkontakteGradientPink: '#FF8880, #E62E6B',
	vkontakteGradientPurple: '#A393F5, #735CE6',
	vkontakteGradientRaspberryPink: '#FF80D5, #E645B1',
	vkontakteGradientRed: '#FF7583, #E62E40',
	vkontakteGradientRetrowave: '#30F2B1, #5967FF, #FF26A5',
	vkontakteGradientSunset: '#FFD24D, #F26549, #E62E6B',
	vkontakteGradientTurquoise: '#8AE6E6, #12B3B3',
	vkontakteGradientTwilight: '#FF4D87, #9F40FF, #3399FF',
	vkontakteGradientUnicorn: '#FF99CC, #A179F2, #5CA1E6',
	vkontakteGradientViolet: '#D3A6FF, #903FE0',
	vkontakteGradientYellow: '#FFC44D, #F07300',
	vkontakteGradientYellowBright: '#FFD54F, #E7A902',
	vkontakteGradientHalloweenOrange: '#CB1E3B, #F05C44, #FFA000',
	vkontakteGradientHalloweenViolet: '#FFA000, #CD4C4B, #792EC0',
	vkontakteGradientNewYear: '#BB64E4, #805BD7, #2866D5',
	vkontakteGradientFrost: '#4FA0FF, #016CEA',
	vkontakteGradientValentine: '#FF8A65, #F25383, #8F13DB',
	vkontakteGradientWarmValentine: '#F3386A, #FF819E',
	vkontakteGradientSberkot: '#9DF19D, #31C2A7, #21A19A, #107F8C',
	vkontakteGradientMable: '#D9F4FF, #D9F4FF',
	vkontakteGradientWomensDay: '#FF99CC, #E52E6A',
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
