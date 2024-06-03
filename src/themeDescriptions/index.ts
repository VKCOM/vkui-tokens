import { calendarDarkTheme, calendarTheme } from '@/themeDescriptions/themes/calendar';
import { callsTheme } from '@/themeDescriptions/themes/calls';
import { cloudDarkTheme, cloudTheme } from '@/themeDescriptions/themes/cloud';
import { dobroDarkTheme, dobroTheme } from '@/themeDescriptions/themes/dobro';
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
import { portalUIDarkTheme, portalUITheme } from '@/themeDescriptions/themes/portalUI';
import { promoTheme } from '@/themeDescriptions/themes/promo';
import { pulseTheme, pulseThemeDark } from '@/themeDescriptions/themes/pulse';
import { searchTheme } from '@/themeDescriptions/themes/search';
import { todoTheme } from '@/themeDescriptions/themes/todo';
import { tutoriaDarkTheme, tutoriaTheme } from '@/themeDescriptions/themes/tutoria';
import { vkComTheme, vkComThemeDark } from '@/themeDescriptions/themes/vkCom';
import { vkIdOkTheme, vkIdOkThemeDark } from '@/themeDescriptions/themes/vkIdOk';
import { vkIdOkIOSTheme, vkIdOkIOSThemeDark } from '@/themeDescriptions/themes/vkIdOkIOS';
import { vkIOSTheme, vkIOSThemeDark } from '@/themeDescriptions/themes/vkIOS';
import {
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
} from '@/themeDescriptions/themes/vkontakteAndroid';
import { vkontakteComTheme, vkontakteComThemeDark } from '@/themeDescriptions/themes/vkontakteCom';
import { vkontakteIOSTheme, vkontakteIOSThemeDark } from '@/themeDescriptions/themes/vkontakteIOS';
import { workspaceAdminTheme } from '@/themeDescriptions/themes/workspaceAdmin';
import { workspaceLandingsTheme } from '@/themeDescriptions/themes/workspaceLandings';

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
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
	vkontakteIOSTheme,
	vkontakteIOSThemeDark,
	vkontakteComTheme,
	vkontakteComThemeDark,
	vkIdOkTheme,
	vkIdOkThemeDark,
	vkIdOkIOSTheme,
	vkIdOkIOSThemeDark,

	// Темы, наследуемые от Tutoria
	tutoriaTheme,
	tutoriaDarkTheme,

	// ==== Темы, наследуемые от базовой темы Paradigm ====
	// Темы, наследуемые от Octavius
	octaviusTheme,
	octaviusDarkTheme,
	octaviusCompactTheme,
	octaviusCompactDarkTheme,
	octaviusVKTheme,
	octaviusVKDarkTheme,

	// Темы, наследуемые от Calendar
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

	// Темы, наследуемые от Dobro
	dobroTheme,
	dobroDarkTheme,

	// Темы, наследуемые от PortalUI
	portalUITheme,
	portalUIDarkTheme,

	// Темы, наследуемые от Pulse
	pulseTheme,
	pulseThemeDark,

	// Темы, наследуемые от WorkspaceAdmin
	workspaceAdminTheme,

	// Темы, наследуемые от WorkspaceLandings
	workspaceLandingsTheme,

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
