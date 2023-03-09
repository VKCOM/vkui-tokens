import { getTypeDocs } from './compileDocsJSON';

describe('compileDocsJSON', () => {
	it('should correct compile documentation with reexported interface', () => {
		const docs = getTypeDocs(
			'src/build/compilers/docs/__test__/testRecursiveReexport.ts',
			'BaseTheme',
		);

		expect(docs).toEqual({
			importedBaseProp: {
				desc: 'Short desc tag',
				tags: ['tag1', 'tag2'],
			},
		});
	});

	it('should correct compile documentation with imports', () => {
		const docs = getTypeDocs('src/build/compilers/docs/__test__/testTheme.ts', 'ThemeTest');

		expect(docs).toEqual({
			prop: {
				desc: '',
				tags: ['empty description'],
			},
			propWithoutDoc: {
				desc: '',
				tags: [],
			},
			localBaseProp: {
				desc: 'Empty tags',
				tags: [],
			},
			importedBaseProp: {
				desc: 'Short desc tag',
				tags: ['tag1', 'tag2'],
			},
			derivedProp: {
				desc: 'Long description tag',
				tags: ['tagListItem1', 'tagListItem2', 'tagListItem3'],
			},
		});
	});
});
