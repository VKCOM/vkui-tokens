import * as assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { overlayColors } from '../../../build/themeProcessors/expandColors/overlayColors.ts';

describe('overlayColors', () => {
  test('overlay transparent on opaque in light color scheme', () => {
    const result = overlayColors('rgb(0,0,0)', 'rgba(255,255,255,.5)')({ colorsScheme: 'light' });
    assert.deepEqual(result, {
      normal: '#404040',
      hover: '#4D4D4D',
      active: '#5C5C5C',
    });
  });

  test('overlay transparent on opaque in dark color scheme', () => {
    const result = overlayColors('rgb(0,0,0)', 'rgba(255,255,255,.5)')({ colorsScheme: 'dark' });
    assert.deepEqual(result, {
      normal: '#404040',
      hover: '#4D4D4D',
      active: '#5C5C5C',
    });
  });

  test('overlay opaque on opaque', () => {
    const result = overlayColors('rgb(0,0,0)', 'rgb(255,255,255)')({ colorsScheme: 'light' });
    assert.deepEqual(result, {
      normal: '#FFFFFF',
      hover: '#F5F5F7',
      active: '#EBECEF',
    });
  });

  test('overlay transparent custom states on opaque', () => {
    const result = overlayColors('rgb(0,0,0)', {
      normal: 'rgba(255,255,255,.5)',
      hover: 'rgba(255,255,255,.5)',
      active: 'rgba(255,255,255,.5)',
    })({ colorsScheme: 'light' });
    assert.deepEqual(result, {
      normal: '#404040',
      hover: '#404040',
      active: '#404040',
    });
  });
});
