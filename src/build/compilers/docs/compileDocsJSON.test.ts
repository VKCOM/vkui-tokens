import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getTypeDocs } from './compileDocsJSON.ts';

describe('compileDocsJSON', () => {
  it('should correct compile documentation with reexported interface', () => {
    const docs = getTypeDocs(
      'src/build/compilers/docs/__test__/testRecursiveReexport.ts',
      'BaseTheme',
    );

    const expected = {
      importedBaseProp: {
        desc: [
          {
            type: 'text',
            text: 'Short desc tag',
          },
        ],
        tags: ['tag1', 'tag2'],
      },
    };
    assert.deepEqual(docs, expected);
  });

  it('should correct compile documentation with jsdoc link', () => {
    const docs = getTypeDocs('src/build/compilers/docs/__test__/testLinks.ts', 'BaseTheme');

    const expected = {
      importedBaseProp: {
        desc: [
          {
            type: 'text',
            text: 'Link with text ',
          },
          {
            type: 'link',
            url: 'https://google.com',
            text: 'Google',
          },
          {
            type: 'text',
            text: '.\nLink without text ',
          },
          {
            type: 'link',
            url: 'https://google.com',
            text: 'https://google.com',
          },
        ],
        tags: [],
      },
    };
    assert.deepEqual(docs, expected);
  });

  it('should correct compile documentation with imports', () => {
    const docs = getTypeDocs('src/build/compilers/docs/__test__/testTheme.ts', 'ThemeTest');

    const expected = {
      prop: {
        desc: [],
        tags: ['empty description'],
      },
      propWithoutDoc: {
        desc: [],
        tags: [],
      },
      localBaseProp: {
        desc: [{ type: 'text', text: 'Empty tags' }],
        tags: [],
      },
      importedBaseProp: {
        desc: [{ type: 'text', text: 'Short desc tag' }],
        tags: ['tag1', 'tag2'],
      },
      derivedProp: {
        desc: [{ type: 'text', text: 'Long description tag' }],
        tags: ['tagListItem1', 'tagListItem2', 'tagListItem3'],
      },
    };
    assert.deepEqual(docs, expected);
  });
});
