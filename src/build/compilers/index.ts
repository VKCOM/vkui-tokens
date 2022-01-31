import fs from 'fs-extra';
import path from 'path';

import {compileGetDeclarationString} from '@/build/compilers/cssVars/jsUtils/compileGetDeclarationString';
import {compileJSON} from '@/build/compilers/json/compileJSON';
import {compileStyles} from '@/build/compilers/styles/compileStyles';
import {compileTypeScript} from '@/build/compilers/ts/compileTypeScript';
import {capitalize} from '@/build/helpers/capitalize';
import {
	PixelifyTheme,
	SpecialTokens,
	Theme,
	ThemeCssVarsWide,
} from '@/interfaces/general';

import {compileBreakpointsCssVarsDeclaration} from './cssVars/declarations/compileBreakpointsCssVarsDeclaration';

type ThemeBuildType =
	| 'root'
	| 'subtheme'
	| 'flat'
	| 'cssVars'
	| 'cssVarsPseudoRoot';

function writeJsonFile<T = Theme>(
	themePath: string,
	theme: T,
	_?: ThemeBuildType,
): void {
	console.log(`компилируем json...`);
	const fileName = `index.json`;
	const filePath = path.resolve(themePath, fileName);

	const content = compileJSON<T>(theme);

	fs.writeFileSync(filePath, content);

	console.log(`успешно записали файл ${fileName}`);
}

function writeTsFile<T extends SpecialTokens = Theme>(
	themePath: string,
	theme: T,
	type: ThemeBuildType,
	themeName?: string,
): void {
	console.log(`компилируем ts...`);
	const fileName = `index.ts`;
	const filePath = path.resolve(themePath, fileName);

	let content: string = null;

	const sourceContent = compileTypeScript<T>(theme);

	switch (type) {
		case 'flat':
			content = sourceContent
				.replace(
					/\$\$InterfaceName\$\$/g,
					`Theme${capitalize(theme.themeName)}Flat`,
				)
				.replace(
					/\$\$InterfaceURL\$\$/g,
					`@/interfaces/themes/${theme.themeName}`,
				);
			break;
		case 'subtheme':
			content = sourceContent
				.replace(
					/\$\$InterfaceName\$\$/g,
					`SubTheme${capitalize((theme as any).parentThemeName)}`,
				)
				.replace(
					/\$\$InterfaceURL\$\$/g,
					`@/interfaces/themes/${
						(theme as any).parentThemeName
					}/subthemes`,
				);
			break;
		case 'cssVars':
			content = sourceContent
				.replace(
					/\$\$InterfaceName\$\$/g,
					`Theme${capitalize(themeName)}CssVars`,
				)
				.replace(
					/\$\$InterfaceURL\$\$/g,
					`@/interfaces/themes/${themeName}`,
				);
			break;
		case 'root':
		default:
			content = sourceContent
				.replace(
					/\$\$InterfaceName\$\$/g,
					`Theme${capitalize(theme.themeName)}`,
				)
				.replace(
					/\$\$InterfaceURL\$\$/g,
					`@/interfaces/themes/${theme.themeName}`,
				);
	}

	fs.writeFileSync(filePath, content);

	console.log(`успешно записали файл ${fileName}`);
}

function writeStyleFiles<PT = PixelifyTheme>(
	themePath: string,
	theme: PT,
	// type: Exclude<ThemeBuildType, 'cssVars' | 'cssVarsPseudoRoot'>,
): void {
	const a = ['css', 'less', 'styl', 'scss', 'pcss'] as const;

	a.forEach((format) => {
		console.log(`компилируем ${format}...`);
		const fileName = `index.${format}`;
		const filePath = path.resolve(themePath, fileName);

		const content = compileStyles<PT>(format, theme);

		fs.writeFileSync(filePath, content);

		console.log(`успешно записали файл ${fileName}`);
	});
}

function writeCssVarsSourceFile<PT = PixelifyTheme>(
	themePath: string,
	theme: PT,
	cssWarsTheme: any,
): void {
	console.log(`компилируем источники для css vars тем...`);

	([
		{mode: 'default', fileName: 'index.css'},
		{mode: 'onlyVariables', fileName: 'onlyVariables.css'},
		{mode: 'onlyColors', fileName: 'onlyColors.css'},
		{mode: 'onlyAdaptiveGroups', fileName: 'onlyAdaptiveGroups.css'},
		{mode: 'noSizes', fileName: 'noSizes.css'},
		{mode: 'noColors', fileName: 'noColors.css'},
	] as const).forEach(({mode, fileName}) => {
		const filePath = path.resolve(themePath, fileName);

		const content =
			mode === 'default'
				? `${compileStyles<PT>(
						'css',
						theme,
						'withAdaptiveGroups',
				  )}\n\n${
						compileBreakpointsCssVarsDeclaration(
							cssWarsTheme as any,
						) ?? ''
				  }`
				: compileStyles<PT>('css', theme, mode);

		fs.writeFileSync(filePath, content);

		console.log(`успешно записали файл ${fileName}`);
	});
}

function writeCssVarsSourceMediaFile<T = ThemeCssVarsWide>(
	themePath: string,
	theme: T,
): void {
	console.log(`компилируем медиа переменные для css vars тем...`);

	const fileName = 'onlyMedia.css';
	const filePath = path.resolve(themePath, fileName);

	const content = compileBreakpointsCssVarsDeclaration(theme as any);

	if (content !== null) {
		fs.writeFileSync(filePath, content);

		console.log(`успешно записали файл ${fileName}`);
	}
}

function writeCssVarsJsUtils<T = Theme>(
	themePath: string,
	theme: ThemeCssVarsWide<T>,
): void {
	console.log(`компилируем утилиты для js для css vars тем...`);

	([
		{mode: 'default', fileName: 'onlyVariables.ts'},
		{mode: 'onlyColors', fileName: 'onlyColors.ts'},
	] as const).forEach(({mode, fileName}) => {
		const filePath = path.resolve(themePath, fileName);

		const content = compileGetDeclarationString<T>(theme, mode);

		fs.writeFileSync(filePath, content);

		console.log(`успешно записали файл ${fileName}`);
	});
}

export {
	writeCssVarsJsUtils,
	writeCssVarsSourceFile,
	writeCssVarsSourceMediaFile,
	writeJsonFile,
	writeStyleFiles,
	writeTsFile,
};
