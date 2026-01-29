import { Adaptive } from '../../../interfaces/general/tools/index.ts';
import { Font } from '../../../interfaces/general/typography/index.ts';
import { ThemeSearchDescription } from '../../../interfaces/themes/search/index.ts';
import { lightTheme } from '../../base/paradigm.ts';

export const searchTheme: ThemeSearchDescription = {
	...lightTheme,
	themeName: 'search',
	themeNameBase: 'search',
	fontFamilyBase: 'Arial, sans-serif',
	searchCardBackground:
		'linear-gradient(0deg, #2C2D2E 0%, #2C2D2E 6.25%, rgba(44, 45, 46, 0.992188) 12.5%, rgba(44, 45, 46, 0.973633) 18.75%, rgba(44, 45, 46, 0.9375) 25%, rgba(44, 45, 46, 0.87793) 31.25%, rgba(44, 45, 46, 0.789062) 37.5%, rgba(44, 45, 46, 0.665039) 43.75%, rgba(44, 45, 46, 0.5) 50%, rgba(44, 45, 46, 0.334961) 56.25%, rgba(44, 45, 46, 0.210938) 62.5%, rgba(44, 45, 46, 0.12207) 68.75%, rgba(44, 45, 46, 0.0625) 75%, rgba(44, 45, 46, 0.0263672) 81.25%, rgba(44, 45, 46, 0.0078125) 87.5%, rgba(44, 45, 46, 0.000976562) 93.75%, rgba(44, 45, 46, 0) 100%)',
	searchCardWithTextBackground:
		'linear-gradient(0deg, #2C2D2E 0%, rgba(44, 45, 46, 0.992188) 12.5%, rgba(44, 45, 46, 0.9375) 25%, rgba(44, 45, 46, 0.789062) 37.5%, rgba(44, 45, 46, 0.5) 50%, rgba(44, 45, 46, 0.210938) 62.5%, rgba(44, 45, 46, 0.0625) 75%, rgba(44, 45, 46, 0.0078125) 87.5%, rgba(44, 45, 46, 0) 100%)',
	elevation1: '0px 4px 12px rgba(0, 16, 61, 0.05)',
	elevation1Hover: '0px 6px 16px rgba(0, 16, 61, 0.09)',
	elevation2: '0px 6px 20px rgba(0, 16, 61, 0.07)',
	elevation2Hover: '0px 10px 24px rgba(0, 16, 61, 0.11)',
	elevation3: '0px 4px 20px rgba(0, 0, 0, 0.13)',
	elevationButtons: '0px 6px 20px rgba(0, 16, 61, 0.1)',
	colors: {
		...lightTheme.colors,
		colorTextLink: '#0053BB',
		colorTextMuted: '#393B3E',
		colorTextLinkVisited: '#540354',
		searchColorTextLinkPositive: '#2C2D2E',
		searchColorTextLinkPositiveTint: '#6AA965',
		searchColorBackgroundAccentTint: '#F3F7FD',
		searchColorBackgroundOrangeAccentHover: '#FFB640',
		searchColorBackgroundOrangeAccentActive: '#F59800',
		searchColorTextLinkAlternativeHover: '#F16B17',
	},
	sizeBorderRadius: {
		regular: 8,
	},
	searchFontSearchExtraHeadline: {
		regular: {
			fontSize: 24,
			lineHeight: 28,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchTitle4: {
		regular: {
			fontSize: 18,
			lineHeight: 24,
			fontWeight: 400,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchTitle4Bold: {
		regular: {
			fontSize: 18,
			lineHeight: 24,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchHeadline2: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontWeight: 400,
			fontFamily: 'Arial, sans-serif',
		},
		compact: {
			fontSize: 14,
			lineHeight: 20,
			fontWeight: 400,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchSubheadBold: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
		compact: {
			fontSize: 14,
			lineHeight: 18,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchFootnoteBold: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
		compact: {
			fontSize: 13,
			lineHeight: 18,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchFootnoteMailSans: {
		regular: {
			fontSize: 13,
			lineHeight: 18,
			fontWeight: 500,
			fontFamily: 'MailSans, Helvetica, Arial, sans-serif',
		},
		compact: {
			fontSize: 13,
			lineHeight: 18,
			fontWeight: 500,
			fontFamily: 'MailSans, Helvetica, Arial, sans-serif',
		},
	},
	searchFontSearchCaption1Bold: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
		compact: {
			fontSize: 12,
			lineHeight: 16,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchCaption1MailSans: {
		regular: {
			fontSize: 12,
			lineHeight: 16,
			fontWeight: 400,
			fontFamily: 'MailSans, Arial, sans-serif',
		},
		compact: {
			fontSize: 12,
			lineHeight: 16,
			fontWeight: 400,
			fontFamily: 'MailSans, Arial, sans-serif',
		},
	},
	searchFontSearchCaption2MailSans: {
		regular: {
			fontSize: 11,
			lineHeight: 14,
			fontWeight: 400,
			fontFamily: 'MailSans, Arial, sans-serif',
		},
		compact: {
			fontSize: 11,
			lineHeight: 14,
			fontWeight: 400,
			fontFamily: 'MailSans, Arial, sans-serif',
		},
	},
	searchFontSearchBigText: {
		...(lightTheme.fontText as Adaptive<Font>),
		compact: {
			fontSize: 16,
			lineHeight: 20,
			fontWeight: 400,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchBigTextBold: {
		...(lightTheme.fontText as Adaptive<Font>),
		compact: {
			fontSize: 16,
			lineHeight: 20,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchTextBold: {
		...(lightTheme.fontText as Adaptive<Font>),
		compact: {
			fontSize: 15,
			lineHeight: 20,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontSearchTextMailSans: {
		...(lightTheme.fontText as Adaptive<Font>),
		compact: {
			fontSize: 15,
			lineHeight: 20,
			fontWeight: 400,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontForAdvertisingBold: {
		regular: {
			fontSize: 17,
			lineHeight: 24,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
		compact: {
			fontSize: 17,
			lineHeight: 24,
			fontWeight: 700,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontGreenURL: {
		regular: {
			fontSize: 14,
			lineHeight: 18,
			fontWeight: 400,
			fontFamily: 'Arial, sans-serif',
		},
		compact: {
			fontSize: 14,
			lineHeight: 18,
			fontWeight: 400,
			fontFamily: 'Arial, sans-serif',
		},
	},
	searchFontParagraphBold: {
		regular: {
			fontSize: 15,
			lineHeight: 20,
			fontWeight: 500,
			fontFamily: 'Arial, sans-serif',
		},
		compact: {
			fontSize: 15,
			lineHeight: 20,
			fontWeight: 500,
			fontFamily: 'Arial, sans-serif',
		},
	},
};
