const path = require('path');
const fs = require('fs-extra');

type RegularCompactObj = {
	regular?: string | number;
	compact?: string | number;
};

type TokenValueObject = Record<string, string | number | RegularCompactObj>;

type TokenValue = string | number | TokenValueObject;

type Token = {
	tags: Array<string>;
	desc: string;
	value: TokenValue;
};

type Tokens = Record<string, Token>;
type TokensData = Record<string, Tokens>;

const isObject = (value: unknown): value is Record<string, unknown> =>
	Object.prototype.toString.call(value) === '[object Object]' &&
	!Array.isArray(value) &&
	value !== null;

const transformRegularCompactObj = (
	value: RegularCompactObj,
): Record<string, RegularCompactObj> => {
	const result: Record<string, RegularCompactObj> = {};
	const regularKeys = value.regular ? Object.keys(value.regular) : [];
	const compactKeys = value.compact ? Object.keys(value.compact) : [];
	const uniqKeys = regularKeys
		.concat(compactKeys)
		.filter((key, index, arr) => arr.indexOf(key) === index);
	uniqKeys.forEach((key) => {
		const regular = value?.regular?.[key];
		const compact = value?.compact?.[key];
		if (regular === compact) {
			result[key] = regular;
			return;
		}
		result[key] = {};
		if (regular) {
			result[key].regular = regular;
		}
		if (compact) {
			result[key].compact = compact;
		}
	});
	return result;
};

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

		const result: {[key: string]: Token} = {};
		Object.keys(docs).forEach((docsKey) => {
			const value = tokens[docsKey];

			if (!value) {
				return;
			}

			result[docsKey] = {
				...docs[docsKey],
				value,
			};

			if (
				isObject(value) &&
				(isObject(value.regular) || isObject(value.compact))
			) {
				result[docsKey].value = transformRegularCompactObj(value);
			}
		});
		tokensData[dir] = result;
	});

	fs.createFileSync(RESULT_DATA_FILE);
	fs.writeFileSync(
		RESULT_DATA_FILE,
		JSON.stringify(tokensData, null, '  '),
		'utf-8',
	);
}

prepareTokensData();
