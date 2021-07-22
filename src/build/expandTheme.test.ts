import {expandAll, expandRootTheme} from '@/build/expandTheme';

describe('expandTheme', () => {
	describe('expandRootTheme', () => {
		it('should return specific props', () => {
			const result = expandRootTheme({
				colorsScheme: 'light',
				colors: {
					colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
				},
				someNewRandomToken: '3',
			});

			expect(result).toStrictEqual({
				colorOverlayPrimary: {
					active: 'rgba(0, 0, 0, 0.56)',
					hover: 'rgba(0, 0, 0, 0.52)',
					normal: 'rgba(0, 0, 0, 0.48)',
				},
				colorsScheme: 'light',
				someNewRandomToken: '3',
				themeType: 'root',
			});
		});

		it('should work without colors', () => {
			const result = expandRootTheme({
				someNewRandomToken: '3',
				sizeArrow: {
					regular: 3,
				},
			});

			expect(result).toStrictEqual({
				sizeArrow: {
					regular: 3,
				},
				someNewRandomToken: '3',
				themeType: 'root',
			});
		});
	});

	describe('expandAll', () => {
		it('should add specific prop theme', () => {
			const result = expandAll({
				colorsScheme: 'light',
				colors: {
					colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
				},
				someNewRandomToken: '3',
			});

			expect(result.theme).not.toBeUndefined();
			expect(result.theme.themeType).toBe('root');
		});

		it('should add specific prop pixelifyTheme', () => {
			const result = expandAll({
				colorsScheme: 'light',
				colors: {
					colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
				},
				someNewRandomToken: '3',
			});

			expect(result.pixelifyTheme).not.toBeUndefined();
			expect(result.pixelifyTheme.themeType).toBe('pixelify');
		});

		it('should pixelify in pixelifyTheme', () => {
			const result = expandAll({
				someNewRandomToken: '3',
				sizeArrow: {
					regular: 3,
				},
			});

			expect(result.pixelifyTheme.sizeArrow.regular).toBe('3px');
		});

		it('should add specific prop cssVarsWide', () => {
			const result = expandAll({
				colorsScheme: 'light',
				colors: {
					colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
				},
				someNewRandomToken: '3',
			});

			expect(result.cssVarsThemeWide).toStrictEqual({
				colorOverlayPrimary: {
					active: {
						name: '--vkui--color_overlay_primary--active',
						originalValue: 'rgba(0, 0, 0, 0.56)',
						value:
							'var(--vkui--color_overlay_primary--active, rgba(0, 0, 0, 0.56))',
					},
					hover: {
						name: '--vkui--color_overlay_primary--hover',
						originalValue: 'rgba(0, 0, 0, 0.52)',
						value:
							'var(--vkui--color_overlay_primary--hover, rgba(0, 0, 0, 0.52))',
					},
					normal: {
						name: '--vkui--color_overlay_primary',
						originalValue: 'rgba(0, 0, 0, 0.48)',
						value:
							'var(--vkui--color_overlay_primary, rgba(0, 0, 0, 0.48))',
					},
				},
				colorsScheme: {
					name: '--vkui--colors_scheme',
					originalValue: 'light',
					value: 'var(--vkui--colors_scheme, light)',
				},
				someNewRandomToken: {
					name: '--vkui--some_ne_wrandom_token',
					originalValue: '3',
					value: 'var(--vkui--some_ne_wrandom_token, 3)',
				},
				themeType: 'cssVarsWide',
			});
		});

		it('should add specific prop cssVars', () => {
			const result = expandAll({
				colorsScheme: 'light',
				colors: {
					colorOverlayPrimary: 'rgba(0, 0, 0, 0.48)',
				},
				someNewRandomToken: '3',
			});

			expect(result.cssVarsTheme).toStrictEqual({
				colorOverlayPrimary: {
					active: {
						name: '--vkui--color_overlay_primary--active',
						value:
							'var(--vkui--color_overlay_primary--active, rgba(0, 0, 0, 0.56))',
					},
					hover: {
						name: '--vkui--color_overlay_primary--hover',
						value:
							'var(--vkui--color_overlay_primary--hover, rgba(0, 0, 0, 0.52))',
					},
					normal: {
						name: '--vkui--color_overlay_primary',
						value:
							'var(--vkui--color_overlay_primary, rgba(0, 0, 0, 0.48))',
					},
				},
				colorsScheme: {
					name: '--vkui--colors_scheme',
					value: 'var(--vkui--colors_scheme, light)',
				},
				someNewRandomToken: {
					name: '--vkui--some_ne_wrandom_token',
					value: 'var(--vkui--some_ne_wrandom_token, 3)',
				},
				themeType: 'cssVars',
			});
		});
	});
});
