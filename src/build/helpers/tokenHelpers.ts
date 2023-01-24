import { ThemeGeneral } from '@/interfaces/general';
import { Token } from '@/interfaces/general/tools/tokenValue';

export function alias<T extends ThemeGeneral>(token: string): (theme: Partial<T>) => Token<any, T> {
	return (theme) => theme[token];
}

export function staticRef<T>(value: Token<T, any>): T {
	if (typeof value === 'function') {
		throw new Error('Cannot use callable token value in static ref');
	}

	return value;
}
