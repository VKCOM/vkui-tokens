import { describe, expect, test } from '@jest/globals';
import { stripIndent } from 'common-tags';

import type { PixelifyTheme } from '../../../interfaces/general/index.ts';
import type { ParadigmTheme } from '../../../interfaces/namespaces/paradigm/index.ts';
import type { CompileStylesMode } from './compileStyles.ts';
import { compileStyles } from './compileStyles.ts';
import type { Formats } from './helpers/tokenProcessors.ts';
import { EStyleTypes } from './helpers/tokenProcessors.ts';

type DescriptionTheme = Partial<PixelifyTheme<ParadigmTheme>> &
	Pick<PixelifyTheme, 'themeName' | 'colorsScheme'>;

interface TestVars {
	descriptionTheme: DescriptionTheme & Record<any, any>;
	descriptionThemeBase?: DescriptionTheme & Record<any, any>;
	mode?: CompileStylesMode;
	result: {
		[key in Formats]: string;
	};
}

const formats = Object.values(EStyleTypes);

function runTest(format: Formats, testData: TestVars) {
	const compiled = compileStyles(
		format,
		testData.descriptionTheme as any,
		testData.mode,
		testData.descriptionThemeBase as any,
	);

	expect(compiled).toBe(testData.result[format]);
}

describe('compileStyles', () => {
	test.each(formats)('%s: should compile colors', (format) => {
		runTest(format, {
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				colorAccent: {
					normal: 'blue',
					hover: 'darkblue',
					active: 'darkslateblue',
				},
			},
			result: {
				css: stripIndent`
				:root {
					--vkui--theme_name: 'testTheme';
					--vkui--colors_scheme: light;
					--vkui--color_accent: blue;
					--vkui--color_accent--hover: darkblue;
					--vkui--color_accent--active: darkslateblue;
				}
				`,
				scss: stripIndent`
					$theme-name: 'testTheme';
					$colors-scheme: light;
					$color-accent: blue;
					$color-accent--hover: darkblue;
					$color-accent--active: darkslateblue;
				`,
				pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--colors-scheme: light;
					--color-accent: blue;
					--color-accent--hover: darkblue;
					--color-accent--active: darkslateblue;
				}
				`,
				less: stripIndent`
				@theme-name: 'testTheme';
				@colors-scheme: light;
				@color-accent: blue;
				@color-accent--hover: darkblue;
				@color-accent--active: darkslateblue;
				`,
				styl: stripIndent`
				$theme-name = 'testTheme';
				$colors-scheme = light;
				$color-accent = blue;
				$color-accent--hover = darkblue;
				$color-accent--active = darkslateblue;
				`,
			},
		});
	});

	test.each(formats)('%s: should compile flat class variables', (format) => {
		runTest(format, {
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				fontSome: {
					fontSize: '16px',
					lineHeight: '25px',
				},
			} as any,
			result: {
				css: stripIndent`
				:root {
					--vkui--theme_name: 'testTheme';
					--vkui--colors_scheme: light;
					--vkui--font_some--font_size: 16px;
					--vkui--font_some--line_height: 25px;
				}

				.vkui--font_some {
					font-size: 16px;
					font-size: var(--vkui--font_some--font_size, 16px);
					line-height: 25px;
					line-height: var(--vkui--font_some--line_height, 25px);
				}
				`,
				scss: stripIndent`
				$theme-name: 'testTheme';
				$colors-scheme: light;


				@mixin font-some() {
					font-size: 16px;
					line-height: 25px;
				}
				$font-some--map: (
					'fontSize': 16px,
					'lineHeight': 25px,
				);
				`,
				pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--colors-scheme: light;
				}

				%font-some {
					font-size: 16px;
					line-height: 25px;
				}
				`,
				less: stripIndent`
				@theme-name: 'testTheme';
				@colors-scheme: light;


				.font-some {
					font-size: 16px;
					line-height: 25px;
				}
				`,

				styl: stripIndent`
				$theme-name = 'testTheme';
				$colors-scheme = light;


				font-some() {
					font-size: 16px;
					line-height: 25px;
				}
				`,
			},
		});
	});

	test.each(formats)('%s: should compile adaptive class variables', (f) => {
		runTest(f, {
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				fontText: {
					regular: {
						fontSize: '15px',
						lineHeight: '20px',
						fontFamily: 'Arial',
						fontWeight: 500,
					},
					compactX: {
						fontSize: '16px',
						lineHeight: '24px',
					},
				},
			},
			result: {
				css: stripIndent`
				:root {
					--vkui--theme_name: 'testTheme';
					--vkui--colors_scheme: light;
					--vkui--font_text--font_size--regular: 15px;
					--vkui--font_text--line_height--regular: 20px;
					--vkui--font_text--font_family--regular: Arial;
					--vkui--font_text--font_weight--regular: 500;
					--vkui--font_text--font_size--compact_x: 16px;
					--vkui--font_text--line_height--compact_x: 24px;
				}

				.vkui--font_text--regular {
					font-size: 15px;
					font-size: var(--vkui--font_text--font_size--regular, 15px);
					line-height: 20px;
					line-height: var(--vkui--font_text--line_height--regular, 20px);
					font-family: Arial;
					font-family: var(--vkui--font_text--font_family--regular, Arial);
					font-weight: 500;
					font-weight: var(--vkui--font_text--font_weight--regular, 500);
				}
				.vkui--font_text--compact-x {
					font-size: 16px;
					font-size: var(--vkui--font_text--font_size--compact_x, 16px);
					line-height: 24px;
					line-height: var(--vkui--font_text--line_height--compact_x, 24px);
					font-family: Arial;
					font-family: var(--vkui--font_text--font_family--regular, Arial);
					font-weight: 500;
					font-weight: var(--vkui--font_text--font_weight--regular, 500);
				}
				`,
				scss: stripIndent`
				$theme-name: 'testTheme';
				$colors-scheme: light;


				@mixin font-text--regular() {
					font-size: 15px;
					line-height: 20px;
					font-family: Arial;
					font-weight: 500;
				}
				$font-text--regular--map: (
					'fontSize': 15px,
					'lineHeight': 20px,
					'fontFamily': Arial,
					'fontWeight': 500,
				);
				@mixin font-text--compact-x() {
					font-size: 16px;
					line-height: 24px;
					font-family: Arial;
					font-weight: 500;
				}
				$font-text--regular--map: (
					'fontSize': 15px,
					'lineHeight': 20px,
					'fontFamily': Arial,
					'fontWeight': 500,
				);
				$font-text--compact-x--map: (
					'fontSize': 16px,
					'lineHeight': 24px,
					'fontFamily': Arial,
					'fontWeight': 500,
				);
				`,
				pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--colors-scheme: light;
				}

				%font-text--regular {
					font-size: 15px;
					line-height: 20px;
					font-family: Arial;
					font-weight: 500;
				}
				%font-text--compact-x {
					font-size: 16px;
					line-height: 24px;
					font-family: Arial;
					font-weight: 500;
				}
				`,
				less: stripIndent`
				@theme-name: 'testTheme';
				@colors-scheme: light;


				.font-text--regular {
					font-size: 15px;
					line-height: 20px;
					font-family: Arial;
					font-weight: 500;
				}
				.font-text--compact-x {
					font-size: 16px;
					line-height: 24px;
					font-family: Arial;
					font-weight: 500;
				}
				`,

				styl: stripIndent`
				$theme-name = 'testTheme';
				$colors-scheme = light;


				font-text--regular() {
					font-size: 15px;
					line-height: 20px;
					font-family: Arial;
					font-weight: 500;
				}
				font-text--compact-x() {
					font-size: 16px;
					line-height: 24px;
					font-family: Arial;
					font-weight: 500;
				}
				`,
			},
		});
	});

	test.each(formats)('%s: should compile adaptive flat variables', (f) => {
		runTest(f, {
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				sizePopupBasePadding: {
					compact: '20px',
					regular: '32px',
					large: '40px',
					largeX: '50px',
				},
			},
			result: {
				css: stripIndent`
				:root {
					--vkui--theme_name: 'testTheme';
					--vkui--colors_scheme: light;
					--vkui--size_popup_base_padding--compact: 20px;
					--vkui--size_popup_base_padding--regular: 32px;
					--vkui--size_popup_base_padding--large: 40px;
					--vkui--size_popup_base_padding--large_x: 50px;
				}
				`,
				scss: stripIndent`
				$theme-name: 'testTheme';
				$colors-scheme: light;
				$size-popup-base-padding--compact: 20px;
				$size-popup-base-padding--regular: 32px;
				$size-popup-base-padding--large: 40px;
				$size-popup-base-padding--large-x: 50px;
				`,
				pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--colors-scheme: light;
					--size-popup-base-padding--compact: 20px;
					--size-popup-base-padding--regular: 32px;
					--size-popup-base-padding--large: 40px;
					--size-popup-base-padding--large_x: 50px;
				}
				`,
				less: stripIndent`
				@theme-name: 'testTheme';
				@colors-scheme: light;
				@size-popup-base-padding--compact: 20px;
				@size-popup-base-padding--regular: 32px;
				@size-popup-base-padding--large: 40px;
				@size-popup-base-padding--large-x: 50px;
				`,

				styl: stripIndent`
				$theme-name = 'testTheme';
				$colors-scheme = light;
				$size-popup-base-padding--compact = 20px;
				$size-popup-base-padding--regular = 32px;
				$size-popup-base-padding--large = 40px;
				$size-popup-base-padding--large-x = 50px;
				`,
			},
		});
	});

	test.each(formats)('%s: should compile flat variables', (f) => {
		runTest(f, {
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				opacityDisable: 0.4,
			},
			result: {
				css: stripIndent`
				:root {
					--vkui--theme_name: 'testTheme';
					--vkui--colors_scheme: light;
					--vkui--opacity_disable: 0.4;
				}
				`,
				scss: stripIndent`
				$theme-name: 'testTheme';
				$colors-scheme: light;
				$opacity-disable: 0.4;
				`,
				pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--colors-scheme: light;
					--opacity-disable: 0.4;
				}
				`,
				less: stripIndent`
				@theme-name: 'testTheme';
				@colors-scheme: light;
				@opacity-disable: 0.4;
				`,

				styl: stripIndent`
				$theme-name = 'testTheme';
				$colors-scheme = light;
				$opacity-disable = 0.4;
				`,
			},
		});
	});

	test.each(formats)('%s: should compile media queries', (f) => {
		runTest(f, {
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				widthTablet: '(min-width: 768px) and (max-width: 999px)',
				widthToDesktopL: '(max-width: 2199px)',
			},
			result: {
				css: stripIndent`
				:root {
					--vkui--theme_name: 'testTheme';
					--vkui--colors_scheme: light;
				}`,
				scss: stripIndent`
				$theme-name: 'testTheme';
				$colors-scheme: light;


				@mixin media-width-tablet {
					@media (min-width: 768px) and (max-width: 999px) { @content; }
				}
				@mixin media-width-to-desktop-l {
					@media (max-width: 2199px) { @content; }
				}
				`,
				pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--colors-scheme: light;
				}

				@custom-media --width-tablet (min-width: 768px) and (max-width: 999px);
				@custom-media --width-to-desktop-l (max-width: 2199px);
				`,
				less: stripIndent`
				@theme-name: 'testTheme';
				@colors-scheme: light;


				.media-width-tablet(@content) {
					@media (min-width: 768px) and (max-width: 999px) { @content; }
				}
				.media-width-to-desktop-l(@content) {
					@media (max-width: 2199px) { @content; }
				}
				`,

				styl: stripIndent`
				$theme-name = 'testTheme';
				$colors-scheme = light;


				media-width-tablet(content) {
					@media (min-width: 768px) and (max-width: 999px) { content }
				}
				media-width-to-desktop-l(content) {
					@media (max-width: 2199px) { content }
				}
				`,
			},
		});
	});

	test.each(formats)('%s: should compile adaptive class variables with onlyAdaptiveGroups', (f) => {
		runTest(f, {
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				fontText: {
					regular: {
						fontSize: '15px',
						lineHeight: '20px',
						fontFamily: 'Arial',
						fontWeight: 500,
					},
					compact: {
						fontSize: '16px',
						lineHeight: '24px',
					},
				},
			},
			mode: 'onlyAdaptiveGroups',
			result: {
				css: stripIndent`
				.vkui--font_text {
					font-size: var(--vkui--font_text--font_size);
					line-height: var(--vkui--font_text--line_height);
					font-family: var(--vkui--font_text--font_family);
					font-weight: var(--vkui--font_text--font_weight);
				}
				`,
				scss: stripIndent``,
				pcss: stripIndent``,
				less: stripIndent``,

				styl: stripIndent``,
			},
		});
	});

	test.each(formats)(
		'%s: should compile adaptive class variables with mode=withAdaptiveGroups',
		(f) => {
			runTest(f, {
				mode: 'withAdaptiveGroups',
				descriptionTheme: {
					themeName: 'testTheme',
					colorsScheme: 'light',
					fontText: {
						regular: {
							fontSize: '15px',
							lineHeight: '20px',
							fontFamily: 'Arial',
							fontWeight: 500,
						},
						compact: {
							fontSize: '16px',
							lineHeight: '24px',
						},
					},
				},
				result: {
					css: stripIndent`
				:root {
					--vkui--theme_name: 'testTheme';
					--vkui--colors_scheme: light;
					--vkui--font_text--font_size--regular: 15px;
					--vkui--font_text--line_height--regular: 20px;
					--vkui--font_text--font_family--regular: Arial;
					--vkui--font_text--font_weight--regular: 500;
					--vkui--font_text--font_size--compact: 16px;
					--vkui--font_text--line_height--compact: 24px;
				}

				.vkui--font_text--regular {
					font-size: 15px;
					font-size: var(--vkui--font_text--font_size--regular, 15px);
					line-height: 20px;
					line-height: var(--vkui--font_text--line_height--regular, 20px);
					font-family: Arial;
					font-family: var(--vkui--font_text--font_family--regular, Arial);
					font-weight: 500;
					font-weight: var(--vkui--font_text--font_weight--regular, 500);
				}
				.vkui--font_text {
					font-size: var(--vkui--font_text--font_size);
					line-height: var(--vkui--font_text--line_height);
					font-family: var(--vkui--font_text--font_family);
					font-weight: var(--vkui--font_text--font_weight);
				}
				.vkui--font_text--compact {
					font-size: 16px;
					font-size: var(--vkui--font_text--font_size--compact, 16px);
					line-height: 24px;
					line-height: var(--vkui--font_text--line_height--compact, 24px);
					font-family: Arial;
					font-family: var(--vkui--font_text--font_family--regular, Arial);
					font-weight: 500;
					font-weight: var(--vkui--font_text--font_weight--regular, 500);
				}
				`,
					scss: stripIndent`
				$theme-name: 'testTheme';
				$colors-scheme: light;


				@mixin font-text--regular() {
					font-size: 15px;
					line-height: 20px;
					font-family: Arial;
					font-weight: 500;
				}
				$font-text--regular--map: (
					'fontSize': 15px,
					'lineHeight': 20px,
					'fontFamily': Arial,
					'fontWeight': 500,
				);
				@mixin font-text--compact() {
					font-size: 16px;
					line-height: 24px;
					font-family: Arial;
					font-weight: 500;
				}
				$font-text--regular--map: (
					'fontSize': 15px,
					'lineHeight': 20px,
					'fontFamily': Arial,
					'fontWeight': 500,
				);
				$font-text--compact--map: (
					'fontSize': 16px,
					'lineHeight': 24px,
					'fontFamily': Arial,
					'fontWeight': 500,
				);
				`,
					pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--colors-scheme: light;
				}

				%font-text--regular {
					font-size: 15px;
					line-height: 20px;
					font-family: Arial;
					font-weight: 500;
				}
				%font-text--compact {
					font-size: 16px;
					line-height: 24px;
					font-family: Arial;
					font-weight: 500;
				}
				`,
					less: stripIndent`
				@theme-name: 'testTheme';
				@colors-scheme: light;


				.font-text--regular {
					font-size: 15px;
					line-height: 20px;
					font-family: Arial;
					font-weight: 500;
				}
				.font-text--compact {
					font-size: 16px;
					line-height: 24px;
					font-family: Arial;
					font-weight: 500;
				}
				`,

					styl: stripIndent`
				$theme-name = 'testTheme';
				$colors-scheme = light;


				font-text--regular() {
					font-size: 15px;
					line-height: 20px;
					font-family: Arial;
					font-weight: 500;
				}
				font-text--compact() {
					font-size: 16px;
					line-height: 24px;
					font-family: Arial;
					font-weight: 500;
				}
				`,
				},
			});
		},
	);

	test.each(formats)('%s: should compile onlyColors', (f) => {
		runTest(f, {
			mode: 'onlyColors',
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				sizeBasePadding: {
					regular: 20,
				},
				colorBackground: {
					normal: '#FFF',
					hover: '#AAA',
					active: '#CCC',
				},
			},
			result: {
				css: stripIndent`
					:root {
						--vkui--color_background: #FFF;
						--vkui--color_background--hover: #AAA;
						--vkui--color_background--active: #CCC;
					}
				`,
				scss: stripIndent`
					$color-background: #FFF;
					$color-background--hover: #AAA;
					$color-background--active: #CCC;
				`,
				pcss: stripIndent`
				:root {
					--color-background: #FFF;
					--color-background--hover: #AAA;
					--color-background--active: #CCC;
				}`,
				less: stripIndent`
					@color-background: #FFF;
					@color-background--hover: #AAA;
					@color-background--active: #CCC;
				`,
				styl: stripIndent`
					$color-background = #FFF;
					$color-background--hover = #AAA;
					$color-background--active = #CCC;
				`,
			},
		});
	});

	test.each(formats)('%s: should compile noSizes', (f) => {
		runTest(f, {
			mode: 'noSizes',
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				sizeBasePadding: {
					regular: 20,
				},
				colorBackground: {
					normal: '#FFF',
					hover: '#AAA',
					active: '#CCC',
				},
			},
			result: {
				css: stripIndent`
					:root {
						--vkui--theme_name: 'testTheme';
						--vkui--colors_scheme: light;
						--vkui--color_background: #FFF;
						--vkui--color_background--hover: #AAA;
						--vkui--color_background--active: #CCC;
					}
				`,
				scss: stripIndent`
					$theme-name: 'testTheme';
					$colors-scheme: light;
					$color-background: #FFF;
					$color-background--hover: #AAA;
					$color-background--active: #CCC;
				`,
				pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--colors-scheme: light;
					--color-background: #FFF;
					--color-background--hover: #AAA;
					--color-background--active: #CCC;
				}`,
				less: stripIndent`
					@theme-name: 'testTheme';
					@colors-scheme: light;
					@color-background: #FFF;
					@color-background--hover: #AAA;
					@color-background--active: #CCC;
				`,
				styl: stripIndent`
					$theme-name = 'testTheme';
					$colors-scheme = light;
					$color-background = #FFF;
					$color-background--hover = #AAA;
					$color-background--active = #CCC;
				`,
			},
		});
	});

	test.each(formats)('%s: should compile noColors', (f) => {
		runTest(f, {
			mode: 'noColors',
			descriptionTheme: {
				themeName: 'testTheme',
				colorsScheme: 'light',
				sizeBasePadding: {
					regular: '20px',
				},
				colorBackground: {
					normal: '#FFF',
					hover: '#AAA',
					active: '#CCC',
				},
			},
			result: {
				css: stripIndent`
					:root {
						--vkui--theme_name: 'testTheme';
						--vkui--size_base_padding--regular: 20px;
					}
				`,
				scss: stripIndent`
					$theme-name: 'testTheme';
					$size-base-padding--regular: 20px;
				`,
				pcss: stripIndent`
				:root {
					--theme-name: 'testTheme';
					--size-base-padding--regular: 20px;
				}`,
				less: stripIndent`
					@theme-name: 'testTheme';
					@size-base-padding--regular: 20px;
				`,
				styl: stripIndent`
					$theme-name = 'testTheme';
					$size-base-padding--regular = 20px;
				`,
			},
		});
	});

	test.each(formats)('%s: customized selector in onlyVariablesLocal', (f) => {
		runTest(f, {
			mode: 'onlyVariablesLocal',
			descriptionTheme: {
				themeName: 'vkIOSDark',
				themeNameBase: 'vkIOS',
				colorsScheme: 'dark',
				colorBackground: {
					normal: '#FFF',
					hover: '#AAA',
					active: '#CCC',
				},
			},
			result: {
				css: stripIndent`
					.vkui--vkIOS--dark {
						--vkui--theme_name: 'vkIOSDark';
						--vkui--theme_name_base: 'vkIOS';
						--vkui--colors_scheme: dark;
						--vkui--color_background: #FFF;
						--vkui--color_background--hover: #AAA;
						--vkui--color_background--active: #CCC;
					}
				`,
				scss: stripIndent`
					$theme-name: 'vkIOSDark';
					$theme-name-base: 'vkIOS';
					$colors-scheme: dark;
					$color-background: #FFF;
					$color-background--hover: #AAA;
					$color-background--active: #CCC;
				`,
				pcss: stripIndent`
				.vkui--vkIOS--dark {
					--theme-name: 'vkIOSDark';
					--theme-name-base: 'vkIOS';
					--colors-scheme: dark;
					--color-background: #FFF;
					--color-background--hover: #AAA;
					--color-background--active: #CCC;
				}`,
				less: stripIndent`
					@theme-name: 'vkIOSDark';
					@theme-name-base: 'vkIOS';
					@colors-scheme: dark;
					@color-background: #FFF;
					@color-background--hover: #AAA;
					@color-background--active: #CCC;
				`,
				styl: stripIndent`
					$theme-name = 'vkIOSDark';
					$theme-name-base = 'vkIOS';
					$colors-scheme = dark;
					$color-background = #FFF;
					$color-background--hover = #AAA;
					$color-background--active = #CCC;
				`,
			},
		});
	});

	test.each(formats)('%s: onlyVariablesLocalIncremental', (f) => {
		runTest(f, {
			mode: 'onlyVariablesLocalIncremental',
			descriptionTheme: {
				themeName: 'vkIOSDark',
				themeNameBase: 'vkIOS',
				themeInheritsFrom: 'vkIOS',
				colorsScheme: 'dark',
				sizeBasePadding: {
					regular: '20px',
				},
				colorBackground: {
					normal: '#FFF',
					hover: '#AAA',
					active: '#CCC',
				},
			},
			descriptionThemeBase: {
				themeName: 'vkIOS',
				colorsScheme: 'light',
				sizeBasePadding: {
					regular: '20px',
				},
				colorBackground: {
					normal: '#AAA',
					hover: '#AAA',
					active: '#CCC',
				},
			},
			result: {
				css: stripIndent`
					.vkui--vkIOS--dark {
						--vkui--theme_name: 'vkIOSDark';
						--vkui--theme_name_base: 'vkIOS';
						--vkui--theme_inherits_from: 'vkIOS';
						--vkui--colors_scheme: dark;
						--vkui--color_background: #FFF;
						--vkui--color_background--hover: #AAA;
						--vkui--color_background--active: #CCC;
					}
				`,
				scss: stripIndent`
					$theme-name: 'vkIOSDark';
					$theme-name-base: 'vkIOS';
					$theme-inherits-from: 'vkIOS';
					$colors-scheme: dark;
					$color-background: #FFF;
					$color-background--hover: #AAA;
					$color-background--active: #CCC;
				`,
				pcss: stripIndent`
				.vkui--vkIOS--dark {
					--theme-name: 'vkIOSDark';
					--theme-name-base: 'vkIOS';
					--theme-inherits-from: 'vkIOS';
					--colors-scheme: dark;
					--color-background: #FFF;
					--color-background--hover: #AAA;
					--color-background--active: #CCC;
				}`,
				less: stripIndent`
					@theme-name: 'vkIOSDark';
					@theme-name-base: 'vkIOS';
					@theme-inherits-from: 'vkIOS';
					@colors-scheme: dark;
					@color-background: #FFF;
					@color-background--hover: #AAA;
					@color-background--active: #CCC;
				`,
				styl: stripIndent`
					$theme-name = 'vkIOSDark';
					$theme-name-base = 'vkIOS';
					$theme-inherits-from = 'vkIOS';
					$colors-scheme = dark;
					$color-background = #FFF;
					$color-background--hover = #AAA;
					$color-background--active = #CCC;
				`,
			},
		});
	});
});
