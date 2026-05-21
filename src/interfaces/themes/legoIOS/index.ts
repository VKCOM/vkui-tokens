import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from 'interfaces/general/colors/index.ts';
import type { GradientPoints } from 'interfaces/general/gradients/index.ts';
import type { ThemeCssVars } from 'interfaces/general/index.ts';

import type { ThemeVkBase, ThemeVkBaseDescription } from '../vkBase/index.ts';

/**
 * Дополнительные цвета для темы
 */
export interface LocalVkontakteIOSColorsDescriptionStruct {
	colorBackgroundInverse: ColorDescription;

	componentsGradientButtonOverlayPrimaryStroke: GradientPoints;
	componentsColorButtonOverlayPrimaryStroke1: ColorDescription;
	componentsColorButtonOverlayPrimaryStroke2: ColorDescription;
	componentsColorButtonOverlayPrimaryBackground: ColorDescription;

	componentsGradientButtonNeutralPrimaryStroke: GradientPoints;
	componentsColorButtonNeutralPrimaryStroke1: ColorDescription;
	componentsColorButtonNeutralPrimaryStroke2: ColorDescription;
	componentsColorButtonNeutralPrimaryBackground: ColorDescription;

	componentsGradientContextMenuStroke: GradientPoints;
	componentsColorContextMenuStroke1: ColorDescription;
	componentsColorContextMenuStroke2: ColorDescription;
	componentsColorContextMenuBackground: ColorDescription;
	componentsColorContextMenuColorDodger: ColorDescription;
}

export type LegoIOSLocalColors = {
	[key in keyof LocalVkontakteIOSColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeLegoIOS extends ThemeVkBase, LegoIOSLocalColors {}

export interface ThemeLegoIOSDescription extends ThemeVkBaseDescription {
	colors: LocalVkontakteIOSColorsDescriptionStruct & ColorsDescriptionStruct;
}
export interface ThemeLegoIOSCssVars extends ThemeCssVars<ThemeLegoIOS> {}
