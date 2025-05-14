import path from 'node:path';

import { JSDocTagInfo, Node, Project, SourceFile } from 'ts-morph';

import { capitalize } from '@/build/helpers/capitalize';
import { SpecialTokens, Theme } from '@/interfaces/general';

export type Description =
	| {
			type: 'text';
			text: string;
	  }
	| {
			type: 'link';
			url: string;
			text: string;
	  };

export interface ThemePropertyDoc {
	tags: string[];
	desc: Description[];
}

export type ThemeDocs = {
	[name: string]: ThemePropertyDoc;
};

function getTagDescription(tag: JSDocTagInfo): Description[] {
	return tag
		.getText()
		.map<Description | null>((part) => {
			switch (part.kind) {
				case 'text':
					return {
						type: 'text',
						text: part.text,
					};
				case 'linkText': {
					const [url, urlText] = part.text.split(' ');
					if (!url) {
						throw new Error(
							'[desc] Ожидаемый формат ссылки в JSDoc `{@link url urlText}` или `{@link url}`',
						);
					}
					return {
						url,
						type: 'link',
						text: urlText || url,
					};
				}
				case 'link':
				default:
					return null;
			}
		})
		.filter((i) => i !== null);
}

function getTagText(tag: JSDocTagInfo): string {
	return tag
		.getText()
		.map((part) => part.text)
		.join(' ');
}

function resolveDeclaration(declaration: Node): Node[] {
	if (Node.isExportSpecifier(declaration)) {
		// export { A as B } from 'path/to/module.ts'
		const declarations = declaration.getNameNode().getSymbol().getDeclarations();
		return resolveDeclarations(declarations);
	}

	return [declaration];
}

function resolveDeclarations(declarations: Node[]): Node[] {
	return declarations.reduce((all, declaration) => {
		return all.concat(resolveDeclaration(declaration));
	}, []);
}

function getExportedTypeDeclarations(file: SourceFile, typeName: string): Node[] {
	const exportSymbol = file.getExportSymbols().find((symbol) => {
		return symbol.getName() === typeName;
	});

	const declarations = exportSymbol.getDeclarations();
	return resolveDeclarations(declarations);
}

function mapJsDocTagsToThemePropertyDoc(tags: JSDocTagInfo[]): ThemePropertyDoc {
	const doc: ThemePropertyDoc = {
		tags: [],
		desc: [],
	};

	tags.forEach((tag) => {
		const tagName = tag.getName();
		if (tagName === 'desc' || tagName === 'description') {
			doc.desc = getTagDescription(tag);
		} else if (tagName === 'tags') {
			const docTags = getTagText(tag);
			doc.tags = docTags.split(',').map((tag) => tag.trim());
		} else if (tagName === 'tag') {
			const docTag = getTagText(tag);
			doc.tags.push(docTag);
		}
	});

	return doc;
}

export function getTypeDocs(filePath: string, name: string): ThemeDocs {
	const project = new Project({
		tsConfigFilePath: 'tsconfig.json',
		skipAddingFilesFromTsConfig: true,
	});

	const file = project.addSourceFileAtPath(filePath);
	const declarations = getExportedTypeDeclarations(file, name);

	return declarations.reduce((prevDocs, declaration) => {
		const rawProperties = declaration.getType().getApparentProperties();
		const parsedProperties = rawProperties
			.reduce<[string, ThemePropertyDoc][]>((acc, prop) => {
				acc.push([prop.getName(), mapJsDocTagsToThemePropertyDoc(prop.getJsDocTags())]);
				return acc;
			}, [])
			.sort(([a], [b]) => a.localeCompare(b));

		const docs = parsedProperties.reduce((acc, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {});

		return { ...prevDocs, ...docs };
	}, {});
}

/**
 * Компилирует документацию для полей интерфейса темы и возвращает сериализованный JSON
 *
 * Собирает из jsDoc комментариев над полями интерфейса темы следующего следующие теги:
 * 	 - @desc/@description <desc> – описание поля
 * 	 - @tag <tag> – добавить тег (можно использовать несколько раз)
 * 	 - @tags <tag>, <tag>, ... – задать список тегов, разделённых запятой
 *
 * По итогу компиляции формирует JSON вида:
 * 	 {
 * 	   "<property>": {
 * 	   	 "desc": "<desc>",
 * 	     "tags": ["<tag>", "<tag>", ...]
 * 	   },
 * 	   ...
 * 	 }
 *
 * Умеет работать с выражениями вида:
 * 	 - export interface MyTheme { ... }
 * 	 - interface BaseTheme1 { ... }
 * 	   interface BaseTheme2 { ... }
 * 	 	 export interface MyTheme extends BaseTheme1, BaseTheme2 { ... }
 * 	 - import { AnotherBaseTheme } from 'path/to/baseTheme.ts'
 *   	 import { MyTheme, BaseTheme } from 'path/to/myTheme.ts'
 * 	   export interface MyDarkTheme extends MyTheme, BaseTheme, AnotherBaseTheme
 * 	 - export { BaseTheme as MyTheme } from 'path/to/baseTheme.ts'
 */
export function compileDocsJSON<T extends SpecialTokens = Theme>(theme: T): string {
	const themeFilePath = path.resolve(`src/interfaces/themes/${theme.themeName}/index.ts`);
	const themeInterfaceName = `Theme${capitalize(theme.themeName)}`;

	const docs = getTypeDocs(themeFilePath, themeInterfaceName);

	return JSON.stringify(docs, null, '  ');
}
