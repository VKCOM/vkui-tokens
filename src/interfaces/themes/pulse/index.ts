import { Property } from 'csstype';

import { ColorsDescription, ThemeCssVars, ThemeDescription } from '@/interfaces/general';
import { ColorDescription, ColorWithStates } from '@/interfaces/general/colors';
import { GradientPoints } from '@/interfaces/general/gradients';
import { Adaptive } from '@/interfaces/general/tools';
import { Font } from '@/interfaces/general/typography';
import { ParadigmTheme, ParadigmThemeDescription } from '@/interfaces/namespaces/paradigm';

type AllowedParadigmTokens =
	/* Special */
	| 'themeName'
	| 'themeNameBase'
	| 'themeInheritsFrom'
	| 'prefix'
	/* Typography */
	| 'fontFamilyAccent'
	| 'fontFamilyBase'
	| 'fontWeightAccent1'
	| 'fontWeightAccent2'
	| 'fontWeightBase1'
	| 'fontWeightBase2'
	/* Font */
	| 'fontTitle1'
	| 'fontTitle2'
	| 'fontTitle3'
	| 'fontHeadline1'
	| 'fontHeadline2'
	| 'fontText'
	| 'fontParagraph'
	| 'fontSubhead'
	| 'fontFootnote'
	| 'fontFootnoteCaps'
	| 'fontCaption1'
	| 'fontCaption1Caps'
	| 'fontCaption2'
	| 'fontCaption2Caps'
	| 'fontCaption3'
	| 'fontCaption3Caps'
	/* Animation */
	| 'animationEasingDefault'
	| 'animationDurationS'
	| 'animationDurationM'
	| 'animationDurationL'
	/* Size */
	| 'sizeAvatarXS'
	| 'sizeAvatarS'
	| 'sizeAvatarM'
	| 'sizeAvatarL'
	| 'sizeBorderRadius'
	| 'sizeButtonSmallHeight'
	| 'sizeButtonMediumHeight'
	| 'sizeButtonLargeHeight'
	| 'sizePopupMedium'
	| 'sizePopupLarge'
	| 'sizeButtonPaddingHorizontal'
	| 'sizeFieldHorizontalPadding'
	/* Elevation */
	| 'elevation1'
	| 'elevation2'
	| 'elevation3'
	/* ToneValues */
	| 'opacityDisable';

export type AllowedParadigmColorTokens =
	/* Text colors */
	| 'colorTextPrimary'
	| 'colorTextPrimaryInvariably'
	| 'colorTextSecondary'
	| 'colorTextTertiary'
	| 'colorTextSubhead'
	| 'colorTextAccent'
	| 'colorTextAccentThemed'
	| 'colorTextLink'
	| 'colorTextLinkThemed'
	| 'colorTextLinkVisited'
	| 'colorTextNegative'
	| 'colorTextPositive'
	| 'colorTextMuted'
	| 'colorTextContrast'
	| 'colorTextContrastThemed'
	| 'colorLinkContrast'
	/* Icon colors */
	| 'colorIconPrimary'
	| 'colorIconPrimaryInvariably'
	| 'colorIconSecondary'
	| 'colorIconSecondaryAlpha'
	| 'colorIconMedium'
	| 'colorIconMediumAlpha'
	| 'colorIconTertiary'
	| 'colorIconTertiaryAlpha'
	| 'colorIconAccent'
	| 'colorIconAccentThemed'
	| 'colorIconNegative'
	| 'colorIconPositive'
	| 'colorIconContrast'
	| 'colorIconContrastThemed'
	/* Background colors */
	| 'colorBackground'
	| 'colorBackgroundContent'
	| 'colorBackgroundAccentAlternative'
	| 'colorBackgroundModal'
	| 'colorBackgroundSecondary'
	| 'colorBackgroundSecondaryAlpha'
	| 'colorBackgroundTertiary'
	| 'colorBackgroundAccent'
	| 'colorBackgroundAccentTintAlpha'
	| 'colorBackgroundNegativeTintAlpha'
	| 'colorBackgroundPositiveTintAlpha'
	| 'colorBackgroundWarningTintAlpha'
	| 'colorBackgroundAccentThemed'
	| 'colorBackgroundNegative'
	| 'colorBackgroundNegativeTint'
	| 'colorBackgroundPositive'
	| 'colorBackgroundPositiveTint'
	| 'colorBackgroundContrast'
	| 'colorBackgroundContrastSecondaryAlpha'
	| 'colorBackgroundWarning'
	/* Stroke colors */
	| 'colorSeparatorPrimary'
	| 'colorSeparatorPrimaryAlpha'
	| 'colorSeparatorSecondary'
	| 'colorImageBorderAlpha'
	| 'colorFieldBorderAlpha'
	| 'colorStrokeAccent'
	| 'colorStrokeAccentThemed'
	| 'colorStrokeContrast'
	| 'colorStrokeNegative'
	| 'colorStrokePositive'
	/* Palette colors */
	| 'colorAccentBlue'
	| 'colorAccentGray'
	| 'colorAccentRed'
	| 'colorAccentGreen'
	| 'colorAccentOrange'
	| 'colorAccentPurple'
	| 'colorAccentViolet'
	| 'colorAccentRaspberryPink'
	| 'colorAccentSecondary'
	/* Other colors */
	| 'colorTransparent'
	| 'colorActionSheetText'
	| 'colorHeaderBackground'
	| 'colorPanelHeaderIcon'
	| 'colorWriteBarIcon'
	| 'colorWriteBarInputBackground'
	| 'colorWriteBarInputBorderAlpha'
	| 'colorTrackBackground'
	| 'colorOverlayPrimary'
	| 'colorTrackBuffer'
	| 'colorImagePlaceholder'
	| 'colorImagePlaceholderAlpha'
	| 'colorSearchFieldBackground'
	| 'colorSkeletonTo'
	| 'colorSkeletonFrom'
	| 'colorAvatarOverlay';

export interface ThemePulseMediaTypography {
	fontFamilyMedia: Property.FontFamily;
	fontMediaHeader: Adaptive<Font>;
	fontMediaTitle1: Adaptive<Font>;
	fontMediaTitle2: Adaptive<Font>;
	fontMediaTitle3: Adaptive<Font>;
	fontMediaLead: Adaptive<Font>;
	fontMediaParagraph: Adaptive<Font>;
}

export interface ThemePulseGeometry {
	sizePageHorizontalPadding: Adaptive<number>;
	sizeBorderRadiusSmall: Adaptive<number>;
	sizeBorderRadiusLarge: Adaptive<number>;
	sizeBorderRadiusCard: Adaptive<number>;
	sizeBorderRadiusPill: Adaptive<number>;
	sizeButtonCircleSmall: Adaptive<number>;
	sizeButtonCircleMedium: Adaptive<number>;
	sizeButtonCircleLarge: Adaptive<number>;
	sizeButtonPaddingHorizontalLarge: Adaptive<number>;
	sizeIconUIMedium: Adaptive<number>;
	sizeIconUILarge: Adaptive<number>;
	sizeBadge: Adaptive<number>;
	sizeTag: Adaptive<number>;
	sizeCardgridGapSpaceMedium: Adaptive<number>;
	sizeCardgridGapSpaceLarge: Adaptive<number>;
	sizeListItemHeight: Adaptive<number>;
	sizeFieldHeight: Adaptive<number>;
}

export interface ThemePulseZIndex {
	pulseZIndexDropdown: number;
	pulseZIndexFixed: number;
	pulseZIndexModal: number;
	pulseZIndexModalBackdrop: number;
	pulseZIndexSticky: number;
	pulseZIndexTooltip: number;
}

export interface ThemePulseColors {
	pulseColorAccentYellow: ColorDescription;
	pulseColorBackgroundPurple: ColorDescription;
	pulseColorOverlayViewer: ColorDescription;
	pulseColorPurpleAlpha: ColorDescription;
	pulseColorWhiteBlueAlpha: ColorDescription;
}

export interface ThemePulseGradients {
	gradientSkeleton: GradientPoints;
}

export type AllowedParadigmColorDescriptions = Pick<
	ParadigmThemeDescription['colors'],
	AllowedParadigmColorTokens
>;

type ThemePulseColorsDescription = ColorsDescription<
	ThemePulseColors & AllowedParadigmColorDescriptions
>;

type ThemePulseColorsWithState = {
	[key in keyof ThemePulseColors]: ColorWithStates;
};

type AllowedParadigmThemeTokens = Pick<
	ParadigmTheme,
	'themeType' | 'colorsScheme' | AllowedParadigmTokens | AllowedParadigmColorTokens
>;

type AllowedParadigmTokensDescription = Pick<ThemeDescription, AllowedParadigmTokens>;

export interface ThemePulse
	extends AllowedParadigmThemeTokens,
		ThemePulseMediaTypography,
		ThemePulseGeometry,
		ThemePulseZIndex,
		ThemePulseGradients,
		ThemePulseColorsWithState {}

export interface ThemePulseDescription
	extends AllowedParadigmTokensDescription,
		ThemePulseMediaTypography,
		ThemePulseGeometry,
		ThemePulseZIndex,
		ThemePulseGradients,
		ThemePulseColorsDescription {}

export interface ThemePulseCssVars extends ThemeCssVars<ThemePulse> {}
