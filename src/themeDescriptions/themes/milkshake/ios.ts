import type { Radii } from 'interfaces/general/radii/index.ts';

import type { ThemeMilkshakeIOSDescription } from '../../../interfaces/themes/milkshakeIOS/index.ts';
import type { ThemeMilkshakeIOSDarkDescription } from '../../../interfaces/themes/milkshakeIOSDark/index.ts';
import { darkElevation, darkGradient } from '../../../themeDescriptions/base/vk.ts';
import { vkIOSTheme, vkIOSThemeDark } from '../../themes/vkIOS/index.ts';
import { legoRadii } from '../lego/ios.ts';

const fontFamilyFallbacks = '-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif';
const fontFamilyBase = fontFamilyFallbacks;

const milkshakeFonts = {
	fontLabel1: {
		regular: {
			fontSize: 17,
			lineHeight: 22,
			fontFamily: fontFamilyBase,
			fontWeight: 600,
		},
	},
	fontLabel2: {
		regular: {
			fontSize: 17,
			lineHeight: 22,
			fontFamily: fontFamilyBase,
			fontWeight: 600,
		},
	},
	fontTextBold: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: 600,
		},
	},
	fontBody: {
		regular: {
			fontSize: 16,
			lineHeight: 20,
			fontFamily: fontFamilyBase,
			fontWeight: 400,
		},
	},
	fontFootnoteBold: {
		regular: {
			fontSize: 13,
			lineHeight: 16,
			fontFamily: fontFamilyBase,
			fontWeight: 600,
		},
	},
};

export const milkshakeRadii: Radii = {
	radius2XS: 2,
	radiusXS: 4,
	radiusS: 6,
	radiusM: 8,
	radiusL: 12,
	radiusXL: 16,
	radius2XL: 20,
	radius3XL: 24,
};

export const milkshakeIOSTheme: ThemeMilkshakeIOSDescription = {
	...vkIOSTheme, // импорт светлой базовой темы
	...milkshakeFonts, // шрифты
	...legoRadii, // сругления

	themeName: 'milkshakeIOS', // название текущей темы
	themeNameBase: 'milkshakeIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOS', // название родительской темы

	colors: {
		...vkIOSTheme.colors,
		colorBackgroundInverse: '#0A0A0A',
		colorStrokeContrastSecondaryAlpha: '#FFFFFF33',
		colorTextTertiaryAlpha: '#25292E7A',
	},
};

export const milkshakeIOSThemeDark: ThemeMilkshakeIOSDarkDescription = {
	...vkIOSThemeDark, // импорт тёмной базовой темы
	...milkshakeIOSTheme, // импорт светлой версии текущей темы,
	...darkGradient, // переключаем наследованные градиенты на тёмную тему
	...darkElevation, // переключаем наследованные тени на тёмную тему

	themeName: 'milkshakeIOSDark', // название текущей темы
	themeNameBase: 'milkshakeIOS', // название светлой (базовой) темы
	themeInheritsFrom: 'vkIOSDark', // название родительской темы
	colorsScheme: 'dark', // название схемы (светлая — по умолчанию)

	colors: {
		...vkIOSThemeDark.colors,
		// Переопределение переменных
		colorBackgroundInverse: '#EBEDF0',
		colorStrokeContrastSecondaryAlpha: '#FFFFFF33',
		colorTextTertiaryAlpha: '#F7FBFF5C',
	},
};
