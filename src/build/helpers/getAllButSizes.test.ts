import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getAllButSizes } from '../../build/helpers/getAllButSizes.ts';

describe('getAllButSizes', () => {
  it('should filter out tokens that start with "size", "font" or are a size helper', () => {
    const result = getAllButSizes(
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
      colorBackground: '#FFF',
      xxxTokenXxx: '8',
      octaviusColorBackground: '#ACA',
    };
    assert.deepEqual(result, expected);
  });
});
