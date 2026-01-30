import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { stripIndent } from 'common-tags';

import type { ThemeCssVarsWide } from '../../../../interfaces/general/index.ts';
import type { ParadigmThemeCssVarsWide } from '../../../../interfaces/namespaces/paradigm/index.ts';
import { compileBreakpointsCssVarsDeclaration } from './compileBreakpointsCssVarsDeclaration.ts';

describe('compileBreakpointsCssVarsDeclaration', () => {
	it('should not work without breakpoints', () => {
		const theme = {};
		assert.equal(compileBreakpointsCssVarsDeclaration(theme as ThemeCssVarsWide), null);
	});

	it('should work with breakpoints and empty vals', () => {
		const theme: Partial<ParadigmThemeCssVarsWide> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compactX',
				},
				desktopS: {
					breakpoint: 768,
					adaptiveValue: 'regular',
				},
			},
		};
		assert.equal(compileBreakpointsCssVarsDeclaration(theme as ThemeCssVarsWide), null);
	});

	it('should work with non adaptive values', () => {
		const theme: Partial<ParadigmThemeCssVarsWide> = {
			breakpoints: {
				touch: {
					breakpoint: 0,
					adaptiveValue: 'compactX',
				},
				desktopS: {
					breakpoint: 768,
					adaptiveValue: 'regular',
				},
			},
			x1: {
				name: '--vkui--x1',
				value: 'var(--vkui--x1, 4px)',
				originalValue: '4px',
			} as any,
		};
		assert.equal(compileBreakpointsCssVarsDeclaration(theme as ThemeCssVarsWide), null);
	});

	it('should work with flat adaptive values and several breakpotins', () => {
		const theme: Partial<ParadigmThemeCssVarsWide> = {
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
		const expected = stripIndent`
			:root {
				--vkui--size_popup_base_padding: var(--vkui--size_popup_base_padding--regular);
			}

			@media (max-width: 767px) {
				:root, .vkui--force-auto {
					--vkui--size_popup_base_padding: var(--vkui--size_popup_base_padding--compact);
				}
			}

			.vkui--force-touch {
				--vkui--size_popup_base_padding: var(--vkui--size_popup_base_padding--compact);
			}

			@media (min-width: 768px) {
				:root, .vkui--force-auto {
					--vkui--size_popup_base_padding: var(--vkui--size_popup_base_padding--regular);
				}
			}

			.vkui--force-desktop_s {
				--vkui--size_popup_base_padding: var(--vkui--size_popup_base_padding--regular);
			}
			`;
		assert.equal(compileBreakpointsCssVarsDeclaration(theme as ThemeCssVarsWide), expected);
	});

	it('should work with flat adaptive values and several breakpotins and without overriding', () => {
		const theme: Partial<ParadigmThemeCssVarsWide> = {
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
			sizePopupBasePadding: {
				auto: {
					name: '--vkui--size_popup_base_padding',
					value: 'var(--vkui--size_popup_base_padding)',
				},
				regular: {
					name: '--vkui--size_popup_base_padding--regular',
					value: 'var(--vkui--size_popup_base_padding--regular, 20px)',
					originalValue: '20px',
				},
			},
		};
		const expected = stripIndent`
			:root {
				--vkui--size_popup_base_padding: 20px;
			}
			`;
		assert.equal(compileBreakpointsCssVarsDeclaration(theme as ThemeCssVarsWide), expected);
	});

	it('should work with adaptive complex object', () => {
		const theme: Partial<ParadigmThemeCssVarsWide> = {
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

		const expected = stripIndent`
			:root {
				--vkui--font_h1--font_size: var(--vkui--font_h1--font_size--regular);
				--vkui--font_h1--line_height: var(--vkui--font_h1--line_height--regular);
			}

			@media (max-width: 767px) {
				:root, .vkui--force-auto {
					--vkui--font_h1--font_size: var(--vkui--font_h1--font_size--compact);
				}
			}

			.vkui--force-touch {
				--vkui--font_h1--font_size: var(--vkui--font_h1--font_size--compact);
			}

			@media (min-width: 768px) {
				:root, .vkui--force-auto {
					--vkui--font_h1--font_size: var(--vkui--font_h1--font_size--regular);
				}
			}

			.vkui--force-desktop_s {
				--vkui--font_h1--font_size: var(--vkui--font_h1--font_size--regular);
			}
			`;
		assert.equal(compileBreakpointsCssVarsDeclaration(theme as ThemeCssVarsWide), expected);
	});
});
