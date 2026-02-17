import type { Adaptive, Breakpoints } from '../../../../interfaces/general/tools/index.ts';
import type {
  DefaultViewports,
  Viewports,
  ViewportsTuple,
} from '../../../../interfaces/general/tools/viewports.ts';

export function findViewportByAdaptivityState<Vt extends ViewportsTuple = DefaultViewports>(
  breakpoints: Partial<Breakpoints<Vt>['breakpoints']>,
  adaptivityState: keyof Adaptive<any>,
): Viewports {
  return (Object.keys(breakpoints) as Viewports[]).find(
    (viewport) => breakpoints[viewport].adaptiveValue === adaptivityState,
  );
}
