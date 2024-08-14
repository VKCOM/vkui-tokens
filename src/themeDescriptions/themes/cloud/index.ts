import type { Property } from 'csstype';

import { staticRef } from '@/build/helpers/tokenHelpers';
import { Font } from '@/interfaces/general/typography';
import { ThemeCloudDescription } from '@/interfaces/themes/cloud';
import { ThemeCloudDarkDescription } from '@/interfaces/themes/cloudDark';

import { darkTheme, darkThemeElevation, lightTheme } from '../../base/paradigm';
import { helpers } from '../../common';

const { x2, x4, x5 } = helpers;

// шрифты не наследуются от fonSize потому что
// мы хотим обновить шрифтовую шкалу и проще начать с этого проекта
type FontAccentAtributes = {
	fontFamily: Property.FontFamily;
	fontWeight: Property.FontWeight;
};
const fontFamilyBase: Property.FontFamily = 'Inter, Helvetica, Arial, sans-serif';
const { fontFamilyAccent, fontWeightBase3, fontWeightAccent1, fontWeightAccent2 } = lightTheme;

const fontWeightDemibold = 600;
const fontAccentBoldAtributes: FontAccentAtributes = {
	fontFamily: staticRef(fontFamilyAccent),
	fontWeight: staticRef(fontWeightAccent1),
};

const fontTitle3Medium: Font = {
	fontSize: 18,
	lineHeight: '24px',
	...fontAccentBoldAtributes,
};

const fontTitle2Medium: Font = {
	fontSize: 20,
	lineHeight: '26px',
	...fontAccentBoldAtributes,
};

const footnoteCapsMedium: Font = {
	...staticRef(lightTheme.fontFootnoteCaps).regular,
	fontSize: 14,
	lineHeight: '18px',
	...fontAccentBoldAtributes,
};

const footnoteRegular: Font = {
	fontSize: 14,
	lineHeight: '18px',
	fontWeight: staticRef(fontWeightBase3),
	fontFamily: staticRef(fontFamilyAccent),
};

const subheadMedium: Font = {
	fontSize: 14,
	lineHeight: '18px',
	...fontAccentBoldAtributes,
};

const largeTitleMedium: Font = {
	fontSize: 28,
	lineHeight: '34px',
	...fontAccentBoldAtributes,
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
			fontSize: 40,
			lineHeight: '46px',
			...fontAccentBoldAtributes,
		},
		regular: {
			fontSize: 40,
			lineHeight: '46px',
			...fontAccentBoldAtributes,
		},
	},
	fontH1: {
		compact: {
			fontSize: 32,
			lineHeight: '38px',
			...fontAccentBoldAtributes,
		},
		regular: {
			fontSize: 32,
			lineHeight: '40px',
			...fontAccentBoldAtributes,
		},
	},
	fontH2: {
		compact: {
			fontSize: 28,
			lineHeight: '32px',
			...fontAccentBoldAtributes,
		},
		regular: largeTitleMedium,
	},
	fontTitle1: {
		compact: {
			fontSize: 24,
			lineHeight: '28px',
			...fontAccentBoldAtributes,
		},
		regular: {
			fontSize: 24,
			lineHeight: '28px',
			...fontAccentBoldAtributes,
		},
	},
	fontTitle2: {
		compact: {
			fontSize: 20,
			lineHeight: '26px',
			...fontAccentBoldAtributes,
		},
		regular: fontTitle2Medium,
	},
	fontTitle2Custom: {
		regular: {
			...fontTitle2Medium,
			fontWeight: staticRef(fontWeightBase3),
			fontFamily: staticRef(fontFamilyAccent),
		},
		compact: {
			fontSize: 20,
			lineHeight: '26px',
			fontWeight: staticRef(fontWeightBase3),
		},
	},
	fontTitle3: {
		compact: {
			fontSize: 17,
			lineHeight: '22px',
			...fontAccentBoldAtributes,
		},
		regular: fontTitle3Medium,
	},
	fontTitle3Custom: {
		regular: {
			...fontTitle3Medium,
			fontWeight: staticRef(fontWeightBase3),
		},
		compact: {
			fontSize: 17,
			lineHeight: '22px',
			fontWeight: staticRef(fontWeightBase3),
			fontFamily: staticRef(fontFamilyAccent),
		},
	},
	fontSubhead: {
		compact: {
			fontSize: 14,
			lineHeight: '18px',
			...fontAccentBoldAtributes,
		},
		regular: subheadMedium,
	},
	fontText: {
		compact: {
			fontSize: 15,
			lineHeight: '20px',
			fontWeight: staticRef(fontWeightBase3),
			fontFamily: staticRef(fontFamilyAccent),
		},
		regular: {
			fontSize: 16,
			lineHeight: '20px',
			fontWeight: staticRef(fontWeightBase3),
			fontFamily: staticRef(fontFamilyAccent),
		},
	},
	fontFootnote: {
		regular: footnoteRegular,
		compact: {
			fontSize: 14,
			lineHeight: '18px',
			fontWeight: staticRef(fontWeightBase3),
			fontFamily: staticRef(fontFamilyAccent),
		},
	},
	fontCaption1: {
		...staticRef(lightTheme.fontCaption1),
		compact: {
			fontSize: 12,
			lineHeight: '16px',
			fontWeight: staticRef(fontFamilyAccent),
			fontFamily: staticRef(fontFamilyAccent),
		},
	},
	fontCaption2: {
		regular: {
			fontSize: 11,
			lineHeight: '14px',
			fontWeight: staticRef(fontWeightBase3),
			fontFamily: fontFamilyBase,
		},
	},
	fontFootnoteCaps: {
		regular: footnoteCapsMedium,
	},
	fontCaption1CapsDemibold: {
		regular: {
			...staticRef(lightTheme.fontCaption1Caps).regular,
			fontWeight: staticRef(fontWeightDemibold),
			fontFamily: staticRef(fontFamilyAccent),
		},
	},
	fontCaption2CapsDemibold: {
		regular: {
			...staticRef(lightTheme.fontCaption2Caps).regular,
			fontWeight: staticRef(fontWeightDemibold),
			fontFamily: staticRef(fontFamilyAccent),
		},
	},
	fontCaption3CapsDemibold: {
		regular: {
			...staticRef(lightTheme.fontCaption3Caps).regular,
			fontWeight: staticRef(fontWeightDemibold),
			fontFamily: staticRef(fontFamilyAccent),
		},
	},
	fontSubtitleMedium: {
		fontSize: 18,
		lineHeight: '24px',
		...fontAccentBoldAtributes,
	},
	fontSubtitleCustom: {
		fontSize: 18,
		lineHeight: '24px',
		fontWeight: staticRef(fontWeightBase3),
		fontFamily: staticRef(fontFamilyAccent),
	},
	fontHeadlineLargeMedium: {
		fontSize: 16,
		lineHeight: '20px',
		...fontAccentBoldAtributes,
	},
	fontLargeText: {
		fontSize: 16,
		lineHeight: '20px',
		fontWeight: staticRef(fontWeightBase3),
		fontFamily: staticRef(fontFamilyAccent),
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

	cloudImageOverlayBackground: 'none',

	colors: {
		...lightTheme.colors,
		colorBackgroundNegative: '#E64646',
		cloudColorSidebarItemText: '#333333',
		cloudColorSidebarItemTextPrimary: '#2C2D2E',
		cloudColorSidebarItemTextSecondary: '#87898F',
		cloudColorSidebarItemBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.24)',
		},
		cloudColorBackground: lightTheme.colors.colorBackground,
		cloudColorOverlayBackground: 'transparent',
	},
};

export const cloudDarkTheme: ThemeCloudDarkDescription = {
	...cloudTheme,
	...darkTheme,
	...darkThemeElevation,
	themeName: 'cloudDark',
	colors: {
		...cloudTheme.colors,
		...darkTheme.colors,
	},
};
