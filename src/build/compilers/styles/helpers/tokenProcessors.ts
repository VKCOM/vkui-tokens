import { stripIndent } from 'common-tags';

import { unCamelcasify } from '../../../../build/helpers/unCamelcasify.ts';
import type { Adaptive } from '../../../../interfaces/general/tools/index.ts';

export const EStyleTypes = {
	CSS: 'css',
	SCSS: 'scss',
	PCSS: 'pcss',
	LESS: 'less',
	STYL: 'styl',
} as const;

export type Formats = (typeof EStyleTypes)[keyof typeof EStyleTypes];

type VarDeclarationFn = (prop: string, prefix?: string) => string;
type VariablesStatementDeclarationFn = (key: string, token: string, postfix?: string) => string;
type MixinDeclarationFn = (groupName: string, prefix?: string, postfix?: string) => string;
type CustomMediaDeclarationFn = (key: string, token: string, postfix?: string) => string;

export const varDeclarations: Record<Formats, VarDeclarationFn> = {
	[EStyleTypes.CSS]: (prop: string, prefix: string = ''): string =>
		`--${prefix}${unCamelcasify(prop, '_')}`,
	[EStyleTypes.PCSS]: (prop: string, prefix: string = '_'): string =>
		`--${prefix}${unCamelcasify(prop)}`,
	[EStyleTypes.SCSS]: (prop: string, prefix: string = ''): string =>
		`$${prefix}${unCamelcasify(prop)}`,
	[EStyleTypes.LESS]: (prop: string, prefix: string = ''): string =>
		`@${prefix}${unCamelcasify(prop)}`,
	[EStyleTypes.STYL]: (prop: string, prefix: string = ''): string =>
		`$${prefix}${unCamelcasify(prop)}`,
};

export const variablesStatementDeclaration: Record<Formats, VariablesStatementDeclarationFn> = {
	[EStyleTypes.CSS]: (key: string, token: string, postfix: string = ''): string =>
		`\t${key}${postfix}: ${token};\n`,
	[EStyleTypes.PCSS]: (key: string, token: string, postfix: string = ''): string =>
		`\t${key}${postfix}: ${token};\n`,
	[EStyleTypes.SCSS]: (key: string, token: string, postfix: string = ''): string =>
		`${key}${postfix}: ${token};\n`,
	[EStyleTypes.LESS]: (key: string, token: string, postfix: string = ''): string =>
		`${key}${postfix}: ${token};\n`,
	[EStyleTypes.STYL]: (key: string, token: string, postfix: string = ''): string =>
		`${key}${postfix} = ${token};\n`,
};

export const mixinDeclaration: Record<Formats, MixinDeclarationFn> = {
	[EStyleTypes.SCSS]: (groupName: string, prefix: string = '', postfix: string = ''): string =>
		`@mixin ${prefix}${unCamelcasify(groupName)}${postfix}()`,
	[EStyleTypes.CSS]: (groupName: string, prefix: string = '', postfix: string = ''): string =>
		`.${prefix}${unCamelcasify(groupName, '_')}${postfix}`,
	[EStyleTypes.PCSS]: (groupName: string, prefix: string = '', postfix: string = ''): string =>
		`%${prefix}${unCamelcasify(groupName)}${postfix}`,
	[EStyleTypes.LESS]: (groupName: string, prefix: string = '', postfix: string = ''): string =>
		`.${prefix}${unCamelcasify(groupName)}${postfix}`,
	[EStyleTypes.STYL]: (groupName: string, prefix: string = '', postfix: string = ''): string =>
		`${prefix}${unCamelcasify(groupName)}${postfix}()`,
};

export const customMediaDeclaration: Record<Formats, CustomMediaDeclarationFn | null> = {
	[EStyleTypes.CSS]: null,

	[EStyleTypes.PCSS]: (key: string, token: string, postfix: string = ''): string =>
		`@custom-media --${unCamelcasify(key)}${postfix} ${token};\n`,

	[EStyleTypes.SCSS]: (key: string, token: string, postfix: string = ''): string =>
		`${stripIndent`
		@mixin media-${unCamelcasify(key)}${postfix} {
			@media ${token} { @content; }
		}`}\n`,

	[EStyleTypes.LESS]: (key: string, token: string, postfix: string = ''): string =>
		`${stripIndent`
		.media-${unCamelcasify(key)}${postfix}(@content) {
			@media ${token} { @content; }
		}`}\n`,

	[EStyleTypes.STYL]: (key: string, token: string, postfix: string = ''): string =>
		`${stripIndent`
		media-${unCamelcasify(key)}${postfix}(content) {
			@media ${token} { content }
		}`}\n`,
};

interface ProcessGroupTokenParams {
	format: Formats;
	token: Adaptive<Record<string, string | number>> | Record<string, string | number>;
	key: string;
	prefix: string;
	adaptiveMode?: 'none' | 'onlyAdaptiveGroups' | 'withAdaptiveGroups';
}

const defineMapProperty = (subKey: string, subToken: string) => {
	let displayValue = subToken;
	if (displayValue.includes?.(',')) {
		displayValue = `"${displayValue}"`;
	}

	return `\t'${subKey}': ${displayValue},\n`;
};

// eslint-disable-next-line sonarjs/cognitive-complexity,max-lines-per-function
export function processGroupToken({
	format,
	token,
	key,
	prefix,
	adaptiveMode = 'none',
}: ProcessGroupTokenParams): { variables: string; groupTokens: string } {
	const needUpdateVariables = format === EStyleTypes.CSS;
	const needMap = format === EStyleTypes.SCSS;
	const needAddAdaptiveClasses =
		(adaptiveMode === 'withAdaptiveGroups' || adaptiveMode === 'onlyAdaptiveGroups') &&
		format === EStyleTypes.CSS;

	const defineStyleProperty = (subKey: string, subToken: string, varName?: string) => {
		let result = `\t${unCamelcasify(subKey)}: ${subToken};\n`;

		if (needUpdateVariables) {
			result += `\t${unCamelcasify(subKey)}: var(${varName}, ${subToken});\n`;
		}

		return result;
	};

	let variables = '';
	let groupTokens = '';
	let adaptiveGroup = '';
	let addedAdaptiveGroup = false;
	let map = '';

	// адаптивная группа
	if ('regular' in token) {
		Object.keys(token).forEach((adaptivityState) => {
			groupTokens += `${mixinDeclaration[format](
				key,
				prefix,
				`--${unCamelcasify(adaptivityState)}`,
			)} {\n`;

			if (needAddAdaptiveClasses && !addedAdaptiveGroup) {
				adaptiveGroup += `${mixinDeclaration[format](key, prefix)} {\n`;
			}

			if (needMap) {
				map += `${varDeclarations.scss(key, prefix)}--${unCamelcasify(adaptivityState)}--map: (\n`;
			}

			Object.entries({
				...(token as Adaptive<Record<string, string | number>>).regular,
				...token[adaptivityState],
			}).forEach(([subKey, subValue]: [string, string]) => {
				let varName = '';

				if (needUpdateVariables) {
					const reallyNewToken = token[adaptivityState][subKey] !== undefined;

					varName = `${varDeclarations.css(key, prefix)}--${unCamelcasify(subKey, '_')}--${
						reallyNewToken ? unCamelcasify(adaptivityState, '_') : 'regular'
					}`;

					if (reallyNewToken) {
						variables += variablesStatementDeclaration.css(varName, subValue);
					}
				}

				groupTokens += defineStyleProperty(subKey, subValue, varName);

				if (needAddAdaptiveClasses && !addedAdaptiveGroup) {
					adaptiveGroup += `\t${unCamelcasify(subKey)}: var(${varName.replace(
						new RegExp(`--(regular|${adaptivityState})$`),
						'',
					)});\n`;
				}

				if (needMap) {
					map += defineMapProperty(subKey, subValue);
				}
			});

			groupTokens += '}\n';

			if (needAddAdaptiveClasses && !addedAdaptiveGroup) {
				adaptiveGroup += '}\n';
				groupTokens += adaptiveGroup;
				addedAdaptiveGroup = true;
			}

			if (needMap) {
				map += ');\n';
				groupTokens += map;
			}
		});

		if (adaptiveMode === 'onlyAdaptiveGroups') {
			groupTokens = adaptiveGroup;
		}

		return { variables, groupTokens };
	}

	// неадаптивная группа
	groupTokens += `${mixinDeclaration[format](key, prefix)} {\n`;

	if (needMap) {
		map += `${varDeclarations.scss(key, prefix)}--map: (\n`;
	}

	Object.entries(token).forEach(([subKey, subValue]: [string, string]) => {
		let varName = '';

		if (needUpdateVariables) {
			varName = `${varDeclarations.css(key, prefix)}--${unCamelcasify(subKey, '_')}`;

			variables += variablesStatementDeclaration.css(varName, subValue);
		}

		groupTokens += defineStyleProperty(subKey, subValue, varName);
		if (needMap) {
			map += defineMapProperty(subKey, subValue);
		}
	});

	groupTokens += '}\n';
	if (needMap) {
		map += ');\n';
		groupTokens += map;
	}

	return { variables, groupTokens };
}
