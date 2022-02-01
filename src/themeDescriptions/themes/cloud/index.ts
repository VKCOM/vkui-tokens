import {Property} from 'csstype';

import {Font} from '@/interfaces/general/typography';
import {ThemeCloudDescription} from '@/interfaces/themes/cloud';

import {lightTheme} from '../../base/paradigm';
import {helpers} from '../../common';

const {x2, x4, x5} = helpers;

// шрифты не наследуются от fonSize потому что
// мы хотим обновить шрифтовую шкалу и проще начать с этого проекта
type FontAccentAtributes = {
	fontFamily: Property.FontFamily;
	fontWeight: Property.FontWeight;
};
const fontFamilyBase: Property.FontFamily =
	'Inter, Helvetica, Arial, sans-serif';
const {
	fontFamilyAccent,
	fontWeightBase1,
	fontWeightAccent1,
	fontWeightAccent2,
} = lightTheme;

const fontAccentBoldAtributes: FontAccentAtributes = {
	fontFamily: fontFamilyAccent,
	fontWeight: fontWeightAccent1,
};
const fontSize1: Font = {
	fontSize: 11,
	lineHeight: '14px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontSize2: Font = {
	fontSize: 13,
	lineHeight: '18px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontSize3: Font = {
	fontSize: 15,
	lineHeight: '20px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontSize4: Font = {
	fontSize: 17,
	lineHeight: '24px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontSize5: Font = {
	fontSize: 20,
	lineHeight: '26px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontSize6: Font = {
	fontSize: 24,
	lineHeight: '28px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontSize7: Font = {
	fontSize: 28,
	lineHeight: '32px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontSize8: Font = {
	fontSize: 32,
	lineHeight: '36px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontSize9: Font = {
	fontSize: 40,
	lineHeight: '48px',
	fontWeight: fontWeightBase1,
	fontFamily: fontFamilyBase,
};

const fontText = {
	regular: {
		...fontSize3,
	},
};

export const cloudTheme: ThemeCloudDescription = {
	...lightTheme,

	themeName: 'cloud',
	themeNameBase: 'cloud',

	fontFamilyBase,
	fontFamilyAccent,
	fontWeightAccent1,
	fontWeightAccent2,

	fontH0: {
		compact: {
			...fontSize7,
			...fontAccentBoldAtributes,
		},
		regular: {
			...fontSize9,
			...fontAccentBoldAtributes,
		},
	},
	fontH1: {
		compact: {
			...fontSize6,
			...fontAccentBoldAtributes,
		},
		regular: {
			...fontSize8,
			...fontAccentBoldAtributes,
		},
	},
	fontH2: {
		compact: {
			...fontSize5,
			...fontAccentBoldAtributes,
		},
		regular: {
			...fontSize7,
			...fontAccentBoldAtributes,
		},
	},
	fontTitle1: {
		compact: {
			...fontSize4,
			...fontAccentBoldAtributes,
		},
		regular: {
			...fontSize6,
			...fontAccentBoldAtributes,
		},
	},
	fontTitle2: {
		compact: {
			...fontSize3,
			...fontAccentBoldAtributes,
		},
		regular: {
			...fontSize5,
			...fontAccentBoldAtributes,
		},
	},
	fontTitle3: {
		compact: {
			...fontSize3,
			...fontAccentBoldAtributes,
		},
		regular: {
			...fontSize4,
			...fontAccentBoldAtributes,
		},
	},
	fontSubhead: {
		compact: {
			...fontSize3,
			...fontAccentBoldAtributes,
		},
		regular: {
			...fontSize3,
			...fontAccentBoldAtributes,
		},
	},
	fontText,
	fontFootnote: {
		regular: {
			...fontSize2,
		},
	},
	fontCaption2: {
		regular: {
			...fontSize1,
		},
	},

	sizeButtonPaddingHorizontal: {
		regular: x4,
	},
	sizeBasePadding: {
		regular: x5,
	},

	elevation1: 'none',
	elevation2: 'none',
	elevation3: '0px 4px 32px rgba(0, 16, 61, 0.32)',
	elevation4: '0px 16px 48px rgba(0, 16, 61, 0.48)',

	sizeAvatarXL: {
		compact: 120,
		regular: 160,
	},

	sizeFieldHorizontalPadding: {
		regular: x2,
	},

	sizeBorderRadius: {
		regular: 8,
	},
};
