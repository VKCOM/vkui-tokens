import { describe, expect, it } from '@jest/globals';

import { extractGeneralTokens } from './extractGeneralTokens';

describe('mixColors', () => {
	it('should return new object', () => {
		const testData = {};

		expect(extractGeneralTokens(testData as any)).not.toBe(testData);
	});

	it('should delete colors', () => {
		const testData = {
			colors: {
				lol: 'kek',
			},
		};

		expect(extractGeneralTokens(testData as any)).toStrictEqual({});
	});

	it('should save another props except colors', () => {
		const testData = {
			colors: {
				lol: 'kek',
			},
			anotherProp: 'prop',
		};

		expect(extractGeneralTokens(testData as any)).toStrictEqual({
			anotherProp: 'prop',
		});
	});

	it('should merge compact adaptivity with regular', () => {
		const testData = {
			sizeArrow: {
				regular: '8px',
			},
			sizeAvatar: {
				regular: '12px',
				compact: '14px',
			},
			fontText: {
				regular: {
					fontSize: '12px',
					lineHeight: '14px',
				},
			},
			fontText2: {
				regular: {
					fontSize: '12px',
					fontWeight: '400',
				},
				compact: {
					fontSize: '14px',
				},
			},
			anotherProp: 'prop',
		};

		expect(extractGeneralTokens(testData as any)).toStrictEqual({
			sizeArrow: {
				regular: '8px',
				compact: '8px',
			},
			sizeAvatar: {
				regular: '12px',
				compact: '14px',
			},
			fontText: {
				regular: {
					fontSize: '12px',
					lineHeight: '14px',
				},
				compact: {
					fontSize: '12px',
					lineHeight: '14px',
				},
			},
			fontText2: {
				regular: {
					fontSize: '12px',
					fontWeight: '400',
				},
				compact: {
					fontSize: '14px',
				},
			},
			anotherProp: 'prop',
		});
	});
});
