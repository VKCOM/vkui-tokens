import type {
	ColorDescription,
	ColorsDescriptionStruct,
	ColorWithStates,
} from '../../general/colors/index.ts';
import type { ThemeCssVars } from '../../general/index.ts';
import type {
	LocalParadigmColorsDescriptionStruct,
	ParadigmTheme,
	ParadigmThemeDescription,
} from '../../namespaces/paradigm/index.ts';

/**
 * Локальные цвета темы WorkSpaceChats (чат-токены из UI-KIT Chats Web).
 * Источник: Figma-переменные коллекции Colors (группа Chat).
 */
export interface LocalWorkSpaceChatsColorsDescriptionStruct {
	// Text
	/**
	 * @desc Цвет для системных сообщений в чате
	 * @tags color, text, alpha
	 */
	colorTextMediumAlpha: ColorDescription;

	// Icon
	/**
	 * @desc Цвет для замьюченных уведомлений в рисентах
	 * @tags color, icon, alpha
	 */
	colorIconNotificationNeutralAlpha: ColorDescription;

	/**
	 * @desc Цвет для акцентного уведомления о реакции в рисентах
	 * @tags color, icon
	 */
	colorIconNotificationRed: ColorDescription;

	/**
	 * @desc Цвет для акцентных уведомлений в рисентах
	 * @tags color, icon
	 */
	colorIconNotificationAccent: ColorDescription;

	// Bubble
	/**
	 * @desc Акцентный фон пузыря сообщения
	 * @tags color, bubble, background
	 */
	colorBubbleBackgroundAccent: ColorDescription;

	/**
	 * @desc Нейтральный фон пузыря сообщения
	 * @tags color, bubble, background
	 */
	colorBubbleBackgroundNeutral: ColorDescription;

	/**
	 * @desc Акцентная подсветка пузыря сообщения
	 * @tags color, bubble, background, alpha
	 */
	colorBubbleHighlightAccent: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — красный
	 * @tags color, bubble, text
	 */
	colorBubbleTextRed: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — оранжевый
	 * @tags color, bubble, text
	 */
	colorBubbleTextOrange: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — персиковый
	 * @tags color, bubble, text
	 */
	colorBubbleTextPeach: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — жёлтый
	 * @tags color, bubble, text
	 */
	colorBubbleTextYellow: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — лаймовый
	 * @tags color, bubble, text
	 */
	colorBubbleTextLime: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — зелёный
	 * @tags color, bubble, text
	 */
	colorBubbleTextGreen: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — морской
	 * @tags color, bubble, text
	 */
	colorBubbleTextSea: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — мятный
	 * @tags color, bubble, text
	 */
	colorBubbleTextMint: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — салатовый
	 * @tags color, bubble, text
	 */
	colorBubbleTextSeagreen: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — небесный
	 * @tags color, bubble, text
	 */
	colorBubbleTextSky: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — синий
	 * @tags color, bubble, text
	 */
	colorBubbleTextBlue: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — индиго
	 * @tags color, bubble, text
	 */
	colorBubbleTextIndigo: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — фиолетовый
	 * @tags color, bubble, text
	 */
	colorBubbleTextViolet: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — лавандовый
	 * @tags color, bubble, text
	 */
	colorBubbleTextLavender: ColorDescription;

	/**
	 * @desc Цвет текста в пузыре — коралловый
	 * @tags color, bubble, text
	 */
	colorBubbleTextCoral: ColorDescription;

	// Other
	/**
	 * @desc Фон pull-to-refresh с акцентом
	 * @tags color, other, alpha
	 */
	colorOtherPullBackgroundAccent: ColorDescription;

	/**
	 * @desc Прогресс pull-to-refresh с акцентом
	 * @tags color, other, alpha
	 */
	colorOtherPullProgressAccent: ColorDescription;

	/**
	 * @desc Фоновый размытый слой
	 * @tags color, other, background, alpha
	 */
	colorOtherBackgroundBlur: ColorDescription;

	// States
	/**
	 * @desc Прозрачный фон пузыря — Hover
	 * @tags color, bubble, alpha
	 */
	colorBubbleTransparentHover: ColorDescription;

	/**
	 * @desc Прозрачный фон пузыря — Active
	 * @tags color, bubble, alpha
	 */
	colorBubbleTransparentActive: ColorDescription;
}

type WorkSpaceChatsLocalColors = {
	[key in keyof LocalWorkSpaceChatsColorsDescriptionStruct]: ColorWithStates;
};

export interface ThemeWorkSpaceChats extends ParadigmTheme, WorkSpaceChatsLocalColors {}

export interface ThemeWorkSpaceChatsDescription extends ParadigmThemeDescription {
	colors: LocalParadigmColorsDescriptionStruct &
		ColorsDescriptionStruct &
		LocalWorkSpaceChatsColorsDescriptionStruct;
}

export interface ThemeWorkSpaceChatsCssVars
	extends ThemeCssVars<ThemeWorkSpaceChats, 'breakpoints'> {}
