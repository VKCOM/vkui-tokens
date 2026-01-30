import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { flatifyTheme } from '../../build/helpers/flatifyTheme.ts';
import type { ThemeDescription } from '../../interfaces/general/index.ts';

describe('flatifyTheme', () => {
	it('should return new object', () => {
		const theme: Partial<ThemeDescription> = {};

		assert.notEqual(flatifyTheme(theme), theme);
	});

	it('should work with empty', () => {
		const theme: Partial<ThemeDescription> = {};

		assert.deepEqual(flatifyTheme(theme), {});
	});

	it('should not touch flat vars', () => {
		const theme: Partial<ThemeDescription> = { opacityDisable: 0.5 };

		assert.deepEqual(flatifyTheme(theme), { opacityDisable: 0.5 });
	});

	it('should not touch colors', () => {
		const theme: Partial<ThemeDescription> = {
			colors: { colorTextPrimary: 'blue' } as any,
		};

		assert.deepEqual(flatifyTheme(theme), {
			colors: { colorTextPrimary: 'blue' },
		});
	});

	it('should change adaptive flat values', () => {
		const theme: Partial<ThemeDescription> = {
			sizeArrow: {
				regular: 9,
				compact: 3,
				large: 15,
			},
			sizeIconUI: {
				regular: 17,
				compact: 12,
			},
		};

		assert.deepEqual(flatifyTheme(theme), {
			sizeArrow: {
				regular: 9,
			},
			sizeIconUI: {
				regular: 17,
			},
		});
	});

	it('should get oportunity to change adaptive states for removing', () => {
		const theme: Partial<ThemeDescription> = {
			sizeArrow: {
				regular: 9,
				compact: 3,
				large: 15,
			},
			sizeIconUI: {
				regular: 17,
				compact: 12,
			},
		};

		assert.deepEqual(flatifyTheme(theme, ['compact']), {
			sizeArrow: {
				regular: 9,
				large: 15,
			},
			sizeIconUI: {
				regular: 17,
			},
		});
	});

	it('should work with adaptive complex values', () => {
		const theme: Partial<ThemeDescription> = {
			fontTitle1: {
				regular: {
					fontSize: 16,
					lineHeight: 20,
					fontFamily: 'kek',
					fontWeight: 444,
				},
				compact: {
					fontSize: 14,
					lineHeight: 15,
				},
			},
		};

		assert.deepEqual(flatifyTheme(theme), {
			fontTitle1: {
				regular: {
					fontSize: 16,
					lineHeight: 20,
					fontFamily: 'kek',
					fontWeight: 444,
				},
			},
		});
	});
});
