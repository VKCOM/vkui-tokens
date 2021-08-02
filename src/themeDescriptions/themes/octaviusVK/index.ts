import {ParadigmThemeDescription} from '@/interfaces/namespaces/paradigm';
import {lightColors as vkColors} from '@/themeDescriptions/base/vk';
import {octaviusTheme} from '@/themeDescriptions/themes/octavius';

export const octaviusVKTheme: ParadigmThemeDescription = {
	...octaviusTheme,
	themeName: 'octaviusVK',
	colors: {
		...octaviusTheme.colors,
		...vkColors.colors,
		colorBackgroundSecondary: 'rgba(0, 28, 61, 0.05)',
	},
};
