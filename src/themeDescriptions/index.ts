import { calendarDarkTheme, calendarTheme } from '../themeDescriptions/themes/calendar/index.js';
import { callsTheme } from '../themeDescriptions/themes/calls/index.js';
import { cloudDarkTheme, cloudTheme } from '../themeDescriptions/themes/cloud/index.js';
import { dobroDarkTheme, dobroTheme } from '../themeDescriptions/themes/dobro/index.js';
import { homeDarkTheme, homeTheme } from '../themeDescriptions/themes/home/index.js';
import {
	legoAndroidTheme,
	legoAndroidThemeDark,
} from '../themeDescriptions/themes/lego/android.js';
import { legoIOSTheme, legoIOSThemeDark } from '../themeDescriptions/themes/lego/ios.js';
import { mediaDarkTheme, mediaTheme } from '../themeDescriptions/themes/media/index.js';
import { mycomTheme } from '../themeDescriptions/themes/mycom/index.js';
import {
	octaviusDarkTheme,
	octaviusTheme,
	octaviusWhiteDarkTheme,
	octaviusWhiteTheme,
} from '../themeDescriptions/themes/octavius/index.js';
import {
	octaviusCompactDarkTheme,
	octaviusCompactTheme,
} from '../themeDescriptions/themes/octaviusCompact/index.js';
import {
	octaviusVKDarkTheme,
	octaviusVKTheme,
} from '../themeDescriptions/themes/octaviusVK/index.js';
import { otvetDarkTheme, otvetTheme } from '../themeDescriptions/themes/otvet/index.js';
import {
	paradigmTechDarkTheme,
	paradigmTechTheme,
} from '../themeDescriptions/themes/paradigmTech/index.js';
import { pharmaTheme } from '../themeDescriptions/themes/pharma/index.js';
import { portalUIDarkTheme, portalUITheme } from '../themeDescriptions/themes/portalUI/index.js';
import { promoTheme } from '../themeDescriptions/themes/promo/index.js';
import { pulseTheme, pulseThemeDark } from '../themeDescriptions/themes/pulse/index.js';
import { searchTheme } from '../themeDescriptions/themes/search/index.js';
import { todoTheme } from '../themeDescriptions/themes/todo/index.js';
import { tutoriaDarkTheme, tutoriaTheme } from '../themeDescriptions/themes/tutoria/index.js';
import {
	vkAccessibilityTheme,
	vkAccessibilityThemeDark,
} from '../themeDescriptions/themes/vkAccessibility/index.js';
import {
	vkAccessibilityIOSTheme,
	vkAccessibilityIOSThemeDark,
} from '../themeDescriptions/themes/vkAccessibilityIOS/index.js';
import { vkComTheme, vkComThemeDark } from '../themeDescriptions/themes/vkCom/index.js';
import { vkIdOkTheme, vkIdOkThemeDark } from '../themeDescriptions/themes/vkIdOk/index.js';
import { vkIdOkIOSTheme, vkIdOkIOSThemeDark } from '../themeDescriptions/themes/vkIdOkIOS/index.js';
import { vkIOSTheme, vkIOSThemeDark } from '../themeDescriptions/themes/vkIOS/index.js';
import {
	vkontakteAndroidTheme,
	vkontakteAndroidThemeDark,
} from '../themeDescriptions/themes/vkontakteAndroid/index.js';
import {
	vkontakteComTheme,
	vkontakteComThemeDark,
} from '../themeDescriptions/themes/vkontakteCom/index.js';
import {
	vkontakteIOSTheme,
	vkontakteIOSThemeDark,
} from '../themeDescriptions/themes/vkontakteIOS/index.js';
import { widgetsDarkTheme, widgetsTheme } from '../themeDescriptions/themes/widgets/index.js';
import {
	workspaceAdminDarkTheme,
	workspaceAdminTheme,
} from '../themeDescriptions/themes/workspaceAdmin/index.js';
import { workspaceLandingsTheme } from '../themeDescriptions/themes/workspaceLandings/index.js';
import {
	darkThemeExport as paradigmBaseDark,
	lightTheme as paradigmBase,
} from './base/paradigm.js';
import { darkTheme as vkBaseDark, lightTheme as vkBase } from './base/vk.js';

export const themes = [
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
] as const;
