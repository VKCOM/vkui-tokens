import type { Property } from 'csstype';

import type { ColorDescription, ColorWithStates } from '../../general/colors/index.ts';
import type { GradientPoints } from '../../general/gradients/index.ts';
import type { DefaultViewports } from '../../general/tools/viewports.ts';
import type {
  ParadigmTheme,
  ParadigmThemeCssVars,
  ParadigmThemeDescription,
} from '../../namespaces/paradigm/index.ts';

interface PortalUITextColors {
  /**
   * @desc Цвет посещённой ссылки в саджестах поиска
   * @tags color, text
   */
  portalColorTextLinkVisitedAlternative: ColorDescription;
  /**
   * @desc Цвет текста акцентного тултипа
   * @tags color, text
   */
  portalColorTextBlueAccentThemed: ColorDescription;
  /**
   * @desc Цвет текста акцентного тултипа
   * @tags color, text
   */
  portalColorTextGreenAccentThemed: ColorDescription;
  /**
   * @desc Цвет текста акцентного тултипа
   * @tags color, text
   */
  portalColorTextOrangeAccentThemed: ColorDescription;
  /**
   * @desc Цвет текста акцентного тултипа
   * @tags color, text
   */
  portalColorTextPurpleAccentThemed: ColorDescription;
}

interface PortalUIBackgroundColors {
  /**
   * @desc Цвет прозрачных синих фонов
   * @tags color, background, alpha
   */
  portalColorBackgroundAccentAlpha: ColorDescription;
  /**
   * @desc Цвет акцентных синих фонов
   * @tags color, background
   */
  portalColorBackgroundAccent: ColorDescription;
  /**
   * @desc Цвет табов
   * @tags color, background, alpha
   */
  portalColorBackgroundAccentTabAlpha: ColorDescription;
  /**
   * @desc Цвет карточек (виджеты, пульс, баннер)
   * @tags color, background
   */
  portalColorBackgroundCard: ColorDescription;
  /**
   * @desc Цвет фона страницы
   * @tags color, background
   */
  portalColorBackground: ColorDescription;
  /**
   * @desc Цвет фона, одинаковый для всех тем
   * @tags color, background
   */
  portalColorBackgroundInvariable: ColorDescription;
  /**
   * @desc Цвет оверлея под омнибоксом поиска
   * @tags color, background
   */
  portalColorOverlayPrimaryAlpha: ColorDescription;
  /**
   * @desc Цвет контрастных блоков (видео, например)
   * @tags color, background
   */
  portalColorBackgroundDark: ColorDescription;
}

interface PortalUIPaletteColors {
  /**
   * @desc Цвет фона акцентного тултипа
   * @tags color, palette
   */
  portalColorPaletteSweetBlue: ColorDescription;
  /**
   * @desc Цвет фона акцентного тултипа
   * @tags color, palette
   */
  portalColorPaletteSweetGreen: ColorDescription;
  /**
   * @desc Цвет фона акцентного тултипа
   * @tags color, palette
   */
  portalColorPaletteSweetOrange: ColorDescription;
  /**
   * @desc Цвет фона акцентного тултипа
   * @tags color, palette
   */
  portalColorPaletteSweetPurple: ColorDescription;
  /**
   * @desc Цвет фона акцентного тултипа
   * @tags color, palette
   */
  portalColorPaletteLightBlue: ColorDescription;
}

type PortalUIColorsDescriptions = PortalUITextColors &
  PortalUIBackgroundColors &
  PortalUIPaletteColors;

type PortalUIColors = {
  [key in keyof PortalUIColorsDescriptions]: ColorWithStates;
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

export interface ThemePortalUI extends ParadigmTheme, PortalUIColors, PortalUIUniqueTokens {}

export interface ThemePortalUIDescription extends ParadigmThemeDescription, PortalUIUniqueTokens {
  colors: ParadigmThemeDescription['colors'] & PortalUIColorsDescriptions;
}

export interface ThemePortalUICssVars
  extends ParadigmThemeCssVars<DefaultViewports, ThemePortalUI> {}
