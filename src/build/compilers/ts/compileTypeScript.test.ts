import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { compileTypeScript } from '../../../build/compilers/ts/compileTypeScript.ts';

describe('compileTypeScript', () => {
  const testData = {
    themeName: 'base',
  };

  it('should work', () => {
    const expected = `import { $$InterfaceName$$ } from '$$InterfaceURL$$';

const theme: $$InterfaceName$$ = {
	"themeName": "base"
};

export default theme;
export { $$InterfaceName$$ };
`;
    assert.equal(compileTypeScript(testData), expected);
  });
});
