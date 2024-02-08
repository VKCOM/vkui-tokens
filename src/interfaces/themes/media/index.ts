import type { Property } from 'csstype';

import { ColorDescription, ColorWithStates } from '@/interfaces/general/colors';
import { Adaptive } from '@/interfaces/general/tools';
import { Font } from '@/interfaces/general/typography';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

export type MediaViewportsTuple = ['touch', 'tablet', 'desktopS', 'desktopM'];

interface ProjectColors {
	/**
	 * @desc Акцентный цвет проекта auto.mail.ru
	 * @tags color
	 */
	colorPrimaryAuto: ColorWithStates;
	/**
	 * @desc Основной акцентный цвет. Используют проекты news.mail.ru, sportmail.ru, pogoda.mail.ru
	 * @tags color
	 */
	colorPrimaryBase: ColorWithStates;
	/**
	 * @desc Акцентный цвет проекта deti.mail.ru
	 * @tags color
	 */
	colorPrimaryDeti: ColorWithStates;
	/**
	 * @desc Акцентный цвет проекта dobro.mail.ru
	 * @tags color
	 */
	colorPrimaryDobro: ColorWithStates;
	/**
	 * @desc Акцентный цвет проекта health.mail.ru
	 * @tags color, lagacy
	 */
	colorPrimaryHealth: ColorWithStates;
	/**
	 * @desc Альтернативный акцентный цвет проекта health.mail.ru
	 * @tags color, lagacy
	 */
	colorPrimaryHealthNew: ColorWithStates;
	/**
	 * @desc Акцентный цвет проекта hi-tech.mail.ru
	 * @tags color
	 */
	colorPrimaryHitech: ColorWithStates;
	/**
	 * @desc Акцентный цвет проекта kino.mail.ru
	 * @tags color
	 */
	colorPrimaryKino: ColorWithStates;
	/**
	 * @desc Акцентный цвет проекта lady.mail.ru
	 * @tags color
	 */
	colorPrimaryLady: ColorWithStates;
	colorPrimaryMycom: ColorWithStates;
	/**
	 * @desc Акцентный цвет проекта dom.mail.ru
	 * @tags color
	 */
	colorPrimaryRealty: ColorWithStates;
	colorPrimaryPharma: ColorWithStates;
	/**
	 * @desc Акцентный цвет проекта pets.mail.ru
	 * @tags color
	 */
	colorPrimaryPets: ColorWithStates;

	/**
	 * @desc Второстепенный акцентный цвет. Используют проекты news.mail.ru, sportmail.ru, pogoda.mail.ru
	 * @tags color
	 */
	colorSecondaryBase: ColorWithStates;
	/**
	 * @desc Альтернативный акцентный цвет проекта health.mail.ru
	 * @tags color, lagacy
	 */
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
	/**
	 * @desc Заголовок h1
	 * @tags font
	 */
	fontMediaTitle1: Adaptive<Font>;
	/**
	 * @desc Заголовок h2
	 * @tags font
	 */
	fontMediaTitle2: Adaptive<Font>;
	/**
	 * @desc Заголовок h3
	 * @tags font
	 */
	fontMediaTitle3: Adaptive<Font>;
	/**
	 * @desc Заголовок h4
	 * @tags font
	 */
	fontMediaTitle4: Adaptive<Font>;
	/**
	 * @desc Заголовок h5
	 * @tags font
	 */
	fontMediaTitle5: Adaptive<Font>;
	/**
	 * @desc Заголовок h6
	 * @tags font
	 */
	fontMediaTitle6: Adaptive<Font>;
	/**
	 * @desc Лид статьи
	 * @tags font
	 */
	fontMediaLead: Adaptive<Font>;
	/**
	 * @desc Цитата или другой врез
	 * @tags font
	 */
	fontMediaQuote: Adaptive<Font>;
	/**
	 * @desc Автор цитаты
	 * @tags font
	 */
	fontMediaQuotePerson: Adaptive<Font>;
	/**
	 * @desc Параграф статьи
	 * @tags font
	 */
	fontMediaParagraph: Adaptive<Font>;
	/**
	 * @desc Второстепенный блок текста
	 * @tags font
	 */
	fontMediaParagraphSecondary: Adaptive<Font>;
	/**
	 * @desc Второстепенный текст
	 * @tags font
	 */
	fontMediaTextSecondaryLight: Adaptive<Font>;
	/**
	 * @desc Подпись под блоком статьи
	 * @tags font
	 */
	fontMediaCaption: Adaptive<Font>;
	/**
	 * @desc Подпись под блоком статьи заглавными буквами
	 * @tags font
	 */
	fontMediaCaptionCaps: Adaptive<Font>;
	/**
	 * @desc Семейство шрифтов статьи
	 * @tags font
	 */
	fontFamilyArticle: Property.FontFamily;
	fontH1: Adaptive<Font>;
	fontH2: Adaptive<Font>;
	fontH3: Adaptive<Font>;
	fontH4: Adaptive<Font>;
	/**
	 * @desc Ширина колонки страницы
	 * @tags size, component
	 */
	gridWrapperContent: Adaptive<number | string>;
	/**
	 * @desc Ширина основной колонки контента
	 * @tags size, component
	 */
	gridMainContent: Adaptive<number | string>;
	/**
	 * @desc Ширина sidebar
	 * @tags size, component
	 */
	gridAsideContent: Adaptive<number | string>;
	/**
	 * @desc
	 * @tags size, component
	 */
	gridColumnX2: Adaptive<string | number>;
	/**
	 * @desc
	 * @tags size, component
	 */
	gridColumnX3: Adaptive<string | number>;
	/**
	 * @desc
	 * @tags size, component
	 */
	gridColumnX4: Adaptive<string | number>;
	/**
	 * @desc
	 * @tags size, component
	 */
	gridColumnX6: Adaptive<string | number>;
}

export interface ThemeMedia
	extends ParadigmTheme<MediaViewportsTuple>,
		ProjectColors,
		SocialColors,
		MediaUniqTokens {}

export interface ThemeMediaDescription
	extends ParadigmThemeDescription<MediaViewportsTuple>,
		MediaUniqTokens {
	colors: ParadigmThemeDescription['colors'] & ProjectColorsDescriptions & SocialColorsDescriptions;
}

export interface ThemeMediaCssVars extends ParadigmThemeCssVars<MediaViewportsTuple, ThemeMedia> {}
