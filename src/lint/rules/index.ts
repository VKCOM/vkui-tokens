import { ColorDescriptionStatic } from '../../interfaces/general/colors/index.ts';
import { checkAlphaMismatch } from '../../lint/rules/alphaMismatch.ts';

// Тут перечислены все проверки
export function checkAllRules(
	token: string,
	value: ColorDescriptionStatic,
	emit: (message: string) => void,
): void {
	checkAlphaMismatch(token, value, emit);
}
