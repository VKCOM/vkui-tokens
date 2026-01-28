import { ThemePromoDescription } from '../../../interfaces/themes/promo/index.js';
import { lightTheme } from '../../base/paradigm.js';

const fontWeight = 300;

const fontWeightBold = 500;

const fontWeightMedium = 400;
// const fontWeightHighlightWeightProperty = 700;

// шрифтовая шкала
const fontSize1 = {
	fontSize: 14,
	lineHeight: `20px`,
	fontWeight,
};

const fontSize3 = {
	fontSize: 18,
	lineHeight: `28px`,
	fontWeight,
};

const fontSize4 = {
	fontSize: 20,
	lineHeight: `28px`,
	fontWeight,
};

const fontSize5 = {
	fontSize: 24,
	lineHeight: `32px`,
	fontWeight,
};

const fontSize6 = {
	fontSize: 28,
	lineHeight: `36px`,
	fontWeight,
};

const fontSize7 = {
	fontSize: 32,
	lineHeight: `40px`,
	fontWeight,
};

const fontSize8 = {
	fontSize: 40,
	lineHeight: `48px`,
	fontWeight,
};

const fontSize9 = {
	fontSize: 48,
	lineHeight: `56px`,
	fontWeight,
};

const fontSize10 = {
	fontSize: 64,
	lineHeight: `72px`,
	fontWeight,
};

const fontSize11 = {
	fontSize: 88,
	lineHeight: `96px`,
	fontWeight,
};

export const promoTheme: ThemePromoDescription = {
	...lightTheme,
	themeName: 'promo',
	themeNameBase: 'promo',

	breakpoints: {
		touch: {
			adaptiveValue: 'compactX',
			breakpoint: 0,
		},
		tablet: {
			adaptiveValue: 'compact',
			breakpoint: 768,
		},
		desktopS: {
			adaptiveValue: 'regular',
			breakpoint: 1000,
		},
		desktopM: {
			adaptiveValue: 'large',
			breakpoint: 1300,
		},
		desktopL: {
			adaptiveValue: 'largeX',
			breakpoint: 1600,
		},
		desktopXL: {
			adaptiveValue: 'largeXX',
			breakpoint: 2200,
		},
	},

	sizeBorderRadius: {
		regular: 8,
	},

	sizeControlButtonWidthMin: {
		regular: 280,
	},
	sizeControlButtonSmallWidthMin: {
		regular: 160,
	},
	sizeButtonPaddingHorizontal: {
		regular: 32,
	},
	sizeButtonLargeHeight: {
		regular: 48,
	},
	sizeButtonMediumHeight: {
		compactX: 64,
		compact: 52,
		regular: 52,
		large: 64,
		largeX: 64,
		largeXX: 64,
	},
	sizeButtonSmallHeight: {
		regular: 40,
	},
	sizePromoButtonClose: {
		regular: 32,
	},

	fontWeightBold,
	fontWeightMedium,

	fontH1: {
		compactX: {
			...fontSize8,
			fontWeight: fontWeightMedium,
			margin: '0 0 32px 0',
		},
		compact: {
			...fontSize9,
			fontWeight: fontWeightMedium,
			margin: '0 0 24px 0',
		},
		regular: {
			...fontSize9,
			fontWeight: fontWeightMedium,
			margin: '0 0 24px 0',
		} as any,
		large: {
			...fontSize10,
			fontWeight: fontWeightMedium,
			margin: '0 0 32px 0',
		},
		largeX: {
			...fontSize11,
			fontWeight: fontWeightMedium,
			margin: '0 0 40px 0',
		},
		largeXX: {
			...fontSize11,
			fontWeight: fontWeightMedium,
			margin: '0 0 40px 0',
		},
	},

	fontH2: {
		compactX: {
			...fontSize6,
			fontWeight: fontWeightMedium,
			margin: '0 0 24px 0',
		},
		compact: {
			...fontSize7,
			fontWeight: fontWeightMedium,
			margin: '0 0 28px 0',
		},
		regular: {
			...fontSize8,
			fontWeight: fontWeightMedium,
			margin: '0 0 32px 0',
		} as any,
		large: {
			...fontSize9,
			fontWeight: fontWeightMedium,
			margin: '0 0 32px 0',
		},
		largeX: {
			...fontSize9,
			fontWeight: fontWeightMedium,
			margin: '0 0 32px 0',
		},
		largeXX: {
			...fontSize10,
			fontWeight: fontWeightMedium,
			margin: '0 0 40px 0',
		},
	},

	fontTitle1: {
		compactX: {
			...fontSize5,
			fontWeight: fontWeightMedium,
			margin: '0 0 24px 0',
		},
		compact: {
			...fontSize4,
			fontWeight: fontWeightMedium,
			margin: '0 0 24px 0',
		},
		regular: {
			...fontSize5,
			fontWeight: fontWeightMedium,
			margin: '0 0 24px 0',
		} as any,
		large: {
			...fontSize7,
			fontWeight: fontWeightMedium,
			margin: '0 0 24px 0',
		},
		largeX: {
			...fontSize7,
			fontWeight: fontWeightMedium,
			margin: '0 0 24px 0',
		},
		largeXX: {
			...fontSize8,
			fontWeight: fontWeightMedium,
			margin: '0 0 32px 0',
		},
	},

	fontText: {
		regular: {
			...fontSize3,
		} as any,
	},

	fontFootnote: {
		regular: {
			...fontSize1,
		} as any,
	},

	// sizeIllustrationS: 48,
	// sizeIllustrationXM: 72,
	sizeIllustrationL: {
		regular: 144,
	},

	sizeIllustrationM: {
		compactX: 96,
		compact: 48,
		regular: 48,
		large: 96,
		largeX: 96,
		largeXX: 96,
	},

	sizeIllustrationXXL: {
		compactX: 280,
		compact: 280,
		regular: 360,
		large: 380,
		largeX: 560,
		largeXX: 560,
	},

	sizeMarginIllustrationM: {
		compactX: 32,
		compact: 24,
		regular: 24,
		large: 32,
		largeX: 32,
		largeXX: 32,
	},

	sizeMarginIllustrationXXL: {
		compactX: 40,
		compact: 40,
		regular: 60,
		large: 100,
		largeX: 100,
		largeXX: 140,
	},

	// перейдет в сетки не забыть переделать
	sizeContentBlockWidth: {
		compactX: '100%',
		compact: 700,
		regular: 940,
		large: 1220,
		largeX: 1260,
		largeXX: 1380,
	},

	// перейдет в сетки не забыть переделать
	sizeContentBlockHorizontalPadding: {
		compactX: 20,
		compact: 0,
		regular: 0,
		large: 0,
		largeX: 0,
		largeXX: 0,
	},

	// сетки, посмотреть
	sizeHeaderHeightMin: {
		regular: '90%',
	},

	// сетки, посмотреть
	sizeContentBlockVerticalPadding: {
		compactX: 48,
		compact: 56,
		regular: 56,
		large: 72,
		largeX: 88,
		largeXX: 96,
	},

	sizeGridColumn1X3: {
		compactX: '100%',
		compact: 200,
		regular: 260,
		large: 340,
		largeX: 380,
		largeXX: 380,
	},

	sizeGridColumn2X3: {
		compactX: '100%',
		compact: 450,
		regular: 600,
		large: 780,
		largeX: 820,
		largeXX: 920,
	},

	sizeGridColumn1X2: {
		compactX: '100%',
		compact: 320,
		regular: 420,
		large: 560,
		largeX: 580,
		largeXX: 620,
	},

	sizeGridColumnAsymmetricalSmall: {
		compactX: '100%',
		compact: 260,
		regular: 420,
		large: 500,
		largeX: 540,
		largeXX: 600,
	},

	sizeGridColumnAsymmetricalLarge: {
		compactX: '100%',
		compact: 380,
		regular: 440,
		large: 560,
		largeX: 560,
		largeXX: 640,
	},

	sizeIconUI: {
		compactX: 20,
		compact: 20,
		regular: 20,
		large: 24,
		largeX: 24,
		largeXX: 24,
	},

	// сетки, посмотреть
	sizeMarginXS: {
		compactX: 12,
		compact: 12,
		regular: 12,
		large: 16,
		largeX: 16,
		largeXX: 16,
	},

	sizeMarginS: {
		compactX: 16,
		compact: 16,
		regular: 20,
		large: 24,
		largeX: 32,
		largeXX: 32,
	},

	sizeMarginM: {
		compactX: 24,
		compact: 24,
		regular: 24,
		large: 32,
		largeX: 40,
		largeXX: 40,
	},

	sizeMarginL: {
		compactX: 32,
		compact: 32,
		regular: 32,
		large: 40,
		largeX: 48,
		largeXX: 48,
	},
};
