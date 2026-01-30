import type { Property } from 'csstype';

import { staticRef } from '../../../build/helpers/tokenHelpers.ts';
import type { Font } from '../../../interfaces/general/typography/index.ts';
import type { ThemeCloudDescription } from '../../../interfaces/themes/cloud/index.ts';
import type { ThemeCloudDarkDescription } from '../../../interfaces/themes/cloudDark/index.ts';
import { darkTheme, darkThemeElevation, lightTheme } from '../../base/paradigm.ts';
import { helpers } from '../../common/index.ts';

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

	// Локальные цвета Облака
	colors: {
		...lightTheme.colors,
		colorBackgroundNegative: '#E64646',

		// Текст
		cloudColorTextSecondaryAlpha: 'rgba(255, 255, 255, .6)',
		cloudColorTextAccentAlternative: '#ff9e00',
		cloudColorTextSnackbarAccent: '#65a0ff',
		cloudColorTextContrastThemedAlpha: 'rgba(255, 255, 255, .6)',

		// Background
		cloudColorToolbarBackground: '#ffffff',
		cloudColorViewerBackground: '#000000',
		cloudColorTabbarBackgroundAlpha: 'rgba(255, 255, 255, .9)',
		cloudColorHeaderIconBackgroundAlpha: 'rgba(71, 71, 71, .06)',
		cloudColorBackgroundDragAndDrop: '#ebf2ff',
		cloudColorBackgroundCTA: '#f5f9ff',
		cloudColorHeaderSearchBackground: '#ffffff',
		cloudColorHeaderSearchBackgroundCollapsed: '#f0f1f3',
		cloudColorBackgroundPortal: '#f6f7f8',
		cloudColorBackgroundAlternative: '#f3f3f5',
		cloudColorBackgroundContentAlternative: '#ffffff',
		cloudColorBackgroundFastScroll: '#ffffff',

		// Icons
		cloudColorIconAccentAlternative: '#ff9e00',
		cloudColorIconRating: '#ffd400',
		cloudColorIconFolder: '#fedd69',

		// Stroke
		cloudColorLandingStrokeTariff: '#249afc',

		// Pallette
		cloudColorSweetblue: '#dde9ff',
		cloudColorBlueAccentThemed: '#1c4479',
		cloudColorSweetgreen: '#ceeee6',
		cloudColorGreenAccentThemed: '#087c6d',
		cloudColorSweetorange: '#f9d3bd',
		cloudColorOrangeAccentThemed: '#78472a',
		cloudColorSweetpurple: '#f2e8ff',
		cloudColorPurpleAccentThemed: '#73519f',
		cloudColorIconIDCardThemedAlpha: 'rgba(0, 95, 249, .2)',
		cloudColorIconIDCard: '#0077ff',
		cloudColorIconOfficialThemedAlpha: 'rgba(236, 71, 80, .2)',
		cloudColorIconOfficial: '#ec4750',
		cloudColorIconTransportThemed: 'rgba(174, 126, 236, .2)',
		cloudColorIconTransport: '#ae7eec',
		cloudColorIconFinanceThemed: 'rgba(36, 199, 128, .2)',
		cloudColorIconFinance: '#24c780',
		cloudColorIconFileDocumentInvariably: '#018bf2',
		cloudColorIconFilePresentationInvariably: '#da4c4e',
		cloudColorIconFileTableInvariably: '#019784',
		cloudColorBackgroundFileDocument: '#e1f0fd',
		cloudColorBackgroundFilePresentation: '#fae9ea',
		cloudColorBackgroundFileTable: '#e1f2f0',
		cloudColorBackgroundFileOtherAlpha: 'rgba(0, 16, 61, .05)',
		cloudColorBackgroundProfileTariff: '#fecad6',
		cloudColorIconProfileTariff: '#ff3985',
		cloudColorBackgroundProfileAccess: '#c3edb3',
		cloudColorIconProfileAccess: '#018646',
		cloudColorBackgroundProfileUploading: '#fddda8',
		cloudColorIconProfileUploading: '#bc5a00',
		cloudColorBackgroundProfileTrash: '#dadce0',
		cloudColorIconProfileTrash: '#656567',
		cloudColorBackgroundProfileSettings: '#b0f2d6',
		cloudColorIconProfileSettings: '#008272',
		cloudColorBackgroundProfileMail: '#b8e1ff',
		cloudColorIconProfileMail: '#0077ff',

		// Other
		cloudColorLandingBackground: '#f3f3f5',
		cloudColorLandingSecondaryBackground: '#ffffff',
		cloudColorLandingTertiaryBackground: '#ffffff',
		cloudColorLandingMediumBackground: '#f6f7f8',
		cloudColorLandingButtonBackground: '#ebf2ff',
		cloudColorLandingLabelBackground: '#d9e6fb',
		cloudColorLandingLabelInverseBackground: '#2c2d2e',
		cloudColorLandingControlPrimaryBackground: '#ffffff',
		cloudColorLandingControlSecondaryBackground: '#e7e8ec',
		cloudColorSubscriptionButtonBackground: '#0077ff',
		cloudColorScrollIndicatorAlpha: 'rgba(104, 106, 113, .65)',

		// Сайдбар
		cloudColorSidebarItemText: '#333333',
		cloudColorSidebarItemTextPrimary: '#2C2D2E',
		cloudColorSidebarItemTextSecondary: '#87898F',
		cloudColorSidebarItemBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.24)',
		},

		// Фон страницы
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

		// Текст
		cloudColorTextSecondaryAlpha: 'rgba(255, 255, 255, .48)',
		cloudColorTextAccentAlternative: '#ff9e00',
		cloudColorTextSnackbarAccent: '#65a0ff',
		cloudColorTextContrastThemedAlpha: 'rgba(255, 255, 255, .6)',

		// Background
		cloudColorToolbarBackground: '#1f1f1f',
		cloudColorViewerBackground: '#000000',
		cloudColorTabbarBackgroundAlpha: 'rgba(43, 43, 43, .9)',
		cloudColorHeaderIconBackgroundAlpha: 'rgba(180, 180, 180, .16)',
		cloudColorBackgroundDragAndDrop: '#000b1e',
		cloudColorBackgroundCTA: '#1b1d21',
		cloudColorHeaderSearchBackground: '#303030',
		cloudColorHeaderSearchBackgroundCollapsed: '#303030',
		cloudColorBackgroundPortal: '#19191a',
		cloudColorBackgroundAlternative: '#191919',
		cloudColorBackgroundContentAlternative: '#2a2a2a',
		cloudColorBackgroundFastScroll: '#39393c',

		// Icons
		cloudColorIconAccentAlternative: '#ff9e00',
		cloudColorIconRating: '#ffd400',
		cloudColorIconFolder: '#fedd69',

		// Stroke
		cloudColorLandingStrokeTariff: '#249afc',

		// Pallette
		cloudColorSweetblue: '#1c4479',
		cloudColorBlueAccentThemed: '#ffffff',
		cloudColorSweetgreen: '#087c6d',
		cloudColorGreenAccentThemed: '#ffffff',
		cloudColorSweetorange: '#78472a',
		cloudColorOrangeAccentThemed: '#ffffff',
		cloudColorSweetpurple: '#73519f',
		cloudColorPurpleAccentThemed: '#ffffff',
		cloudColorIconIDCardThemedAlpha: 'rgba(255, 255, 255, .08)',
		cloudColorIconIDCard: '#1b85ff',
		cloudColorIconOfficialThemedAlpha: 'rgba(255, 255, 255, .08)',
		cloudColorIconOfficial: '#ec4750',
		cloudColorIconTransportThemed: 'rgba(255, 255, 255, .08)',
		cloudColorIconTransport: '#ae7eec',
		cloudColorIconFinanceThemed: 'rgba(255, 255, 255, .08)',
		cloudColorIconFinance: '#24c780',
		cloudColorIconFileDocumentInvariably: '#018bf2',
		cloudColorIconFilePresentationInvariably: '#da4c4e',
		cloudColorIconFileTableInvariably: '#019784',
		cloudColorBackgroundFileDocument: '#353535',
		cloudColorBackgroundFilePresentation: '#353535',
		cloudColorBackgroundFileTable: '#353535',
		cloudColorBackgroundFileOtherAlpha: 'rgba(255, 255, 255, .08)',
		cloudColorBackgroundProfileTariff: '#563940',
		cloudColorIconProfileTariff: '#ff5b9a',
		cloudColorBackgroundProfileAccess: '#354c2c',
		cloudColorIconProfileAccess: '#5cba38',
		cloudColorBackgroundProfileUploading: '#524228',
		cloudColorIconProfileUploading: '#ff9e00',
		cloudColorBackgroundProfileTrash: '#414346',
		cloudColorIconProfileTrash: '#c9c9c9',
		cloudColorBackgroundProfileSettings: '#30443b',
		cloudColorIconProfileSettings: '#06c7af',
		cloudColorBackgroundProfileMail: '#273d4e',
		cloudColorIconProfileMail: '#1b85ff',

		// Other
		cloudColorLandingBackground: '#000000',
		cloudColorLandingSecondaryBackground: '#303030',
		cloudColorLandingTertiaryBackground: '#191919',
		cloudColorLandingMediumBackground: '#19191a',
		cloudColorLandingButtonBackground: '#191919',
		cloudColorLandingLabelBackground: '#191919',
		cloudColorLandingLabelInverseBackground: '#2775fc',
		cloudColorLandingControlPrimaryBackground: '#3b3b3b',
		cloudColorLandingControlSecondaryBackground: '#262627',
		cloudColorSubscriptionButtonBackground: '#191919',
		cloudColorScrollIndicatorAlpha: 'rgba(255, 255, 255, .28)',
		cloudColorSidebarItemText: '#ffffff',
		cloudColorSidebarItemTextPrimary: '#e7e8ea',
		cloudColorSidebarItemTextSecondary: '#8c8e94',
		cloudColorSidebarItemBackgroundAlpha: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.24)',
			active: 'rgba(255, 255, 255, 0.24)',
		},
		cloudColorBackground: darkTheme.colors.colorBackground,
		cloudColorOverlayBackground: 'transparent',
	},
};
