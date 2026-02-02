import type { Theme } from '../../../../interfaces/general/index.ts';
import type { WideCssVarValue } from '../../../../interfaces/general/tools/cssVars.ts';
import type { Adaptive } from '../../../../interfaces/general/tools/index.ts';
import { adaptiveKeys } from '../../../../interfaces/general/tools/index.ts';

export type FlatValuesObject = {
	[key: string]: string | number;
};

export type AdaptiveValuesObject = {
	auto: FlatValuesObject;
	regular: FlatValuesObject;
} & {
	[key in keyof Exclude<Adaptive<any>, 'regular'>]?: FlatValuesObject;
};

interface Params<T = Theme> {
	theme: T;
}

interface ReturnValues {
	flatValues: FlatValuesObject;
	adaptiveValues: AdaptiveValuesObject;
}

const passOriginalValue = ({
	toValue,
	fromValue,
}: {
	toValue: WideCssVarValue<string | number> | Record<string, WideCssVarValue<string | number>>;
	fromValue: WideCssVarValue<string | number> | Record<string, WideCssVarValue<string | number>>;
}): void => {
	if (typeof toValue === 'object' && 'name' in toValue && typeof toValue.name === 'string') {
		toValue.originalValue = fromValue.originalValue;
		return;
	}

	Object.keys(toValue).forEach((key) => {
		passOriginalValue({
			toValue: toValue[key],
			fromValue: fromValue[key] as WideCssVarValue<string | number>,
		});
	});
};

const constructSourceVal = ({
	destination,
	value,
	autoValue,
	singleBreakpoint,
}: {
	destination: FlatValuesObject;
	value: WideCssVarValue<string | number>;
	autoValue: WideCssVarValue<string | number>;
	singleBreakpoint: boolean;
}): void => {
	if (autoValue && 'name' in autoValue) {
		destination[autoValue.name as string] = !singleBreakpoint
			? `var(${value.name})`
			: (value.originalValue as string);
	} else if (value.originalValue !== undefined) {
		destination[value.name as string] = value.originalValue as string;
	}
};

const fillValues = ({
	destination,
	value,
	adaptiveDestination,
	autoValue,
	manyAdaptiveStates,
}: {
	destination: FlatValuesObject;
	value: WideCssVarValue<string | number> | Record<string, WideCssVarValue<string | number>>;
	adaptiveDestination?: AdaptiveValuesObject;
	autoValue?: WideCssVarValue<string | number> | Record<string, WideCssVarValue<string | number>>;
	manyAdaptiveStates: boolean;
}) => {
	if (typeof value === 'object' && 'name' in value && typeof value.name === 'string') {
		constructSourceVal({
			destination,
			value: value as WideCssVarValue<string | number>,
			autoValue: autoValue as WideCssVarValue<string | number>,
			singleBreakpoint: !manyAdaptiveStates,
		});

		return;
	}

	Object.entries(value).forEach(([key, valProp]) => {
		const val = valProp;

		if (adaptiveKeys.includes(key as keyof Adaptive<any>)) {
			if (!adaptiveDestination[key]) {
				// eslint-disable-next-line no-param-reassign
				adaptiveDestination[key] = {};
			}

			fillValues({
				destination: adaptiveDestination[key],
				value: val,
				autoValue: (value as any).auto,
				manyAdaptiveStates: Object.keys(value).length > 2,
			});
		}

		if (key === 'auto') {
			const manyAdaptiveStates = Object.keys(value).length > 2;
			if (!manyAdaptiveStates) {
				passOriginalValue({
					toValue: val,
					fromValue: value['regular'],
				});
			}

			fillValues({
				destination: adaptiveDestination.auto,
				value: value['regular'],
				autoValue: val,
				manyAdaptiveStates,
			});
		}

		fillValues({
			destination,
			value: val,
			autoValue: autoValue?.[key],
			manyAdaptiveStates,
		});
	});
};

export function accumulateValues<T = Theme>({ theme }: Params<T>): ReturnValues {
	const flatValues: FlatValuesObject = {};
	const adaptiveValues: AdaptiveValuesObject = {
		auto: {},
		regular: {},
	};

	Object.keys(theme).forEach((key) => {
		const value = theme[key];
		if (key === 'breakpoints' || key === 'themeType') {
			return;
		}

		fillValues({
			destination: flatValues,
			value,
			adaptiveDestination: adaptiveValues,
			manyAdaptiveStates: false,
		});
	});

	return { flatValues, adaptiveValues };
}
