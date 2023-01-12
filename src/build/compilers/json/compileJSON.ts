import { Theme } from '@/interfaces/general';

/**
 * Компилирует json с темой
 */
export const compileJSON = <T = Theme>(theme: T): string => {
	return JSON.stringify(theme, null, '\t');
};
