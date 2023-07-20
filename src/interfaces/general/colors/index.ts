import { Property } from 'csstype';

import { ColorsDescription, ColorsScheme } from '@/interfaces/general';

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
	T extends { [key in keyof T]: ColorDescription } = ColorsDescriptionStruct,
> = (
	theme: Partial<ColorsScheme & ColorsDescription<T>>,
	// eslint-disable-next-line no-use-before-define
) => ColorDescription;

export type ColorDescription<
	// eslint-disable-next-line no-use-before-define
	T extends { [key in keyof T]: ColorDescription } = ColorsDescriptionStruct,
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
	 * @tags color, background, themed
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
	 * @tags color, component, background
	 */
	colorFieldBackground: ColorDescription;

	/**
	 * @desc Цвет фона. Используется в компоненте Header
	 * @tags color, component, background
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
	 * @desc Третичный цвет текста ссылок
	 * @tags color, text
	 */
	colorTextLinkTint: ColorDescription;

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

	/**
	 * @desc Цвет текста для кнопок
	 * @tags color
	 */
	colorTextButton: ColorDescription;

	// Icons
	/**
	 * @desc Акцентный цвет иконок
	 * @tags color, icon
	 */
	colorIconAccent: ColorDescription;

	/**
	 * @desc Акцентный цвет иконок, меняется на контрастный в темной теме
	 * @tags color, icon, themed
	 */
	colorIconAccentThemed: ColorDescription;

	/**
	 * @desc Основной цвет иконок
	 * @tags color, icon
	 */
	colorIconPrimary: ColorDescription;

	/**
	 * @desc Основной цвет иконок который не меняется в зависимости от тем
	 * @tags color, icon
	 */
	colorIconPrimaryInvariably: ColorDescription;

	/**
	 * @desc Средний по насыщенности цвет иконок
	 * @tags color, icon
	 */
	colorIconMedium: ColorDescription;

	/**
	 * @desc Средний по насыщенности цвет иконок с прозрачностью
	 * @tags color, icon, alpha
	 */
	colorIconMediumAlpha: ColorDescription;

	/**
	 * @desc Второстепенный цвет для иконок
	 * @tags color, icon
	 */
	colorIconSecondary: ColorDescription;

	/**
	 * @desc Второстепенный цвет для иконок с прозрачностью
	 * @tags color, icon, alpha
	 */
	colorIconSecondaryAlpha: ColorDescription;

	/**
	 * @desc Третичный цвет для иконок
	 * @tags color, icon
	 */
	colorIconTertiary: ColorDescription;

	/**
	 * @desc Третичный цвет для иконок с прозрачностью
	 * @tags color, icon, alpha
	 */
	colorIconTertiaryAlpha: ColorDescription;

	/**
	 * @desc Белый цвет иконок
	 * @tags color, icon
	 */
	colorIconContrast: ColorDescription;

	/**
	 * @desc Белый цвет иконок, который меняется в темной теме
	 * @tags color, icon, themed
	 */
	colorIconContrastThemed: ColorDescription;

	/**
	 * @desc Второстепенный белый цвет иконок
	 * @tags color, icon
	 */
	colorIconContrastSecondary: ColorDescription;

	/**
	 * @desc Цвет иконок для позитивных сценариев
	 * @tags color, icon
	 */
	colorIconPositive: ColorDescription;

	/**
	 * @desc Цвет иконок для ошибок и других негативных сценариев
	 * @tags color, icon
	 */
	colorIconNegative: ColorDescription;

	/**
	 * @desc Цвет иконок для кнопок
	 * @tags color, icon
	 */
	colorIconButton: ColorDescription;

	// Stroke
	/**
	 * @desc Цвет акцентной обводки
	 * @tags color,stroke
	 */
	colorStrokeAccent: ColorDescription;

	/**
	 * @desc Цвет акцентной ободки, на темной теме становится белым
	 * @tags color, stroke, themed
	 */
	colorStrokeAccentThemed: ColorDescription;

	/**
	 * @desc Цвет обводки позитивных сценариев
	 * @tags color, stroke
	 */
	colorStrokePositive: ColorDescription;

	/**
	 * @desc Цвет для обводки ошибок или подсвечивания негативных сценариев
	 * @tags color, stroke
	 */
	colorStrokeNegative: ColorDescription;

	/**
	 * @desc Контрастный цвет для обводки. Не меняется в зивисимости от темы
	 * @tags color, stroke
	 */
	colorStrokeContrast: ColorDescription;

	/**
	 * @desc Цвет обводки для изображений с прозрачностью
	 * @tags color, component, alpha
	 */
	colorImageBorderAlpha: ColorDescription;

	/**
	 * @desc Обводка полей ввода, селектов и других компонентов. С прозрачностью
	 * @tags color, component, alpha
	 */
	colorFieldBorderAlpha: ColorDescription;

	/**
	 * @desc Цвет разделителей основной с прозрачностью
	 * @tags color, stroke, alpha
	 */
	colorSeparatorPrimaryAlpha: ColorDescription;

	/**
	 * @desc Цвет разделителей второстепенный
	 * @tags color, stroke
	 */
	colorSeparatorSecondary: ColorDescription;

	/**
	 * @desc Цвет разделителей основной
	 * @tags color, stroke
	 */
	colorSeparatorPrimary: ColorDescription;

	/**
	 * @desc Цвет разделителей основной для экранов с разрешением 2х
	 * @tags color, stroke
	 */
	colorSeparatorPrimary2x: ColorDescription;

	/**
	 * @desc Цвет разделителей основной для экранов с разрешением 3х
	 * @tags color, stroke
	 */
	colorSeparatorPrimary3x: ColorDescription;

	/**
	 * @desc Цвет обводки для кнопок
	 * @tags color, stroke
	 */
	colorStrokeButton: ColorDescription;

	// Palette
	/**
	 * @desc Палитра цветов. Голубой цвет
	 * @tags color, palette
	 */
	colorAccentBlue: ColorDescription;

	/**
	 * @desc Палитра цветов. Серый цвет
	 * @tags color, palette
	 */
	colorAccentGray: ColorDescription;

	/**
	 * @desc Палитра цветов. Красный цвет
	 * @tags color, palette
	 */
	colorAccentRed: ColorDescription;

	/**
	 * @desc Палитра цветов. Зелёный цвет
	 * @tags color, palette
	 */
	colorAccentGreen: ColorDescription;

	/**
	 * @desc Палитра цветов. Оранжевый цвет
	 * @tags color, palette
	 */
	colorAccentOrange: ColorDescription;

	/**
	 * @desc Палитра цветов. Огненно оранжевый цвет
	 * @tags color, palette
	 */
	colorAccentOrangeFire: ColorDescription;

	/**
	 * @desc Палитра цветов. Фиолетовый цвет
	 * @tags color, palette
	 */
	colorAccentPurple: ColorDescription;

	/**
	 * @desc Палитра цветов. Лиловый цвет
	 * @tags color, palette
	 */
	colorAccentViolet: ColorDescription;

	/**
	 * @desc Палитра цветов. Розовый цвет
	 * @tags color, palette
	 */
	colorAccentRaspberryPink: ColorDescription;

	/**
	 * @desc Второстепенный акцентный цвет для отдельных проектов
	 * @tags color, palette
	 */
	colorAccentSecondary: ColorDescription;

	// Other
	/**
	 * @desc Основной цвет для подложек оверлеев
	 * @tags color, overlay
	 */
	colorOverlayPrimary: ColorDescription;

	/**
	 * @desc Фон для компонента Avatar. Не прозрачный
	 * @tags color, component
	 */
	colorAvatarOverlay: ColorDescription;

	/**
	 * @desc Фон для компонента Avatar противоположный токену colorAvatarOverlay. Прозрачный
	 * @tags color, component, alpha
	 */
	colorAvatarOverlayInverseAlpha: ColorDescription;

	/**
	 * @desc Цвет изображения для плейсхолдера
	 * @tags color, component
	 */
	colorImagePlaceholder: ColorDescription;

	/**
	 * @desc Цвет изображения для плейсхолдера с прозрачностью
	 * @tags color, component, alpha
	 */
	colorImagePlaceholderAlpha: ColorDescription;

	/**
	 * @desc Цвет для компонента Skeleton. Начальная точка градиента
	 * @tags color, component
	 */
	colorSkeletonFrom: ColorDescription;

	/**
	 * @desc Цвет для компонента Skeleton. Конечная точка градиента
	 * @tags color, component
	 */
	colorSkeletonTo: ColorDescription;

	/**
	 * @desc Цвет иконок в компоненте WriteBar
	 * @tags color, component, icon
	 */
	colorWriteBarIcon: ColorDescription;

	/**
	 * @desc Цвет фона поля ввода в компоненте WriteBar
	 * @tags color, component, background
	 */
	colorWriteBarInputBackground: ColorDescription;

	/**
	 * @desc Цвет фона поля ввода в компоненте WriteBar
	 * @tags color, component
	 */
	colorWriteBarInputBorder: ColorDescription;

	/**
	 * @desc Цвет фона поля ввода в компоненте WriteBar с прозрачностью
	 * @tags color, component, alpha
	 */
	colorWriteBarInputBorderAlpha: ColorDescription;

	/**
	 * @desc Цветовой токен для компонента ActionSheet. Отвечает за цвет текста
	 * @tags color, component, text
	 */
	colorActionSheetText: ColorDescription;

	/**
	 * @desc Цвет фона для компонента Progress
	 * @tags color, component, background
	 */
	colorTrackBackground: ColorDescription;

	/**
	 * @desc Цвет фона заполнения для компонента Progress
	 * @tags color, component
	 */
	colorTrackBuffer: ColorDescription;

	/**
	 * @desc Цвет фона поиска. Компонент Search
	 * @tags color, component, background
	 */
	colorSearchFieldBackground: ColorDescription;

	/**
	 * @desc Цвет иконок в компоненте PanelHeader
	 * @tags color, component, icon
	 */
	colorPanelHeaderIcon: ColorDescription;

	/**
	 * @desc Прозрачный цвет. Используется для создания эффектов состояний для прозрачных компонентов
	 * @tags color, alpha, service
	 */
	colorTransparent: ColorDescription;

	/**
	 * @desc Фон элементов компонента SegmentedControl
	 * @tags color, component, background
	 */
	colorSegmentedControl: ColorDescription;

	// Themed цвета, в тёмной теме становится белыми
}

export type Colors = {
	[key in keyof ColorsDescriptionStruct]: ColorWithStates;
};
