// Реэкспорт интерфейсов, так как набор переменных должен совпадать
import type {
	ThemeVkontakteCom,
	ThemeVkontakteComCssVars,
	ThemeVkontakteComDescription,
} from '../../themes/vkontakteCom/index.ts';

export type ThemeLegoWeb = ThemeVkontakteCom;
export type ThemeLegoWebDescription = ThemeVkontakteComDescription;
export type ThemeLegoWebCssVars = ThemeVkontakteComCssVars;
