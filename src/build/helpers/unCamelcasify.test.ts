import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { unCamelcasify } from './unCamelcasify.ts';

describe('unCamelcasify', () => {
  it('should correctly work with empty string', () => {
    assert.equal(unCamelcasify(''), '');
  });

  it('should work with Capitalize world', () => {
    assert.equal(unCamelcasify('Hello'), 'hello');
  });

  it('should convert two words string', () => {
    assert.equal(unCamelcasify('desktopS'), 'desktop-s');
  });

  it('should convert two words string with number prefix', () => {
    assert.equal(unCamelcasify('desktop3S'), 'desktop-3s');
  });

  it('should convert many words string', () => {
    assert.equal(unCamelcasify('hello1SWorldMy2XsFriend3Xs'), 'hello-1s-world-my-2xs-friend-3xs');
    assert.equal(unCamelcasify('sizeGridColumn1X2'), 'size-grid-column1-x2');
    assert.notEqual(unCamelcasify('size2Xs3Regular2L'), 'size-2xs-3regular-2l');
  });
});
