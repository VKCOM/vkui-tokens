import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { overrideOnlyNeeded } from './overrideOnlyNeeded.ts';

describe('overrideOnlyNeeded', () => {
  it('should return new object', () => {
    const target = { a: 2, b: 3 };

    assert.notEqual(overrideOnlyNeeded(target, {}), target);
    assert.deepEqual(overrideOnlyNeeded(target, {}), target);
  });

  it('should not add new properties', () => {
    const target = { a: 2, b: 3 };
    const override = { c: 5 };

    const result = overrideOnlyNeeded(target, override);

    assert.equal((result as any).c, undefined);
    assert.deepEqual(result, target);
  });

  it('should override props', () => {
    const target = { a: 2, b: 3 };
    const override = { a: 32 };

    const result = overrideOnlyNeeded(target, override);

    assert.equal(result.a, 32);
    assert.deepEqual(result, { a: 32, b: 3 });
  });
});
