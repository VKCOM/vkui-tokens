import { convertCamelToSnake } from '@/build/helpers/convertCamelToSnake';
import { staticRef } from '@/build/helpers/tokenHelpers';
import { Theme, ThemeCssVarsWide } from '@/interfaces/general';
import { Adaptive } from '@/interfaces/general/tools';
import { CustomMediaByViewport } from '@/interfaces/general/tools/customMedia';

import { processCustomMedia } from '../customMedia/customMedia';
import { pixelifyValues } from '../pixelifyValues/pixelifyValues';

export function getVariableName({
	key,
	prefix = 'vkui',
	mode,
}: {
	key: string;
	prefix?: string;
	mode?: any | 'auto';
}): string {
	// для цветов не добавляем --normal в конец
	if (key === 'normal') {
		return `--${convertCamelToSnake(prefix)}`;
	}

	return `--${convertCamelToSnake(prefix)}--${convertCamelToSnake(key)}${
		mode !== undefined && mode !== 'auto' ? `--${convertCamelToSnake(mode)}` : ''
	}`;
}

function defaultValueConstruct(name: string, value?: string): string {
	return value ? `var(${name}, ${value})` : `var(${name})`;
}

interface Options {
	valueConstruct?: (name: string, value?: string) => string;
}

function processVarNaming({
	object,
	mode,
	prefix = 'vkui',
	customMedia,
	valueConstruct = defaultValueConstruct,
}: {
	object: Record<string, any>;
	prefix?: string;
	mode?: keyof Adaptive<any> | 'auto';
	customMedia: CustomMediaByViewport<any>;
} & Options): Record<string, any> {
	const result: any = {};

	// todo разнести на несколько функций вместо скипа
	// eslint-disable-next-line sonarjs/cognitive-complexity
	Object.keys(object).forEach((key) => {
		let value = JSON.parse(JSON.stringify(object[key]));

		// не процессим некоторые свойства темы
		if (key === 'breakpoints') {
			result[key] = value;
			return;
		}

		if (key === 'themeType') {
			result[key] = 'cssVarsWide';
			return;
		}

		if (typeof value === 'undefined') {
			return;
		}

		// если это адаптивная переменная
		if (typeof value === 'object' && 'regular' in value) {
			const states = Object.keys(value);
			// если это адаптивный объект (например шрифты)
			if (typeof value.regular === 'object') {
				result[key] = (['auto', ...states] as const).reduce<
					Partial<{ [key in keyof Adaptive<any> | 'auto']: any }>
				>((acc, mode: keyof Adaptive<any> | 'auto') => {
					acc[mode] = processVarNaming({
						object: value[mode] ?? value.regular,
						prefix: `${prefix}--${key}`,
						mode,
						customMedia,
						valueConstruct,
					});
					return acc;
				}, {});

				return;
			}

			// обычная адаптивная переменная, нужно сформировать объект
			result[key] = (['auto', ...states] as const).reduce<
				Partial<{ [key in keyof Adaptive<any> | 'auto']: any }>
			>((acc, mode) => {
				if (mode === 'auto') {
					const name = getVariableName({ key, prefix, mode: 'auto' });

					acc[mode] = {
						name,
						value: valueConstruct(name),
					};
				} else {
					const name = getVariableName({ key, prefix, mode });
					const originalValue = value[mode];
					acc[mode] = {
						name,
						value: valueConstruct(name, originalValue),
						originalValue,
					};
				}

				return acc;
			}, {});
			return;
		}

		if (typeof value === 'object') {
			result[key] = processVarNaming({
				object: value,
				prefix: `${prefix}--${key}`,
				mode,
				customMedia,
				valueConstruct,
			});
			return;
		}

		if (Object.keys(customMedia).includes(key)) {
			value = JSON.stringify(value);
		}

		const name = getVariableName({ key, prefix, mode });
		result[key] =
			mode !== 'auto'
				? ({
						name,
						value: valueConstruct(name, value),
						originalValue: value,
				  } as any)
				: ({
						name,
						value: valueConstruct(name),
				  } as any);
	});

	return result;
}

/**
 * Процессор, который на основе темы, создаёт сложную структуру для CssVars темы
 */
export function extractVarsNames<T = Theme>(
	sourceTheme: T,
	opt: Options = {},
): ThemeCssVarsWide<T> {
	const typedSourceTheme: Partial<Theme> = sourceTheme as any;

	const pixelifyedTheme = pixelifyValues(sourceTheme);

	const customMedia = processCustomMedia(sourceTheme);

	return processVarNaming({
		object: pixelifyedTheme,
		prefix: staticRef(typedSourceTheme.prefix),
		customMedia,
		...opt,
	}) as any;
}
