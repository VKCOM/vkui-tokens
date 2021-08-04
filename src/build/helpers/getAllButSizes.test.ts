import {getAllButSizes} from '@/build/helpers/getAllButSizes';

describe('getAllButSizes', () => {
	it('should filter out tokens that start with "size", "font" or are a size helper', () => {
		expect(
			getAllButSizes({
				colorBackground: '#FFF',
				sizePaddingBase: 20,
				fontText: {
					fontFamily: 'Comic Sans',
				},
				x10: 5,
				xxxTokenXxx: '8',
			}),
		).toEqual({
			colorBackground: '#FFF',
			xxxTokenXxx: '8',
		});
	});
});
