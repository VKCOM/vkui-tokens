import { calendarDarkTheme, calendarTheme } from '../themeDescriptions/themes/calendar/index.ts';
import { callsTheme } from '../themeDescriptions/themes/calls/index.ts';
import { cloudDarkTheme, cloudTheme } from '../themeDescriptions/themes/cloud/index.ts';
import { dobroDarkTheme, dobroTheme } from '../themeDescriptions/themes/dobro/index.ts';
import { homeDarkTheme, homeTheme } from '../themeDescriptions/themes/home/index.ts';
import {
	legoAndroidTheme,
	legoAndroidThemeDark,
} from '../themeDescriptions/themes/lego/android.ts';
import { legoIOSTheme, legoIOSThemeDark } from '../themeDescriptions/themes/lego/ios.ts';
import { mediaDarkTheme, mediaTheme } from '../themeDescriptions/themes/media/index.ts';
import { mycomTheme } from '../themeDescriptions/themes/mycom/index.ts';
import {
	octaviusDarkTheme,
	octaviusTheme,
	octaviusWhiteDarkTheme,
	octaviusWhiteTheme,
} from '../themeDescriptions/themes/octavius/index.ts';
import {
	octaviusCompactDarkTheme,
	octaviusCompactTheme,
} from '../themeDescriptions/themes/octaviusCompact/index.ts';
import {
	octaviusVKDarkTheme,
	octaviusVKTheme,
} from '../themeDescriptions/themes/octaviusVK/index.ts';
import { otvetDarkTheme, otvetTheme } from '../themeDescriptions/themes/otvet/index.ts';
import {
	paradigmTechDarkTheme,
	paradigmTechTheme,
} from '../themeDescriptions/themes/paradigmTech/index.ts';
import { pharmaTheme } from '../themeDescriptions/themes/pharma/index.ts';
import { portalUIDarkTheme, portalUITheme } from '../themeDescriptions/themes/portalUI/index.ts';
import { promoTheme } from '../themeDescriptions/themes/promo/index.ts';
import { pulseTheme, pulseThemeDark } from '../themeDescriptions/themes/pulse/index.ts';
import { searchTheme } from '../themeDescriptions/themes/search/index.ts';
import { todoTheme } from '../themeDescriptions/themes/todo/index.ts';
import { tutoriaDarkTheme, tutoriaTheme } from '../themeDescriptions/themes/tutoria/index.ts';
import {
	vkAccessibilityTheme,
	vkAccessibilityThemeDark,
} from '../themeDescriptions/themes/vkAccessibility/index.ts';
import {
	vkAccessibilityIOSTheme,
	vkAccessibilityIOSThemeDark,
} from '../themeDescriptions/themes/vkAccessibilityIOS/index.ts';
import { vkComTheme, vkComThemeDark } from '../themeDescriptions/themes/vkCom/index.ts';
import { vkIdOkTheme, vkIdOkThemeDark } from '../themeDescriptions/themes/vkIdOk/index.ts';
import { vkIdOkIOSTheme, vkIdOkIOSThemeDark } from '../themeDescriptions/themes/vkIdOkIOS/index.ts';
import { vkIOSTheme, vkIOSThemeDark } from '../themeDescriptions/themes/vkIOS/index.ts';
import {
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
} from '../themeDescriptions/themes/vkontakteAndroid/index.ts';
import {
	vkontakteComTheme,
	vkontakteComThemeDark,
} from '../themeDescriptions/themes/vkontakteCom/index.ts';
import {
	vkontakteIOSTheme,
	vkontakteIOSThemeDark,
} from '../themeDescriptions/themes/vkontakteIOS/index.ts';
import { widgetsDarkTheme, widgetsTheme } from '../themeDescriptions/themes/widgets/index.ts';
import {
	workspaceAdminDarkTheme,
	workspaceAdminTheme,
} from '../themeDescriptions/themes/workspaceAdmin/index.ts';
import { workspaceLandingsTheme } from '../themeDescriptions/themes/workspaceLandings/index.ts';
import {
	darkThemeExport as paradigmBaseDark,
	lightTheme as paradigmBase,
} from './base/paradigm.ts';
import { darkTheme as vkBaseDark, lightTheme as vkBase } from './base/vk.ts';

export const themes: unknown[] = [
	// ==== Базовые темы новой дизайн-системы ====
	paradigmBase,
	paradigmBaseDark,
	vkBase,
	vkBaseDark,

	// ==== Темы, наследуемые от базовой темы VK ====
	vkAccessibilityTheme,
	vkAccessibilityThemeDark,
	vkAccessibilityIOSTheme,
	vkAccessibilityIOSThemeDark,
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
	tutoriaTheme,
	tutoriaDarkTheme,
	legoAndroidTheme,
	legoAndroidThemeDark,
	legoIOSTheme,
	legoIOSThemeDark,

	// ==== Темы, наследуемые от базовой темы Paradigm ====
	// Темы, наследуемые от Octavius
	octaviusTheme,
	octaviusDarkTheme,
	octaviusCompactTheme,
	octaviusCompactDarkTheme,
	octaviusVKTheme,
	octaviusVKDarkTheme,
	paradigmTechTheme,
	paradigmTechDarkTheme,

	// Темы, наследуемые от Calendar
	calendarTheme,
	calendarDarkTheme,
	octaviusWhiteTheme,
	octaviusWhiteDarkTheme,

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
	workspaceAdminDarkTheme,

	// Темы, наследуемые от WorkspaceLandings
	workspaceLandingsTheme,

	// Темы, наследуемые от Widgets
	widgetsTheme,
	widgetsDarkTheme,

	// Прочие темы
	callsTheme,
	todoTheme,
	searchTheme,

	// ==== Deprecated Legacy ====
	/**
	 * @deprecated TODO: Удалить
	 */
	promoTheme,
];
