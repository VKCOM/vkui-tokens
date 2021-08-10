import {ThemeOctaviusDescription} from '@/interfaces/themes/octavius';
import {lightColors as vkColors} from '@/themeDescriptions/base/vk';
import {octaviusTheme} from '@/themeDescriptions/themes/octavius';

const fontFamilyAccent = 'VKSansDisplay, Helvetica, Arial, sans-serif';
const fontFamilyBase = 'VKSansText, Helvetica, Arial, sans-serif';
const fontWeightAccent2 = 500;
const fontWeightAccent3 = 500;
const fontWeightBase1 = 400;

// TODO: Придумать более изящный способ наследования
const octaviusVKThemeBase: ThemeOctaviusDescription = {
	...octaviusTheme,
	themeName: 'octaviusVK',

	// Цвета
	colors: {
		...octaviusTheme.colors,
		...vkColors.colors,
		colorBackgroundSecondary: 'rgba(0, 28, 61, 0.05)',
		colorThumbErrorBackground: `rgba(230, 70, 70, 0.12)`,

		octaviusColorBackground: '#EDEEF0',
		octaviusColorIconUnread: vkColors.colors.colorIconAccent,
		octaviusColorIconFavorite: vkColors.colors.colorAccentRed,
		octaviusColorIconOrder: '#ff51ab',
		octaviusColorIconFinance: '#22c983',
		octaviusColorIconRegistration: '#ffa000',
		octaviusColorIconTravel: '#bd19ff',
		octaviusColorIconEvent: '#07a3fc',
		octaviusColorIconFees: '#e70101',

		octaviusColorHeaderBackground: {
			normal: 'transparent',
			hover: '#f3f5f7',
			active: '#eceff1',
		},
		octaviusColorHeaderButtonText: '#000000',
		octaviusColorHeaderIcon: vkColors.colors.colorIconAccent,
		octaviusColorHeaderTextSecondary: vkColors.colors.colorTextSecondary,
		octaviusColorHeaderProgress: vkColors.colors.colorBackgroundAccent,

		octaviusColorHeaderSearchBackground: 'rgba(0, 16, 61, 0.07)',
		octaviusColorHeaderSearchBackgroundCollapsed: 'rgba(0, 16, 61, 0.07)',
		octaviusColorHeaderSearchChipBackground: '#FFFFFF',
		octaviusColorHeaderSearchIcon: '#b6b8be',
		octaviusColorHeaderSearchText: vkColors.colors.colorTextPrimary,
		octaviusColorHeaderSearchTextCollapsed:
			vkColors.colors.colorTextSecondary,

		octaviusColorSidebarItemBackground: {
			normal: 'transparent',
			hover: '#e1e3e7',
			active: '#dcdfe3',
		},
		octaviusColorSidebarItemIconPrimary: vkColors.colors.colorIconAccent,
		octaviusColorSidebarCounterBackground: '#AEB7C2',
		octaviusColorSidebarCounterText: '#FFFFFF',

		octaviusColorDatasetBackground:
			octaviusTheme.colors.colorBackgroundContent,
		octaviusColorTextBackgroundContrast:
			octaviusTheme.colors.colorTextPrimary,
	},

	octaviusElevationCard: '0px 1px 0px 0px #DCE1E6, 0px 0px 0px 1px #E7E8EC',
	octaviusElevationHeader: '0px 0px 0px 1px #E7E8EC',

	// Типографика
	// Размеры такие же, как в теме octavius, а вот fontFamily другой
	fontFamilyAccent,
	fontFamilyBase,
	fontTitle1: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle2: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontTitle3: {
		regular: {
			fontSize: 17,
			lineHeight: 24,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
	},
	fontHeadline: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent2,
		},
	},
	// todo поменять местами fontSize, когда откажемся от auto
	// todo fontSize в мобильном виде должен быть 16
	fontText: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontSubhead: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnote: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.3px',
		},
	},
	fontCaption1: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption1Caps: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.26px',
		},
	},
	fontCaption2: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption2Caps: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.22px',
		},
	},
	fontCaption3: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
		},
	},
	fontCaption3Caps: {
		regular: {
			fontSize: 9,
			lineHeight: 12,
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase1,
			textTransform: 'uppercase',
			letterSpacing: '0.16px',
		},
	},

	// todo удалить и заменить на контекстные токены в проектах
	fontH0: {
		regular: {
			fontSize: 28,
			lineHeight: 32,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			fontSize: 44,
			lineHeight: 52,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH1: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			fontSize: 32,
			lineHeight: 36,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH2: {
		regular: {
			fontSize: 20,
			lineHeight: 26,
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent3,
		},
		compact: {
			fontSize: 28,
			lineHeight: 32,
		},
	},
};

export const octaviusVKTheme: ThemeOctaviusDescription = {
	...octaviusVKThemeBase,
	// todo удалить и заменить на контекстные токены в проектах
	fontH3: {
		regular: {
			...octaviusVKThemeBase.fontTitle3.regular,
		},
		compact: {
			...octaviusVKThemeBase.fontTitle1.regular,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH4: {
		regular: {
			...octaviusVKThemeBase.fontHeadline.regular,
		},
		compact: {
			...octaviusVKThemeBase.fontTitle2.regular,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH5: {
		regular: {
			...octaviusVKThemeBase.fontHeadline.regular,
		},
		compact: {
			...octaviusVKThemeBase.fontTitle3.regular,
		},
	},
	// todo удалить и заменить на контекстные токены в проектах
	fontH6: {
		regular: {
			...octaviusVKThemeBase.fontHeadline.regular,
		},
		compact: {
			...octaviusVKThemeBase.fontHeadline.regular,
		},
	},

	octaviusFontFamilyDefault: fontFamilyBase,
	octaviusFontFamilyMailSans: fontFamilyAccent,
	octaviusFontFamilyGlobal: fontFamilyBase,
	octaviusFontFamilyMac: fontFamilyBase,
	octaviusFontFamilyDisplay: fontFamilyAccent,
};
