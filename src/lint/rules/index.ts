import { ColorDescriptionStatic } from '../../interfaces/general/colors';
import { checkAlphaMismatch } from '../../lint/rules/alphaMismatch';

// Тут перечислены все проверки
export function checkAllRules(
	token: string,
	value: ColorDescriptionStatic,
	emit: (message: string) => void,
): void {
	checkAlphaMismatch(token, value, emit);
}
