import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { extractViewports } from '../../../build/themeProcessors/extractViewports/extractViewports.ts';
import type { Breakpoints } from '../../../interfaces/general/tools/index.ts';
import type { DefaultViewports } from '../../../interfaces/general/tools/viewports.ts';

describe('extractViewports', () => {
  it('should work without breakpoints: touch', () => {
    type TestViewport = ['touch'];

    const testBreakpoints: Breakpoints<TestViewport> = {
      breakpoints: {
        touch: {
          adaptiveValue: 'regular',
          breakpoint: 0,
        },
      },
    };

    assert.deepEqual(extractViewports<TestViewport, Breakpoints<TestViewport>>(testBreakpoints), [
      'touch',
    ]);
  });

  it('should work without breakpoints: desktopM', () => {
    type TestViewport = ['desktopM'];

    const testBreakpoints: Breakpoints<TestViewport> = {
      breakpoints: {
        desktopM: {
          adaptiveValue: 'regular',
          breakpoint: 0,
        },
      },
    };

    assert.deepEqual(extractViewports<TestViewport, Breakpoints<TestViewport>>(testBreakpoints), [
      'desktopM',
    ]);
  });

  it('should work with default breakpoints', () => {
    type TestViewport = DefaultViewports;

    const testBreakpoints: Breakpoints<TestViewport> = {
      breakpoints: {
        touch: {
          breakpoint: 0,
          adaptiveValue: 'compact',
        },
        desktopS: {
          breakpoint: 768,
          adaptiveValue: 'regular',
        },
      },
    };

    assert.deepEqual(extractViewports<TestViewport, Breakpoints<TestViewport>>(testBreakpoints), [
      'touch',
      'desktopS',
    ]);
  });

  it('should work with Custom breakpoints', () => {
    type TestViewport = ['touch', 'desktopS', 'desktopM', 'desktopL'];

    const testBreakpoints: Breakpoints<TestViewport> = {
      breakpoints: {
        touch: {
          breakpoint: 0,
          adaptiveValue: 'compact',
        },
        desktopS: {
          breakpoint: 400,
          adaptiveValue: 'regular',
        },
        desktopM: {
          breakpoint: 500,
          adaptiveValue: 'large',
        },
        desktopL: {
          breakpoint: 700,
          adaptiveValue: 'largeX',
        },
      },
    };

    assert.deepEqual(extractViewports<TestViewport, Breakpoints<TestViewport>>(testBreakpoints), [
      'touch',
      'desktopS',
      'desktopM',
      'desktopL',
    ]);
  });
});
