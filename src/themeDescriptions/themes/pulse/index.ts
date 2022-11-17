import {Property} from 'csstype';

import {
	AllowedParadigmColorDescriptions,
	AllowedParadigmColorTokens,
	ThemePulseDescription,
} from '@/interfaces/themes/pulse';
import {ThemePulseDarkDescription} from '@/interfaces/themes/pulseDark';
import {darkColors, lightThemeBase} from '@/themeDescriptions/base/paradigm';
import {helpers} from '@/themeDescriptions/common';

const {x3, x4, x5} = helpers;

const allowedParadigmColors: AllowedParadigmColorTokens[] = [
	'colorTextPrimary',
	'colorTextPrimaryInvariably',
	'colorTextSecondary',
	'colorTextTertiary',
	'colorTextSubhead',
	'colorTextAccent',
	'colorTextAccentThemed',
	'colorTextLink',
	'colorTextLinkThemed',
	'colorTextLinkVisited',
	'colorTextNegative',
	'colorTextPositive',
	'colorTextMuted',
	'colorTextContrast',
	'colorTextContrastThemed',
	'colorLinkContrast',
	'colorIconPrimary',
	'colorIconPrimaryInvariably',
	'colorIconSecondary',
	'colorIconSecondaryAlpha',
	'colorIconMedium',
	'colorIconMediumAlpha',
	'colorIconTertiary',
	'colorIconTertiaryAlpha',
	'colorIconAccent',
	'colorIconAccentThemed',
	'colorIconNegative',
	'colorIconPositive',
	'colorIconContrast',
	'colorIconContrastThemed',
	'colorBackground',
	'colorBackgroundAccentAlternative',
	'colorBackgroundContent',
	'colorBackgroundModal',
	'colorBackgroundSecondary',
	'colorBackgroundSecondaryAlpha',
	'colorBackgroundTertiary',
	'colorBackgroundAccent',
	'colorBackgroundAccentThemed',
	'colorBackgroundNegative',
	'colorBackgroundNegativeTint',
	'colorBackgroundPositive',
	'colorBackgroundContrast',
	'colorBackgroundContrastSecondaryAlpha',
	'colorBackgroundWarning',
	'colorSeparatorPrimary',
	'colorSeparatorPrimaryAlpha',
	'colorSeparatorSecondary',
	'colorImageBorderAlpha',
	'colorFieldBorderAlpha',
	'colorStrokeAccent',
	'colorStrokeAccentThemed',
	'colorStrokeContrast',
	'colorStrokeNegative',
	'colorStrokePositive',
	'colorAccentBlue',
	'colorAccentGray',
	'colorAccentRed',
	'colorAccentGreen',
	'colorAccentOrange',
	'colorAccentPurple',
	'colorAccentViolet',
	'colorAccentSecondary',
	'colorActionSheetText',
	'colorHeaderBackground',
	'colorOverlayPrimary',
	'colorPanelHeaderIcon',
	'colorWriteBarIcon',
	'colorWriteBarInputBackground',
	'colorWriteBarInputBorderAlpha',
	'colorTrackBackground',
	'colorTrackBuffer',
	'colorImagePlaceholder',
	'colorImagePlaceholderAlpha',
	'colorSearchFieldBackground',
	'colorSkeletonTo',
	'colorSkeletonFrom',
	'colorAvatarOverlay',
];

const pick = (
	colors,
	keys: AllowedParadigmColorTokens[],
): AllowedParadigmColorDescriptions =>
	keys
		.filter((key) => key in colors)
		.reduce((res, key) => {
			res[key] = colors[key];
			return res;
		}, {} as AllowedParadigmColorDescriptions);

const {
	animationDurationS,
	animationDurationM,
	animationDurationL,
	animationEasingDefault,
	opacityDisable,
	sizeFieldHorizontalPadding,
} = lightThemeBase;

const lightParadigmColors = pick(lightThemeBase.colors, allowedParadigmColors);
const darkParadigmColors = pick(darkColors.colors, allowedParadigmColors);

const fontFamilyAccent: Property.FontFamily = 'MailSans, Arial, sans-serif';
const fontFamilyBase: Property.FontFamily = 'Arial, sans-serif';
const fontFamilyMedia: Property.FontFamily = 'Georgia, serif';

const fontWeightAccent1 = 500;
const fontWeightAccent2 = 400;
const fontWeightBase1 = 700;
const fontWeightBase2 = 400;

export const pulseTheme: ThemePulseDescription = {
	themeName: 'pulse',
	themeNameBase: 'pulse',
	themeInheritsFrom: 'paradigm',
	prefix: 'vkui',

	colorsScheme: 'light',

	fontFamilyAccent,
	fontFamilyBase,
	fontFamilyMedia,
	fontWeightAccent1,
	fontWeightAccent2,
	fontWeightBase1,
	fontWeightBase2,

	/* Шрифты для статьи */

	fontMediaHeader: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 36,
			lineHeight: '44px',
			letterSpacing: '-0.005em',
		},
		compact: {
			fontFamily: fontFamilyAccent,
			fontSize: 40,
			lineHeight: '48px',
		},
	},
	fontMediaTitle1: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 28,
			lineHeight: '36px',
		},
	},
	fontMediaTitle2: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 24,
			lineHeight: '32px',
		},
	},
	fontMediaTitle3: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 20,
			lineHeight: '28px',
		},
	},
	fontMediaLead: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 19,
			lineHeight: '28px',
			letterSpacing: 0,
		},
		compact: {
			fontSize: 22,
			lineHeight: '32px',
			letterSpacing: '-0.003em',
		},
	},
	fontMediaParagraph: {
		regular: {
			fontFamily: fontFamilyMedia,
			fontWeight: fontWeightBase2,
			fontSize: 18,
			lineHeight: '28px',
			letterSpacing: '0.003em',
		},
		compact: {
			fontWeight: 400,
			fontSize: 19,
			lineHeight: '32px',
		},
	},

	/* Шрифты для лент обвеса и сервисов(PAR) */

	fontTitle1: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 24,
			lineHeight: '28px',
		},
	},
	fontTitle2: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 20,
			lineHeight: '26px',
		},
	},
	fontTitle3: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 17,
			lineHeight: '22px',
		},
	},
	fontHeadline1: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 15,
			lineHeight: '20px',
		},
		compact: {
			fontSize: 16,
			lineHeight: '20px',
		},
	},
	fontHeadline2: {
		regular: {
			fontFamily: fontFamilyAccent,
			fontWeight: fontWeightAccent1,
			fontSize: 14,
			lineHeight: '20px',
		},
		compact: {
			fontSize: 15,
			lineHeight: '20px',
		},
	},
	fontText: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 15,
			lineHeight: '20px',
		},
		compact: {
			fontSize: 16,
			lineHeight: '22px',
		},
	},
	fontParagraph: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 15,
			lineHeight: '20px',
		},
	},
	fontSubhead: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 13,
			lineHeight: '18px',
		},
		compact: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 14,
			lineHeight: '18px',
		},
	},
	fontFootnote: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 13,
			lineHeight: '18px',
		},
	},
	fontFootnoteCaps: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 13,
			lineHeight: '18px',
			letterSpacing: '0.3px',
			textTransform: 'uppercase',
		},
	},
	fontCaption1: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 12,
			lineHeight: '16px',
		},
	},
	fontCaption1Caps: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 12,
			lineHeight: '16px',
			letterSpacing: '0.26px',
			textTransform: 'uppercase',
		},
	},
	fontCaption2: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 11,
			lineHeight: '14px',
		},
	},
	fontCaption2Caps: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 11,
			lineHeight: '14px',
			letterSpacing: '0.22px',
			textTransform: 'uppercase',
		},
	},
	fontCaption3: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 9,
			lineHeight: '12px',
		},
	},
	fontCaption3Caps: {
		regular: {
			fontFamily: fontFamilyBase,
			fontWeight: fontWeightBase2,
			fontSize: 9,
			lineHeight: '12px',
			letterSpacing: '0.16px',
			textTransform: 'uppercase',
		},
	},

	/* Sizes */
	sizeFieldHorizontalPadding,
	sizeBorderRadiusSmall: {
		regular: 4,
	},
	sizeBorderRadius: {
		regular: 8,
	},
	sizeBorderRadiusLarge: {
		regular: 12,
	},
	sizeBorderRadiusCard: {
		regular: 12,
	},
	sizeBorderRadiusPill: {
		regular: 100,
	},
	sizeFieldHeight: {
		regular: 40,
	},
	sizeButtonLargeHeight: {
		regular: 40,
	},
	sizeButtonMediumHeight: {
		regular: 32,
	},
	sizeButtonSmallHeight: {
		regular: 24,
	},
	sizeButtonCircleLarge: {
		regular: 44,
	},
	sizeButtonCircleMedium: {
		regular: 40,
	},
	sizeButtonCircleSmall: {
		regular: 32,
	},
	sizePopupMedium: {
		regular: 360,
	},
	sizePopupLarge: {
		regular: 800,
	},
	sizeButtonPaddingHorizontal: {
		regular: x3,
	},
	sizeButtonPaddingHorizontalLarge: {
		regular: x4,
	},
	sizeListItemHeight: {
		regular: 44,
	},
	sizeIconUIMedium: {
		regular: 16,
	},
	sizeIconUILarge: {
		regular: 20,
	},
	sizeAvatarXS: {
		regular: 24,
	},
	sizeAvatarS: {
		regular: 32,
	},
	sizeAvatarM: {
		regular: 40,
	},
	sizeAvatarL: {
		regular: 60,
	},
	sizeBadge: {
		regular: 20,
	},
	sizeTag: {
		regular: 24,
	},
	sizePageHorizontalPadding: {
		regular: x4,
	},
	sizeCardgridGapSpaceMedium: {
		regular: x4,
	},
	sizeCardgridGapSpaceLarge: {
		regular: x5,
	},

	/* Animation */
	animationEasingDefault,
	animationDurationS,
	animationDurationM,
	animationDurationL,

	/* Elevation */
	elevation1: '0px 4px 12px rgba(18, 25, 43, 0.12)',
	elevation2: '0px 4px 20px rgba(18, 25, 43, 0.2)',
	elevation3: '0px 16px 48px rgba(18, 25, 43, 0.28)',

	/* Z-index*/
	pulseZIndexDropdown: 100,
	pulseZIndexFixed: 120,
	pulseZIndexModal: 140,
	pulseZIndexModalBackdrop: 130,
	pulseZIndexSticky: 110,
	pulseZIndexTooltip: 150,

	/* ToneValues */
	opacityDisable,

	gradientSkeleton: 'linear-gradient(110deg, #E9E9E9, #F5F5F5)',

	colors: {
		...lightParadigmColors,
		colorTransparent: {
			normal: 'transparent',
			hover: 'rgba(0, 16, 61, 0.04)',
			active: 'rgba(0, 16, 61, 0.08)',
		},
		colorBackgroundNegativeTintAlpha: 'rgba(237, 10, 52, 0.1)',
		colorBackgroundPositiveTintAlpha: 'rgba(13, 194, 104, 0.1)',
		colorBackgroundWarningTintAlpha: 'rgba(255, 158, 0, 0.1)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
		pulseColorAccentYellow: '#FFD400',
		pulseColorBackgroundInfoTintAlpha: 'rgba(0, 95, 249, 0.1)',
		pulseColorBackgroundPurple: '#684CE1',
		pulseColorOverlayViewer: 'rgba(0, 0, 0, 0.88)',
		pulseColorPurpleAlpha: 'rgba(66, 0, 255, 0.08)',
		pulseColorWhiteBlueAlpha: 'rgba(226, 236, 255, 0.9)',
	},
};

export const pulseThemeDark: ThemePulseDarkDescription = {
	...pulseTheme,
	colorsScheme: 'dark',
	themeName: 'pulseDark',
	gradientSkeleton: 'linear-gradient(110deg, #292929, #383838)',
	colors: {
		...pulseTheme.colors,
		...darkParadigmColors,
		colorTransparent: {
			normal: 'transparent',
			hover: 'rgba(255, 255, 255, 0.08)',
			active: 'rgba(255, 255, 255, 0.12)',
		},
		colorBackgroundNegativeTintAlpha: 'rgba(237, 10, 52, 0.28)',
		colorBackgroundPositiveTintAlpha: 'rgba(13, 194, 104, 0.28)',
		colorBackgroundWarningTintAlpha: 'rgba(255, 158, 0, 0.28)',
		colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
		pulseColorBackgroundInfoTintAlpha: 'rgba(0, 95, 249, 0.28)',
		pulseColorBackgroundPurple: '#7960E8',
		pulseColorOverlayViewer: 'rgba(0, 0, 0, 0.88)',
		pulseColorPurpleAlpha: 'rgba(234, 226, 255, 0.12)',
		pulseColorWhiteBlueAlpha: 'rgba(226, 236, 255, 0.12)',
	},
	elevation1: '0px 16px 48px rgba(0, 0, 0, 0.28)',
	elevation2: '0px 16px 48px rgba(0, 0, 0, 0.48)',
	elevation3: '0px 16px 48px rgba(0, 0, 0, 0.64)',
};
