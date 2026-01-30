import type { ThemeTodoDescription } from '../../../interfaces/themes/todo/index.ts';
import { lightTheme } from '../../base/paradigm.ts';
import { helpers } from '../../common/helpers/index.ts';

const { x12, x10 } = helpers;

export const todoTheme: ThemeTodoDescription = {
	...lightTheme,
	themeName: 'todo',
	themeNameBase: 'todo',

	sizeFieldHeight: {
		compact: x12,
		regular: x10,
	},
	elevation4: '0 16px 48px 0 rgba(0,16,61, 0.48)',
	elevation3: '0 4px 32px rgba(0, 16, 61, 0.24)',
	elevation2: '0 2px 0 0 rgba(0,16,61, 0.04)',
};
