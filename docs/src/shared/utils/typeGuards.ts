import {RegularCompactObj} from '../types';
import {isExist} from './helpers';

export function isString(value: any): value is string {
	return typeof value === 'string';
}

export function isNumber(value: any): value is number {
	return typeof value === 'number';
}

export function isRegularCompactObj(
	value: any,
): value is Required<RegularCompactObj> {
	return isExist(value, 'regular') && isExist(value, 'compact');
}
