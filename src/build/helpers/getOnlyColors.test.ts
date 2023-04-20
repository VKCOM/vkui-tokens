import { describe, expect, it } from '@jest/globals';

import { getOnlyColors } from '@/build/helpers/getOnlyColors';

describe('getOnlyColors', () => {
	it('should filter out tokens that do not look like a color', () => {
		expect(
			getOnlyColors({
				colorBackground: {
					normal: '#FFF',
				},
				sizePaddingBase: 20,
			}),
		).toEqual({
			colorBackground: {
				normal: '#FFF',
			},
		});
	});
});
