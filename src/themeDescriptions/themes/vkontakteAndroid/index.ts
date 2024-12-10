import lodash from 'lodash';

import { gradient, namedAlias } from '@/build/helpers/tokenHelpers';
import { Gradients } from '@/interfaces/general/gradients';
import { DeepPartial } from '@/interfaces/general/tools/utils';
import type {
	LocalVkontakteAndroidColorsDescriptionStruct,
	ThemeVkontakteAndroidDescription,
	VkontakteAndroidGradients,
} from '@/interfaces/themes/vkontakteAndroid';
import type { ThemeVkontakteAndroidDarkDescription } from '@/interfaces/themes/vkontakteAndroidDark';

import { darkTheme as vkDarkTheme, fonts, lightTheme as vkLightTheme } from '../../base/vk';

const themeNameBase = 'vkontakteAndroid';

export const vkontakteLocalColorLight: LocalVkontakteAndroidColorsDescriptionStruct = {
	vkontakteColorSnippetBorderAlpha: 'rgba(0, 0, 0, 0.15)',
	vkontakteColorSnippetBackground: '#FFFFFF',
	vkontakteColorModalCardBorderAlpha: 'rgba(0, 0, 0, 0)',
	vkontakteColorLandingSnippetBorderAlpha: 'rgba(0, 0, 0, 0.15)',
	vkontakteColorActionSheetSeparatorAlpha: 'rgba(0, 0, 0, 0.12)',
	vkontakteColorInputBorder: '#E1E3E6',
	vkontakteColorSearchBarBackground: '#FFFFFF',
	vkontakteColorSearchBarFieldTint: '#818c99',
	vkontakteBackgroundHoverAlpha: 'rgba(0, 0, 0, 0.04)',
	vkontakteColorAccentAlternate: '#0077ff',
	vkontakteColorBackgroundSuggestions: '#FFFFFF',
	vkontakteColorBackgroundKeyboard: '#e1e3e6',
	vkontakteColorContentPlaceholderIcon: '#99a2ad',
	vkontakteColorContentTintForeground: '#7f8285',
	vkontakteColorTextName: '#2d81e0',

	vkontakteColorControlBackground: '#ebedf0',
	vkontakteColorControlForeground: '#5181b8',
	vkontakteColorControlTintMuted: '#76787a',

	vkontakteColorHeaderSearchFieldBackground: '#ebedf0',
	vkontakteColorHeaderSearchFieldTint: '#818c99',
	vkontakteColorHeaderTabActiveIndicator: '#2688eb',

	vkontakteColorIconOutlineMedium: '#818c99',
	vkontakteColorIconOutlineSecondary: '#99a2ad',

	vkontakteColorSkeletonShimmerFrom: '#FFFFFF',
	vkontakteColorAlphaSkeletonShimmerTo: 'transparent',

	vkontakteColorLoaderBackground: '#ebedf0',
	vkontakteColorLoaderTint: '#76787a',

	vkontakteColorMusicPlaybackIcon: '#000000',

	vkontakteColorStatusBackground: '#ebedf0',

	vkontakteColorPlaceholderIconForegroundPrimary: '#99a2ad',
	vkontakteColorPlaceholderIconForegroundSecondary: '#aeb7c2',
	vkontakteColorPlaceholderIconTint: '#001c3d',

	vkontakteColorPollOptionBackground: '#45678f',

	vkontakteColorTabbarActiveIcon: '#2975cc',
	vkontakteColorTabbarBackground: '#f9f9f9',
	vkontakteColorTabbarInactiveIcon: '#99a2ad',
	vkontakteColorTabbarTabletTextSecondary: '#909499',

	vkontakteColorToolbarAttachBackgroundFrom: '#b8c1cc',

	vkontakteColorSplashScreenIcon: '#e1e3e6',

	vkontakteColorIconName: '#74a2d6',

	vkontakteColorPanelTabActiveText: '#76787a',

	vkontakteColorBackgroundTextAlpha: 'rgba(38, 136, 235, 0.20)',

	vkontakteColorModalCardHeaderClose: '#000000',

	vkontakteImBubbleButtonOutgoingBackgroundAlpha: 'rgba(255, 255, 255, 0.60)',
	vkontakteImBubbleButtonForeground: '#000000',
	vkontakteImBubbleIncomingHighlighted: '#d7d8d9',
	vkontakteImBubbleGiftBackground: '#f4e7c3',
	vkontakteImBubbleGiftBackgroundHighlighted: '#e3d3ac',
	vkontakteImBubbleOutgoingAlternate: '#FFFFFF',

	vkontakteImAttachTint: '#2d81e0',

	vkontakteImReplySeparator: '#2d81e0',

	vkontakteImToolbarVoiceMsgBackground: '#99a2ad',

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

	vkontakteButtonMutedBackground: '#f2f3f5',
	vkontakteButtonTertiaryBackground: 'rgba(0, 0, 0, 0.00)',
	vkontakteButtonTertiaryForeground: '#2d81e0',
	vkontakteFloatButtonForeground: '#99a2ad',
	vkontakteLandingBackground: '#ffffff',

	vkontakteImBubbleIncomingAlternateHighlighted: '#f9f9f9',
	vkontakteImBubbleIncomingExpiringHighlighted: '#ccd3ff',
	vkontakteImBubbleOutgoingHighlighted: '#add3ff',

	vkontakteLandingSecondaryButtonBackground: 'rgba(0, 57, 115, 0.10)',
	vkontakteStoriesSkeletonLoaderBackground: '#454647',

	vkontaktePaletteBlack: '#000000',
};

export const vkontakteLocalColorDark: LocalVkontakteAndroidColorsDescriptionStruct = {
	vkontakteColorSnippetBorderAlpha: 'rgba(255, 255, 255, 0.15)',
	vkontakteColorSnippetBackground: '#232324',
	vkontakteColorModalCardBorderAlpha: 'rgba(255, 255, 255, 0.12)',
	vkontakteColorLandingSnippetBorderAlpha: 'rgba(255, 255, 255, 0.15)',
	vkontakteColorActionSheetSeparatorAlpha: 'rgba(255, 255, 255, 0.12)',
	vkontakteColorInputBorder: '#2C2D2E',
	vkontakteColorSearchBarBackground: '#19191a',
	vkontakteColorSearchBarFieldTint: '#aaaeb3',
	vkontakteBackgroundHoverAlpha: 'rgba(255, 255, 255, 0.04)',
	vkontakteColorAccentAlternate: '#FFFFFF',
	vkontakteColorBackgroundSuggestions: '#2c2d2e',
	vkontakteColorBackgroundKeyboard: '#2c2d2e',
	vkontakteColorContentPlaceholderIcon: '#aaaeb3',
	vkontakteColorContentTintForeground: '#909499',
	vkontakteColorTextName: '#e1e3e6',

	vkontakteColorControlBackground: '#454647',
	vkontakteColorControlForeground: '#e1e3e6',
	vkontakteColorControlTintMuted: '#909499',

	vkontakteColorHeaderSearchFieldBackground: '#363738',
	vkontakteColorHeaderSearchFieldTint: '#aaaeb3',
	vkontakteColorHeaderTabActiveIndicator: '#529ef4',

	vkontakteColorIconOutlineMedium: '#aaaeb3',
	vkontakteColorIconOutlineSecondary: '#909499',

	vkontakteColorSkeletonShimmerFrom: '#19191a',
	vkontakteColorAlphaSkeletonShimmerTo: 'transparent',

	vkontakteColorLoaderBackground: '#19191a',
	vkontakteColorLoaderTint: '#76787a',

	vkontakteColorMusicPlaybackIcon: '#FFFFFF',

	vkontakteColorStatusBackground: '#19191a',

	vkontakteColorPlaceholderIconForegroundPrimary: '#909499',
	vkontakteColorPlaceholderIconForegroundSecondary: '#5d5f61',
	vkontakteColorPlaceholderIconTint: '#FFFFFF',

	vkontakteColorPollOptionBackground: '#FFFFFF',

	vkontakteColorTabbarActiveIcon: '#FFFFFF',
	vkontakteColorTabbarBackground: '#2c2d2e',
	vkontakteColorTabbarInactiveIcon: '#76787a',
	vkontakteColorTabbarTabletTextSecondary: '#76787a',

	vkontakteColorToolbarAttachBackgroundFrom: '#76787a',

	vkontakteColorSplashScreenIcon: '#2c2d2e',

	vkontakteColorIconName: '#aaaeb3',

	vkontakteColorPanelTabActiveText: '#e1e3e6',

	vkontakteColorBackgroundTextAlpha: 'rgba(82, 158, 244, 0.24)',

	vkontakteColorModalCardHeaderClose: '#FFFFFF',

	vkontakteImBubbleButtonOutgoingBackgroundAlpha: 'rgba(255, 255, 255, 0.20)',
	vkontakteImBubbleButtonForeground: '#e1e3e6',
	vkontakteImBubbleIncomingHighlighted: '#5d5f61',
	vkontakteImBubbleGiftBackground: '#857250',
	vkontakteImBubbleGiftBackgroundHighlighted: '#ab9871',
	vkontakteImBubbleOutgoingAlternate: '#454647',

	vkontakteImAttachTint: '#FFFFFF',

	vkontakteImReplySeparator: '#FFFFFF',

	vkontakteImToolbarVoiceMsgBackground: '#454647',

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

	vkontakteButtonMutedBackground: '#2c2d2e',
	vkontakteButtonTertiaryBackground: 'rgba(0, 0, 0, 0.00)',
	vkontakteButtonTertiaryForeground: '#e1e3e6',
	vkontakteFloatButtonForeground: '#aaaeb3',
	vkontakteLandingBackground: '#19191a',

	vkontakteImBubbleIncomingAlternateHighlighted: '#5d5f61',
	vkontakteImBubbleIncomingExpiringHighlighted: '#404980',
	vkontakteImBubbleOutgoingHighlighted: '#5d5f61',

	vkontakteLandingSecondaryButtonBackground: 'rgba(255, 255, 255, 0.15)',
	vkontakteStoriesSkeletonLoaderBackground: '#c4c8cc',

	vkontaktePaletteBlack: '#000000',
};

const fontFamilyAccent =
	'"VK Sans Display", -apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';

function makeFunctionalGradients<T extends VkontakteAndroidGradients>(source: T): T {
	const keys = Object.keys(source);
	const result: T = {} as any;

	for (const key of keys) {
		const colors = source[key].split(', ');
		result[key] = gradient(...colors);
	}

	return result;
}

const colorGradients: VkontakteAndroidGradients = makeFunctionalGradients({
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
});

const gradients: Gradients = {
	gradient: gradient(namedAlias('colorBackgroundContent')),
	gradientTint: gradient(namedAlias('colorBackgroundTertiary')),
	gradientWhite: gradient('#FFFFFF'),
	gradientBlack: gradient('#00000066'),
};

export const vkontakteDisplayTitleFontsPartial: DeepPartial<typeof fonts> = {
	fontDisplayTitle1: {
		regular: {
			fontFamily: fontFamilyAccent,
		},
	},
	fontDisplayTitle2: {
		regular: {
			fontFamily: fontFamilyAccent,
		},
		compact: {
			fontFamily: fontFamilyAccent,
		},
	},
	fontDisplayTitle3: {
		regular: {
			fontFamily: fontFamilyAccent,
		},
	},
	fontDisplayTitle4: {
		regular: {
			fontFamily: fontFamilyAccent,
		},
	},
};

export const vkontakteMobileFonts = lodash.merge<typeof fonts, DeepPartial<typeof fonts>>(
	lodash.cloneDeep(fonts),
	vkontakteDisplayTitleFontsPartial,
);

const androidFonts: typeof fonts = lodash.merge<typeof fonts, DeepPartial<typeof fonts>>(
	lodash.cloneDeep(vkontakteMobileFonts),
	{
		fontDisplayTitle1: {
			regular: {
				fontFamily: fontFamilyAccent,
			},
		},
		fontDisplayTitle2: {
			regular: {
				fontFamily: fontFamilyAccent,
			},
			compact: {
				fontFamily: fontFamilyAccent,
			},
		},
		fontDisplayTitle3: {
			regular: {
				fontFamily: fontFamilyAccent,
			},
		},
		fontDisplayTitle4: {
			regular: {
				fontFamily: fontFamilyAccent,
			},
		},
		fontHeadline1: {
			regular: {
				letterSpacing: '0.15px',
			},
			compact: {
				letterSpacing: '0.15px',
			},
		},
		fontText: {
			regular: {
				letterSpacing: '0.15px',
			},
			compact: {
				letterSpacing: '0.15px',
			},
		},
		fontSubhead: {
			regular: {
				letterSpacing: '0.15px',
			},
			compact: {
				letterSpacing: '0.15px',
			},
		},
		fontFootnote: {
			regular: {
				letterSpacing: '0.2px',
			},
		},
		fontFootnoteCaps: {
			regular: {
				letterSpacing: '0.2px',
			},
		},
		fontCaption1: {
			regular: {
				letterSpacing: '0.3px',
			},
		},
		fontCaption1Caps: {
			regular: {
				letterSpacing: '0.3px',
			},
		},
		fontCaption2: {
			regular: {
				letterSpacing: '0.3px',
			},
		},
		fontCaption2Caps: {
			regular: {
				letterSpacing: '0.3px',
			},
		},
		fontCaption3: {
			regular: {
				letterSpacing: '0.3px',
			},
		},
		fontCaption3Caps: {
			regular: {
				letterSpacing: '0.3px',
			},
		},
	},
);

export const vkontakteTokens = {
	fontFamilyAccent,
	...colorGradients,
};

export const vkontakteAndroidTheme: ThemeVkontakteAndroidDescription = {
	...vkLightTheme,
	themeName: themeNameBase,
	themeNameBase,
	themeInheritsFrom: vkLightTheme.themeName,

	colors: {
		...vkLightTheme.colors,
		...vkontakteLocalColorLight,
	},
	...gradients,
	...androidFonts,
	...vkontakteTokens,
};

export const vkontakteAndroidThemeDark: ThemeVkontakteAndroidDarkDescription = {
	...vkDarkTheme,
	themeName: `${themeNameBase}Dark`,
	themeNameBase,
	themeInheritsFrom: vkDarkTheme.themeName,
	colorsScheme: 'dark',

	colors: {
		...vkDarkTheme.colors,
		...vkontakteLocalColorDark,
	},
	...gradients,
	...androidFonts,
	...vkontakteTokens,
};
