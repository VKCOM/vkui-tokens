import { describe, expect, it } from '@jest/globals';
import { stripIndent } from 'common-tags';

import { compileGetDeclarationString } from '../../../../build/compilers/cssVars/jsUtils/compileGetDeclarationString.ts';
import type { ThemeCssVarsWide } from '../../../../interfaces/general/index.ts';
import type { ParadigmThemeCssVarsWide } from '../../../../interfaces/namespaces/paradigm/index.ts';

describe('compileGetDeclarationString', () => {
	it('should work with empty', () => {
		const theme = {};
		expect(compileGetDeclarationString(theme as ThemeCssVarsWide)).toBe(
			stripIndent`
			import {Properties} from 'csstype';

			export function getDeclarationVarString(): string {
				return \`\`;
			}

			export function getDeclarationVarObject(): Properties {
				return {} as Properties;
			}
			`,
		);
	});

	it('should work with any values', () => {
		const theme: Pick<ParadigmThemeCssVarsWide, 'x1' | 'sizePopupBasePadding' | 'colorTextAccent'> =
			{
				x1: {
					name: '--paradigm--x1',
					value: 'val(--paradigm--x1, 4px)',
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

				colorTextAccent: {
					normal: {
						name: '--vkui--color_text_accent',
						value: 'val(--vkui--color_text_accent, white)',
						originalValue: 'white',
					},
					hover: {
						name: '--vkui--color_text_accent--hover',
						value: 'val(--vkui--color_text_accent--hover, black)',
						originalValue: 'black',
					},
					active: {
						name: '--vkui--color_text_accent--active',
						value: 'val(--vkui--color_text_accent--active, red)',
						originalValue: 'red',
					},
				},
			};

		expect(compileGetDeclarationString(theme as ParadigmThemeCssVarsWide)).toBe(
			stripIndent`
			import {Properties} from 'csstype';

			export function getDeclarationVarString(): string {
				return \`--paradigm--x1: 4px;--vkui--size_popup_base_padding--compact: 16px;--vkui--size_popup_base_padding--regular: 20px;--vkui--color_text_accent: white;--vkui--color_text_accent--hover: black;--vkui--color_text_accent--active: red;\`;
			}

			export function getDeclarationVarObject(): Properties {
				return {"--paradigm--x1":"4px","--vkui--size_popup_base_padding--compact":"16px","--vkui--size_popup_base_padding--regular":"20px","--vkui--color_text_accent":"white","--vkui--color_text_accent--hover":"black","--vkui--color_text_accent--active":"red"} as Properties;
			}
			`,
		);
	});

	it('should work onlyColorsMode', () => {
		const theme: Pick<ParadigmThemeCssVarsWide, 'x1' | 'sizePopupBasePadding' | 'colorTextAccent'> =
			{
				x1: {
					name: '--paradigm--x1',
					value: 'val(--paradigm--x1, 4px)',
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

				colorTextAccent: {
					normal: {
						name: '--vkui--color_text_accent',
						value: 'val(--vkui--color_text_accent, white)',
						originalValue: 'white',
					},
					hover: {
						name: '--vkui--color_text_accent--hover',
						value: 'val(--vkui--color_text_accent--hover, black)',
						originalValue: 'black',
					},
					active: {
						name: '--vkui--color_text_accent--active',
						value: 'val(--vkui--color_text_accent--active, red)',
						originalValue: 'red',
					},
				},
			};

		expect(compileGetDeclarationString(theme as ParadigmThemeCssVarsWide, 'onlyColors')).toBe(
			stripIndent`
			import {Properties} from 'csstype';

			export function getDeclarationVarColorsString(): string {
				return \`--vkui--color_text_accent: white;--vkui--color_text_accent--hover: black;--vkui--color_text_accent--active: red;\`;
			}

			export function getDeclarationVarColorsObject(): Properties {
				return {"--vkui--color_text_accent":"white","--vkui--color_text_accent--hover":"black","--vkui--color_text_accent--active":"red"} as Properties;
			}
			`,
		);
	});
});
