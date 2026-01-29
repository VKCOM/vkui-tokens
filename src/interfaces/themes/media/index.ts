import type { Property } from 'csstype';

import { ColorDescription, ColorWithStates } from '../../general/colors/index.ts';
import { Adaptive } from '../../general/tools/index.ts';
import { Font } from '../../general/typography/index.ts';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '../../namespaces/paradigm/index.ts';

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
	 * @desc Главный заголовок фитчера
	 * @tags font
	 */
	mediaFontMediaFeatureTitle: Adaptive<Font>;
	/**
	 * @desc Главный заголовок статьи или медиа-страницы
	 * @tags font
	 */
	mediaFontMediaTitle1: Adaptive<Font>;
	/**
	 * @desc Уменьшенная версия главного заголовка
	 * @tags font
	 */
	mediaFontMediaTitle1Tiny: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня
	 * @tags font
	 */
	mediaFontMediaTitle2: Adaptive<Font>;
	/**
	 * @desc Для 2 порядкового номера в нумерованном разделителе
	 * @tags font
	 */
	mediaFontMediaTitle2Tiny: Adaptive<Font>;
	/**
	 * @desc Заголовок 3 уровня
	 * @tags font
	 */
	mediaFontMediaTitle3: Adaptive<Font>;
	/**
	 * @desc Заголовок 4 уровня
	 * @tags font
	 */
	mediaFontMediaTitle4: Adaptive<Font>;
	/**
	 * @desc Заголовок 5 уровня
	 * @tags font
	 */
	mediaFontMediaTitle5: Adaptive<Font>;
	/**
	 * @desc Заголовок 6 уровня
	 * @tags font
	 */
	mediaFontMediaTitle6: Adaptive<Font>;
	/**
	 * @desc Подзаголовок, отделённый визуально от заголовка выше
	 * @tags font
	 */
	mediaFontMediaSubtitleLight: Adaptive<Font>;
	/**
	 * @desc Лид статьи
	 * @tags font
	 */
	mediaFontMediaLead: Adaptive<Font>;
	/**
	 * @desc Цитаты, врезы в статьях, акценты текста на медиа-страницах
	 * @tags font
	 */
	mediaFontMediaQuote: Adaptive<Font>;
	/**
	 * @desc Автор цитаты
	 * @tags font
	 */
	mediaFontMediaQuotePerson: Adaptive<Font>;
	/**
	 * @desc Основной параграф наборного текст в статье по умолчанию
	 * @tags font
	 */
	mediaFontMediaParagraph: Adaptive<Font>;
	/**
	 * @desc Используется только для выделения нумирации списков в статьях, чтобы списки выглядели акцентными
	 * @tags font
	 */
	mediaFontMediaParagraphNumbering: Adaptive<Font>;
	/**
	 * @desc Второстепенный параграф наборным текстом в статье по умолчанию
	 * @tags font
	 */
	mediaFontMediaParagraphSecondary: Adaptive<Font>;
	/**
	 * @desc Второстепенный не-наборный текст для поддержания визуальной иерархии
	 * @tags font
	 */
	mediaFontMediaTextSecondaryLight: Adaptive<Font>;
	/**
	 * @desc Подписи под изображениями, видео или другии блоками и врезами в статьях и на других медиа-страницах
	 * @tags font
	 */
	mediaFontMediaCaption: Adaptive<Font>;
	/**
	 * @desc Бейджи и отбивки “Продолжение после рекламы”
	 * @tags font
	 */
	mediaFontMediaCaptionCaps: Adaptive<Font>;
	/**
	 * @desc Семейство шрифтов статьи
	 * @tags font
	 */
	fontFamilyArticle: Property.FontFamily;
	fontWeightMedia1: Property.FontWeight;
	fontWeightMedia2: Property.FontWeight;
	fontWeightMedia3: Property.FontWeight;
	fontWeightMedia4: Property.FontWeight;
	fontH1: Adaptive<Font>;
	fontH2: Adaptive<Font>;
	fontH3: Adaptive<Font>;
	fontH4: Adaptive<Font>;
	/**
	 * @desc
	 * @tags size
	 */
	mediaSizeGrid: number;
	/**
	 * @desc Базовый gap сетки
	 * @tags size
	 */
	mediaSizeGap: number;
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
	 * @desc Ширина основной колонки контента с выносом
	 * @tags size, component
	 */
	gridMainContentWide: Adaptive<number | string>;
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
