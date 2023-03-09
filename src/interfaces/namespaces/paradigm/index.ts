import { Property } from 'csstype';

import { Theme, ThemeCssVars, ThemeCssVarsWide, ThemeDescription } from '@/interfaces/general';
import {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '@/interfaces/general/colors';
import { Adaptive, Breakpoints } from '@/interfaces/general/tools';
import { CustomMediaByViewport } from '@/interfaces/general/tools/customMedia';
import { DefaultViewports, ViewportsTuple } from '@/interfaces/general/tools/viewports';
import { Font } from '@/interfaces/general/typography';

export interface LocalParadigmColorsDescriptionStruct {
	/**
	 * @desc Legacy. Цвет для контрастных кнопок Paradigm
	 * @tags color, component, legacy
	 */
	colorButtonContrast: ColorDescription;

	/**
	 * @desc Legacy. Цвет для контрастных кнопок Paradigm с прозрачностью
	 * @tags color, component, legacy, alpha
	 */
	colorButtonContrastAlpha: ColorDescription;

	/**
	 * @desc Legacy. Цвет для рейтингов
	 * @tags color, component, legacy
	 */
	colorRating: ColorDescription;

	/**
	 * @desc Legacy. Цвет фона компонента Thumb с ошибкой
	 * @tags color, component, background, legacy, alpha
	 */
	colorThumbErrorBackgroundAlpha: ColorDescription;

	/**
	 * @desc Тонированный акцентный фон с прозрачностью меняется на белый в темной теме
	 * @tags color, background, alpha, themed
	 */
	colorBackgroundAccentTintThemedAlpha: ColorDescription;

	/**
	 * @desc Тонированный акцентный фон с прозрачностью
	 * @tags color, background, alpha
	 */
	colorBackgroundAccentTintAlpha: ColorDescription;

	/**
	 * @desc Тонированный акцентный фон меняется на белый в темной теме
	 * @tags color, background, themed
	 */
	colorBackgroundAccentTintThemed: ColorDescription;

	/**
	 * @desc Тонированный цвет фона предупреждающих элементов. Меняется на
	 *       нейтральный в темной теме. С прозрачностью
	 * @tags color, background, alpha, themed
	 */
	colorBackgroundWarningTintThemedAlpha: ColorDescription;

	/**
	 * @desc Тонированный цвет фона предупреждающих элементов с прозрачностью
	 * @tags color, background, alpha
	 */
	colorBackgroundWarningTintAlpha: ColorDescription;

	/**
	 * @desc Тонированный цвет фона предупреждающих элементов. Меняется на нейтральный в темной теме
	 * @tags color, background, themed
	 */
	colorBackgroundWarningTintThemed: ColorDescription;

	/**
	 * @desc Тонированный цвет фона предупреждающих элементов
	 * @tags color, background
	 */
	colorBackgroundWarningTint: ColorDescription;

	/**
	 * @desc Тонированный фон для ошибок и использования в негативных сценариях
	 *       работы. Меняется на нейтральный в темной теме. С прозрачностью
	 * @tags color, background, alpha, themed
	 */
	colorBackgroundNegativeTintThemedAlpha: ColorDescription;

	/**
	 * @desc Тонированный фон для ошибок и использования в негативных сценариях работы с прозрачностью
	 * @tags color, background, alpha
	 */
	colorBackgroundNegativeTintAlpha: ColorDescription;

	/**
	 * @desc Тонированный фон для ошибок и использования в негативных сценариях
	 *       работы. Меняется на нейтральный в темной теме
	 * @tags color, background, themed
	 */
	colorBackgroundNegativeTintThemed: ColorDescription;

	/**
	 * @desc Тонированный фон для использования в позитивных сценариях работы.
	 *       Меняется на нейтральный в темной теме. С прозрачностью
	 * @tags color, background, alpha, themed
	 */
	colorBackgroundPositiveTintThemedAlpha: ColorDescription;

	/**
	 * @desc Тонированный фон для использования в позитивных сценариях работы с прозрачностью
	 * @tags color, background, alpha
	 */
	colorBackgroundPositiveTintAlpha: ColorDescription;

	/**
	 * @desc Тонированный фон для использования в позитивных сценариях работы.
	 *       Меняется на нейтральный в темной теме
	 * @tags color, background, themed
	 */
	colorBackgroundPositiveTintThemed: ColorDescription;
}

export type ParadigmLocalColors = {
	[key in keyof LocalParadigmColorsDescriptionStruct]: ColorWithStates;
};

// кажется, половина переменных тут вообще не нужны или не используются
// @todo перевьюить их с Зубановым
export interface ParadigmLocalSizes {
	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeArrowHeight: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeArrowWidth: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeBasePadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeBorderWidthTab: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeBorderWidthBar: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeBorderWidthAccent: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeBorderWidthAccentSecondary: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeControlButtonWidthMin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizePromoButtonClose: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeButtonSliderHeight: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeButtonSliderWidth: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeButtonSliderWidthPointer: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeFieldWidthMin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeLabelWidth: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeProgress: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeProgressScroll: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeDotBullet: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeDotIndicate: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeDotClickable: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeVerticalPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeButtonMorePadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeIconMorePadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeButtonIconPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeDivPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeMenuPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeTagPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeTabPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeTableHorizontalPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeTableVerticalPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeSliceTopPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeSliceBottomPadding: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeBaseMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeLabelVerticalMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeTipMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeFieldHorizontalMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeFieldVerticalMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeFieldSetMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeIconMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeChoiceMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeMenuMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeTagMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeTabMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeBulletMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeAttributeMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizePopupMargin: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeHeaderIcon: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeWysiwygIcon: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeIllustrationS: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeIllustrationXM: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeIllustrationM: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeIllustrationL: number;

	/**
	 * @desc Legacy
	 * @tags size, legacy
	 * @deprecated
	 */
	sizeIllustrationXXL: number;
}

export interface ParadigmToneValues {
	/**
	 * @desc Legacy. Значение прозрачности
	 * @tags legacy
	 * @deprecated
	 */
	toneValueOverlay: number;

	/**
	 * @desc Legacy. Значение прозрачности
	 * @tags legacy
	 * @deprecated
	 */
	toneValueViewer: number;

	/**
	 * @desc Legacy. Значение прозрачности
	 * @tags legacy
	 * @deprecated
	 */
	toneValueToolbar: number;

	/**
	 * @desc Legacy. Значение прозрачности
	 * @tags legacy
	 * @deprecated
	 */
	toneValueHover: number;

	/**
	 * @desc Legacy. Значение прозрачности
	 * @tags legacy
	 * @deprecated
	 */
	toneValueActive: number;

	/**
	 * @desc Legacy. Значение прозрачности
	 * @tags legacy
	 * @deprecated
	 */
	toneValueFocus: number;
}

export interface ParadigmBorders {
	/**
	 * @desc Legacy
	 * @tags legacy
	 * @deprecated
	 */
	typeBorderButton: Property.BorderStyle;

	/**
	 * @desc Legacy
	 * @tags legacy
	 * @deprecated
	 */
	typeBorderPosition: Property.BorderStyle;
}

// todo удалить и заменить на контекстные токены в проектах
export interface ParadigmLocalFonts {
	// большие шрифты
	/**
	 * @desc Legacy. Крупный заголовок из темы Paradigm
	 * @tags font, legacy
	 * @deprecated
	 */
	fontH0: Font;

	/**
	 * @desc Legacy. Крупный заголовок из темы Paradigm
	 * @tags font, legacy
	 * @deprecated
	 */
	fontH1: Font;

	/**
	 * @desc Legacy. Крупный заголовок из темы Paradigm
	 * @tags font, legacy
	 * @deprecated
	 */
	fontH2: Font;
}

export interface ParadigmHelpers {
	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	sizeBase: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	sizeGrid: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x0: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x025: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x05: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x1: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x2: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x3: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x4: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x5: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x6: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x8: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x10: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x12: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x15: number;

	/**
	 * @desc Legacy
	 * @tags legacy, size
	 * @deprecated
	 */
	x20: number;
}

interface AdaptiveValues extends ParadigmLocalFonts, ParadigmLocalSizes {}
type ParadigmAdaptiveTokens = {
	[key in keyof AdaptiveValues]: Adaptive<AdaptiveValues[key]>;
};

export interface ParadigmThemeDescription<Vt extends ViewportsTuple = DefaultViewports>
	extends ThemeDescription,
		ParadigmAdaptiveTokens,
		ParadigmToneValues,
		ParadigmBorders,
		ParadigmHelpers,
		Breakpoints<Vt> {
	colors: LocalParadigmColorsDescriptionStruct & ColorsDescriptionStruct;
}

interface ParadigmThemeStatic<Vt extends ViewportsTuple = DefaultViewports>
	extends Theme,
		Breakpoints<Vt>,
		ParadigmAdaptiveTokens,
		ParadigmToneValues,
		ParadigmBorders,
		ParadigmHelpers,
		ParadigmLocalColors {}

export type ParadigmTheme<Vt extends ViewportsTuple = DefaultViewports> = ParadigmThemeStatic<Vt> &
	CustomMediaByViewport<Vt>;

export type ParadigmThemeCssVarsWide<Vt extends ViewportsTuple = DefaultViewports> =
	ThemeCssVarsWide<ParadigmTheme<Vt>, 'breakpoints'>;

export type ParadigmThemeCssVars<
	Vt extends ViewportsTuple = DefaultViewports,
	T extends Breakpoints<Vt> = ParadigmTheme<Vt>,
> = ThemeCssVars<T, 'breakpoints'>;
