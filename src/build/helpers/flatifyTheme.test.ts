import { describe, expect, it } from '@jest/globals';

import { flatifyTheme } from '../../build/helpers/flatifyTheme';
import { ThemeDescription } from '../../interfaces/general';

describe('flatifyTheme', () => {
	it('should return new object', () => {
		const theme: Partial<ThemeDescription> = {};

		expect(flatifyTheme(theme)).not.toBe(theme);
	});

	it('should work with empty', () => {
		const theme: Partial<ThemeDescription> = {};

		expect(flatifyTheme(theme)).toStrictEqual({});
	});

	it('should not touch flat vars', () => {
		const theme: Partial<ThemeDescription> = { opacityDisable: 0.5 };

		expect(flatifyTheme(theme)).toStrictEqual({ opacityDisable: 0.5 });
	});

	it('should not touch colors', () => {
		const theme: Partial<ThemeDescription> = {
			colors: { colorTextPrimary: 'blue' } as any,
		};

		expect(flatifyTheme(theme)).toStrictEqual({
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

		expect(flatifyTheme(theme)).toStrictEqual({
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

		expect(flatifyTheme(theme, ['compact'])).toStrictEqual({
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

		expect(flatifyTheme(theme)).toStrictEqual({
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
