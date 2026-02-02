import type { FlatValuesObject } from './accumulateValues.ts';

interface GetVarStringParams {
	valuesObject: FlatValuesObject;
	prefix: string;
	delimeter?: string;
	callback?: (name: string, value: string | number) => void;
}
export const getVarString = ({
	valuesObject,
	prefix,
	delimeter = '\n',
	callback: callbackFn,
}: GetVarStringParams): string => {
	return Object.entries(valuesObject)
		.map(([name, value]) => {
			callbackFn?.(name, value);
			return `${prefix}${name}: ${value};`;
		})
		.join(delimeter);
};
