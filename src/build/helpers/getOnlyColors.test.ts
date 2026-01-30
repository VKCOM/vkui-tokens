import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getOnlyColors } from '../../build/helpers/getOnlyColors.ts';

describe('getOnlyColors', () => {
	it('should filter out tokens that do not look like a color', () => {
		const result = getOnlyColors({
			colorBackground: {
				normal: '#FFF',
			},
			sizePaddingBase: 20,
		});
		const expected = {
			colorBackground: {
				normal: '#FFF',
			},
		};
		assert.deepEqual(result, expected);
	});
});
