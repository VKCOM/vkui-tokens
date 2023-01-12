import { getAllButColors } from '@/build/helpers/getAllButColors';

describe('getAllButColors', () => {
	it('should filter out tokens that start with "color"', () => {
		expect(
			getAllButColors(
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
			sizePaddingBase: 20,
			fontText: {
				fontFamily: 'Comic Sans',
			},
			x10: 5,
			xxxTokenXxx: '8',
			octaviusSizePaddingBase: 8,
		});
	});
});
