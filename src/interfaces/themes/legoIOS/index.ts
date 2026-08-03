import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from 'interfaces/general/colors/index.ts';
import type { ThemeCssVars } from 'interfaces/general/index.ts';
import type { Radii } from 'interfaces/general/radii/index.ts';
import type { Adaptive } from 'interfaces/general/tools/index.ts';
import type { Font } from 'interfaces/general/typography/index.ts';

import type { ThemeVkBase, ThemeVkBaseDescription } from '../vkBase/index.ts';
import type { Property } from 'csstype';

export interface LocalLegoIOSFonts {
	fontLabel1: Adaptive<Font>;
	fontLabel2: Adaptive<Font>;
	fontBody: Adaptive<Font>;
	fontTextBold: Adaptive<Font>;
	fontFootnoteBold: Adaptive<Font>;
}

export interface LocalLegoIOSColorsDescriptionStruct {
	colorBackgroundInverse: ColorDescription;
	colorStrokeContrastSecondaryAlpha: ColorDescription;
	colorTextContrastSecondaryAlpha: ColorDescription;
	colorIconContrastSecondaryAlpha: ColorDescription;
	colorTextTertiaryAlpha: ColorDescription;
}

type LegoIOSLocalColors = {
	[key in keyof LocalLegoIOSColorsDescriptionStruct]: ColorWithStates;
};

type LegoIOSLocalEasings = {
	animationEasingLinear: Property.TransitionTimingFunction;
	animationEasingInSmooth: Property.TransitionTimingFunction;
	animationEasingOutSmooth: Property.TransitionTimingFunction;
	animationEasingInOutSmooth: Property.TransitionTimingFunction;
	animationEasingOutSharp: Property.TransitionTimingFunction;
	animationEasingInOutSharp: Property.TransitionTimingFunction;
};

export interface ThemeLegoIOS
	extends ThemeVkBase,
		LocalLegoIOSFonts,
		LegoIOSLocalColors,
		Radii,
		LegoIOSLocalEasings {}

export interface ThemeLegoIOSDescription
	extends ThemeVkBaseDescription,
		LocalLegoIOSFonts,
		Radii,
		LegoIOSLocalEasings {
	colors: ColorsDescriptionStruct & LocalLegoIOSColorsDescriptionStruct;
}

export interface ThemeLegoIOSCssVars extends ThemeCssVars<ThemeLegoIOS> {}
