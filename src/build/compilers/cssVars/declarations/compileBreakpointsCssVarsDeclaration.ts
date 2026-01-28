import { stripIndent, stripIndents } from 'common-tags';

import { findViewportByAdaptivityState } from '../../../../build/compilers/cssVars/helpers/findViewportByAdaptivityState.js';
import { capitalize } from '../../../../build/helpers/capitalize.js';
import { convertCamelToSnake } from '../../../../build/helpers/convertCamelToSnake.js';
import { getOnlyColors } from '../../../../build/helpers/getOnlyColors.js';
import { processCustomMedia } from '../../../../build/themeProcessors/customMedia/customMedia.js';
import { Theme, ThemeCssVarsWide } from '../../../../interfaces/general/index.js';
import { Adaptive, Breakpoints } from '../../../../interfaces/general/tools/index.js';
import { accumulateValues } from '../helpers/accumulateValues.js';
import { getVarString } from '../helpers/getVarString.js';

export type DeclarationType = 'default' | 'onlyRoot' | 'modern' | 'onlyColors';

/**
 * Компилирует медиаквери переходы между переменными
 * @param sourceTheme
 * @param type
 */
// eslint-disable-next-line sonarjs/cognitive-complexity
export function compileBreakpointsCssVarsDeclaration<T = Theme>(
	sourceTheme: ThemeCssVarsWide<T, Extract<keyof T, 'breakpoints'>>,
	type: DeclarationType = 'default',
): string | null {
	if (!('breakpoints' in sourceTheme)) {
		return null;
	}
	const breakpoints: Partial<Breakpoints['breakpoints']> = sourceTheme['breakpoints'];
	const customMedia = processCustomMedia(sourceTheme as any);

	const theme: ThemeCssVarsWide<T> =
		type === 'onlyColors' ? getOnlyColors(sourceTheme) : sourceTheme;

	const { adaptiveValues } = accumulateValues<any>({
		theme,
	});

	let result = '';

	if (!Object.keys(adaptiveValues.auto).length) {
		return null;
	}

	result += stripIndent`
	:root {
${getVarString({ valuesObject: adaptiveValues.auto, prefix: '\t\t' })}
	}`;

	const adaptivityStatesLength = Object.keys(adaptiveValues).length;

	// только regular и auto
	if (adaptivityStatesLength === 2) {
		return result;
	}

	let regularValues = '';
	let mediaValues = '';

	Object.entries(adaptiveValues)
		.sort(([a]) => (a === 'regular' ? 1 : -1))
		.forEach(([adaptivityState, valuesObject]) => {
			const isRegular = adaptivityState === 'regular';

			if (adaptivityState === 'auto') {
				return;
			}

			const usedViewport = findViewportByAdaptivityState(
				breakpoints,
				adaptivityState as keyof Adaptive<any>,
			);

			mediaValues += stripIndent`
			@media ${customMedia[`width${capitalize(usedViewport)}`]} {
				:root, .vkui--force-auto {
					${stripIndents(
						isRegular
							? regularValues
							: getVarString({
									valuesObject,
									prefix: '',
									callback: (name) => {
										if (isRegular) {
											return;
										}

										const regularName = name.replace(new RegExp(`${adaptivityState}$`), 'regular');
										const regularValue = adaptiveValues.regular[regularName];
										if (regularValue) {
											regularValues += `${regularName}: ${regularValue};\n`;
										}
									},
								}),
					)}
				}
			}

			.vkui--force-${convertCamelToSnake(usedViewport)} {
				${stripIndents(
					isRegular
						? regularValues
						: getVarString({
								valuesObject,
								prefix: '',
							}),
				)}
			}
			`;

			mediaValues += '\n\n';
		});

	return stripIndent(`${result}\n\n${mediaValues}`);
}
