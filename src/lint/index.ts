import { isColorDescriptionCallable, isColorDescriptionStatic } from '@/build/helpers/cssHelpers';
import { expandColor } from '@/build/themeProcessors/expandColors/expandColors';
import { ColorsDescription } from '@/interfaces/general';
import { checkAllRules } from '@/lint/rules';
import { themes } from '@/themeDescriptions';

function lintThemeObject(
	object: Record<string, unknown>,
	theme: ColorsDescription,
	emit: (message: string) => void,
): void {
	const tokens = Object.keys(object);

	for (const token of tokens) {
		const tokenValue = object[token];

		if (tokenValue && typeof tokenValue === 'object') {
			lintThemeObject(tokenValue as any, theme, (message) => emit(`${token}.${message}`));
		}

		const childEmit = (message) => emit(`${token} error: ${message}`);

		if (token.startsWith('color') && isColorDescriptionCallable(tokenValue)) {
			checkAllRules(token, expandColor(tokenValue, theme), childEmit);
		} else if (isColorDescriptionStatic(tokenValue)) {
			checkAllRules(token, tokenValue, childEmit);
		}
	}
}

export function lint(themeList: any = themes): string[] {
	const messages: string[] = [];

	for (const theme of themeList) {
		lintThemeObject(theme as any, theme, (message) =>
			messages.push(`${theme.themeName}: ${message}`),
		);
	}

	return messages;
}
