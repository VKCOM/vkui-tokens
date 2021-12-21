import {
	calendarDarkTheme,
	calendarTheme,
} from '@/themeDescriptions/themes/calendar';
import {callsTheme} from '@/themeDescriptions/themes/calls';
import {cloudTheme} from '@/themeDescriptions/themes/cloud';
import {homeDarkTheme, homeTheme} from '@/themeDescriptions/themes/home';
import {mediaDarkTheme, mediaTheme} from '@/themeDescriptions/themes/media';
import {mycomTheme} from '@/themeDescriptions/themes/mycom';
import {
	octaviusDarkTheme,
	octaviusTheme,
	octaviusWhiteTheme,
} from '@/themeDescriptions/themes/octavius';
import {
	octaviusCompactDarkTheme,
	octaviusCompactTheme,
} from '@/themeDescriptions/themes/octaviusCompact';
import {
	octaviusVKDarkTheme,
	octaviusVKTheme,
} from '@/themeDescriptions/themes/octaviusVK';
import {otvetDarkTheme, otvetTheme} from '@/themeDescriptions/themes/otvet';
import {pharmaTheme} from '@/themeDescriptions/themes/pharma';
import {promoTheme} from '@/themeDescriptions/themes/promo';
import {todoTheme} from '@/themeDescriptions/themes/todo';
import {vkAndroidTheme} from '@/themeDescriptions/themes/vkAndroid';
import {vkIOSTheme} from '@/themeDescriptions/themes/vkIOS';

import {
	darkTheme as paradigmBaseDark,
	lightTheme as paradigmBase,
} from './base/paradigm';
import {lightTheme as vkBase} from './base/vk';

export const themes = [
	// ==== Базовые темы новой дизайн-системы ====
	paradigmBase,
	paradigmBaseDark,
	vkBase,

	// ==== Темы, наследуемые от базовой темы VK ====
	vkAndroidTheme,
	vkIOSTheme,

	// ==== Темы, наследуемые от базовой темы Paradigm ====
	// Темы, наследуемые от Octavius
	octaviusTheme,
	octaviusDarkTheme,
	octaviusCompactTheme,
	octaviusCompactDarkTheme,
	octaviusVKTheme,
	octaviusVKDarkTheme,
	calendarTheme,
	calendarDarkTheme,
	octaviusWhiteTheme,

	// Темы, наследуемые от Media
	mediaTheme,
	mediaDarkTheme,
	mycomTheme,
	pharmaTheme,

	// Темы, наследуемые от Home
	homeTheme,
	homeDarkTheme,

	// Темы, наследуемые от Otvet
	otvetTheme,
	otvetDarkTheme,

	// Прочие темы
	callsTheme,
	todoTheme,
	cloudTheme,

	// ==== Deprecated Legacy ====
	/**
	 * @deprecated TODO: Удалить
	 */
	promoTheme,
] as const;
