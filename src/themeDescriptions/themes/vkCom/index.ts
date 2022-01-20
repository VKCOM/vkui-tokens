import {ThemeVkComDescription} from '@/interfaces/themes/vkCom';
import {lightTheme} from '@/themeDescriptions/base/vk';

export const vkComTheme: ThemeVkComDescription = {
	...lightTheme,
	themeName: 'vkCom',

	sizeBorderRadius: {
		regular: 8,
	},
};
