import { describe, expect, it } from '@jest/globals';

// eslint-disable-next-line import/no-deprecated
import { getRGBA, toneOpacity } from './cssHelpers';

describe('cssHelpers', () => {
	describe('getRGBA', () => {
		it('should work with red', () => {
			// eslint-disable-next-line import/no-deprecated
			expect(getRGBA('#f00000', 0.5)).toBe('rgba(240, 0, 0, 0.5)');
		});

		it('should work with yellow', () => {
			// eslint-disable-next-line import/no-deprecated
			expect(getRGBA('#ffff00', 0.2)).toBe('rgba(255, 255, 0, 0.2)');
		});
	});

	describe('toneOpacity', () => {
		it('should work with string', () => {
			expect(toneOpacity('#f00000', 0.5)).toBe('rgba(240, 0, 0, 0.5)');
		});

		it('should work with ColorWithStates', () => {
			expect(
				toneOpacity(
					{
						normal: '#f00000',
						hover: '#f00000',
						active: '#f00000',
					},
					0.5,
				),
			).toBe('rgba(240, 0, 0, 0.5)');
		});
	});
});
