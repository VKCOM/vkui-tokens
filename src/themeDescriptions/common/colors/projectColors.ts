import type { ColorDescription } from '../../../interfaces/general/colors/index.ts';

export type ProjectColors = {
	colorPrimaryAuto: ColorDescription;
	colorPrimaryBase: ColorDescription;
	colorPrimaryDeti: ColorDescription;
	colorPrimaryDobro: ColorDescription;
	colorPrimaryHealth: ColorDescription;
	colorPrimaryHealthNew: ColorDescription;
	colorPrimaryHitech: ColorDescription;
	colorPrimaryKino: ColorDescription;
	colorPrimaryLady: ColorDescription;
	colorPrimaryMycom: ColorDescription;
	colorPrimaryPets: ColorDescription;
	colorPrimaryRealty: ColorDescription;
	colorPrimaryPharma: ColorDescription;

	colorSecondaryBase: ColorDescription;
	colorSecondaryHealth: ColorDescription;
	colorSecondaryMycom: ColorDescription;
};

export const projectColors: ProjectColors = {
	colorPrimaryAuto: '#0077FF',
	colorPrimaryBase: '#0077FF',
	colorPrimaryDeti: {
		normal: '#7f4af8',
		hover: '#bfa4fb',
		active: '#7f4af8',
	},
	colorPrimaryDobro: '#ffd400',
	colorPrimaryHealth: '#0077FF',
	colorPrimaryHealthNew: '#0077FF',
	colorPrimaryHitech: '#0077FF',
	colorPrimaryKino: '#0077FF',
	colorPrimaryLady: '#0077FF',
	colorPrimaryMycom: '#00abf2',
	colorPrimaryPets: {
		normal: '#fc738c',
		hover: '#ec4d6a',
		active: '#fc627e',
	},
	colorPrimaryRealty: {
		normal: '#7f704b',
		hover: '#aea181',
		active: '#7f704b',
	},
	colorPrimaryPharma: '#1DD3A2',

	colorSecondaryBase: '#0077FF',
	colorSecondaryHealth: '#0077FF',
	colorSecondaryMycom: '#fc2c38',
};
