import * as assert from 'node:assert/strict';
import { beforeEach, describe, mock, test } from 'node:test';

import { checkAlphaMismatch } from '../../lint/rules/alphaMismatch.ts';

describe('lint rules | alphaMismatch', () => {
  const emit = mock.fn();

  beforeEach(() => {
    emit.mock.resetCalls();
  });

  test('not a color', () => {
    checkAlphaMismatch('sizeBorderRadius', '', emit);
    assert.equal(emit.mock.callCount(), 0);
  });

  test('static color correct opaque', () => {
    checkAlphaMismatch('colorBorder', 'rgb(1,1,1)', emit);
    assert.equal(emit.mock.callCount(), 0);
  });

  test('static color correct transparent', () => {
    checkAlphaMismatch('colorBorderAlpha', 'transparent', emit);
    assert.equal(emit.mock.callCount(), 0);
  });

  test('static color correct rgba', () => {
    checkAlphaMismatch('colorBorderAlpha', 'rgba(1,1,1,.1)', emit);
    assert.equal(emit.mock.callCount(), 0);
  });

  test('static color incorrect', () => {
    checkAlphaMismatch('colorBorder', 'rgba(1,1,1,.1)', emit);
    assert.equal(emit.mock.callCount(), 1);
    assert.deepEqual(emit.mock.calls[0].arguments, [
      'Color token type mismatch: opaque token name but alpha value',
    ]);
  });
});
