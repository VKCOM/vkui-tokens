import { describe, expect, it } from '@jest/globals';

import { getAllButSizes } from '../../build/helpers/getAllButSizes';

describe('getAllButSizes', () => {
	it('should filter out tokens that start with "size", "font" or are a size helper', () => {
		expect(
			getAllButSizes(
				{
					colorBackground: '#FFF',
					sizePaddingBase: 20,
					fontText: {
						fontFamily: 'Comic Sans',
					},
					x10: 5,
					xxxTokenXxx: '8',
					octaviusColorBackground: '#ACA',
					octaviusSizePaddingBase: 8,
				},
				'octavius',
			),
		).toEqual({
			colorBackground: '#FFF',
			xxxTokenXxx: '8',
			octaviusColorBackground: '#ACA',
		});
	});
});
