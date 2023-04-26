import { Property } from 'csstype';

import { ColorDescription, ColorWithStates } from '@/interfaces/general/colors';
import { GradientPoints } from '@/interfaces/general/gradients';
import { DefaultViewports } from '@/interfaces/general/tools/viewports';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

interface PortalUITextColors {
	/**
	 * @desc Цвет посещённой ссылки в саджестах поиска
	 * @tags color, text
	 */
	portalColorTextLinkVisitedAlternative: ColorWithStates;
	/**
	 * @desc Цвет текста акцентного тултипа
	 * @tags color, text
	 */
	portalColorTextBlueAccentThemed: ColorWithStates;
	/**
	 * @desc Цвет текста акцентного тултипа
	 * @tags color, text
	 */
	portalColorTextGreenAccentThemed: ColorWithStates;
	/**
	 * @desc Цвет текста акцентного тултипа
	 * @tags color, text
	 */
	portalColorTextOrangeAccentThemed: ColorWithStates;
	/**
	 * @desc Цвет текста акцентного тултипа
	 * @tags color, text
	 */
	portalColorTextPurpleAccentThemed: ColorWithStates;
}

interface PortalUIBackgroundColors {
	/**
	 * @desc Цвет прозрачных синих фонов
	 * @tags color, background, alpha
	 */
	portalColorBackgroundAccentAlpha: ColorWithStates;
	/**
	 * @desc Цвет акцентных синих фонов
	 * @tags color, background
	 */
	portalColorBackgroundAccent: ColorWithStates;
	/**
	 * @desc Цвет табов
	 * @tags color, background, alpha
	 */
	portalColorBackgroundAccentTabAlpha: ColorWithStates;
	/**
	 * @desc Цвет карточек (виджеты, пульс, баннер)
	 * @tags color, background
	 */
	portalColorBackgroundCard: ColorWithStates;
	/**
	 * @desc Цвет фона страницы
	 * @tags color, background
	 */
	portalColorBackground: ColorWithStates;
	/**
	 * @desc Цвет фона, одинаковый для всех тем
	 * @tags color, background
	 */
	portalColorBackgroundInvariable: ColorWithStates;
	/**
	 * @desc Цвет оверлея под омнибоксом поиска
	 * @tags color, background
	 */
	portalColorOverlayPrimaryAlpha: ColorWithStates;
	/**
	 * @desc Цвет контрастных блоков (видео, например)
	 * @tags color, background
	 */
	portalColorBackgroundDark: ColorWithStates;
}

interface PortalUIPaletteColors {
	/**
	 * @desc Цвет фона акцентного тултипа
	 * @tags color, palette
	 */
	portalColorPaletteSweetBlue: ColorWithStates;
	/**
	 * @desc Цвет фона акцентного тултипа
	 * @tags color, palette
	 */
	portalColorPaletteSweetGreen: ColorWithStates;
	/**
	 * @desc Цвет фона акцентного тултипа
	 * @tags color, palette
	 */
	portalColorPaletteSweetOrange: ColorWithStates;
	/**
	 * @desc Цвет фона акцентного тултипа
	 * @tags color, palette
	 */
	portalColorPaletteSweetPurple: ColorWithStates;
	/**
	 * @desc Цвет фона акцентного тултипа
	 * @tags color, palette
	 */
	portalColorPaletteLightBlue: ColorWithStates;
}

type PortalUIColors = PortalUITextColors & PortalUIBackgroundColors & PortalUIPaletteColors;

type ProjectColorsDescriptions = {
	[key in keyof PortalUIColors]: ColorDescription;
};

interface PortalUIElevation {
	/**
	 * @desc Стандартная тень для карточек
	 * @tags elevation
	 */
	portalElevation1: Property.BoxShadow;
	/**
	 * @desc Тень у карточек при наведении
	 * @tags elevation
	 */
	portalElevation2: Property.BoxShadow;
	/**
	 * @desc Тень у попапов, хинтов, модалок
	 * @tags elevation
	 */
	portalElevation3: Property.BoxShadow;
}

interface PortalUIGradients {
	/**
	 * @desc Градиент для обрезающихся элементов на фоне colorBackground
	 * @tags gradient
	 */
	portalGradientBackground: GradientPoints;
	/**
	 * @desc Градиент Hover для обрезающихся элементов на фоне portalColorBackground
	 * @tags gradient
	 */
	portalGradientBackgroundHover: GradientPoints;
	/**
	 * @desc Градиент Active для обрезающихся элементов на фоне colorBackground
	 * @tags gradient
	 */
	portalGradientBackgroundActive: GradientPoints;
	/**
	 * @desc Градиент для обрезающихся элементов на фоне portalColorBackground
	 * @tags gradient
	 */
	portalGradientBackgroundSecondary: GradientPoints;
	/**
	 * @desc Градиент для обрезающихся элементов на фоне portalColorBackgroundTertiary
	 * @tags gradient
	 */
	portalGradientBackgroundTertiary: GradientPoints;
	/**
	 * @desc Градиент для обрезающихся элементов на фоне colorBackgroundContent
	 * @tags gradient
	 */
	portalGradientBackgroundContent: GradientPoints;
	/**
	 * @desc Градиент для обрезающихся элементов на фоне colorBackgroundCard
	 * @tags gradient
	 */
	portalGradientBackgroundCard: GradientPoints;
	/**
	 * @desc Градиент Hover для обрезающихся элементов на фоне colorBackgroundCard
	 * @tags gradient
	 */
	portalGradientBackgroundCardHover: GradientPoints;
	/**
	 * @desc Градиент Active для обрезающихся элементов на фоне portalColorBackgroundCard
	 * @tags gradient
	 */
	portalGradientBackgroundCardActive: GradientPoints;
	/**
	 * @desc Градиент для обрезающихся элементов на фоне portalColorBackgroundModal
	 * @tags gradient
	 */
	portalGradientBackgroundModal: GradientPoints;
	/**
	 * @desc Градиент Hover для обрезающихся элементов на фоне portalColorBackgroundModal
	 * @tags gradient
	 */
	portalGradientBackgroundModalHover: GradientPoints;
	/**
	 * @desc Градиент Active для обрезающихся элементов на фоне portalColorBackgroundModal
	 * @tags gradient
	 */
	portalGradientBackgroundModalActive: GradientPoints;
	/**
	 * @desc Градиент для обрезающихся элементов на фоне portalColorBackgroundAccent
	 * @tags gradient
	 */
	portalGradientBackgroundAccent: GradientPoints;
}

interface PortalUIUniqueTokens extends PortalUIElevation, PortalUIGradients {}

export interface ThemeMedia extends ParadigmTheme, PortalUIColors, PortalUIUniqueTokens {}

export interface ThemeMediaDescription
	extends ParadigmThemeDescription,
		PortalUIUniqueTokens {
	colors: ParadigmThemeDescription['colors'] & ProjectColorsDescriptions;
}

export interface ThemeMediaCssVars extends ParadigmThemeCssVars<DefaultViewports, ThemeMedia> {}
