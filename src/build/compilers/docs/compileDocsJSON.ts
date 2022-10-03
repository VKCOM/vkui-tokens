import path from 'path';
import {JSDocTagInfo, Node, Project, SourceFile} from 'ts-morph';

import {capitalize} from '@/build/helpers/capitalize';
import {SpecialTokens, Theme} from '@/interfaces/general';

export interface ThemePropertyDoc {
	tags: string[];
	desc: string;
}

export type ThemeDocs = {
	[name: string]: ThemePropertyDoc;
};

function getTagText(tag: JSDocTagInfo): string {
	return tag
		.getText()
		.map((part) => part.text)
		.join(' ');
}

function resolveDeclaration(declaration: Node): Node[] {
	if (Node.isExportSpecifier(declaration)) {
		// export { A as B } from 'path/to/module.ts'
		const declarations = declaration
			.getNameNode()
			.getSymbol()
			.getDeclarations();
		return resolveDeclarations(declarations);
	}

	return [declaration];
}

function resolveDeclarations(declarations: Node[]): Node[] {
	return declarations.reduce((all, declaration) => {
		return all.concat(resolveDeclaration(declaration));
	}, []);
}

function getExportedTypeDeclarations(
	file: SourceFile,
	typeName: string,
): Node[] {
	const exportSymbol = file.getExportSymbols().find((symbol) => {
		return symbol.getName() === typeName;
	});

	const declarations = exportSymbol.getDeclarations();
	return resolveDeclarations(declarations);
}

function mapJsDocTagsToThemePropertyDoc(
	tags: JSDocTagInfo[],
): ThemePropertyDoc {
	const doc: ThemePropertyDoc = {
		tags: [],
		desc: '',
	};

	tags.forEach((tag) => {
		const tagName = tag.getName();
		const tagText = getTagText(tag);
		if (tagName === 'desc' || tagName === 'description') {
			doc.desc = tagText;
		} else if (tagName === 'tags') {
			doc.tags = tagText.split(',').map((tag) => tag.trim());
		} else if (tagName === 'tag') {
			doc.tags.push(tagText);
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

	return declarations.reduce((all, declaration) => {
		const properties = declaration.getType().getApparentProperties();

		const docs = properties.reduce((all, prop) => {
			all[prop.getName()] = mapJsDocTagsToThemePropertyDoc(
				prop.getJsDocTags(),
			);

			return all;
		}, {});

		return {...all, ...docs};
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
export function compileDocsJSON<T extends SpecialTokens = Theme>(
	theme: T,
): string {
	const themeFilePath = path.resolve(
		`src/interfaces/themes/${theme.themeName}/index.ts`,
	);
	const themeInterfaceName = `Theme${capitalize(theme.themeName)}`;

	const docs = getTypeDocs(themeFilePath, themeInterfaceName);

	return JSON.stringify(docs, null, '  ');
}
