import { describe, expect, it } from '@jest/globals';

import type { CustomMediaByViewport } from '../../../interfaces/general/tools/customMedia.ts';
import type { Breakpoints } from '../../../interfaces/general/tools/index.ts';
import type { ViewportsOrdered } from '../../../interfaces/general/tools/viewports.ts';
import { getCustomMediaKey, getUsingViewports, processCustomMedia } from './customMedia.ts';

describe('customMedia', () => {
	describe('getCustomMediaKey', () => {
		it('should work as default', () => {
			expect(getCustomMediaKey('touch')).toBe('widthTouch');
		});

		it('should work with "to" rule', () => {
			expect(getCustomMediaKey('desktopS', 'to')).toBe('widthToDesktopS');
		});

		it('should work with "from" rule', () => {
			expect(getCustomMediaKey('tablet', 'from')).toBe('widthFromTablet');
		});
	});

	describe('getUsingViewports', () => {
		it('should work with single breakpoint', () => {
			type Viewports = ['touch', 'desktopS'];
			const breakpoints: Breakpoints<Viewports>['breakpoints'] = {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compactX',
				},
				desktopS: {
					breakpoint: 768,
					adaptiveValue: 'regular',
				},
			};

			expect(getUsingViewports<Viewports>(breakpoints)).toStrictEqual(['touch', 'desktopS']);
		});

		it('should sort breakpoints', () => {
			type Viewports = ['touch', 'tablet', 'desktopS', 'desktopM'];

			const breakpoints: Breakpoints<Viewports>['breakpoints'] = {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compactX',
				},
				desktopM: {
					breakpoint: 1233,
					adaptiveValue: 'large',
				},
				desktopS: {
					breakpoint: 768,
					adaptiveValue: 'regular',
				},
				tablet: {
					breakpoint: 1000,
					adaptiveValue: 'compact',
				},
			};

			expect(getUsingViewports<Viewports>(breakpoints)).toStrictEqual([
				'touch',
				'tablet',
				'desktopS',
				'desktopM',
			]);
		});
	});

	describe('general', () => {
		it('should work without breakpoints', () => {
			const testData: Breakpoints = {};

			expect(processCustomMedia(testData)).toStrictEqual({});
		});

		it('should work 1 breakpoints', () => {
			type Viewports = ['desktopS'];

			const testData: Breakpoints<Viewports> = {
				breakpoints: {
					desktopS: { breakpoint: 0, adaptiveValue: 'regular' },
				},
			};

			const expectedResult: CustomMediaByViewport<Viewports> = {};

			expect(processCustomMedia<Viewports>(testData)).toStrictEqual(expectedResult);
		});

		it('should correctly work with single breakpoint', () => {
			type V = ['touch', 'desktopS'];

			const testData: Breakpoints<V> = {
				breakpoints: {
					touch: {
						breakpoint: 0,
						adaptiveValue: 'compact',
					},
					desktopS: {
						breakpoint: 768,
						adaptiveValue: 'regular',
					},
				},
			};

			const expectedResult: CustomMediaByViewport<V> = {
				widthTouch: '(max-width: 767px)',
				widthDesktopS: '(min-width: 768px)',
				widthFromDesktopS: '(min-width: 768px)',
				widthToTouch: '(max-width: 767px)',
			};

			expect(processCustomMedia(testData)).toStrictEqual(expectedResult);
		});

		it('should correctly work with all breakpoints', () => {
			type V = ViewportsOrdered;

			const testData: Breakpoints<V> = {
				breakpoints: {
					touch: {
						breakpoint: 0,
						adaptiveValue: 'compactX',
					},
					tablet: {
						breakpoint: 768,
						adaptiveValue: 'compact',
					},
					desktopS: {
						breakpoint: 1000,
						adaptiveValue: 'regular',
					},
					desktopM: {
						breakpoint: 1300,
						adaptiveValue: 'large',
					},
					desktopL: {
						breakpoint: 1600,
						adaptiveValue: 'largeX',
					},
					desktopXL: {
						breakpoint: 2200,
						adaptiveValue: 'largeXX',
					},
				},
			};

			const expectedResult: CustomMediaByViewport<V> = {
				widthTouch: '(max-width: 767px)',
				widthTablet: '(min-width: 768px) and (max-width: 999px)',
				widthDesktopS: '(min-width: 1000px) and (max-width: 1299px)',
				widthDesktopM: '(min-width: 1300px) and (max-width: 1599px)',
				widthDesktopL: '(min-width: 1600px) and (max-width: 2199px)',
				widthDesktopXL: '(min-width: 2200px)',
				widthFromTablet: '(min-width: 768px)',
				widthFromDesktopS: '(min-width: 1000px)',
				widthFromDesktopM: '(min-width: 1300px)',
				widthFromDesktopL: '(min-width: 1600px)',
				widthFromDesktopXL: '(min-width: 2200px)',
				widthToTouch: '(max-width: 767px)',
				widthToTablet: '(max-width: 999px)',
				widthToDesktopS: '(max-width: 1299px)',
				widthToDesktopM: '(max-width: 1599px)',
				widthToDesktopL: '(max-width: 2199px)',
			};

			expect(processCustomMedia(testData)).toStrictEqual(expectedResult);
		});
	});
});
