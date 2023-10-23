import { describe, expect, test } from '@jest/globals';

import { alias, staticRef } from '@/build/helpers/tokenHelpers';

describe('tokenHelpers', () => {
	describe('alias', () => {
		test('maps token to another token', () => {
			expect(alias('sizeArrow')({ sizeArrow: { regular: 10 } })).toEqual({
				regular: 10,
			});
		});
	});

	describe('staticRef', () => {
		test('returns static value', () => {
			expect(staticRef(10)).toEqual(10);
		});

		test('fails for dynamic value', () => {
			expect(() => staticRef(alias('sizeArrow'))).toThrowError(
				'Cannot use callable token value in static ref',
			);
		});
	});
});
