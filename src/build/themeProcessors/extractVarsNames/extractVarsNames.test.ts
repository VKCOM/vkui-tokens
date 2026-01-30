import { describe, expect, it } from '@jest/globals';

import type { Breakpoints } from '../../../interfaces/general/tools/index.ts';
import type {
	ParadigmTheme,
	ParadigmThemeCssVarsWide,
} from '../../../interfaces/namespaces/paradigm/index.ts';
import { extractVarsNames, getVariableName } from './extractVarsNames.ts';

describe('extractVarsNames', () => {
	describe('getVariableName', () => {
		it('should work only with key param', () => {
			expect(getVariableName({ key: 'paddingBase' })).toBe('--vkui--padding_base');
		});

		it('shoud work with custom prefix', () => {
			expect(getVariableName({ key: 'paddingBase', prefix: 'myParadigm' })).toBe(
				'--my_paradigm--padding_base',
			);
		});

		it('should work with custom prefix with double hyphen', () => {
			expect(
				getVariableName({
					key: 'lineHeight',
					prefix: 'paradigm--fontH0',
				}),
			).toBe('--paradigm--font_h0--line_height');
		});

		it('shoud work with auto mode', () => {
			expect(getVariableName({ key: 'paddingBase', mode: 'auto' })).toBe('--vkui--padding_base');
		});

		it('should work with nocamel mode', () => {
			expect(getVariableName({ key: 'paddingBase', mode: 'touch' })).toBe(
				'--vkui--padding_base--touch',
			);
		});

		it('should work with camel mode', () => {
			expect(getVariableName({ key: 'paddingBase', mode: 'desktopS' })).toBe(
				'--vkui--padding_base--desktop_s',
			);
		});
	});

	describe('mainFunction', () => {
		it('should work with empty', () => {
			const theme: Partial<ParadigmTheme> = {};

			expect(extractVarsNames(theme as ParadigmTheme)).toStrictEqual({});
		});

		it('should not touch breakpoints', () => {
			type Viewports = ['touch', 'tablet', 'desktopS', 'desktopM'];

			const theme: Breakpoints<Viewports> = {
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

			expect(extractVarsNames(theme)).toStrictEqual(expectedData);
		});

		it('should change type', () => {
			type Prop = 'themeType';

			const theme: Pick<ParadigmTheme, Prop> = {
				themeType: 'root',
			};

			const expectedData: Pick<ParadigmThemeCssVarsWide, Prop> = {
				themeType: 'cssVarsWide',
			};

			expect(extractVarsNames(theme)).toStrictEqual(expectedData);
		});

		it('should work with flat values', () => {
			type Props = 'x1' | 'x2';
			const theme: Pick<ParadigmTheme, Props> = {
				x1: 4,
				x2: 8,
			};

			const expectedData: Pick<ParadigmThemeCssVarsWide, Props> = {
				x1: {
					name: '--vkui--x1',
					value: 'var(--vkui--x1, 4px)',
					originalValue: '4px',
				},
				x2: {
					name: '--vkui--x2',
					value: 'var(--vkui--x2, 8px)',
					originalValue: '8px',
				},
			};

			expect(extractVarsNames(theme)).toStrictEqual(expectedData);
		});

		it('should ignore undefined values', () => {
			const theme: Partial<ParadigmTheme> = {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				x1: undefined,
			};

			const expectedData: Partial<ParadigmThemeCssVarsWide> = {};

			expect(extractVarsNames(theme)).toStrictEqual(expectedData);
		});

		it('should work with colors', () => {
			type Props = 'colorTextAccent';
			const theme: Pick<ParadigmTheme, Props> = {
				colorTextAccent: {
					normal: 'white',
					hover: 'blue',
					active: 'red',
				},
			};

			const expectedData: Pick<ParadigmThemeCssVarsWide, Props> = {
				colorTextAccent: {
					normal: {
						name: '--vkui--color_text_accent',
						originalValue: 'white',
						value: 'var(--vkui--color_text_accent, white)',
					},
					hover: {
						name: '--vkui--color_text_accent--hover',
						originalValue: 'blue',
						value: 'var(--vkui--color_text_accent--hover, blue)',
					},
					active: {
						name: '--vkui--color_text_accent--active',
						originalValue: 'red',
						value: 'var(--vkui--color_text_accent--active, red)',
					},
				},
			};

			expect(extractVarsNames(theme)).toStrictEqual(expectedData);
		});

		it('should work with viewports values', () => {
			type Prop = 'sizePopupBasePadding';
			const theme: Pick<ParadigmTheme, Prop> = {
				sizePopupBasePadding: {
					compact: 16,
					regular: 20,
				},
			};

			const expectedData: Pick<ParadigmThemeCssVarsWide, Prop> = {
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

			expect(extractVarsNames(theme)).toStrictEqual(expectedData);
		});

		it('should work with complex flat values', () => {
			const theme: any = {
				variable: {
					fontSize: 24,
				},
			};

			const expectedResult: any = {
				variable: {
					fontSize: {
						name: '--vkui--variable--font_size',
						value: 'var(--vkui--variable--font_size, 24px)',
						originalValue: '24px',
					},
				},
			};

			expect(extractVarsNames(theme)).toStrictEqual(expectedResult);
		});

		it('should work with complexity viewports values', () => {
			const theme: Partial<ParadigmTheme> = {
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

			const expectedData: Partial<ParadigmThemeCssVarsWide> = {
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

			expect(extractVarsNames(theme)).toStrictEqual(expectedData);
		});
	});

	it('should json stringify themeName and customMedia', () => {
		type Prop = 'breakpoints' | 'themeName' | 'widthTouch';

		const theme: Pick<ParadigmTheme, Prop> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compact',
				},
				desktopS: {
					breakpoint: 768,
					adaptiveValue: 'regular',
				},
			},
			themeName: 'kek',
			widthTouch: '(max-width: 300px)',
		};

		const expectedData: Pick<ParadigmThemeCssVarsWide, Prop> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compact',
				},
				desktopS: {
					breakpoint: 768,
					adaptiveValue: 'regular',
				},
			},
			themeName: {
				name: '--vkui--theme_name',
				value: 'var(--vkui--theme_name, kek)',
				originalValue: 'kek',
			},
			widthTouch: {
				name: '--vkui--width_touch',
				value: 'var(--vkui--width_touch, "(max-width: 300px)")',
				originalValue: '"(max-width: 300px)"',
			},
		};

		expect(extractVarsNames(theme)).toStrictEqual(expectedData);
	});

	it('should work with custom construct', () => {
		type Props = 'breakpoints' | 'x1' | 'x2';
		const theme: Pick<ParadigmTheme, Props> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compact',
				},
				desktopS: {
					breakpoint: 768,
					adaptiveValue: 'regular',
				},
			},
			x1: 4,
			x2: 8,
		};

		const expectedData: Pick<ParadigmThemeCssVarsWide, Props> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compact',
				},
				desktopS: {
					breakpoint: 768,
					adaptiveValue: 'regular',
				},
			},
			x1: {
				name: '--vkui--x1',
				value: '4px',
				originalValue: '4px',
			},
			x2: {
				name: '--vkui--x2',
				value: '8px',
				originalValue: '8px',
			},
		};

		// eslint-disable-next-line unicorn/consistent-function-scoping
		const valueConstruct = (_: string, value: string) => value;

		expect(extractVarsNames(theme, { valueConstruct })).toStrictEqual(expectedData);
	});
});
