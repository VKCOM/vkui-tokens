import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getGradientPointsFromColor } from '../../build/helpers/getGradientPointsFromColor.ts';

describe('getGradientPointsFromColor', () => {
	it('should generate gradient from color', () => {
		const result = getGradientPointsFromColor('rgb(0, 100, 200)');
		const expected =
			'rgba(0, 100, 200, 0) 0%, ' +
			'rgba(0, 100, 200, 0.05) 15%, ' +
			'rgba(0, 100, 200, 0.2) 30%, ' +
			'rgba(0, 100, 200, 0.8) 70%, ' +
			'rgba(0, 100, 200, 0.95) 85%, ' +
			'rgba(0, 100, 200, 1) 100%';
		assert.equal(result, expected);
	});
});
