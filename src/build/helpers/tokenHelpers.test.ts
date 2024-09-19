import { describe, expect, test } from '@jest/globals';

import { alias, gradient, namedAlias, staticRef } from '@/build/helpers/tokenHelpers';

describe('tokenHelpers', () => {
	describe('alias', () => {
		test('maps token to another token', () => {
			expect(alias('sizeArrow')({ sizeArrow: { regular: 10 } })).toEqual({
				regular: 10,
			});
		});
	});

	describe('namedAlias', () => {
		test('maps token to another token, preserving name', () => {
			expect(namedAlias('sizeArrow')({ sizeArrow: { regular: 10 } })).toEqual([
				'sizeArrow',
				{
					regular: 10,
				},
			]);
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

	describe('gradient', () => {
		test('calculates gradient string', () => {
			const gradientToken = gradient([namedAlias('colorIconPrimary'), 'transparent']);
			const gradientValue = gradientToken({ colors: { colorIconPrimary: 'blue' } as any });

			expect(gradientValue).toEqual(
				'var(--vkui--color_icon_primary, rgba(0, 0, 255, 1)) 0%, rgba(0, 0, 0, 0, 0) 100%',
			);
		});

		test('fails if bad number of arguments is given', () => {
			expect(() => gradient([namedAlias('colorIconPrimary')])).toThrowError(
				'Gradient stops length (1) is not equal to the number of opacity points given (2)',
			);
		});
	});
});
