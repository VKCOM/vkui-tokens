import { describe, expect, it } from '@jest/globals';

import { extractGeneralTokens } from './extractGeneralTokens.ts';

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
});
