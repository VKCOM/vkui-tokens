import { describe, expect, it } from '@jest/globals';

import { getGradientPointsFromColor } from '../../build/helpers/getGradientPointsFromColor.ts';

describe('getGradientPointsFromColor', () => {
	it('should generate gradient from color', () => {
		expect(getGradientPointsFromColor('rgb(0, 100, 200)')).toEqual(
			'rgba(0, 100, 200, 0) 0%, ' +
				'rgba(0, 100, 200, 0.05) 15%, ' +
				'rgba(0, 100, 200, 0.2) 30%, ' +
				'rgba(0, 100, 200, 0.8) 70%, ' +
				'rgba(0, 100, 200, 0.95) 85%, ' +
				'rgba(0, 100, 200, 1) 100%',
		);
	});
});
