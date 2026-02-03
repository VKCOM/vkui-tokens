import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getStateFunctions } from './getStateFunctions.ts';

describe('getStateFunctions', () => {
  const testThemeData = {
    colorsScheme: 'light',
    toneValueActive: 0.08,
    opacityDisable: 0.48,
    toneValueFocus: 0.08,
    toneValueHover: 0.04,
  } as const;

  const testStateFunctions = getStateFunctions(testThemeData);

  it('should return specific props', () => {
    assert.ok('stateHover' in testStateFunctions);
    assert.ok('stateActive' in testStateFunctions);
    assert.ok('stateFocus' in testStateFunctions);
    assert.ok('stateDisabled' in testStateFunctions);
  });

  it('should have correct types', () => {
    assert.equal(typeof testStateFunctions.stateHover, 'function');
    assert.equal(typeof testStateFunctions.stateActive, 'function');
    assert.equal(typeof testStateFunctions.stateFocus, 'function');
    assert.equal(typeof testStateFunctions.stateDisabled, 'function');
  });

  describe('stateHover', () => {
    it('should correctly work with transparent', () => {
      assert.equal(testStateFunctions.stateHover('transparent'), 'rgba(#00103D,0.04)');
    });

    it('should correct create stateHover with custom color', () => {
      assert.equal(testStateFunctions.stateHover('#f00'), '#F50102');
    });
  });

  describe('stateActive', () => {
    it('should correctly work with transparent', () => {
      assert.equal(testStateFunctions.stateActive('transparent'), 'rgba(#00103D,0.08)');
    });

    it('should correct create stateActive with custom color', () => {
      assert.equal(testStateFunctions.stateActive('#f00'), '#EB0105');
    });
  });

  describe('stateFocus', () => {
    it('should correctly work with transparent', () => {
      assert.equal(testStateFunctions.stateFocus('transparent'), 'rgba(#00103D,0.08)');
    });

    it('should correct create stateFocus with custom color', () => {
      assert.equal(testStateFunctions.stateFocus('#f00'), '#EB0105');
    });
  });

  describe('stateDisabled', () => {
    it('should correct create stateDisabled with custom color', () => {
      assert.equal(testStateFunctions.stateDisabled('#f00'), 'rgba(255, 0, 0, 0.48)');
    });
  });
});
