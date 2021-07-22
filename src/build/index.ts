import fs from 'fs-extra';
import path from 'path';

import {
	writeCssVarsJsUtils,
	writeCssVarsSourceFile,
	writeCssVarsSourceMediaFile,
	writeJsonFile,
	writeStyleFiles,
	writeTsFile,
} from '@/build/compilers';
import {expandAll} from '@/build/expandTheme';
import {themes} from '@/themeDescriptions';

import {processCustomMedia} from './themeProcessors/customMedia/customMedia';

const ROOT_DIR = path.resolve(__dirname, '../..');

console.log('Удаляем папку dist...');
export const DIST_PATH = `${ROOT_DIR}/dist`;
export const rmDist = (): void => fs.rmdirSync(DIST_PATH, {recursive: true});

rmDist();

console.log('успешно\n');

console.log('Создаём папку dist...');
fs.mkdirSync(DIST_PATH);
const THEMES_PATH_DIST = path.resolve(DIST_PATH, 'themes');
fs.mkdirSync(THEMES_PATH_DIST);
console.log('успешно\n');

console.log('Копируем директорию src/interfaces...');
const INTERFACES_PATH_SOURCE = path.resolve(ROOT_DIR, 'src/interfaces');
const INTERFACES_PATH_DIST = path.resolve(DIST_PATH, 'interfaces');
fs.copySync(INTERFACES_PATH_SOURCE, INTERFACES_PATH_DIST);
console.log('успешно\n');

console.log('Начинаем процесс компиляции тем...\n');

const expandedThemes = themes.map(expandAll);

console.log('Успешно сформировали объекты тем на основе описания тем\n');

// eslint-disable-next-line max-lines-per-function
expandedThemes.forEach((expandedThemeObject) => {
	console.log('\n----------\n');

	const {
		theme,
		pixelifyTheme,
		cssVarsThemeWide,
		cssVarsTheme,
		pseudoThemeCssVars,
	} = expandedThemeObject;

	const {themeName} = theme;

	console.log(`Начинаем процесс работы над темой ${themeName}\n`);

	console.log('Создаём директорию темы...');
	const themePath = path.resolve(THEMES_PATH_DIST, themeName);
	fs.mkdirSync(themePath);

	console.log('\nНачинаем компиляцию обычных root тем');

	writeJsonFile(themePath, theme, 'root');
	writeTsFile(themePath, theme, 'root');
	writeStyleFiles(themePath, pixelifyTheme);

	console.log('успешно\n');

	console.log('\nНачинаем компиляцию обычных css vars тем');

	console.log('Создаём необходимые директории темы...');
	const cssVarsPath = path.resolve(themePath, 'cssVars');
	fs.mkdirSync(cssVarsPath);

	const cssVarsDeclarationsPath = path.resolve(cssVarsPath, 'declarations');
	fs.mkdirSync(cssVarsDeclarationsPath);

	writeCssVarsSourceFile(
		cssVarsDeclarationsPath,
		pixelifyTheme,
		cssVarsThemeWide,
	);
	writeCssVarsJsUtils(cssVarsDeclarationsPath, cssVarsThemeWide);
	writeCssVarsSourceMediaFile(cssVarsDeclarationsPath, cssVarsThemeWide);

	console.log(
		'начинаем компиляцию объектов темы использующих css переменные',
	);

	const cssVarsThemesPath = path.resolve(cssVarsPath, 'theme');
	fs.mkdirSync(cssVarsThemesPath);

	writeJsonFile(cssVarsThemesPath, cssVarsTheme as any, 'cssVars');
	writeTsFile(cssVarsThemesPath, cssVarsTheme as any, 'cssVars', themeName);

	const cssVarsThemesPathFallbacks = path.resolve(
		cssVarsThemesPath,
		'fallbacks',
	);
	fs.mkdirSync(cssVarsThemesPathFallbacks);
	const pseudoForStyles = {
		...JSON.parse(JSON.stringify(pseudoThemeCssVars)),
		...processCustomMedia(theme as any),
	};
	writeStyleFiles(cssVarsThemesPathFallbacks, pseudoForStyles);

	console.log('успешно\n');
});

console.log('копируем ряд файлов в dist');

fs.mkdirSync(path.resolve(DIST_PATH, 'utils'));
fs.mkdirSync(path.resolve(DIST_PATH, 'themeDescriptions'));
fs.mkdirSync(path.resolve(DIST_PATH, 'utils/common'));
fs.mkdirSync(path.resolve(DIST_PATH, 'build'));
fs.mkdirSync(path.resolve(DIST_PATH, 'build/themeProcessors'));
fs.mkdirSync(path.resolve(DIST_PATH, 'build/helpers'));
fs.mkdirSync(path.resolve(DIST_PATH, 'build/compilers'));

[
	{in: '.npmignore'},
	{in: '.gitignore'},
	{in: 'CHANGELOG.md'},
	{in: 'README.md'},
	{
		in: 'assets',
	},
	{
		in: 'src/themeDescriptions/descriptions.ts',
		out: 'utils/descriptions.ts',
	},
	{
		in: 'src/build/themeProcessors',
		out: 'build/themeProcessors',
	},
	{
		in: 'src/build/helpers',
		out: 'build/helpers',
	},
	{
		in: 'src/build/compilers',
		out: 'build/compilers',
	},
	{
		in: 'src/build/expandTheme.ts',
		out: 'build/expandTheme.ts',
	},
	{
		in: 'src/build/expandTheme.test.ts',
		out: 'build/expandTheme.test.ts',
	},
	{
		in: 'src/themeDescriptions/common',
		out: 'utils/common',
	},
	{
		in: 'src/themeDescriptions/base',
		out: 'themeDescriptions/base',
	},
].forEach((fileName) => {
	const outFileName = fileName.out ?? fileName.in;
	console.log(`${fileName.in} -> dist/${outFileName}`);
	const fileSourcePath = path.resolve(ROOT_DIR, fileName.in);
	const fileDistPath = path.resolve(DIST_PATH, outFileName);

	fs.copySync(fileSourcePath, fileDistPath);
});

console.log('успешно\n');

console.log('записываем корректный package.json');
const packageJsonObject = require(`${ROOT_DIR}/package.json`);
delete packageJsonObject.scripts.prepublishOnly;
fs.writeFileSync(
	`${DIST_PATH}/package.json`,
	JSON.stringify(packageJsonObject, null, '  '),
	'utf-8',
);
console.log('успешно\n');
