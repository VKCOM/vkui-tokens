import * as assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { alias, gradient, namedAlias, staticRef } from '../../build/helpers/tokenHelpers.ts';

describe('tokenHelpers', () => {
  describe('alias', () => {
    test('maps token to another token', () => {
      const result = alias('sizeArrow')({ sizeArrow: { regular: 10 } });
      assert.deepEqual(result, {
        regular: 10,
      });
    });
  });

  describe('namedAlias', () => {
    test('maps token to another token, preserving name', () => {
      const result = namedAlias('sizeArrow')({ sizeArrow: { regular: 10 } });
      assert.deepEqual(result, [
        'sizeArrow',
        {
          regular: 10,
        },
      ]);
    });
  });

  describe('staticRef', () => {
    test('returns static value', () => {
      assert.deepEqual(staticRef(10), 10);
    });

    test('fails for dynamic value', () => {
      assert.throws(() => staticRef(alias('sizeArrow')), {
        name: 'Error',
        message: 'Cannot use callable token value in static ref',
      });
    });
  });

  describe('gradient', () => {
    test('calculates gradient string from 1 color with value', () => {
      const gradientToken = gradient('blue');
      const gradientValue = gradientToken({});

      assert.equal(
        gradientValue,
        [
          'rgba(0, 0, 255, 0) 0%',
          'rgba(0, 0, 255, 0.05) 15%',
          'rgba(0, 0, 255, 0.2) 30%',
          'rgba(0, 0, 255, 0.8) 70%',
          'rgba(0, 0, 255, 0.95) 85%',
          'rgba(0, 0, 255, 1) 100%',
        ].join(', '),
      );
    });

    test('calculates gradient string from 1 color with variable', () => {
      const gradientToken = gradient(namedAlias('colorIconPrimary'));
      const gradientValue = gradientToken({ colors: { colorIconPrimary: 'blue' } as any });

      assert.equal(
        gradientValue,
        [
          'rgba(0, 0, 255, 0) 0%',
          'rgba(0, 0, 255, 0.05) 15%',
          'rgba(0, 0, 255, 0.2) 30%',
          'rgba(0, 0, 255, 0.8) 70%',
          'rgba(0, 0, 255, 0.95) 85%',
          'var(--vkui--color_icon_primary, rgba(0, 0, 255, 1)) 100%',
        ].join(', '),
      );
    });

    test('calculates gradient string from 2 colors', () => {
      const gradientToken = gradient(namedAlias('colorIconPrimary'), 'transparent');
      const gradientValue = gradientToken({ colors: { colorIconPrimary: 'blue' } as any });

      assert.equal(
        gradientValue,
        'var(--vkui--color_icon_primary, rgba(0, 0, 255, 1)) 0%, rgba(0, 0, 0, 0) 100%',
      );
    });

    test('calculates gradient string from 3 colors', () => {
      const gradientToken = gradient('blue', 'black', 'red');
      const gradientValue = gradientToken({});

      assert.equal(
        gradientValue,
        'rgba(0, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(255, 0, 0, 1) 100%',
      );
    });
  });
});
