import type { Theme } from '../../../interfaces/general/index.ts';

/**
 * Компилирует json с темой
 */
export const compileJSON = <T = Theme>(theme: T): string => {
	return JSON.stringify(theme, null, '\t');
};
