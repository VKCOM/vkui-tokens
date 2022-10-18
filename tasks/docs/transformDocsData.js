const path = require('path');
const fs = require('fs-extra');

const ROOT_DIR = path.resolve(__dirname, '../..');
const THEMES_DIR = path.resolve(ROOT_DIR, './dist/themes');
const RESULT_DATA_FILE = path.resolve(
	ROOT_DIR,
	'./docs/public/static/data/docs.json',
);

if (fs.existsSync(RESULT_DATA_FILE)) {
	fs.removeSync(RESULT_DATA_FILE);
}

const resultDocs = {};
fs.readdirSync(THEMES_DIR).forEach((dir) => {
	const raw = fs.readFileSync(path.resolve(THEMES_DIR, `./${dir}/docs.json`));
	resultDocs[dir] = JSON.parse(raw);
});

fs.createFileSync(RESULT_DATA_FILE);
fs.writeFileSync(
	RESULT_DATA_FILE,
	JSON.stringify(resultDocs, null, '  '),
	'utf-8',
);
