import {RegularCompactObj} from '../types';
import {isExist} from './helpers';

export function isString(value: unknown): value is string {
	return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
	return typeof value === 'number';
}

export function isRegularObj(
	value: unknown,
): value is Required<Pick<RegularCompactObj, 'regular'>> {
	return isExist(value, 'regular');
}

export function isRegularCompactObj(
	value: unknown,
): value is Required<RegularCompactObj> {
	return isExist(value, 'regular') && isExist(value, 'compact');
}
