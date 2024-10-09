import { describe, expect, test } from '@jest/globals';

import { convertSnakeToCamel } from './convertSnakeToCamel';

describe('convertSnakeToCamel', () => {
	test('convert empty string', () => {
		expect(convertSnakeToCamel('')).toEqual('');
	});

	test('replaces prefix', () => {
		expect(convertSnakeToCamel('--vkui--')).toEqual('');
	});

	test('replaces prefix and converts to lower case', () => {
		expect(convertSnakeToCamel('--vkui--Test')).toEqual('test');
	});

	test('replaces prefix and converts to camel case', () => {
		expect(convertSnakeToCamel('--vkui--Test_var')).toEqual('testVar');
	});
});
