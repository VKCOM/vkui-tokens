import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getAllButColors } from '../../build/helpers/getAllButColors.ts';

describe('getAllButColors', () => {
  it('should filter out tokens that start with "color"', () => {
    const result = getAllButColors(
      {
        colorBackground: '#FFF',
        sizePaddingBase: 20,
        fontText: {
          fontFamily: 'Comic Sans',
        },
        x10: 5,
        xxxTokenXxx: '8',
        octaviusColorBackground: '#ACA',
        octaviusSizePaddingBase: 8,
      },
      'octavius',
    );
    const expected = {
      sizePaddingBase: 20,
      fontText: {
        fontFamily: 'Comic Sans',
      },
      x10: 5,
      xxxTokenXxx: '8',
      octaviusSizePaddingBase: 8,
    };
    assert.deepEqual(result, expected);
  });
});
