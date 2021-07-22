import {getExpandedThemeColors} from './expandColors';

describe('expandColors', () => {
	it('should return null if colors not specified', () => {
		const colorsTheme = {
			colorsScheme: 'light',
		} as const;

		expect(getExpandedThemeColors(colorsTheme)).toStrictEqual(null);
	});

	it('should return null if colorsScheme not specified', () => {
		const colorsTheme = {
			colors: {
				colorError: '#F00',
			},
		} as const;

		expect(getExpandedThemeColors(colorsTheme)).toStrictEqual(null);
	});

	it('should expand colors with states', () => {
		const colorsTheme = {
			colorsScheme: 'light',
			colors: {
				colorError: '#F00',
			},
		} as const;

		const result = {
			colorsScheme: 'light',
			colorError: {
				active: '#EB0105',
				hover: '#F50102',
				normal: '#F00',
			},
		};

		expect(getExpandedThemeColors(colorsTheme)).toStrictEqual(result);
	});

	it('should expand colors with states dark scheme', () => {
		const colorsTheme = {
			colorsScheme: 'dark',
			colors: {
				colorError: '#3e3333',
			},
		} as const;

		const result = {
			colorsScheme: 'dark',
			colorError: {
				active: '#4D4343',
				hover: '#463B3B',
				normal: '#3e3333',
			},
		};

		expect(getExpandedThemeColors(colorsTheme)).toStrictEqual(result);
	});

	it('should expand transparent colors', () => {
		const colorsTheme = {
			colorsScheme: 'light',
			colors: {
				colorTransparent: 'transparent',
			},
		} as const;

		const result = {
			colorTransparent: {
				active: 'rgba(0, 16, 61, 0.08)',
				hover: 'rgba(0, 16, 61, 0.04)',
				normal: 'transparent',
			},
			colorsScheme: 'light',
		};

		expect(getExpandedThemeColors(colorsTheme)).toStrictEqual(result);
	});

	it('should expand transparent colors dark scheme', () => {
		const colorsTheme = {
			colorsScheme: 'dark',
			colors: {
				colorTransparent: 'transparent',
			},
		} as const;

		const result = {
			colorTransparent: {
				active: 'rgba(255, 255, 255, 0.08)',
				hover: 'rgba(255, 255, 255, 0.04)',
				normal: 'transparent',
			},
			colorsScheme: 'dark',
		};

		expect(getExpandedThemeColors(colorsTheme)).toStrictEqual(result);
	});

	it('should not expand colors with already exists states', () => {
		const colorsTheme = {
			colorsScheme: 'light',
			colors: {
				colorError: {
					active: '#FFF',
					hover: '#F0F',
					normal: '#F00',
				},
			},
		} as const;

		const result = {
			colorsScheme: 'light',
			colorError: {
				active: '#FFF',
				hover: '#F0F',
				normal: '#F00',
			},
		};

		expect(getExpandedThemeColors(colorsTheme)).toStrictEqual(result);
	});
});
