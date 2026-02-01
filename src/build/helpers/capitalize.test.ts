import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { capitalize } from './capitalize.ts';

describe('capitalize', () => {
	it('should work without letters', () => {
		assert.equal(capitalize(''), '');
	});
	it('should work with 1 letter', () => {
		assert.equal(capitalize('a'), 'A');
	});

	it('should work with some letters', () => {
		assert.equal(capitalize('aaaaa'), 'Aaaaa');
	});

	it('should ignore another letters', () => {
		assert.equal(capitalize('1ds'), '1ds');
	});
});
