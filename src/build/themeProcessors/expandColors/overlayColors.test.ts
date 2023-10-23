import { describe, expect, test } from '@jest/globals';

import { overlayColors } from '@/build/themeProcessors/expandColors/overlayColors';

describe('overlayColors', () => {
	test('overlay transparent on opaque in light color scheme', () => {
		expect(overlayColors('rgb(0,0,0)', 'rgba(255,255,255,.5)')({ colorsScheme: 'light' })).toEqual({
			normal: '#404040',
			hover: '#4D4D4D',
			active: '#5C5C5C',
		});
	});

	test('overlay transparent on opaque in dark color scheme', () => {
		expect(overlayColors('rgb(0,0,0)', 'rgba(255,255,255,.5)')({ colorsScheme: 'dark' })).toEqual({
			normal: '#404040',
			hover: '#4D4D4D',
			active: '#5C5C5C',
		});
	});

	test('overlay opaque on opaque', () => {
		expect(overlayColors('rgb(0,0,0)', 'rgb(255,255,255)')({ colorsScheme: 'light' })).toEqual({
			normal: '#FFFFFF',
			hover: '#F5F5F7',
			active: '#EBECEF',
		});
	});

	test('overlay transparent custom states on opaque', () => {
		expect(
			overlayColors('rgb(0,0,0)', {
				normal: 'rgba(255,255,255,.5)',
				hover: 'rgba(255,255,255,.5)',
				active: 'rgba(255,255,255,.5)',
			})({ colorsScheme: 'light' }),
		).toEqual({
			normal: '#404040',
			hover: '#404040',
			active: '#404040',
		});
	});
});
