import { Property } from 'csstype';

import { ThemeCallsDescription } from '@/interfaces/themes/calls';

import { darkTheme } from '../../base/paradigm';
import { fontSizes } from '../../common';

export const fontFamily: Property.FontFamily = 'MailSans, Helvetica, Arial, sans-serif';

const fontSize1 = {
	...fontSizes.fontSize1,
	fontFamily,
};

const fontSize2 = {
	...fontSizes.fontSize2,
	fontFamily,
};

const fontSize3 = {
	...fontSizes.fontSize3,
	fontFamily,
};

const fontSize5 = {
	...fontSizes.fontSize5,
	fontFamily,
};

const fontSize6 = {
	...fontSizes.fontSize6,
	fontFamily,
};

const fontSize7 = {
	...fontSizes.fontSize7,
	fontFamily,
};

const fontText = {
	regular: {
		...fontSize3,
	},
};

export const callsTheme: ThemeCallsDescription = {
	...darkTheme,
	themeName: 'calls',
	themeNameBase: 'calls',

	colors: {
		...darkTheme.colors,
		colorTextPrimary: '#ffffff',
	},

	fontFamilyAccent: fontFamily,
	fontFamilyBase: fontFamily,
	fontH0: {
		regular: {
			...fontSize7,
			fontWeight: 500,
		},
	},
	fontH1: {
		regular: {
			...fontSize6,
			fontWeight: 500,
		},
	},
	fontH2: {
		regular: {
			...fontSize5,
			fontWeight: 500,
		},
	},
	fontSubhead: {
		regular: {
			...fontSize3,
			fontWeight: 500,
		},
	},
	fontText,
	fontFootnote: {
		regular: {
			...fontSize2,
		},
	},
	fontCaption2: {
		compact: {
			...fontSize1,
		},
		regular: {
			...fontSize1,
		},
	},
};
