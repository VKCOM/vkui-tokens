import * as assert from 'node:assert/strict';
import { describe, test } from 'node:test';

/* eslint-disable @typescript-eslint/naming-convention */
import { resolveColor } from './appearance.ts';

describe('vkCom/appearance', () => {
	test('white', () => {
		assert.equal(
			resolveColor({
				color_identifier: 'white',
			}),
			'#FFFFFF',
		);
	});

	test('white_alpha12', () => {
		assert.equal(
			resolveColor({
				color_identifier: 'white_alpha12',
			}),
			'rgba(255, 255, 255, 0.12)',
		);
	});

	test('white with alpha_multiplier', () => {
		assert.equal(
			resolveColor({
				color_identifier: 'white',
				alpha_multiplier: 0.04,
			}),
			'rgba(255, 255, 255, 0.04)',
		);
	});

	test('missing color', () => {
		assert.equal(
			resolveColor({
				color_identifier: 'impossible',
			}),
			'#000',
		);
	});
});
