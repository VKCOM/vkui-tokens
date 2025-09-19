import 'highlight.js/styles/github.css';

import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';

interface HighlightLanguage {
	name: string;
	lib: (...args: any) => any;
}

const languages: HighlightLanguage[] = [
	{ name: 'typescript', lib: typescript },
	{ name: 'json', lib: json },
	{ name: 'css', lib: css },
];

const codeSelector = languages.map((language) => `code.language-${language.name}`).join(', ');

export function highlightConfig() {
	return { languages, codeSelector } as const;
}
