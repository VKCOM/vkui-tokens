import {getRGBA} from './cssHelpers';

describe('cssHelpers', () => {
	describe('getRGBA', () => {
		it('should work with red', () => {
			expect(getRGBA('#f00000', 0.5)).toBe('rgba(240, 0, 0, 0.5)');
		});

		it('should work with yellow', () => {
			expect(getRGBA('#ffff00', 0.2)).toBe('rgba(255, 255, 0, 0.2)');
		});
	});
});
