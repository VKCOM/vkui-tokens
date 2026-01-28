import { ColorDescriptionStatic } from '../../interfaces/general/colors/index.js';
import { checkAlphaMismatch } from '../../lint/rules/alphaMismatch.js';

// Тут перечислены все проверки
export function checkAllRules(
	token: string,
	value: ColorDescriptionStatic,
	emit: (message: string) => void,
): void {
	checkAlphaMismatch(token, value, emit);
}
