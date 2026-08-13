// Реэкспорт интерфейсов, так как набор переменных должен совпадать
import type {
	ThemeLegoAndroid,
	ThemeLegoAndroidCssVars,
	ThemeLegoAndroidDescription,
} from '../legoAndroid/index.ts';

export type ThemeLegoSimpleAndroid = ThemeLegoAndroid;
export type ThemeLegoSimpleAndroidDescription = ThemeLegoAndroidDescription;
export type ThemeLegoSimpleAndroidCssVars = ThemeLegoAndroidCssVars;
