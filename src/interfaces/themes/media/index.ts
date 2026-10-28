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
	 * @desc Сверхкрупный заголовок 1 уровня. Component Title. Tag: Article
	 * @tags font
	 */
	mediaFontMediaDisplay1: Adaptive<Font>;
	/**
	 * @desc Сверхкрупный заголовок 1 уровня, вес Bold (700). Component Title. Tag: card
	 * @tags font
	 */
	mediaFontMediaDisplay1Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 1 уровня. Component Title. Tag: Article
	 * @tags font
	 */
	mediaFontMediaTitle1: Adaptive<Font>;
	/**
	 * @desc Заголовок 1 уровня, вес Bold (700). Component Title
	 * @tags font
	 */
	mediaFontMediaTitle1Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня. Component Title. Tag: Article
	 * @tags font
	 */
	mediaFontMediaTitle2: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня, вес Bold (700). Component Title
	 * @tags font
	 */
	mediaFontMediaTitle2Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 3 уровня. Component Title. Tag: Article
	 * @tags font
	 */
	mediaFontMediaTitle3: Adaptive<Font>;
	/**
	 * @desc Заголовок 3 уровня, вес Bold (700). Component Title. Tag: Card
	 * @tags font
	 */
	mediaFontMediaTitle3Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 4 уровня. Component Title. Tag: Article
	 * @tags font
	 */
	mediaFontMediaTitle4: Adaptive<Font>;
	/**
	 * @desc Заголовок 4 уровня, вес Bold (700). Component Title
	 * @tags font
	 */
	mediaFontMediaTitle4Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 5 уровня. Component Title. Tag: Article
	 * @tags font
	 */
	mediaFontMediaTitle5: Adaptive<Font>;
	/**
	 * @desc Заголовок 6 уровня. Component Title. Tag: Article
	 * @tags font
	 */
	mediaFontMediaTitle6: Adaptive<Font>;
	/**
	 * @desc Заголовок 6 уровня, вес Light (300). Component Title. Tag: Card
	 * @tags font
	 */
	mediaFontMediaTitle6Light: Adaptive<Font>;
	/**
	 * @desc Заголовок 6 уровня, вес Bold (700). Component Title. Tag: Card
	 * @tags font
	 */
	mediaFontMediaTitle6Bold: Adaptive<Font>;
	/**
	 * @desc Лид (преамбула) статьи. Component Text. Tag: Article
	 * @tags font
	 */
	mediaFontMediaLead: Adaptive<Font>;
	/**
	 * @desc Цитаты, врезы в статьях, акценты текста на медиа-страницах. Component Text. Tag: Article
	 * @tags font
	 */
	mediaFontMediaQuote: Adaptive<Font>;
	/**
	 * @desc Автор цитаты. Component Text. Tag: Article
	 * @tags font
	 */
	mediaFontMediaQuotePerson: Adaptive<Font>;
	/**
	 * @desc Основной наборный текст статьи. Component Text. Tag: Article
	 * @tags font
	 */
	mediaFontMediaParagraph: Adaptive<Font>;
	/**
	 * @desc Цифры в нумерованных списках, чтобы списки выглядели акцентными. Component Text. Tag: Article
	 * @tags font
	 */
	mediaFontMediaNumbering: Adaptive<Font>;
	/**
	 * @desc Компактный наборный текст. Меньше основного, без адаптива (размер одинаков на всех устройствах). Component Text. Tag: Card, widget
	 * @tags font
	 */
	mediaFontMediaText: Adaptive<Font>;
	/**
	 * @desc Подзаголовки, отдельные строки с учётом визуальной иерархии. Component Title. Tag: Accent
	 * @tags font
	 */
	mediaFontMediaSubtitle1: Adaptive<Font>;
	/**
	 * @desc Уменьшенные подзаголовки, вес Regular (400). Component Title. Tag: Accent
	 * @tags font
	 */
	mediaFontMediaSubtitle2Regular: Adaptive<Font>;
	/**
	 * @desc Уменьшенные подзаголовки, вес Medium (500). Component Title. Tag: Accent
	 * @tags font
	 */
	mediaFontMediaSubtitle2Medium: Adaptive<Font>;
	/**
	 * @desc Уменьшенные подзаголовки, вес DemiBold (600). Component Title. Tag: Accent
	 * @tags font
	 */
	mediaFontMediaSubtitle2DemiBold: Adaptive<Font>;
	/**
	 * @desc Уменьшенные подзаголовки, вес Bold (700). Component Title. Tag: Accent
	 * @tags font
	 */
	mediaFontMediaSubtitle2Bold: Adaptive<Font>;
	/**
	 * @desc Подписи под изображениями, видео или другими блоками и врезами в статьях и на других медиа-страницах. Component Text. Tag: Article
	 * @tags font
	 */
	mediaFontMediaCaption: Adaptive<Font>;
	/**
	 * @desc Подпись капсом для лейблов типа «Продолжение после рекламы». Component Text. Tag: Article
	 * @tags font
	 */
	mediaFontMediaCaptionCaps: Adaptive<Font>;
	/**
	 * @desc Лейблы, бейджи, теги, отдельные подписи в карточках, декоративных блоках, теглайнах. Вес Light (300), капс. Component Text. Tag: Card
	 * @tags font
	 */
	mediaFontMediaLabelLight: Adaptive<Font>;
	/**
	 * @desc Лейблы, бейджи, теги, отдельные подписи в карточках, декоративных блоках, теглайнах. Вес Regular (400). Component Text. Tag: Card
	 * @tags font
	 */
	mediaFontMediaLabelRegular: Adaptive<Font>;
	/**
	 * @desc Лейблы, бейджи, теги, отдельные подписи в карточках, декоративных блоках, теглайнах. Вес Regular (400), капс. Component Text. Tag: Card
	 * @tags font
	 */
	mediaFontMediaLabelCaps: Adaptive<Font>;
	/**
	 * @desc Лейблы, бейджи, теги, отдельные подписи в карточках, декоративных блоках, теглайнах. Вес Bold (700), капс. Component Text. Tag: Card
	 * @tags font
	 */
	mediaFontMediaLabelBold: Adaptive<Font>;
	/**
	 * @desc Лейблы-плашки (strip). Вес Bold (700), капс, подчёркивание задаётся в вёрстке — в токене не хранится. Component Text. Tag: Card
	 * @tags font
	 */
	mediaFontMediaLabelStrip: Adaptive<Font>;
	/**
	 * @desc Адаптивный заголовок 1 уровня для карточек, вес Light (300). Component Title. Tag: Card
	 * @tags font
	 */
	mediaFontMediaCardTitle1Light: Adaptive<Font>;
	/**
	 * @desc Адаптивный заголовок 1 уровня для карточек, вес Bold (700). Component Title. Tag: Card
	 * @tags font
	 */
	mediaFontMediaCardTitle1Bold: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня для карточек, вес Light (300), одинаковый размер на десктопе и мобайле. Component Title. Tag: Card
	 * @tags font
	 */
	mediaFontMediaCardTitle2Light: Adaptive<Font>;
	/**
	 * @desc Заголовок 2 уровня для карточек, вес Bold (700), одинаковый размер на десктопе и мобайле. Component Title. Tag: Card
	 * @tags font
	 */
	mediaFontMediaCardTitle2Bold: Adaptive<Font>;
	/**
	 * @desc Главный заголовок фичера. Component Title. Tag: Fitcher
	 * @tags font
	 */
	mediaFontMediaFitcherTitle: Adaptive<Font>;
	/**
	 * @desc Главный заголовок фичера капсом. Component Title. Tag: Fitcher
	 * @tags font
	 */
	mediaFontMediaFitcherTitleCaps: Adaptive<Font>;
	/**
	 * @desc Bold (700) версия Paradigm Title 1. Component Title. Tag: Paradigm Base
	 * @tags font
	 */
	mediaFontMediaPTitle1Bold: Adaptive<Font>;
	/**
	 * @desc Bold (700) версия Paradigm Title 2. Component Title. Tag: Paradigm Base
	 * @tags font
	 */
	mediaFontMediaPTitle2Bold: Adaptive<Font>;
	/**
	 * @desc Bold (700) версия Paradigm Title 3. Component Title. Tag: Paradigm Base
	 * @tags font
	 */
	mediaFontMediaPTitle3Bold: Adaptive<Font>;
	/**
	 * @desc Адаптивная версия Paradigm Title 1 для длинных заголовков — снижает количество переносов на мобильных. Component Title. Tag: Paradigm Base
	 * @tags font
	 */
	mediaFontMediaPTitle1Adaptive: Adaptive<Font>;
	/**
	 * @desc Адаптивная версия Paradigm Title 2 для длинных заголовков — снижает количество переносов на мобильных. Component Title. Tag: Paradigm Base
	 * @tags font
	 */
	mediaFontMediaPTitle2Adaptive: Adaptive<Font>;
	/**
	 * @desc Адаптивная версия Paradigm Title 3 для длинных заголовков — снижает количество переносов на мобильных. Component Title. Tag: Paradigm Base
	 * @tags font
	 */
	mediaFontMediaPTitle3Adaptive: Adaptive<Font>;
	/**
	 * @desc Подзаголовок с весом Medium (500); тот же размер, что Subhead, но акцентный вес
	 * @tags font
	 */
	mediaFontMediaPSubhead500: Adaptive<Font>;

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
	 * @deprecated Используйте mediaFontMediaSubtitle2Regular
	 */
	mediaFontMediaTextSecondaryLight: Token<Adaptive<Font>, ThemeMediaDescription>;
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
