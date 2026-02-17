import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getRGBA, toneOpacity } from './cssHelpers.ts';

describe('cssHelpers', () => {
  describe('getRGBA', () => {
    it('should work with red', () => {
      assert.equal(getRGBA('#f00000', 0.5), 'rgba(240, 0, 0, 0.5)');
    });

    it('should work with yellow', () => {
      assert.equal(getRGBA('#ffff00', 0.2), 'rgba(255, 255, 0, 0.2)');
    });
  });

  describe('toneOpacity', () => {
    it('should work with string', () => {
      assert.equal(toneOpacity('#f00000', 0.5), 'rgba(240, 0, 0, 0.5)');
    });

    it('should work with ColorWithStates', () => {
      assert.equal(
        toneOpacity(
          {
            normal: '#f00000',
            hover: '#f00000',
            active: '#f00000',
          },
          0.5,
        ),
        'rgba(240, 0, 0, 0.5)',
      );
    });
  });
});
