import type { Breakpoints } from '../../../interfaces/general/tools/index.ts';
import type {
  DefaultViewports,
  ViewportsTuple,
} from '../../../interfaces/general/tools/viewports.ts';
import type { ParadigmTheme } from '../../../interfaces/namespaces/paradigm/index.ts';

export function extractViewports<
  V extends ViewportsTuple = DefaultViewports,
  T extends Breakpoints<V> = ParadigmTheme<V>,
>({ breakpoints }: T): ViewportsTuple {
  return [...(Object.keys(breakpoints) as (keyof Breakpoints<V>['breakpoints'])[])];
}
