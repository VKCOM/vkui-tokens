import {mergeTokensData} from './mergeTokensData';

const path = require('path');
const fs = require('fs-extra');

export type StrNum = string | number;

export type RegularCompactObj<Type = StrNum> = {
	regular?: Type;
	compact?: Type;
};

type TokenValueObject = Record<string, StrNum | RegularCompactObj>;

type TokenValue = StrNum | TokenValueObject;

export type Token = {
	tags: Array<string>;
	desc: string;
	value: TokenValue;
};

export type Tokens = Record<string, Token>;
type TokensData = Record<string, Tokens>;

function prepareTokensData() {
	const ROOT_DIR = path.resolve(__dirname, '../..');
	const THEMES_DIR = path.resolve(ROOT_DIR, './dist/themes');
	const RESULT_DATA_FILE = path.resolve(
		ROOT_DIR,
		'./docs/public/static/data/tokensData.json',
	);

	if (fs.existsSync(RESULT_DATA_FILE)) {
		fs.removeSync(RESULT_DATA_FILE);
	}

	const tokensData: TokensData = {};
	fs.readdirSync(THEMES_DIR).forEach((dir) => {
		const docsRaw = fs.readFileSync(
			path.resolve(THEMES_DIR, `./${dir}/docs.json`),
		);
		const tokensRaw = fs.readFileSync(
			path.resolve(THEMES_DIR, `./${dir}/index.json`),
		);
		const docs = JSON.parse(docsRaw);
		const tokens = JSON.parse(tokensRaw);

		tokensData[dir] = mergeTokensData(docs, tokens);
	});

	fs.createFileSync(RESULT_DATA_FILE);
	fs.writeFileSync(
		RESULT_DATA_FILE,
		JSON.stringify(tokensData, null, '  '),
		'utf-8',
	);
}

prepareTokensData();
