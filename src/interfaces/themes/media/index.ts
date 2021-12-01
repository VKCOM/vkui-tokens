import {Property} from 'csstype';

import {ColorDescription, ColorWithStates} from '@/interfaces/general/colors';
import {Adaptive} from '@/interfaces/general/tools';
import {Font} from '@/interfaces/general/typography';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export type MediaViewportsTuple = ['touch', 'tablet', 'desktopS', 'desktopM'];

interface ProjectColors {
	colorPrimaryAuto: ColorWithStates;
	colorPrimaryBase: ColorWithStates;
	colorPrimaryDeti: ColorWithStates;
	colorPrimaryDobro: ColorWithStates;
	colorPrimaryHealth: ColorWithStates;
	colorPrimaryHealthNew: ColorWithStates;
	colorPrimaryHitech: ColorWithStates;
	colorPrimaryKino: ColorWithStates;
	colorPrimaryLady: ColorWithStates;
	colorPrimaryMycom: ColorWithStates;
	colorPrimaryRealty: ColorWithStates;
	colorPrimaryPharma: ColorWithStates;
	colorPrimaryPets: ColorWithStates;

	colorSecondaryBase: ColorWithStates;
	colorSecondaryHealth: ColorWithStates;
	colorSecondaryMycom: ColorWithStates;
}

type ProjectColorsDescriptions = {
	[key in keyof ProjectColors]: ColorDescription;
};

interface SocialColors {
	colorSocialVk: ColorWithStates;
	colorSocialOk: ColorWithStates;
	colorSocialMir: ColorWithStates;
	colorSocialFb: ColorWithStates;
	colorSocialTwitter: ColorWithStates;
	colorSocialDribbble: ColorWithStates;
	colorSocialBehance: ColorWithStates;
}

type SocialColorsDescriptions = {
	[key in keyof SocialColors]: ColorDescription;
};

interface MediaUniqTokens {
	fontFamilyArticle: Property.FontFamily;
	fontWeightArticle1: Property.FontWeight;
	fontWeightArticle2: Property.FontWeight;
	fontH1: Adaptive<Font>;
	fontH2: Adaptive<Font>;
	fontH3: Adaptive<Font>;
	fontH4: Adaptive<Font>;
	fontLead: Adaptive<Font>;
	fontArticleBody: Adaptive<Font>;
	fontSpecificText: Adaptive<Font>;
	fontSpecificFootnote: Adaptive<Font>;
	fontSpecificButton: Adaptive<Font>;
	gridContent: Adaptive<number | string>;
	gridColumnX2: Adaptive<string | number>;
	gridColumnX3: Adaptive<string | number>;
	gridColumnX4: Adaptive<string | number>;
	gridColumnX6: Adaptive<string | number>;
	gridLayoutArticle: Adaptive<string | number>;
	gridLayoutBanner: Adaptive<string | number>;
}

export interface ThemeMedia
	extends ParadigmTheme<MediaViewportsTuple>,
		ProjectColors,
		SocialColors,
		MediaUniqTokens {}

export interface ThemeMediaDescription
	extends ParadigmThemeDescription<MediaViewportsTuple>,
		MediaUniqTokens {
	colors: ParadigmThemeDescription['colors'] &
		ProjectColorsDescriptions &
		SocialColorsDescriptions;
}

export interface ThemeMediaCssVars
	extends ParadigmThemeCssVars<MediaViewportsTuple, ThemeMedia> {}
