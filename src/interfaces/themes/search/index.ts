import type { Property } from 'csstype';

import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import { Font } from '@/interfaces/general/typography';
import {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

type SearchViewports = ['touch', 'desktopS'];

export type SearchLocalGradients = {
	searchCardBackground: string;
	searchCardWithTextBackground;
};

export type SearchLocalElevations = {
	elevation1Hover: Property.BoxShadow;
	elevation2Hover: Property.BoxShadow;
	elevationButtons: Property.BoxShadow;
};

export type SearchLocalFonts = {
	searchFontSearchExtraHeadline: Adaptive<Font>;
	searchFontSearchTitle4: Adaptive<Font>;
	searchFontSearchTitle4Bold: Adaptive<Font>;
	searchFontSearchHeadline2: Adaptive<Font>;
	searchFontSearchSubheadBold: Adaptive<Font>;
	searchFontSearchFootnoteBold: Adaptive<Font>;
	searchFontSearchFootnoteMailSans: Adaptive<Font>;
	searchFontSearchCaption1Bold: Adaptive<Font>;
	searchFontSearchCaption1MailSans: Adaptive<Font>;
	searchFontSearchCaption2MailSans: Adaptive<Font>;
	searchFontSearchBigText: Adaptive<Font>;
	searchFontSearchBigTextBold: Adaptive<Font>;
	searchFontSearchTextBold: Adaptive<Font>;
	searchFontSearchTextMailSans: Adaptive<Font>;
	searchFontForAdvertisingBold: Adaptive<Font>;
	searchFontGreenURL: Adaptive<Font>;
	searchFontParagraphBold: Adaptive<Font>;
};

export interface LocalSearchColorsDescriptionStruct {
	searchColorTextLinkPositive: ColorDescription;
	searchColorTextLinkPositiveTint: ColorDescription;
	searchColorBackgroundAccentTint: ColorDescription;
	searchColorBackgroundOrangeAccentHover: ColorDescription;
	searchColorBackgroundOrangeAccentActive: ColorDescription;
	searchColorTextLinkAlternativeHover: ColorDescription;
}

export type SearchLocalColors = {
	[key in keyof LocalSearchColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeSearch
	extends ParadigmTheme<SearchViewports>,
		SearchLocalGradients,
		SearchLocalElevations,
		SearchLocalFonts,
		SearchLocalColors {}

export interface ThemeSearchDescription
	extends ParadigmThemeDescription<SearchViewports>,
		SearchLocalGradients,
		SearchLocalElevations,
		SearchLocalFonts {
	colors: LocalSearchColorsDescriptionStruct &
		LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct;
}

// Интерфейс ниже не используем в коде, но нужен для сборки
export interface ThemeSearchCssVars extends ParadigmThemeCssVars<SearchViewports, ThemeSearch> {}
