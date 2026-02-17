import { processCustomMedia } from '../../../../build/themeProcessors/customMedia/customMedia.ts';
import type { ColorWithStates } from '../../../../interfaces/general/colors/index.ts';
import type { CustomMediaByViewportUnion } from '../../../../interfaces/general/tools/customMedia.ts';
import type { Adaptive } from '../../../../interfaces/general/tools/index.ts';
import type {
  ViewportsOrdered,
  ViewportsTuple,
} from '../../../../interfaces/general/tools/viewports.ts';

const stringKeys = ['themeName', 'themeNameBase', 'themeInheritsFrom'];

export function isString(token: unknown, key: string): token is string {
  return typeof token === 'string' && stringKeys.includes(key);
}

export function isColor(token: unknown): token is ColorWithStates {
  if (typeof token !== 'object') {
    return false;
  }

  return (token as ColorWithStates).normal !== undefined;
}

export function isGroupToken(token: unknown): token is Record<string, any> {
  if (typeof token !== 'object') {
    return false;
  }

  if (isAdaptiveFlatToken(token)) {
    return false;
  }

  return !isColor(token);
}

export function isAdaptiveFlatToken(token: unknown): token is Adaptive<any> {
  if (typeof token !== 'object') {
    return false;
  }

  return (
    (token as Adaptive<any>).regular !== undefined &&
    typeof (token as Adaptive<any>).regular !== 'object'
  );
}

const allCustomMediaKeys = Object.keys(
  processCustomMedia<ViewportsOrdered>({
    breakpoints: {
      touch: {
        breakpoint: 0,
        adaptiveValue: 'compactX',
      },
      tablet: {
        breakpoint: 768,
        adaptiveValue: 'compact',
      },
      desktopS: {
        breakpoint: 1000,
        adaptiveValue: 'regular',
      },
      desktopM: {
        breakpoint: 1300,
        adaptiveValue: 'large',
      },
      desktopL: {
        breakpoint: 1600,
        adaptiveValue: 'largeX',
      },
      desktopXL: {
        breakpoint: 2200,
        adaptiveValue: 'largeXX',
      },
    },
  }),
);

export function isCustomMediaToken(
  key: unknown,
): key is CustomMediaByViewportUnion<ViewportsTuple> {
  return typeof key === 'string' && allCustomMediaKeys.includes(key);
}
