import {Property} from 'csstype';

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
	fontTitle1: Font;
	fontTitle2: Font;
	fontTitle3: Font;
	/**
	 * @desc Legacy. Сейчас не используется в компонентах
	 * @tags font
	 * @deprecated
	 * @see fontHeadline1
	 */
	fontHeadline: Font;
	fontHeadline1: Font;
	fontHeadline2: Font;
	fontText: Font;
	fontParagraph: Font;
	fontSubhead: Font;
	fontFootnote: Font;
	fontFootnoteCaps: Font;
	fontCaption1: Font;
	fontCaption1Caps: Font;
	fontCaption2: Font;
	fontCaption2Caps: Font;
	fontCaption3: Font;
	fontCaption3Caps: Font;
}

/**
 * Глобальные переменные типографии, которые можно использовать вне групп
 */
export interface TypographyBaseProps {
	/**
	 * @desc Семейство шрифтов для заголовков
	 * @tags font
	 */
	fontFamilyAccent: Property.FontFamily;
	fontFamilyBase: Property.FontFamily;
	fontWeightAccent1: Property.FontWeight;
	fontWeightAccent2: Property.FontWeight;
	fontWeightAccent3: Property.FontWeight;
	fontWeightBase1: Property.FontWeight;
	fontWeightBase2: Property.FontWeight;
	fontWeightBase3: Property.FontWeight;
}
