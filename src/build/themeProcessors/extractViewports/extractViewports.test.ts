import { describe, expect, it } from '@jest/globals';

import { extractViewports } from '../../../build/themeProcessors/extractViewports/extractViewports.js';
import { Breakpoints } from '../../../interfaces/general/tools/index.js';
import { DefaultViewports } from '../../../interfaces/general/tools/viewports.js';

describe('extractViewports', () => {
	it('should work without breakpoints: touch', () => {
		type TestViewport = ['touch'];

		const testBreakpoints: Breakpoints<TestViewport> = {
			breakpoints: {
				touch: {
					adaptiveValue: 'regular',
					breakpoint: 0,
				},
			},
		};

		expect(
			extractViewports<TestViewport, Breakpoints<TestViewport>>(testBreakpoints),
		).toStrictEqual(['touch']);
	});

	it('should work without breakpoints: desktopM', () => {
		type TestViewport = ['desktopM'];

		const testBreakpoints: Breakpoints<TestViewport> = {
			breakpoints: {
				desktopM: {
					adaptiveValue: 'regular',
					breakpoint: 0,
				},
			},
		};

		expect(
			extractViewports<TestViewport, Breakpoints<TestViewport>>(testBreakpoints),
		).toStrictEqual(['desktopM']);
	});

	it('should work with default breakpoints', () => {
		type TestViewport = DefaultViewports;

		const testBreakpoints: Breakpoints<TestViewport> = {
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

		expect(
			extractViewports<TestViewport, Breakpoints<TestViewport>>(testBreakpoints),
		).toStrictEqual(['touch', 'desktopS']);
	});

	it('should work with Custom breakpoints', () => {
		type TestViewport = ['touch', 'desktopS', 'desktopM', 'desktopL'];

		const testBreakpoints: Breakpoints<TestViewport> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compact',
				},
				desktopS: {
					breakpoint: 400,
					adaptiveValue: 'regular',
				},
				desktopM: {
					breakpoint: 500,
					adaptiveValue: 'large',
				},
				desktopL: {
					breakpoint: 700,
					adaptiveValue: 'largeX',
				},
			},
		};

		expect(
			extractViewports<TestViewport, Breakpoints<TestViewport>>(testBreakpoints),
		).toStrictEqual(['touch', 'desktopS', 'desktopM', 'desktopL']);
	});
});
