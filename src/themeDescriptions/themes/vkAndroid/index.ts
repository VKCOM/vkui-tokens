import {ThemeVkAndroidDescription} from '@/interfaces/themes/vkAndroid';
import {lightTheme} from '@/themeDescriptions/base/vk';

export const vkAndroidTheme: ThemeVkAndroidDescription = {
	...lightTheme,
	themeName: 'vkAndroid',

	sizeBorderRadius: {
		regular: 8,
	},
};
