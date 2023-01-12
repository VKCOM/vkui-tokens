import { getGradientPointsFromColor } from '@/build/helpers/getGradientPointsFromColor';

describe('getGradientPointsFromColor', () => {
	it('should generate gradient from color', () => {
		expect(getGradientPointsFromColor('rgb(0, 100, 200)')).toEqual(
			'rgba(0, 100, 200, 0) 0%, ' +
				'rgba(0, 100, 200, 0.036) 13%, ' +
				'rgba(0, 100, 200, 0.15) 27%, ' +
				'rgba(0, 100, 200, 0.79) 68%, ' +
				'rgba(0, 100, 200, 0.95) 84%, ' +
				'rgba(0, 100, 200, 1) 100%',
		);
	});
});
