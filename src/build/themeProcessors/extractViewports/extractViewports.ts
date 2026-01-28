import { Breakpoints } from '../../../interfaces/general/tools/index.js';
import { DefaultViewports, ViewportsTuple } from '../../../interfaces/general/tools/viewports.js';
import { ParadigmTheme } from '../../../interfaces/namespaces/paradigm/index.js';

export function extractViewports<
	V extends ViewportsTuple = DefaultViewports,
	T extends Breakpoints<V> = ParadigmTheme<V>,
>({ breakpoints }: T): ViewportsTuple {
	return [...(Object.keys(breakpoints) as (keyof Breakpoints<V>['breakpoints'])[])];
}
