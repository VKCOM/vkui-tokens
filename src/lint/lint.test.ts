import { describe, test } from 'node:test';

import { lint } from '../lint/index.ts';

describe('lint', () => {
  test('snapshot', (t) => {
    t.assert.snapshot(lint());
  });
});
