import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import type { CustomMediaByViewport } from '../../../interfaces/general/tools/customMedia.ts';
import type { Breakpoints } from '../../../interfaces/general/tools/index.ts';
import type { ViewportsOrdered } from '../../../interfaces/general/tools/viewports.ts';
import { getCustomMediaKey, getUsingViewports, processCustomMedia } from './customMedia.ts';

describe('customMedia', () => {
	describe('getCustomMediaKey', () => {
		it('should work as default', () => {
			assert.equal(getCustomMediaKey('touch'), 'widthTouch');
		});

		it('should work with "to" rule', () => {
			assert.equal(getCustomMediaKey('desktopS', 'to'), 'widthToDesktopS');
		});

		it('should work with "from" rule', () => {
			assert.equal(getCustomMediaKey('tablet', 'from'), 'widthFromTablet');
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

			assert.deepEqual(getUsingViewports<Viewports>(breakpoints), ['touch', 'desktopS']);
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

			assert.deepEqual(getUsingViewports<Viewports>(breakpoints), [
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

			assert.deepEqual(processCustomMedia(testData), {});
		});

		it('should work 1 breakpoints', () => {
			type Viewports = ['desktopS'];

			const testData: Breakpoints<Viewports> = {
				breakpoints: {
					desktopS: { breakpoint: 0, adaptiveValue: 'regular' },
				},
			};

			const expectedResult: CustomMediaByViewport<Viewports> = {};

			assert.deepEqual(processCustomMedia<Viewports>(testData), expectedResult);
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

			assert.deepEqual(processCustomMedia(testData), expectedResult);
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

			assert.deepEqual(processCustomMedia(testData), expectedResult);
		});
	});
});
