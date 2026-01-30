import * as assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { convertSnakeToCamel } from './convertSnakeToCamel.ts';

describe('convertSnakeToCamel', () => {
	test('convert empty string', () => {
		assert.equal(convertSnakeToCamel(''), '');
	});

	test('replaces prefix', () => {
		assert.equal(convertSnakeToCamel('--vkui--'), '');
	});

	test('replaces prefix and converts to lower case', () => {
		assert.equal(convertSnakeToCamel('--vkui--Test'), 'test');
	});

	test('replaces prefix and converts to camel case', () => {
		assert.equal(convertSnakeToCamel('--vkui--Test_var'), 'testVar');
	});
});
