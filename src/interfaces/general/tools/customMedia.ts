import { GetLast, GetLength } from './utils.js';
import { ViewportsTuple } from './viewports.js';

export type CustomMediaByViewportUnion<Vt extends ViewportsTuple> =
	| `width${Capitalize<GetLength<Vt> extends 1 ? never : Vt[number]>}`
	| `widthFrom${Capitalize<Exclude<Vt[number], Vt[0]>>}`
	| `widthTo${Capitalize<Exclude<Vt[number], GetLast<Vt>>>}`;

export type CustomMediaByViewport<Vt extends ViewportsTuple> = {
	[key in CustomMediaByViewportUnion<Vt>]: string;
};
