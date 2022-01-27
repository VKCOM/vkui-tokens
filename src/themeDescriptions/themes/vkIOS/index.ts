import {ThemeVkIOSDescription} from '@/interfaces/themes/vkIOS';
import {lightTheme} from '@/themeDescriptions/base/vk';

export const vkIOSTheme: ThemeVkIOSDescription = {
	...lightTheme,
	themeName: 'vkIOS',

	sizeBorderRadius: {
		regular: 10,
	},

	// Токены компонента Cardscroll
	sizeCardBorderRadius: {
		regular: 10,
	},
};
