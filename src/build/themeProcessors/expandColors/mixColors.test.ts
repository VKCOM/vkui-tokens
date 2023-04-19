import { describe, expect, it } from '@jest/globals';
import { Property } from 'csstype';

import { mixColors } from './mixColors';

describe('mixColors', () => {
	const colorState: Property.Color = '#000000';

	it('should work with transparent', () => {
		const result = mixColors('transparent', colorState, 1);
		expect(result).toBe('rgb(0, 0, 0)');
	});

	it('should work with transparent and opacity', () => {
		const result = mixColors('transparent', colorState, 0.5);
		expect(result).toBe('rgba(0, 0, 0, 0.5)');
	});

	it('should work with hex color', () => {
		const result = mixColors('#F00', colorState, 0.5);
		expect(result).toBe('#800000');
	});

	it('should work with rgb color', () => {
		const result = mixColors('rgb(255, 0 , 0)', colorState, 0.5);
		expect(result).toBe('#800000');
	});

	it('should work with rgba color (mixing opacity)', () => {
		const result = mixColors('rgba(255, 0, 0, 0.5)', colorState, 0.1);
		expect(result).toBe('rgba(255, 0, 0, 0.6)');
	});
});
