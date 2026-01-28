import { describe, expect, it } from '@jest/globals';

import { capitalize } from './capitalize.js';

describe('capitalize', () => {
	it('should work without letters', () => {
		expect(capitalize('')).toBe('');
	});
	it('should work with 1 letter', () => {
		expect(capitalize('a')).toBe('A');
	});

	it('should work with some letters', () => {
		expect(capitalize('aaaaa')).toBe('Aaaaa');
	});

	it('should ignore another letters', () => {
		expect(capitalize('1ds')).toBe('1ds');
	});
});
