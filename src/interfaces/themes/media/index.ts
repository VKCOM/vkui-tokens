import type { Property } from 'csstype';

import type { ColorDescription, ColorWithStates } from '../../general/colors/index.ts';
import type { Adaptive } from '../../general/tools/index.ts';
import type { Token } from '../../general/tools/tokenValue.ts';
import type { Font } from '../../general/typography/index.ts';
import type {
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
	 * @desc Большой заголовок 1 уровня. Component Title. For Article. Size: regular 32/36, compact 48/56.
	 * @tags font
	 */
	mediaFontMediaDisplay1: Adaptive<Font>;
	/**
	 * @desc Большой заголовок 1 уровня Bold. Component Title. For Card. Size: regular 32/36, compact 48/56.
	 * @tags font
	 */
	mediaFontMediaDisplay1Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 1 уровня. Component Title. For Article. Size: regular 30/36, compact 40/48.
	 * @tags font
	 */
	mediaFontMediaTitle1: Adaptive<Font>;
	/**
	 * @desc Заголовок 1 уровня Bold. Component Title. For Accent. Size: regular 30/36, compact 40/48.
	 * @tags font
	 */
	mediaFontMediaTitle1Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня. Component Title. For Article. Size: regular 28/34, compact 36/44.
	 * @tags font
	 */
	mediaFontMediaTitle2: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня Bold. Component Title. For Accent. Size: regular 28/34, compact 36/44.
	 * @tags font
	 */
	mediaFontMediaTitle2Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 3 уровня. Component Title. For Article. Size: regular 26/32, compact 32/40.
	 * @tags font
	 */
	mediaFontMediaTitle3: Adaptive<Font>;
	/**
	 * @desc Заголовок 3 уровня Bold. Component Title. For Card. Size: regular 26/32, compact 32/40.
	 * @tags font
	 */
	mediaFontMediaTitle3Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 4 уровня. Component Title. For Article. Size: regular 24/30, compact 28/36.
	 * @tags font
	 */
	mediaFontMediaTitle4: Adaptive<Font>;
	/**
	 * @desc Заголовок 4 уровня Bold. Component Title. For Accent. Size: regular 24/30, compact 28/36.
	 * @tags font
	 */
	mediaFontMediaTitle4Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 5 уровня. Component Title. For Article. Size: regular 22/28, compact 24/32.
	 * @tags font
	 */
	mediaFontMediaTitle5: Adaptive<Font>;
	/**
	 * @desc Заголовок 6 уровня. Component Title. For Article. Size: regular 20/26, compact 22/28.
	 * @tags font
	 */
	mediaFontMediaTitle6: Adaptive<Font>;
	/**
	 * @desc Заголовок 6 уровня Light. Component Title. For Card. Size: regular 20/26, compact 22/28.
	 * @tags font
	 */
	mediaFontMediaTitle6Light: Adaptive<Font>;
	/**
	 * @desc Заголовок 6 уровня Bold. Component Title. For Card. Size: regular 20/26, compact 22/28.
	 * @tags font
	 */
	mediaFontMediaTitle6Bold: Adaptive<Font>;
	/**
	 * @desc Лид статьи. Component Text. For Article. Size: regular 18/26, compact 24/36.
	 * @tags font
	 */
	mediaFontMediaLead: Adaptive<Font>;
	/**
	 * @desc Цитата. Component Text. For Article. Size: regular 18/26, compact 24/36.
	 * @tags font
	 */
	mediaFontMediaQuote: Adaptive<Font>;
	/**
	 * @desc Автор цитаты. Component Text. For Article. Size: regular 18/24, compact 24/32.
	 * @tags font
	 */
	mediaFontMediaQuotePerson: Adaptive<Font>;
	/**
	 * @desc Основной текст статьи. Component Text. For Article. Size: regular 16/28, compact 18/32.
	 * @tags font
	 */
	mediaFontMediaParagraph: Adaptive<Font>;
	/**
	 * @desc Нумерация. Component Text. For Article. Size: regular 16/28, compact 18/32.
	 * @tags font
	 */
	mediaFontMediaNumbering: Adaptive<Font>;
	/**
	 * @desc Компактный наборный текст. Component Text. For Card, Widget. Desk & touch: 1 size. Size: regular 16/24, compact 16/24.
	 * @tags font
	 */
	mediaFontMediaText: Adaptive<Font>;
	/**
	 * @desc Подзаголовок, отдельные строки, визуальная иерархия. Component Title. For Subtitle. Desk & touch: 1 size. Size: regular 20/26, compact 20/26.
	 * @tags font
	 */
	mediaFontMediaSubtitle1: Adaptive<Font>;
	/**
	 * @desc Подзаголовок, отдельные строки, визуальная иерархия. Component Title. For Subtitle. Desk & touch: 1 size. Size: regular 15/20, compact 15/20.
	 * @tags font
	 */
	mediaFontMediaSubtitle3Regular: Adaptive<Font>;
	/**
	 * @desc Подзаголовок Medium, отдельные строки, визуальная иерархия. Component Title. For Subtitle. Desk & touch: 1 size. Size: regular 15/20, compact 15/20.
	 * @tags font
	 */
	mediaFontMediaSubtitle3Medium: Adaptive<Font>;
	/**
	 * @desc Подзаголовок Medium, отдельные строки, визуальная иерархия. Component Title. For Subtitle. Desk & touch: 1 size. Size: regular 16/20, compact 16/20.
	 * @tags font
	 */
	mediaFontMediaSubtitle2Medium: Adaptive<Font>;
	/**
	 * @desc Подзаголовок DemiBold, отдельные строки, визуальная иерархия. Component Title. For Subtitle. Desk & touch: 1 size. Size: regular 15/20, compact 15/20.
	 * @tags font
	 */
	mediaFontMediaSubtitle3DemiBold: Adaptive<Font>;
	/**
	 * @desc Подзаголовок Bold, отдельные строки, визуальная иерархия. Component Title. For Subtitle. Desk & touch: 1 size. Size: regular 15/20, compact 15/20.
	 * @tags font
	 */
	mediaFontMediaSubtitle3Bold: Adaptive<Font>;
	/**
	 * @desc Подпись под иллюстрацией, таблицей или блоком. Component Text. For Article. Size: regular 14/22, compact 16/24.
	 * @tags font
	 */
	mediaFontMediaCaption: Adaptive<Font>;
	/**
	 * @desc CAPS подпись «Продолжение после рекламы». Component Text. For Article. Size: regular 13/16, compact 15/20.
	 * @tags font
	 */
	mediaFontMediaCaptionCaps: Adaptive<Font>;
	/**
	 * @desc Лейблы Light, бейджи, акцентные теги, подписи. Component Text. For Card. Desk & touch: 1 size. Size: regular 14/18, compact 14/18.
	 * @tags font
	 */
	mediaFontMediaLabelLight: Adaptive<Font>;
	/**
	 * @desc Лейблы, бейджи, акцентные теги, подписи. Component Text. For Card. Desk & touch: 1 size. Size: regular 14/18, compact 14/18.
	 * @tags font
	 */
	mediaFontMediaLabelRegular: Adaptive<Font>;
	/**
	 * @desc Лейблы CAPS, бейджи, акцентные теги, подписи. Component Text. For Card. Desk & touch: 1 size. Size: regular 14/18, compact 14/18.
	 * @tags font
	 */
	mediaFontMediaLabelCaps: Adaptive<Font>;
	/**
	 * @desc Лейблы Bold, бейджи, акцентные теги, подписи. Component Text. For Card. Desk & touch: 1 size. Size: regular 13/18, compact 13/18.
	 * @tags font
	 */
	mediaFontMediaLabelBold: Adaptive<Font>;
	/**
	 * @desc Лейблы Bold CAPS, бейджи, акцентные теги, подписи. Component Text. For Card. Desk & touch: 1 size. Size: regular 13/18, compact 13/18. Подчёркивание только в Figma: в токене не выражается.
	 * @tags font
	 */
	mediaFontMediaLabelStrip: Adaptive<Font>;
	/**
	 * @desc Адаптивный заголовок 1 уровня для карточек Light. Component Title. For Card. Size: regular 18/26, compact 28/36.
	 * @tags font
	 */
	mediaFontMediaCardTitle1Light: Adaptive<Font>;
	/**
	 * @desc Адаптивный заголовок 1 уровня для карточек Bold. Component Title. For Card. Size: regular 18/26, compact 28/36.
	 * @tags font
	 */
	mediaFontMediaCardTitle1Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня для карточек Light. Component Title. For Card. Desk & touch: 1 size. Size: regular 18/26, compact 18/26.
	 * @tags font
	 */
	mediaFontMediaCardTitle2Light: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня для карточек Bold. Component Title. For Card. Desk & touch: 1 size. Size: regular 18/26, compact 18/26.
	 * @tags font
	 */
	mediaFontMediaCardTitle2Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок фичера. Component Title. For Fitcher. Size: regular 20/26, compact 28/36.
	 * @tags font
	 */
	mediaFontMediaFitcherTitle: Adaptive<Font>;
	/**
	 * @desc Заголовок фичера CAPS. Component Title. For Fitcher. Size: regular 20/26, compact 28/36.
	 * @tags font
	 */
	mediaFontMediaFitcherTitleCaps: Adaptive<Font>;
	/**
	 * @desc Заголовок Paradigm Bold. Component Title. For Paradigm. Desk & touch: 1 size. Size: regular 24/28, compact 24/28.
	 * @tags font
	 */
	mediaFontMediaPTitle1Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок Paradigm Bold. Component Title. For Paradigm. Desk & touch: 1 size. Size: regular 20/26, compact 20/26.
	 * @tags font
	 */
	mediaFontMediaPTitle2Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок Paradigm Bold. Component Title. For Paradigm. Desk & touch: 1 size. Size: regular 17/22, compact 17/22.
	 * @tags font
	 */
	mediaFontMediaPTitle3Bold: Adaptive<Font>;
	/**
	 * @desc Адаптив длинных заголовков, меньше переносов. Component Title. For Paradigm. Size: regular 20/26, compact 24/28.
	 * @tags font
	 */
	mediaFontMediaPTitle1Adaptive: Adaptive<Font>;
	/**
	 * @desc Адаптив длинных заголовков, меньше переносов. Component Title. For Paradigm. Size: regular 17/22, compact 20/26.
	 * @tags font
	 */
	mediaFontMediaPTitle2Adaptive: Adaptive<Font>;
	/**
	 * @desc Адаптив длинных заголовков, меньше переносов. Component Title. For Paradigm. Size: regular 16/20, compact 17/22.
	 * @tags font
	 */
	mediaFontMediaPTitle3Adaptive: Adaptive<Font>;
	/**
	 * @desc Подзаголовок Medium. Использовать вместо Subhead Paradigm. Component Title. For Subtitle. Desk & touch: 1 size. Size: regular 14/18, compact 14/18.
	 * @tags font
	 */
	mediaFontMediaSubtitle4Medium: Adaptive<Font>;
	/**
	 * @desc Подзаголовок. Использовать вместо Subhead Paradigm. Component Title. For Subtitle. Desk & touch: 1 size. Size: regular 14/18, compact 14/18.
	 * @tags font
	 */
	mediaFontMediaSubtitle4Regular: Adaptive<Font>;

	/**
	 * Устаревшие имена токенов, оставлены как алиасы для обратной совместимости
	 */

	/**
	 * @desc Уменьшенная версия главного заголовка
	 * @tags font
	 * @deprecated Используйте mediaFontMediaTitle1
	 */
	mediaFontMediaTitle1Tiny: Token<Adaptive<Font>, ThemeMediaDescription>;
	/**
	 * @desc Главный заголовок фитчера
	 * @tags font
	 * @deprecated Используйте mediaFontMediaFitcherTitle
	 */
	mediaFontMediaFeatureTitle: Token<Adaptive<Font>, ThemeMediaDescription>;
	/**
	 * @desc Используется только для выделения нумерации списков в статьях, чтобы списки выглядели акцентными
	 * @tags font
	 * @deprecated Используйте mediaFontMediaNumbering
	 */
	mediaFontMediaParagraphNumbering: Token<Adaptive<Font>, ThemeMediaDescription>;
	/**
	 * @desc Второстепенный параграф наборным текстом в статье по умолчанию
	 * @tags font
	 * @deprecated Используйте mediaFontMediaText
	 */
	mediaFontMediaParagraphSecondary: Token<Adaptive<Font>, ThemeMediaDescription>;
	/**
	 * @desc Подзаголовок, отделённый визуально от заголовка выше
	 * @tags font
	 * @deprecated Используйте mediaFontMediaSubtitle1
	 */
	mediaFontMediaSubtitleLight: Token<Adaptive<Font>, ThemeMediaDescription>;
	/**
	 * @desc Второстепенный не-наборный текст для поддержания визуальной иерархии
	 * @tags font
	 * @deprecated Используйте mediaFontMediaSubtitle3Regular
	 */
	mediaFontMediaTextSecondaryLight: Token<Adaptive<Font>, ThemeMediaDescription>;
	/**
	 * @desc Числовой вес текста
	 * @tags font
	 * @deprecated Используйте fontWeightMediaBold
	 */
	fontWeightMedia1: Token<Property.FontWeight, ThemeMediaDescription>;
	/**
	 * @desc Числовой вес текста
	 * @tags font
	 * @deprecated Используйте fontWeightMediaSemiBold
	 */
	fontWeightMedia2: Token<Property.FontWeight, ThemeMediaDescription>;
	/**
	 * @desc Числовой вес текста
	 * @tags font
	 * @deprecated Используйте fontWeightMediaMedium
	 */
	fontWeightMedia3: Token<Property.FontWeight, ThemeMediaDescription>;
	/**
	 * @desc Числовой вес текста
	 * @tags font
	 * @deprecated Используйте fontWeightMediaRegular
	 */
	fontWeightMedia4: Token<Property.FontWeight, ThemeMediaDescription>;
	/**
	 * @desc Семейство шрифтов статьи
	 * @tags font
	 */
	fontFamilyArticle: Property.FontFamily;
	/**
	 * @desc Вес Light
	 * @tags font
	 */
	fontWeightMediaLight: Property.FontWeight;
	/**
	 * @desc Вес Regular
	 * @tags font
	 */
	fontWeightMediaRegular: Property.FontWeight;
	/**
	 * @desc Вес Medium
	 * @tags font
	 */
	fontWeightMediaMedium: Property.FontWeight;
	/**
	 * @desc Вес SemiBold
	 * @tags font
	 */
	fontWeightMediaSemiBold: Property.FontWeight;
	/**
	 * @desc Вес Bold
	 * @tags font
	 */
	fontWeightMediaBold: Property.FontWeight;
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
