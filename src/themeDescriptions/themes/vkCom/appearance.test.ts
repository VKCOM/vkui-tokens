import { describe, expect, test } from '@jest/globals';

/* eslint-disable @typescript-eslint/naming-convention */
import { resolveColor } from './appearance';

describe('vkCom/appearance', () => {
	test('white', () => {
		expect(
			resolveColor({
				color_identifier: 'white',
			}),
		).toBe('#FFFFFF');
	});

	test('white_alpha12', () => {
		expect(
			resolveColor({
				color_identifier: 'white_alpha12',
			}),
		).toBe('rgba(255, 255, 255, 0.12)');
	});

	test('white with alpha_multiplier', () => {
		expect(
			resolveColor({
				color_identifier: 'white',
				alpha_multiplier: 0.04,
			}),
		).toBe('rgba(255, 255, 255, 0.04)');
	});

	test('missing color', () => {
		expect(
			resolveColor({
				color_identifier: 'impossible',
			}),
		).toBe('#000');
	});
});
