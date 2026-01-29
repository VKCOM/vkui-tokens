import { describe, expect, it } from '@jest/globals';

import { extractCssVarsStrict } from '../../../build/themeProcessors/extractCssVarsStrict/extractCssVarsStrict.ts';
import { ThemeCssVars, ThemeCssVarsWide } from '../../../interfaces/general/index.ts';
import {
	ParadigmThemeCssVars,
	ParadigmThemeCssVarsWide,
} from '../../../interfaces/namespaces/paradigm/index.ts';

describe('extractCssVarsStrict', () => {
	it('should work with empty object', () => {
		const testData = {};
		expect(extractCssVarsStrict(testData as ThemeCssVarsWide)).toStrictEqual({});
	});

	it('should not do anything with breakpoints', () => {
		type Prop = 'breakpoints';
		type Viewports = ['touch', 'tablet', 'desktopS', 'desktopM'];

		const theme: Pick<ParadigmThemeCssVarsWide<Viewports>, Prop> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compactX',
				},
				tablet: {
					breakpoint: 300,
					adaptiveValue: 'compact',
				},
				desktopS: {
					breakpoint: 400,
					adaptiveValue: 'regular',
				},
				desktopM: {
					breakpoint: 500,
					adaptiveValue: 'large',
				},
			},
		};

		const expectedData = { breakpoints: { ...theme.breakpoints } };

		expect(extractCssVarsStrict(theme as ThemeCssVarsWide<Viewports>)).toStrictEqual(expectedData);
	});

	it('should change type', () => {
		type Prop = 'themeType';

		const theme: Pick<ThemeCssVarsWide, Prop> = {
			themeType: 'cssVarsWide',
		};

		const expectResult: Pick<ThemeCssVars, Prop> = {
			themeType: 'cssVars',
		};

		expect(extractCssVarsStrict(theme as ThemeCssVarsWide)).toStrictEqual(expectResult);
	});

	it('should work with flat values', () => {
		type Prop = 'x1';

		const theme: Pick<ParadigmThemeCssVarsWide, Prop> = {
			x1: {
				name: '--paradigm--x1',
				value: 'var(--paradigm--x1, 4px)',
				originalValue: '4px',
			},
		};

		const expectResult: Pick<ParadigmThemeCssVars, Prop> = {
			x1: {
				name: theme.x1.name,
				value: theme.x1.value,
			},
		};

		expect(extractCssVarsStrict(theme as ParadigmThemeCssVarsWide)).toStrictEqual(expectResult);
	});

	it('should work with adaprive breakpoints values', () => {
		type Prop = 'sizePopupBasePadding';

		const theme: Pick<ParadigmThemeCssVarsWide, Prop> = {
			sizePopupBasePadding: {
				auto: {
					name: '--vkui--size_popup_base_padding',
					value: 'var(--vkui--size_popup_base_padding)',
				},
				compact: {
					name: '--vkui--size_popup_base_padding--compact',
					value: 'var(--vkui--size_popup_base_padding--compact, 16px)',
					originalValue: '16px',
				},
				regular: {
					name: '--vkui--size_popup_base_padding--regular',
					value: 'var(--vkui--size_popup_base_padding--regular, 20px)',
					originalValue: '20px',
				},
			},
		};

		const expectedResult: Pick<ParadigmThemeCssVars, Prop> = {
			sizePopupBasePadding: {
				auto: theme.sizePopupBasePadding.auto,
				compact: {
					name: theme.sizePopupBasePadding.compact.name,
					value: theme.sizePopupBasePadding.compact.value,
				},
				regular: {
					name: theme.sizePopupBasePadding.regular.name,
					value: theme.sizePopupBasePadding.regular.value,
				},
			},
		};

		expect(extractCssVarsStrict(theme as ParadigmThemeCssVarsWide)).toStrictEqual(expectedResult);
	});

	it('should with flat and adaptive values together', () => {
		type Prop = 'sizePopupBasePadding' | 'x1';
		const theme: Pick<ParadigmThemeCssVarsWide, Prop> = {
			x1: {
				name: '--paradigm--x1',
				value: 'var(--paradigm--x1, 4px)',
				originalValue: '4px',
			},
			sizePopupBasePadding: {
				auto: {
					name: '--vkui--size_popup_base_padding',
					value: 'var(--vkui--size_popup_base_padding)',
				},
				compact: {
					name: '--vkui--size_popup_base_padding--compact',
					value: 'var(--vkui--size_popup_base_padding--compact, 16px)',
					originalValue: '16px',
				},
				regular: {
					name: '--vkui--size_popup_base_padding--regular',
					value: 'var(--vkui--size_popup_base_padding--regular, 20px)',
					originalValue: '20px',
				},
			},
		};

		const expectedResult: Pick<ParadigmThemeCssVars, Prop> = {
			x1: {
				name: theme.x1.name,
				value: theme.x1.value,
			},
			sizePopupBasePadding: {
				auto: theme.sizePopupBasePadding.auto,
				compact: {
					name: theme.sizePopupBasePadding.compact.name,
					value: theme.sizePopupBasePadding.compact.value,
				},
				regular: {
					name: theme.sizePopupBasePadding.regular.name,
					value: theme.sizePopupBasePadding.regular.value,
				},
			},
		};

		expect(extractCssVarsStrict(theme as ParadigmThemeCssVarsWide)).toStrictEqual(expectedResult);
	});
});
