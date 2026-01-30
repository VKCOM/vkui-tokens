import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { extractGeneralTokens } from './extractGeneralTokens.ts';

describe('mixColors', () => {
	it('should return new object', () => {
		const testData = {};

		assert.notEqual(extractGeneralTokens(testData as any), testData);
	});

	it('should delete colors', () => {
		const testData = {
			colors: {
				lol: 'kek',
			},
		};

		assert.deepEqual(extractGeneralTokens(testData as any), {});
	});

	it('should save another props except colors', () => {
		const testData = {
			colors: {
				lol: 'kek',
			},
			anotherProp: 'prop',
		};

		assert.deepEqual(extractGeneralTokens(testData as any), {
			anotherProp: 'prop',
		});
	});
});
