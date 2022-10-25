import {TokenItemValue, ValueType} from '@/shared/types';
import {
	isNumber,
	isRegularCompactObj,
	isRegularObj,
	isString,
} from '@/shared/utils';

export function oneLineRenderCondition(contentValue: TokenItemValue): boolean {
	return (
		isString(contentValue) ||
		isNumber(contentValue) ||
		isRegularObj(contentValue) ||
		isRegularCompactObj(contentValue)
	);
}

export function getOneLineContent(
	value: TokenItemValue,
	valueType: ValueType,
): string | number {
	if (isString(value) || isNumber(value)) {
		return value;
	}

	if (isRegularObj(value) && valueType === 'regular') {
		return value.regular;
	}

	if (isRegularCompactObj(value)) {
		return value[valueType];
	}

	return '-';
}
