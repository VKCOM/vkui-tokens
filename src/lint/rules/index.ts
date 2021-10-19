import {checkAlphaMismatch} from '@/lint/rules/alphaMismatch';

// Тут перечислены все проверки
export function checkAllRules(
	token: string,
	value: unknown,
	emit: (message: string) => void,
): void {
	checkAlphaMismatch(token, value, emit);
}
