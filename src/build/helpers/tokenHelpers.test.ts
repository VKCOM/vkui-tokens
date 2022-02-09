import {alias} from '@/build/helpers/tokenHelpers';

describe('tokenHelpers', () => {
	describe('alias', () => {
		test('maps token to another token', () => {
			expect(alias('sizeArrow')({sizeArrow: {regular: 10}})).toEqual({
				regular: 10,
			});
		});
	});
});
