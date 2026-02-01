import * as assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { lint } from '../lint/index.ts';

describe('lint unit', () => {
	test('shows no warnings if everything is ok', () => {
		const result = lint([
			{
				colorBgAlpha: 'transparent',
			},
		]);
		assert.deepEqual(result, []);
	});

	test('shows warnings for opaque token name but alpha value', () => {
		const result = lint([
			{
				colorBg: 'transparent',
			},
		]);
		assert.deepEqual(result, [
			'undefined: colorBg error: Color token type mismatch: opaque token name but alpha value',
		]);
	});

	test('shows warnings for alpha token name but opaque value', () => {
		const result = lint([
			{
				colorBgAlpha: 'black',
			},
		]);
		assert.deepEqual(result, [
			'undefined: colorBgAlpha error: Color token type mismatch: alpha token name but opaque value',
		]);
	});

	test('shows warnings for nested objects', () => {
		const result = lint([
			{
				colors: { colorBg: 'transparent' },
			},
		]);
		assert.deepEqual(result, [
			'undefined: colors.colorBg error: Color token type mismatch: opaque token name but alpha value',
		]);
	});
});
