import { calendarDarkTheme, calendarTheme } from '@/themeDescriptions/themes/calendar';
import { callsTheme } from '@/themeDescriptions/themes/calls';
import { cloudDarkTheme, cloudTheme } from '@/themeDescriptions/themes/cloud';
import { homeDarkTheme, homeTheme } from '@/themeDescriptions/themes/home';
import { mediaDarkTheme, mediaTheme } from '@/themeDescriptions/themes/media';
import { mycomTheme } from '@/themeDescriptions/themes/mycom';
import {
	octaviusDarkTheme,
	octaviusTheme,
	octaviusWhiteTheme,
} from '@/themeDescriptions/themes/octavius';
import {
	octaviusCompactDarkTheme,
	octaviusCompactTheme,
} from '@/themeDescriptions/themes/octaviusCompact';
import { octaviusVKDarkTheme, octaviusVKTheme } from '@/themeDescriptions/themes/octaviusVK';
import { otvetDarkTheme, otvetTheme } from '@/themeDescriptions/themes/otvet';
import { pharmaTheme } from '@/themeDescriptions/themes/pharma';
import { promoTheme } from '@/themeDescriptions/themes/promo';
import { pulseTheme, pulseThemeDark } from '@/themeDescriptions/themes/pulse';
import { searchTheme } from '@/themeDescriptions/themes/search';
import { todoTheme } from '@/themeDescriptions/themes/todo';
import { vkComTheme, vkComThemeDark } from '@/themeDescriptions/themes/vkCom';
import { vkIOSTheme, vkIOSThemeDark } from '@/themeDescriptions/themes/vkIOS';
import { workspaceAdminTheme } from '@/themeDescriptions/themes/workspaceAdmin';

import { darkThemeExport as paradigmBaseDark, lightTheme as paradigmBase } from './base/paradigm';
import { darkTheme as vkBaseDark, lightTheme as vkBase } from './base/vk';

export const themes = [
	// ==== Базовые темы новой дизайн-системы ====
	paradigmBase,
	paradigmBaseDark,
	vkBase,
	vkBaseDark,

	// ==== Темы, наследуемые от базовой темы VK ====
	vkComTheme,
	vkComThemeDark,
	vkIOSTheme,
	vkIOSThemeDark,

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

	// Темы, наследуемые от Cloud
	cloudTheme,
	cloudDarkTheme,

	// Темы, наследуемые от Pulse
	pulseTheme,
	pulseThemeDark,

	// Темы, наследуемые от WorkspaceAdmin
	workspaceAdminTheme,

	// Прочие темы
	callsTheme,
	todoTheme,
	searchTheme,

	// ==== Deprecated Legacy ====
	/**
	 * @deprecated TODO: Удалить
	 */
	promoTheme,
] as const;
