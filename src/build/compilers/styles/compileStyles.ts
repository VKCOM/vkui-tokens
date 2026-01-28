import 'css.escape';

import { deepStrictEqual } from 'node:assert';

import { stripIndent } from 'common-tags';

import { getAllButColors } from '../../../build/helpers/getAllButColors.js';
import { getAllButSizes } from '../../../build/helpers/getAllButSizes.js';
import { getOnlyColors } from '../../../build/helpers/getOnlyColors.js';
import { unCamelcasify } from '../../../build/helpers/unCamelcasify.js';
import { PixelifyTheme } from '../../../interfaces/general/index.js';
import {
	customMediaDeclaration,
	EStyleTypes,
	Formats,
	processGroupToken,
	varDeclarations,
	variablesStatementDeclaration,
} from './helpers/tokenProcessors.js';
import {
	isAdaptiveFlatToken,
	isColor,
	isCustomMediaToken,
	isGroupToken,
	isString,
} from './helpers/tokenRecognition.js';

export const serviceKeys = ['breakpoints', 'prefix', 'themeType'];

export type CompileStylesMode =
	| 'default'
	| 'onlyVariables'
	| 'onlyVariablesLocal'
	| 'onlyVariablesLocalIncremental'
	| 'onlyColors'
	| 'withAdaptiveGroups'
	| 'onlyAdaptiveGroups'
	| 'noSizes'
	| 'noColors';

function isClassicCssType(format: Formats): boolean {
	return format === EStyleTypes.CSS || format === EStyleTypes.PCSS;
}

export function getPrefix<PT extends PixelifyTheme>(format: Formats, theme: PT): string {
	let prefix = theme.prefix ? `${theme.prefix}-` : '';

	if (isClassicCssType(format) && prefix) {
		prefix += '-';
	}

	if (format === EStyleTypes.CSS && !prefix) {
		prefix = 'vkui--';
	}

	return prefix;
}

function isOnlyVariables(mode: CompileStylesMode): boolean {
	return mode.toLowerCase().includes('onlyvariables');
}

function isLocal(mode: CompileStylesMode): boolean {
	return mode.toLowerCase().includes('local');
}

function isIncremental(mode: CompileStylesMode): boolean {
	return mode.toLowerCase().includes('incremental');
}

function getThemeNameBase(theme: PixelifyTheme): string {
	return theme.themeNameBase ?? theme.themeName;
}

export function getRootSelector<PT extends PixelifyTheme>(
	theme: PT,
	mode: CompileStylesMode,
): string {
	if (!isLocal(mode)) {
		return ':root';
	}

	return `.${getPrefix(EStyleTypes.CSS, theme)}${getThemeNameBase(theme)}--${theme.colorsScheme}`;
}

function isDeepEqual(actual: unknown, expected: unknown): boolean {
	try {
		deepStrictEqual(actual, expected);
		return true;
	} catch (_) {
		return false;
	}
}

/**
 * Компилирует строку со стилями (в разных форматах), на основе темы
 */
export const compileStyles = <PT extends PixelifyTheme = PixelifyTheme>(
	format: Formats,
	theme: PT,
	mode: CompileStylesMode = 'default',
	themeBase?: PT,
	// eslint-disable-next-line sonarjs/cognitive-complexity, max-params
): string => {
	const classicCssType = isClassicCssType(format);
	const prefix = getPrefix(format, theme);
	const rootSelector = getRootSelector(theme, mode);
	const incremental = isIncremental(mode);

	const getDeclaration = varDeclarations[format];
	const getVariableStatement = variablesStatementDeclaration[format];
	const getCustomMediaDeclaration = customMediaDeclaration[format];

	let result = '';
	let variables = '';
	let groupTokens = '';
	let processedTheme = theme;

	switch (mode) {
		case 'onlyColors':
			processedTheme = getOnlyColors(processedTheme);
			break;

		case 'noSizes':
			processedTheme = getAllButSizes(processedTheme, (processedTheme as any).themeNameBase);
			break;

		case 'noColors':
			processedTheme = getAllButColors(processedTheme, (processedTheme as any).themeNameBase);
			break;
	}

	Object.keys(processedTheme).forEach((key) => {
		// пропускаем служебные ключи
		if (serviceKeys.includes(key)) {
			return;
		}

		const token = processedTheme[key];

		// в инкрементальном режиме пропускаем токены, чьи значения совпадают со значениями из themeBase
		if (incremental && themeBase && isDeepEqual(token, themeBase[key])) {
			return;
		}

		// если переменная — строка (например, имя темы)
		if (isString(token, key)) {
			variables += getVariableStatement(getDeclaration(key, prefix), `'${CSS.escape(token)}'`);
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
					`--${unCamelcasify(adaptivivityState, classicCssType ? '_' : '-')}`,
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

	if (isOnlyVariables(mode)) {
		return stripIndent(result);
	}

	if (mode === 'onlyAdaptiveGroups') {
		return stripIndent(groupTokens);
	}

	result += `\n\n${groupTokens}`;

	return stripIndent(result);
};
