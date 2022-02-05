import {processCustomMedia} from '@/build/themeProcessors/customMedia/customMedia';
import {ColorWithStates} from '@/interfaces/general/colors';
import {Adaptive} from '@/interfaces/general/tools';
import {CustomMediaByViewportUnion} from '@/interfaces/general/tools/customMedia';
import {
	ViewportsOrdered,
	ViewportsTuple,
} from '@/interfaces/general/tools/viewports';

const stringKeys = ['themeName', 'themeNameBase', 'inheritsFrom'];

export function isString(token: any, key: string): token is string {
	return typeof token === 'string' && stringKeys.includes(key);
}

export function isColor(token: any): token is ColorWithStates {
	if (typeof token !== 'object') {
		return false;
	}

	return token.normal !== undefined;
}

export function isGroupToken(token: any): token is Record<string, any> {
	if (typeof token !== 'object') {
		return false;
	}

	if (isAdaptiveFlatToken(token)) {
		return false;
	}

	return !isColor(token);
}

export function isAdaptiveFlatToken(token: any): token is Adaptive<any> {
	if (typeof token !== 'object') {
		return false;
	}

	return token.regular !== undefined && typeof token.regular !== 'object';
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
	key: any,
): key is CustomMediaByViewportUnion<ViewportsTuple> {
	return typeof key === 'string' && allCustomMediaKeys.includes(key);
}
