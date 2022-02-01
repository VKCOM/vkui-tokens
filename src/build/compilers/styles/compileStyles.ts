import 'css.escape';

import {stripIndent} from 'common-tags';

import {getAllButColors} from '@/build/helpers/getAllButColors';
import {getAllButSizes} from '@/build/helpers/getAllButSizes';
import {getOnlyColors} from '@/build/helpers/getOnlyColors';
import {unCamelcasify} from '@/build/helpers/unCamelcasify';
import {PixelifyTheme} from '@/interfaces/general';

import {
	customMediaDeclaration,
	EStyleTypes,
	Formats,
	processGroupToken,
	varDeclarations,
	variablesStatementDeclaration,
} from './helpers/tokenProcessors';
import {
	isAdaptiveFlatToken,
	isColor,
	isCustomMediaToken,
	isGroupToken,
	isString,
} from './helpers/tokenRecognition';

export const serviceKeys = ['breakpoints', 'prefix', 'themeType'];

export type CompileStylesMode =
	| 'default'
	| 'onlyVariables'
	| 'onlyVariablesLocal'
	| 'onlyColors'
	| 'withAdaptiveGroups'
	| 'onlyAdaptiveGroups'
	| 'noSizes'
	| 'noColors';

function isClassicCssType(format: Formats): boolean {
	return format === EStyleTypes.CSS || format === EStyleTypes.PCSS;
}

export function getPrefix<PT extends PixelifyTheme>(
	format: Formats,
	theme: PT,
): string {
	let prefix = theme.prefix ? `${theme.prefix}-` : '';

	if (isClassicCssType(format) && prefix) {
		prefix += '-';
	}

	if (format === EStyleTypes.CSS && !prefix) {
		prefix = 'vkui--';
	}

	return prefix;
}

export function getRootSelector<PT extends PixelifyTheme>(
	theme: PT,
	mode: CompileStylesMode,
): string {
	if (!mode.endsWith('Local')) {
		return ':root';
	}

	return `.${getPrefix(EStyleTypes.CSS, theme)}${theme.themeName}--${
		theme.colorsScheme
	}`;
}

/**
 * Компиллирует строку со стилями (в разных форматах), на основе темы
 */
export const compileStyles = <PT extends PixelifyTheme = PixelifyTheme>(
	format: Formats,
	theme: PT,
	mode: CompileStylesMode = 'default',
	// eslint-disable-next-line sonarjs/cognitive-complexity
): string => {
	const classicCssType = isClassicCssType(format);
	const prefix = getPrefix(format, theme);
	const rootSelector = getRootSelector(theme, mode);

	const getDeclaration = varDeclarations[format];
	const getVariableStatement = variablesStatementDeclaration[format];
	const getCustomMediaDeclaration = customMediaDeclaration[format];

	let result = '';
	let variables = '';
	let groupTokens = '';

	switch (mode) {
		case 'onlyColors':
			theme = getOnlyColors(theme);
			break;

		case 'noSizes':
			theme = getAllButSizes(theme, (theme as any).themeNameBase);
			break;

		case 'noColors':
			theme = getAllButColors(theme, (theme as any).themeNameBase);
			break;
	}

	Object.keys(theme).forEach((key) => {
		// пропускаем служебные ключи
		if (serviceKeys.includes(key)) {
			return;
		}

		const token = theme[key];

		// если переменная — строка (например, имя темы)
		if (isString(token, key)) {
			variables += getVariableStatement(
				getDeclaration(key, prefix),
				`'${CSS.escape(token)}'`,
			);
			return;
		}

		// если переменная — цвет
		if (isColor(token)) {
			Object.keys(token).forEach((colorState) => {
				const value = token[colorState];

				variables += getVariableStatement(
					getDeclaration(key, prefix),
					value,
					colorState !== 'normal' ? `--${colorState}` : '',
				);
			});
			return;
		}

		// если переменная — это объект (группа значений)
		// например — шрифты
		if (isGroupToken(token)) {
			const groupTokenResult = processGroupToken({
				format,
				prefix,
				token,
				key,
				adaptiveMode: mode as any,
			});

			variables += groupTokenResult.variables;
			groupTokens += groupTokenResult.groupTokens;
			return;
		}

		if (isAdaptiveFlatToken(token)) {
			Object.keys(token).forEach((adaptivivityState) => {
				const value = token[adaptivivityState];

				variables += getVariableStatement(
					getDeclaration(key, prefix),
					value,
					`--${unCamelcasify(
						adaptivivityState,
						classicCssType ? '_' : '-',
					)}`,
				);
			});
			return;
		}

		if (isCustomMediaToken(key)) {
			if (getCustomMediaDeclaration) {
				groupTokens += getCustomMediaDeclaration(key, token);
			}
			return;
		}

		// обычная переменная
		variables += getVariableStatement(getDeclaration(key, prefix), token);
	});

	result = variables;

	if (classicCssType && variables) {
		result = stripIndent`
		${rootSelector} {
		${variables.split('\n').join('\n\t\t')}}
		`;
	}

	if (mode === 'onlyVariables' || mode === 'onlyVariablesLocal') {
		return stripIndent(result);
	}

	if (mode === 'onlyAdaptiveGroups') {
		return stripIndent(groupTokens);
	}

	result += `\n\n${groupTokens}`;

	return stripIndent(result);
};
