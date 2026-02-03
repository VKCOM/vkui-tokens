import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { compileJSON } from './compileJSON.ts';

describe('compileJSON', () => {
  it('should correct stringify', () => {
    const testData = {
      colorState: {
        normal: '#00103D',
      },
      toneValueHover: 0.04,
    };

    const expected =
      '{\n\t"colorState": {\n\t\t"normal": "#00103D"\n\t},\n\t"toneValueHover": 0.04\n}';
    assert.equal(compileJSON(testData), expected);
  });
});
