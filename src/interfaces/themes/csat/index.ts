import { ColorDescription, ColorWithStates } from '@/interfaces/general/colors';

export type LocalCsatColorsDescriptionStruct = {
	csatPlateBackground: ColorDescription;
	csatRatingIconStar: ColorDescription;
};

export type CsatLocalColors = {
	[key in keyof LocalCsatColorsDescriptionStruct]: ColorWithStates;
};
