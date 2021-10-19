import {checkAllRules} from '@/lint/rules';
import {themes} from '@/themeDescriptions';

function lintThemeObject(
	theme: Record<string, unknown>,
	emit: (message: string) => void,
): void {
	const tokens = Object.keys(theme);

	for (const token of tokens) {
		const tokenValue = theme[token];

		if (tokenValue && typeof tokenValue === 'object') {
			lintThemeObject(tokenValue as any, (message) =>
				emit(`${token}.${message}`),
			);
		}

		checkAllRules(token, tokenValue, (message) =>
			emit(`${token} error: ${message}`),
		);
	}
}

export function lint(): string[] {
	const messages: string[] = [];

	for (const theme of themes) {
		lintThemeObject(theme as any, (message) =>
			messages.push(`${theme.themeName}: ${message}`),
		);
	}

	return messages;
}
