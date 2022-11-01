import {Property} from 'csstype';

import {ColorsDescription, ColorsScheme} from '@/interfaces/general';

/**
 * Интерфейс всех цветов на выходе
 */
export interface ColorWithStates {
	normal: Property.Color;
	hover: Property.Color;
	active: Property.Color;
}

export type ColorDescriptionStatic = Property.Color | ColorWithStates;

export type ColorDescriptionCallable<
	// eslint-disable-next-line no-use-before-define
	T extends {[key in keyof T]: ColorDescription} = ColorsDescriptionStruct,
> = (
	theme: Partial<ColorsScheme & ColorsDescription<T>>,
	// eslint-disable-next-line no-use-before-define
) => ColorDescription;

export type ColorDescription<
	// eslint-disable-next-line no-use-before-define
	T extends {[key in keyof T]: ColorDescription} = ColorsDescriptionStruct,
> = ColorDescriptionStatic | ColorDescriptionCallable<T>;

/**
 * В описании цветов достаточно указать просто строку
 * (тогда состояния сгенерируются при сборке)
 * Либо можно указать состояния цвета вручную
 */
export interface ColorsDescriptionStruct {
	// Background
	/**
	 * @desc Акцентный фон для элементов интерфейса
	 * @tags color, background
	 */
	colorBackgroundAccent: ColorDescription;

	/**
	 * @desc Акцентный фон который меняется на белый в темной теме
	 * @tags color, background, themes
	 */
	colorBackgroundAccentThemed: ColorDescription;

	/**
	 * @desc Тонированный акцентный фон
	 * @tags color, background
	 */
	colorBackgroundAccentTint: ColorDescription;

	/**
	 * @desc Альтернативный акцентный фон элементов интерфейса
	 * @tags color, background
	 */
	colorBackgroundAccentAlternative: ColorDescription;

	/**
	 * @desc Основной фон страницы
	 * @tags color, background
	 */
	colorBackground: ColorDescription;

	/**
	 * @desc Цвет фона под контентом на странице
	 * @tags color, background
	 */
	colorBackgroundContent: ColorDescription;

	/**
	 * @desc Второстепенный цвет фона
	 * @tags color, background
	 */
	colorBackgroundSecondary: ColorDescription;

	/**
	 * @desc Второстепенный цвет фона с прозрачностью
	 * @tags color, background, alpha
	 */
	colorBackgroundSecondaryAlpha: ColorDescription;

	/**
	 * @desc Третичный цвет для фона
	 * @tags color, background
	 */
	colorBackgroundTertiary: ColorDescription;

	/**
	 * @desc Третичный цвет для фона с прозрачностью
	 * @tags color, background, alpha
	 */
	colorBackgroundTertiaryAlpha: ColorDescription;

	/**
	 * @desc Белый контрастный фон, не зависит от темы
	 * @tags color, background
	 */
	colorBackgroundContrast: ColorDescription;

	/**
	 * @desc Второстепенный контрастный фон с прозрачностью
	 * @tags color, background, alpha
	 */
	colorBackgroundContrastSecondaryAlpha: ColorDescription;

	/**
	 * @desc Противоположный белому контрастному фон, не зависит от темы
	 * @tags color, background
	 */
	colorBackgroundContrastInverse: ColorDescription;

	/**
	 * @desc Фон для всплывающих окон
	 * @tags color, background
	 */
	colorBackgroundModal: ColorDescription;

	/**
	 * @desc Противоположный цвет для фона всплывающих окон.
	 * @tags color, background
	 */
	colorBackgroundModalInverse: ColorDescription;

	/**
	 * @desc Цвет фона предупреждающих элементов
	 * @tags color, background
	 */
	colorBackgroundWarning: ColorDescription;

	/**
	 * @desc Фон для использования в позитивных сценариях работы
	 * @tags color, background
	 */
	colorBackgroundPositive: ColorDescription;

	/**
	 * @desc Фон для ошибок и использования в негативных сценариях работы
	 * @tags color, background
	 */
	colorBackgroundNegative: ColorDescription;

	/**
	 * @desc Тонированный фон для ошибок и использования в негативных сценариях работы
	 * @tags color, background
	 */
	colorBackgroundNegativeTint: ColorDescription;

	/**
	 * @desc Тонированный фон для использования в позитивных сценариях работы
	 * @tags color, background
	 */
	colorBackgroundPositiveTint: ColorDescription;

	/**
	 * @desc Фон для полей ввода, селектов и других подобных компонентов
	 * @tags color, component
	 */
	colorFieldBackground: ColorDescription;

	/**
	 * @desc Цвет фона. Используется в компоненте Header
	 * @tags color, component
	 */
	colorHeaderBackground: ColorDescription;

	// Text
	/**
	 * @desc Акцентный цвет текста
	 * @tags color, text
	 */
	colorTextAccent: ColorDescription;

	/**
	 * @desc Акцентный цвет текста, становится белым в темной теме
	 * @tags color, text, themed
	 */
	colorTextAccentThemed: ColorDescription;

	/**
	 * @desc Основной цвет текста
	 * @tags color, text
	 */
	colorTextPrimary: ColorDescription;

	/**
	 * @desc Основной цвет текста не меняется в зависимости от темы
	 * @tags color, text
	 */
	colorTextPrimaryInvariably: ColorDescription;

	/**
	 * @desc Второстепенный цвет текста
	 * @tags color, text
	 */
	colorTextSecondary: ColorDescription;

	/**
	 * @desc Цвет текста подзаголовков
	 * @tags color, text
	 */
	colorTextSubhead: ColorDescription;

	/**
	 * @desc Третичный цвет текста
	 * @tags color, text
	 */
	colorTextTertiary: ColorDescription;

	/**
	 * @desc Контрастный цвет для текста, не меняется в зависимости от темы
	 * @tags color, text
	 */
	colorTextContrast: ColorDescription;

	/**
	 * @desc Контрастный цвет для текста
	 * @tags color, text, themed
	 */
	colorTextContrastThemed: ColorDescription;

	/**
	 * @desc Цвет текста позитивных сценариев
	 * @tags color, text
	 */
	colorTextPositive: ColorDescription;

	/**
	 * @desc Цвет текста ошибок или подсвечивания негативных сценариев
	 * @tags color, text
	 */
	colorTextNegative: ColorDescription;

	/**
	 * @desc Цвет текста ссылок
	 * @tags color, text
	 */
	colorTextLink: ColorDescription;

	/**
	 * @desc Цвет текста ссылок, становится белым в темной теме
	 * @tags color, text, themed
	 */
	colorTextLinkThemed: ColorDescription;

	/**
	 * @desc Цвет текста посещенных ссылок
	 * @tags color, text
	 */
	colorTextLinkVisited: ColorDescription;

	/**
	 * @desc Приглушенный цвет для текста
	 * @tags color, text
	 */
	colorTextMuted: ColorDescription;

	/**
	 * @desc Контрастный цвет для ссылок. Белый на всех темах
	 * @tags color
	 */
	colorLinkContrast: ColorDescription;

	// Icons
	colorIconAccent: ColorDescription;
	colorIconAccentThemed: ColorDescription;
	colorIconPrimary: ColorDescription;
	colorIconPrimaryInvariably: ColorDescription;
	colorIconMedium: ColorDescription;
	colorIconMediumAlpha: ColorDescription;
	colorIconSecondary: ColorDescription;
	colorIconSecondaryAlpha: ColorDescription;
	colorIconTertiary: ColorDescription;
	colorIconTertiaryAlpha: ColorDescription;
	colorIconContrast: ColorDescription;
	colorIconContrastThemed: ColorDescription;
	colorIconContrastSecondary: ColorDescription;
	colorIconPositive: ColorDescription;
	colorIconNegative: ColorDescription;

	// Stroke
	/**
	 * @desc Цвет акцентной обводки
	 * @tags color,stroke
	 */
	colorStrokeAccent: ColorDescription;
	colorStrokeAccentThemed: ColorDescription;
	colorStrokePositive: ColorDescription;
	colorStrokeNegative: ColorDescription;
	colorStrokeContrast: ColorDescription;
	colorImageBorderAlpha: ColorDescription;
	colorFieldBorderAlpha: ColorDescription;
	colorSeparatorPrimaryAlpha: ColorDescription;
	colorSeparatorSecondary: ColorDescription;
	colorSeparatorPrimary: ColorDescription;
	colorSeparatorPrimary2x: ColorDescription;
	colorSeparatorPrimary3x: ColorDescription;

	// Palette
	colorAccentBlue: ColorDescription;
	colorAccentGray: ColorDescription;
	colorAccentRed: ColorDescription;
	colorAccentGreen: ColorDescription;
	colorAccentOrange: ColorDescription;
	colorAccentPurple: ColorDescription;
	colorAccentViolet: ColorDescription;
	colorAccentSecondary: ColorDescription;

	// Other
	colorOverlayPrimary: ColorDescription;
	colorAvatarOverlay: ColorDescription;
	colorAvatarOverlayInverseAlpha: ColorDescription;
	colorImagePlaceholder: ColorDescription;
	colorImagePlaceholderAlpha: ColorDescription;
	colorSkeletonFrom: ColorDescription;
	colorSkeletonTo: ColorDescription;
	colorWriteBarIcon: ColorDescription;
	colorWriteBarInputBackground: ColorDescription;
	colorWriteBarInputBorderAlpha: ColorDescription;
	colorActionSheetText: ColorDescription;
	colorTrackBackground: ColorDescription;
	colorTrackBuffer: ColorDescription;
	colorSearchFieldBackground: ColorDescription;
	colorPanelHeaderIcon: ColorDescription;
	colorTransparent: ColorDescription;
	colorSegmentedControl: ColorDescription;

	// Themed цвета, в тёмной теме становится белыми
}

export type Colors = {
	[key in keyof ColorsDescriptionStruct]: ColorWithStates;
};
