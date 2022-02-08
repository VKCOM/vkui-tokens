import {Property} from 'csstype';

import {ThemeCalendarDescription} from '@/interfaces/themes/calendar';
import {ThemeCalendarDarkDescription} from '@/interfaces/themes/calendarDark';

import {darkTheme, lightTheme} from '../../base/paradigm';
import {fontSizes, helpers} from '../../common';

const {x2, x3, x4, x5, sizeBase} = helpers;

export const fontFamily: Property.FontFamily =
	'MailSans, Helvetica, Arial, sans-serif';

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

const fontSize4 = {
	...fontSizes.fontSize4,
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
	compact: {
		...fontSize4,
	},
	regular: {
		...fontSize3,
	},
};

export const calendarTheme: ThemeCalendarDescription = {
	...lightTheme,

	themeName: 'calendar',
	themeNameBase: 'calendar',

	colors: {
		...lightTheme.colors,
		colorTextSecondary: '#93969B',
		colorBackgroundSecondary: '#EBECEF',
		colorIconSecondary: '#B6B8BE',
		colorFieldBorderAlpha: {
			normal: 'transparent',
			hover: 'transparent',
			active: 'transparent',
		},
	},

	fontFamilyBase: fontFamily,
	fontFamilyAccent: fontFamily,

	fontH0: {
		regular: {
			...fontSize7,
			fontWeight: 500,
		},
	},
	fontH1: {
		compact: {
			...fontSize6,
			fontWeight: 500,
			marginBottom: x4,
		},
		regular: {
			...fontSize7,
			fontWeight: 500,
			marginBottom: x4,
		},
	},
	fontH2: {
		compact: {
			...fontSize5,
			fontWeight: 500,
			lineHeight: `${sizeBase * 6}px`,
		},
		regular: {
			...fontSize6,
			fontWeight: 500,
			lineHeight: `${sizeBase * 7}px`,
		},
	},
	fontTitle1: {
		regular: {
			...fontSize4,
			fontWeight: 500,
		},
	},
	fontTitle2: {
		regular: {
			...fontSize3,
			fontWeight: 500,
		},
	},
	fontTitle3: {
		regular: {
			...fontSize3,
			fontWeight: 500,
		},
	},
	fontHeadline1: {
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
		regular: {
			...fontSize1,
		},
	},
	fontEventM: {
		compact: {
			...fontSize4,
			fontWeight: 500,
		},
		regular: {
			...fontSize3,
			fontWeight: 500,
		},
	},
	fontEventS: {
		compact: {
			...fontSize3,
			lineHeight: '18px',
			fontWeight: 500,
		},
		regular: {
			...fontSize2,
			lineHeight: '18px',
			fontWeight: 500,
		},
	},
	fontEventXS: {
		regular: {
			...fontText.compact,
			fontSize: 12,
			lineHeight: 16,
			fontWeight: 500,
		},
	},
	fontTime: {
		regular: {
			...fontSize2,
			lineHeight: '18px',
			fontWeight: 500,
		},
	},
	fontBodyIOS: {
		regular: {
			...fontSize4,
			fontWeight: 500,
		},
	},
	fontBodyAndroid: {
		regular: {
			...fontSize4,
			fontSize: 16,
			lineHeight: `${sizeBase * 6}px`,
			fontWeight: 500,
		},
	},

	sizeButtonPaddingHorizontal: {
		compact: x3,
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
		compact: 12,
		regular: 8,
	},
};

export const calendarDarkTheme: ThemeCalendarDarkDescription = {
	...calendarTheme,
	themeName: 'calendarDark',
	colorsScheme: 'dark',
	colors: {
		...calendarTheme.colors,
		...darkTheme.colors,
		colorTextPrimary: '#E7E8EA',
		colorTextSecondary: '#8C8E94',
		colorIconPrimary: '#B4B4B4',
		colorIconSecondary: '#5F5F5F',
		colorFieldBorderAlpha: {
			normal: 'transparent',
			hover: 'transparent',
			active: 'transparent',
		},
	},
};
