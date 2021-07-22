import {ColorDescription, ColorWithStates} from '@/interfaces/general/colors';
import {Adaptive} from '@/interfaces/general/tools';
import {Font} from '@/interfaces/general/typography';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export type MediaViewportsTuple = [
	'touch',
	'tablet',
	'desktopS',
	'desktopM',
	'desktopL',
];

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

interface MediaUniqTokens {
	fontArticle: Adaptive<Font>;
	gridContent: Adaptive<number | string>;
	gridColumnX2: Adaptive<string | number>;
	gridColumnX3: Adaptive<string | number>;
	gridColumnX4: Adaptive<string | number>;
	gridColumnX6: Adaptive<string | number>;
	gridLayoutArticle: Adaptive<string | number>;
	gridLayoutBanner: Adaptive<string | number>;
	gridLayoutArticleMargin: Adaptive<number>;
}

export interface ThemeMedia
	extends ParadigmTheme<MediaViewportsTuple>,
		ProjectColors,
		MediaUniqTokens {}

export interface ThemeMediaDescription
	extends ParadigmThemeDescription<MediaViewportsTuple>,
		MediaUniqTokens {
	colors: ParadigmThemeDescription['colors'] & ProjectColorsDescriptions;
}

export interface ThemeMediaCssVars
	extends ParadigmThemeCssVars<MediaViewportsTuple, ThemeMedia> {}
