import path from 'node:path';
import { fileURLToPath } from 'node:url';

import fs from 'fs-extra';

import { mergeTokensData } from './mergeTokensData.ts';

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
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const __filename = fileURLToPath(import.meta.url);
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const __dirname = path.dirname(__filename);
	const ROOT_DIR = path.resolve(__dirname, '../..');
	const THEMES_DIR = path.resolve(ROOT_DIR, './dist/themes');
	const RESULT_DATA_FILE = path.resolve(ROOT_DIR, './docs/public/static/data/tokensData.json');

	if (fs.existsSync(RESULT_DATA_FILE)) {
		// eslint-disable-next-line import/no-named-as-default-member
		fs.removeSync(RESULT_DATA_FILE);
	}

	const tokensData: TokensData = {};
	fs.readdirSync(THEMES_DIR).forEach((dir) => {
		const docsRaw = fs.readFileSync(path.resolve(THEMES_DIR, `./${dir}/docs.json`), 'utf-8');
		const tokensRaw = fs.readFileSync(path.resolve(THEMES_DIR, `./${dir}/index.json`), 'utf-8');
		const docs = JSON.parse(docsRaw);
		const tokens = JSON.parse(tokensRaw);

		tokensData[dir] = mergeTokensData(docs, tokens);
	});

	// eslint-disable-next-line import/no-named-as-default-member
	fs.createFileSync(RESULT_DATA_FILE);
	fs.writeFileSync(RESULT_DATA_FILE, JSON.stringify(tokensData, null, '  '), 'utf-8');
}

prepareTokensData();
