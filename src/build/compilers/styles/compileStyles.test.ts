import {stripIndent} from 'common-tags';

import {PixelifyTheme} from '@/interfaces/general';
import {ParadigmTheme} from '@/interfaces/namespaces/paradigm';

import {compileStyles, CompileStylesMode} from './compileStyles';
import {EStyleTypes, Formats} from './helpers/tokenProcessors';

interface TestVars {
	name: string;
	descriptionTheme: Partial<PixelifyTheme<ParadigmTheme>>;
	mode?: CompileStylesMode;
	result: {
		[key in Formats]: string;
	};
}

const testData: TestVars[] = [
	{
		name: 'should compile colors',
		descriptionTheme: {
			colorAccent: {
				normal: 'blue',
				hover: 'darkblue',
				active: 'darkslateblue',
			},
		},
		result: {
			css: stripIndent`
			:root {
				--vkui--color_accent: blue;
				--vkui--color_accent--hover: darkblue;
				--vkui--color_accent--active: darkslateblue;
			}
			`,
			scss: stripIndent`
				$color-accent: blue;
				$color-accent--hover: darkblue;
				$color-accent--active: darkslateblue;
			`,
			pcss: stripIndent`
			:root {
				--color-accent: blue;
				--color-accent--hover: darkblue;
				--color-accent--active: darkslateblue;
			}
			`,
			less: stripIndent`
			@color-accent: blue;
			@color-accent--hover: darkblue;
			@color-accent--active: darkslateblue;
			`,
			styl: stripIndent`
			$color-accent = blue;
			$color-accent--hover = darkblue;
			$color-accent--active = darkslateblue;
			`,
		},
	},
	{
		name: 'should compile flat class variables',
		descriptionTheme: {
			fontSome: {
				fontSize: '16px',
				lineHeight: '25px',
			},
		} as any,
		result: {
			css: stripIndent`
			:root {
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
			%font-some {
				font-size: 16px;
				line-height: 25px;
			}
			`,
			less: stripIndent`
			.font-some {
				font-size: 16px;
				line-height: 25px;
			}
			`,

			styl: stripIndent`
			font-some() {
				font-size: 16px;
				line-height: 25px;
			}
			`,
		},
	},
	{
		name: 'should compile adaptive class variables',
		descriptionTheme: {
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
	},
	{
		name: 'should compile adaptive flat variables',
		descriptionTheme: {
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
				--vkui--size_popup_base_padding--compact: 20px;
				--vkui--size_popup_base_padding--regular: 32px;
				--vkui--size_popup_base_padding--large: 40px;
				--vkui--size_popup_base_padding--large_x: 50px;
			}
			`,
			scss: stripIndent`
			$size-popup-base-padding--compact: 20px;
			$size-popup-base-padding--regular: 32px;
			$size-popup-base-padding--large: 40px;
			$size-popup-base-padding--large-x: 50px;
			`,
			pcss: stripIndent`
			:root {
				--size-popup-base-padding--compact: 20px;
				--size-popup-base-padding--regular: 32px;
				--size-popup-base-padding--large: 40px;
				--size-popup-base-padding--large_x: 50px;
			}
			`,
			less: stripIndent`
			@size-popup-base-padding--compact: 20px;
			@size-popup-base-padding--regular: 32px;
			@size-popup-base-padding--large: 40px;
			@size-popup-base-padding--large-x: 50px;
			`,

			styl: stripIndent`
			$size-popup-base-padding--compact = 20px;
			$size-popup-base-padding--regular = 32px;
			$size-popup-base-padding--large = 40px;
			$size-popup-base-padding--large-x = 50px;
			`,
		},
	},
	{
		name: 'should compile flat variables',
		descriptionTheme: {
			opacityDisable: 0.4,
		},
		result: {
			css: stripIndent`
			:root {
				--vkui--opacity_disable: 0.4;
			}
			`,
			scss: stripIndent`
			$opacity-disable: 0.4;
			`,
			pcss: stripIndent`
			:root {
				--opacity-disable: 0.4;
			}
			`,
			less: stripIndent`
			@opacity-disable: 0.4;
			`,

			styl: stripIndent`
			$opacity-disable = 0.4;
			`,
		},
	},
	{
		name: 'should compile media queries',
		descriptionTheme: {
			widthTablet: '(min-width: 768px) and (max-width: 999px)',
			widthToDesktopL: '(max-width: 2199px)',
		},
		result: {
			css: stripIndent``,
			scss: stripIndent`
			@mixin media-width-tablet {
				@media (min-width: 768px) and (max-width: 999px) { @content; }
			}
			@mixin media-width-to-desktop-l {
				@media (max-width: 2199px) { @content; }
			}
			`,
			pcss: stripIndent`
			@custom-media --width-tablet (min-width: 768px) and (max-width: 999px);
			@custom-media --width-to-desktop-l (max-width: 2199px);
			`,
			less: stripIndent`
			.media-width-tablet(@content) {
				@media (min-width: 768px) and (max-width: 999px) { @content; }
			}
			.media-width-to-desktop-l(@content) {
				@media (max-width: 2199px) { @content; }
			}
			`,

			styl: stripIndent`
			media-width-tablet(content) {
				@media (min-width: 768px) and (max-width: 999px) { content }
			}
			media-width-to-desktop-l(content) {
				@media (max-width: 2199px) { content }
			}
			`,
		},
	},
	{
		name: 'should compile adaptive class variables with onlyAdaptiveGroups',
		descriptionTheme: {
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
	},
	{
		name:
			'should compile adaptive class variables with mode=withAdaptiveGroups',
		mode: 'withAdaptiveGroups',
		descriptionTheme: {
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
	},
	{
		name: 'should compile onlyColors',
		mode: 'onlyColors',
		descriptionTheme: {
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
	},
	{
		name: 'should compile noSizes',
		mode: 'noSizes',
		descriptionTheme: {
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
	},
];

describe('compileStyles', () => {
	Object.values(EStyleTypes).forEach((format) => {
		describe(format, () => {
			testData.forEach(({name, descriptionTheme, result, mode}) => {
				it(name, () => {
					expect(compileStyles(format, descriptionTheme, mode)).toBe(
						result[format],
					);
				});
			});
		});
	});
});
