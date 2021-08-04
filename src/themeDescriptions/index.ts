import {
	calendarDarkTheme,
	calendarTheme,
} from '@/themeDescriptions/themes/calendar';
import {callsTheme} from '@/themeDescriptions/themes/calls';
import {cloudTheme} from '@/themeDescriptions/themes/cloud';
import {homeDarkTheme, homeTheme} from '@/themeDescriptions/themes/home';
import {mediaTheme} from '@/themeDescriptions/themes/media';
import {mycomTheme} from '@/themeDescriptions/themes/mycom';
import {
	octaviusDarkTheme,
	octaviusWhiteTheme,
	octaviusTheme,
} from '@/themeDescriptions/themes/octavius';
import {
	octaviusCompactDarkTheme,
	octaviusCompactTheme,
} from '@/themeDescriptions/themes/octaviusCompact';
import {octaviusVKTheme} from '@/themeDescriptions/themes/octaviusVK';
import {otvetDarkTheme, otvetTheme} from '@/themeDescriptions/themes/otvet';
import {pharmaTheme} from '@/themeDescriptions/themes/pharma';
import {promoTheme} from '@/themeDescriptions/themes/promo';
import {todoTheme} from '@/themeDescriptions/themes/todo';

import {
	darkTheme as paradigmBaseDark,
	lightTheme as paradigmBase,
} from './base/paradigm';
import {lightTheme as vkBase} from './base/vk';

export const themes = [
	// основные базовые темы новой дизайн-системы
	paradigmBase,
	paradigmBaseDark,
	vkBase,

	// темы наследуемые от октавиусной (Почтовой)
	// парадигм-темы
	octaviusTheme,
	octaviusDarkTheme,
	octaviusCompactTheme,
	octaviusCompactDarkTheme,
	octaviusVKTheme,
	calendarTheme,
	calendarDarkTheme,
	octaviusWhiteTheme,
	callsTheme,
	homeTheme,
	homeDarkTheme,
	todoTheme,
	cloudTheme,
	otvetTheme,
	otvetDarkTheme,

	// темы наследуемые от медиа темы (парадигм)
	mediaTheme,
	mycomTheme,
	pharmaTheme,

	// это что-то странное
	promoTheme,
] as const;
