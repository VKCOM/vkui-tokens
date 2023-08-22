import type { Property } from 'csstype';

type TLength = string | 0;

export type Font = {
	fontSize: number;
	lineHeight: Property.LineHeight<TLength>;
	fontWeight: Property.FontWeight;
	fontFamily?: Property.FontFamily;
	letterSpacing?: Property.LetterSpacing<TLength>;
	textTransform?: Property.TextTransform;
	fontStyle?: Property.FontStyle;
	margin?: string;
	marginBottom?: string | number;
};

/**
 * Переменные, отвечающие за группы переменных, отвечающих за шрифты
 */
export interface Fonts {
	/**
	 * @desc Основной заголовок, уровень 1
	 * @tags font
	 */
	fontTitle1: Font;

	/**
	 * @desc Основной заголовок, уровень 2
	 * @tags font
	 */
	fontTitle2: Font;

	/**
	 * @desc Основной заголовок, уровень 3
	 * @tags font
	 */
	fontTitle3: Font;

	/**
	 * @desc Legacy. Сейчас не используется в компонентах
	 * @tags font, legacy
	 * @deprecated
	 * @see fontHeadline1
	 */
	fontHeadline: Font;

	/**
	 * @desc Акцентный текст. Используется в больших кнопках
	 * @tags font
	 */
	fontHeadline1: Font;

	/**
	 * @desc Акцентный текст. Используется в средних кнопках
	 * @tags font
	 */
	fontHeadline2: Font;

	/**
	 * @desc Основной текст. Имеет разное значение в зависимости от платформы
	 * @tags font
	 */
	fontText: Font;

	/**
	 * @desc Основной текст. Не меняется в зависимости от платформы
	 * @tags font
	 */
	fontParagraph: Font;

	/**
	 * @desc Текст подзаголовка. Акцентный. Используется также в маленьких кнопках
	 * @tags font
	 */
	fontSubhead: Font;

	/**
	 * @desc Текст подписей
	 * @tags font
	 */
	fontFootnote: Font;

	/**
	 * @desc Текст подписей прописными буквами
	 * @tags font
	 */
	fontFootnoteCaps: Font;

	/**
	 * @desc Текст для подсказок, уровень 1
	 * @tags font
	 */
	fontCaption1: Font;

	/**
	 * @desc Текст для подсказок прописными буквами, уровень 1
	 * @tags font
	 */
	fontCaption1Caps: Font;

	/**
	 * @desc Текст для подсказок, уровень 2
	 * @tags font
	 */
	fontCaption2: Font;

	/**
	 * @desc Текст для подсказок прописными буквами, уровень 2
	 * @tags font
	 */
	fontCaption2Caps: Font;

	/**
	 * @desc Текст для подсказок, уровень 3
	 * @tags font
	 */
	fontCaption3: Font;

	/**
	 * @desc Текст для подсказок прописными буквами, уровень 3
	 * @tags font
	 */
	fontCaption3Caps: Font;
}

/**
 * Глобальные переменные типографии, которые можно использовать вне групп
 */
export interface TypographyBaseProps {
	/**
	 * @desc Фолбеки на случай пока грузится шрифт или если шрифт не загрузился
	 * @tags font
	 */
	fontFamilyFallbacks: Property.FontFamily;

	/**
	 * @desc Семейство шрифтов для заголовков
	 * @tags font
	 */
	fontFamilyAccent: Property.FontFamily;

	/**
	 * @desc Семейство шрифтов для основного текста
	 * @tags font
	 */
	fontFamilyBase: Property.FontFamily;

	/**
	 * @desc Размер веса шрифта акцентного семейства. Самый большой
	 * @tags font
	 */
	fontWeightAccent1: Property.FontWeight;

	/**
	 * @desc Размер веса шрифта акцентного семейства. Средний
	 * @tags font
	 */
	fontWeightAccent2: Property.FontWeight;

	/**
	 * @desc Размер веса шрифта акцентного семейства. Маленький
	 * @tags font
	 */
	fontWeightAccent3: Property.FontWeight;

	/**
	 * @desc Размер веса шрифта базового семейства. Самый большой
	 * @tags font
	 */
	fontWeightBase1: Property.FontWeight;

	/**
	 * @desc Размер веса шрифта базового семейства. Средний
	 * @tags font
	 */
	fontWeightBase2: Property.FontWeight;

	/**
	 * @desc Размер веса шрифта базового семейства. Маленький
	 * @tags font
	 */
	fontWeightBase3: Property.FontWeight;
}
