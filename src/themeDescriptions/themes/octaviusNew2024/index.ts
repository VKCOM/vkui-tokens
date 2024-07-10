// import { staticRef } from '@/build/helpers/tokenHelpers';
import { ThemeOctaviusDescription } from '@/interfaces/themes/octavius';
import { ThemeOctaviusCompactDescription } from '@/interfaces/themes/octaviusCompact';

// import { lightTheme as vkLightTheme } from '@/themeDescriptions/base/vk';
import { octaviusDarkTheme, octaviusWhiteTheme } from '../octavius';

// const fontFamilyAccent = 'VKSansDisplay, Helvetica, Arial, sans-serif';
// const fontFamilyBase = 'VKSansText, Helvetica, Arial, sans-serif';
// const fontWeightAccent1 = 500;
// const fontWeightAccent2 = 500;
// const fontWeightBase3 = 400;

const octaviusNew2024ThemeBase: ThemeOctaviusCompactDescription = {
	...octaviusWhiteTheme,
	themeName: 'octaviusNew2024',
	colors: {
		...octaviusWhiteTheme.colors,
		colorTextAccent: '#0070F0',
		colorTextAccentThemed: '#0070F0',
		colorTextLink: '#0070F0',
		colorTextLinkThemed: '#0070F0',
		colorIconAccent: '#0077FF',
		colorIconAccentThemed: '#0077FF',
		colorBackgroundAccentThemed: '#0077FF',
		colorBackgroundAccent: '#0077FF',
		colorStrokeAccent: '#0070FF',
		colorStrokeAccentThemed: '#0070FF',
		octaviusColorIconUnread: '#0077FF',
	},

	// // Типографика
	// // Размеры такие же, как в теме octavius, а вот fontFamily другой
	// fontFamilyAccent,
	// fontFamilyBase,
	//
	// fontTitle1: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontTitle1).regular,
	// 		fontSize: 24,
	// 		lineHeight: 28,
	// 		fontFamily: fontFamilyAccent,
	// 		fontWeight: fontWeightAccent1,
	// 	},
	// },
	// fontTitle2: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontTitle2).regular,
	// 		fontSize: 20,
	// 		lineHeight: 26,
	// 		fontFamily: fontFamilyAccent,
	// 		fontWeight: fontWeightAccent1,
	// 	},
	// },
	// fontTitle3: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontTitle3).regular,
	// 		fontSize: 17,
	// 		lineHeight: 24,
	// 		fontFamily: fontFamilyAccent,
	// 		fontWeight: fontWeightAccent1,
	// 	},
	// },
	// fontHeadline1: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontHeadline1).regular,
	// 		fontSize: 15,
	// 		lineHeight: 20,
	// 		fontFamily: fontFamilyAccent,
	// 		fontWeight: fontWeightAccent2,
	// 	},
	// },
	// // todo поменять местами fontSize, когда откажемся от auto
	// // todo fontSize в мобильном виде должен быть 16
	// fontText: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontText).regular,
	// 		fontSize: 15,
	// 		lineHeight: 20,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 	},
	// },
	// fontSubhead: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontSubhead).regular,
	// 		fontSize: 14,
	// 		lineHeight: 18,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 	},
	// },
	// fontFootnote: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontFootnote).regular,
	// 		fontSize: 13,
	// 		lineHeight: 18,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 	},
	// },
	// fontFootnoteCaps: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontFootnoteCaps).regular,
	// 		fontSize: 13,
	// 		lineHeight: 18,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 		textTransform: 'uppercase',
	// 	},
	// },
	// fontCaption1: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontCaption1).regular,
	// 		fontSize: 12,
	// 		lineHeight: 16,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 	},
	// },
	// fontCaption1Caps: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontCaption1Caps).regular,
	// 		fontSize: 12,
	// 		lineHeight: 16,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 		textTransform: 'uppercase',
	// 	},
	// },
	// fontCaption2: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontCaption2).regular,
	// 		fontSize: 11,
	// 		lineHeight: 14,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 	},
	// },
	// fontCaption2Caps: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontCaption2Caps).regular,
	// 		fontSize: 11,
	// 		lineHeight: 14,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 		textTransform: 'uppercase',
	// 	},
	// },
	// fontCaption3: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontCaption3).regular,
	// 		fontSize: 9,
	// 		lineHeight: 12,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 	},
	// },
	// fontCaption3Caps: {
	// 	regular: {
	// 		...staticRef(vkLightTheme.fontCaption3Caps).regular,
	// 		fontSize: 9,
	// 		lineHeight: 12,
	// 		fontFamily: fontFamilyBase,
	// 		fontWeight: fontWeightBase3,
	// 		textTransform: 'uppercase',
	// 	},
	// },
	//
	// // todo удалить и заменить на контекстные токены в проектах
	// fontH0: {
	// 	regular: {
	// 		fontSize: 28,
	// 		lineHeight: 32,
	// 		letterSpacing: '-0.56px',
	// 		fontFamily: fontFamilyAccent,
	// 		fontWeight: fontWeightAccent1,
	// 	},
	// 	compact: {
	// 		fontSize: 44,
	// 		lineHeight: 52,
	// 	},
	// },
	// // todo удалить и заменить на контекстные токены в проектах
	// fontH1: {
	// 	regular: {
	// 		fontSize: 24,
	// 		lineHeight: 28,
	// 		letterSpacing: '-0.48px',
	// 		fontFamily: fontFamilyAccent,
	// 		fontWeight: fontWeightAccent1,
	// 	},
	// 	compact: {
	// 		fontSize: 32,
	// 		lineHeight: 36,
	// 	},
	// },
	// // todo удалить и заменить на контекстные токены в проектах
	// fontH2: {
	// 	regular: {
	// 		fontSize: 20,
	// 		lineHeight: 26,
	// 		letterSpacing: '-0.4px',
	// 		fontFamily: fontFamilyAccent,
	// 		fontWeight: fontWeightAccent1,
	// 	},
	// 	compact: {
	// 		fontSize: 28,
	// 		lineHeight: 32,
	// 	},
	// },
};

export const octaviusNew2024Theme: ThemeOctaviusDescription = {
	...octaviusNew2024ThemeBase,

	// octaviusFontFamilyDefault: fontFamilyBase,
	// octaviusFontFamilyMailSans: fontFamilyAccent,
	// octaviusFontFamilyGlobal: fontFamilyBase,
	// octaviusFontFamilyMac: fontFamilyBase,
	// octaviusFontFamilyDisplay: fontFamilyAccent,
};

export const octaviusNew2024DarkTheme: ThemeOctaviusDescription = {
	...octaviusNew2024Theme,
	themeName: 'octaviusNew2024Dark',
	colors: {
		...octaviusNew2024Theme.colors,
		...octaviusDarkTheme.colors,
		colorTextAccent: '#1A85FF',
		colorTextAccentThemed: '#FFFFFF',
		colorTextLink: '#1A85FF',
		colorTextLinkThemed: '#FFFFFF',
		colorIconAccent: '#0077FF',
		colorIconAccentThemed: '#FFFFFF',
		colorBackgroundAccentThemed: '#FFFFFF',
		colorBackgroundAccent: '#0077FF',
		colorStrokeAccent: '#0077FF',
		colorStrokeAccentThemed: '#FFFFFF',
		octaviusColorIconUnread: '#0077FF',
	},
};
