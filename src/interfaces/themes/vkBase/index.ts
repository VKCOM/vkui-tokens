import { Theme, ThemeCssVars, ThemeDescription } from '@/interfaces/general';

export interface ThemeVkBase extends Theme {
	/**
	 * @desc Семейство шрифтов для заголовков.
	 *       Как название по умолчанию, используется {@link https://github.com/VKCOM/vkui-tokens/tree/master/src/shared/constants.ts#:~:text=DEFAULT_FONT_FAMILY_ACCENT DEFAULT_FONT_FAMILY_ACCENT}.
	 *       Привяжитесь к нему в своём font-face, чтобы загрузить необходимый вам шрифт.
	 * @tags font
	 */
	fontFamilyAccent: Theme['fontFamilyAccent'];
}

export interface ThemeVkBaseDescription extends ThemeDescription {}

export interface ThemeVkBaseCssVars extends ThemeCssVars {}
