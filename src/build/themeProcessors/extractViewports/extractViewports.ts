import {Breakpoints} from '@/interfaces/general/tools';
import {
	DefaultViewports,
	ViewportsTuple,
} from '@/interfaces/general/tools/viewports';
import {ParadigmTheme} from '@/interfaces/namespaces/paradigm';

export function extractViewports<
	V extends ViewportsTuple = DefaultViewports,
	T extends Breakpoints<V> = ParadigmTheme<V>
>({breakpoints}: T): ViewportsTuple {
	return [
		...(Object.keys(
			breakpoints,
		) as (keyof Breakpoints<V>['breakpoints'])[]),
	];
}
