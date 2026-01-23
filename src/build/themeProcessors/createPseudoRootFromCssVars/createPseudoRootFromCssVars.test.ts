import { describe, expect, it } from '@jest/globals';

import { PixelifyTheme, Theme, ThemeCssVars, ThemeCssVarsWide } from '../../../interfaces/general';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeCssVarsWide,
} from '../../../interfaces/namespaces/paradigm';
import { createPseudoRootFromCssVars } from './createPseudoRootFromCssVars';

describe('createPseudoRootFromCssVars', () => {
	it('should return new object', () => {
		const theme = {};
		const cssVarsTheme = {};

		expect(createPseudoRootFromCssVars(theme as Theme, cssVarsTheme as ThemeCssVarsWide)).not.toBe(
			theme,
		);
	});

	it('should change type', () => {
		type Props = 'themeType';

		const theme: Pick<Theme, Props> = {
			themeType: 'root',
		};
		const cssVarsTheme: Pick<ThemeCssVars, Props> = {
			themeType: 'cssVars',
		};

		expect(createPseudoRootFromCssVars(theme as Theme, cssVarsTheme as ThemeCssVars)).toStrictEqual(
			{ themeType: 'pixelify' },
		);
	});

	it('should expand flat values', () => {
		type Props = 'x1' | 'x2';

		const theme: Pick<ParadigmTheme, Props> = {
			x1: 4,
			x2: 8,
		};

		const cssVarsTheme: Pick<ParadigmThemeCssVars, Props> = {
			x1: {
				name: '--paradigm--x1',
				value: 'var(--paradigm--x1, 4px)',
			},
			x2: {
				name: '--paradigm--x2',
				value: 'var(--paradigm--x2, 8px)',
			},
		};

		const expectedResult: Pick<PixelifyTheme<ParadigmTheme>, Props> = {
			x1: 'var(--paradigm--x1, 4px)',
			x2: 'var(--paradigm--x2, 8px)',
		};

		expect(createPseudoRootFromCssVars(theme, cssVarsTheme as ParadigmThemeCssVars)).toStrictEqual(
			expectedResult,
		);
	});

	it('should expand adaptive values', () => {
		type Props = 'sizePopupBasePadding';

		const theme: Pick<ParadigmTheme, Props> = {
			sizePopupBasePadding: {
				compact: 16,
				regular: 20,
			},
		};

		const cssVarsTheme: Pick<ParadigmThemeCssVars, Props> = {
			sizePopupBasePadding: {
				auto: {
					name: '--vkui--size_popup_base_padding',
					value: 'var(--vkui--size_popup_base_padding)',
				},
				compact: {
					name: '--vkui--size_popup_base_padding--compact',
					value: 'var(--vkui--size_popup_base_padding--compact, 16px)',
				},
				regular: {
					name: '--vkui--size_popup_base_padding--regular',
					value: 'var(--vkui--size_popup_base_padding--regular, 20px)',
				},
			},
		};

		const expectedResult: Pick<PixelifyTheme<ParadigmTheme>, Props> = {
			sizePopupBasePadding: {
				compact: 'var(--vkui--size_popup_base_padding--compact, 16px)',
				regular: 'var(--vkui--size_popup_base_padding--regular, 20px)',
			},
		};

		expect(createPseudoRootFromCssVars(theme, cssVarsTheme as any)).toStrictEqual(expectedResult);
	});

	it('should expand adaptive complex values', () => {
		type Props = 'fontH1';

		const theme: Pick<ParadigmTheme, Props> = {
			fontH1: {
				compact: {
					fontSize: 24,
					lineHeight: '32px',
				},
				regular: {
					fontSize: 22,
					lineHeight: '30px',
				} as any,
			},
		};

		const cssVarsTheme: Pick<ParadigmThemeCssVarsWide, Props> = {
			fontH1: {
				auto: {
					fontSize: {
						name: '--vkui--font_h1--font_size',
						value: 'var(--vkui--font_h1--font_size)',
					},
					lineHeight: {
						name: '--vkui--font_h1--line_height',
						value: 'var(--vkui--font_h1--line_height)',
					},
				} as any,
				compact: {
					fontSize: {
						name: '--vkui--font_h1--font_size--compact',
						value: 'var(--vkui--font_h1--font_size--compact, 24px)',
						originalValue: '24px',
					},
					lineHeight: {
						name: '--vkui--font_h1--line_height--compact',
						value: 'var(--vkui--font_h1--line_height--compact, 32px)',
						originalValue: '32px',
					},
				},
				regular: {
					fontSize: {
						name: '--vkui--font_h1--font_size--regular',
						value: 'var(--vkui--font_h1--font_size--regular, 22px)',
						originalValue: '22px',
					},
					lineHeight: {
						name: '--vkui--font_h1--line_height--regular',
						value: 'var(--vkui--font_h1--line_height--regular, 30px)',
						originalValue: '30px',
					},
				} as any,
			},
		};

		const expectedResult: Pick<PixelifyTheme<ParadigmTheme>, Props> = {
			fontH1: {
				compact: {
					fontSize: cssVarsTheme.fontH1.compact.fontSize.value,
					lineHeight: cssVarsTheme.fontH1.compact.lineHeight.value,
				},
				regular: {
					fontSize: cssVarsTheme.fontH1.regular.fontSize.value,
					lineHeight: cssVarsTheme.fontH1.regular.lineHeight.value,
				} as any,
			},
		};

		expect(
			createPseudoRootFromCssVars(theme, cssVarsTheme as ParadigmThemeCssVarsWide),
		).toStrictEqual(expectedResult);
	});

	it(`shouldn't touch breakpoints`, () => {
		type Props = 'breakpoints';

		const theme: Pick<ParadigmTheme, Props> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compact',
				},
				desktopS: {
					breakpoint: 400,
					adaptiveValue: 'regular',
				},
			},
		};

		const cssVarsTheme: Pick<ParadigmThemeCssVars, Props> = {
			breakpoints: theme.breakpoints,
		};

		const expectedResult: Pick<PixelifyTheme<ParadigmTheme>, Props> = {
			breakpoints: theme.breakpoints,
		};

		expect(
			createPseudoRootFromCssVars<ParadigmTheme>(theme as ParadigmTheme, cssVarsTheme as any),
		).toStrictEqual(expectedResult);
	});
});
