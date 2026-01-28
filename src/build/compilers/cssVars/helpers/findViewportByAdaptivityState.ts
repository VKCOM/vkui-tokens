import { Adaptive, Breakpoints } from '../../../../interfaces/general/tools/index.js';
import {
	DefaultViewports,
	Viewports,
	ViewportsTuple,
} from '../../../../interfaces/general/tools/viewports.js';

export function findViewportByAdaptivityState<Vt extends ViewportsTuple = DefaultViewports>(
	breakpoints: Partial<Breakpoints<Vt>['breakpoints']>,
	adaptivityState: keyof Adaptive<any>,
): Viewports {
	return (Object.keys(breakpoints) as Viewports[]).find(
		(viewport) => breakpoints[viewport].adaptiveValue === adaptivityState,
	);
}
