import { describe, expect, it } from '@jest/globals';

import { overwriteFromFigmaJSON } from './overwriteFromFigmaJSON';

const originalLightTokens = {
	colorBackgroundAccent: '#000000',
	colorSearchFieldBackground: '#111111',
	colorHeaderBackground: '#222222',
	colorNotSpecifiedInFigmaJSON: '#333333',
};

const figmaJSON = {
	appearance: {
		backgroundAccent: {
			light: '#2688eb',
			dark: '#529ef4',
		},
		backgroundHeaderBackground: {
			light: '#ffffff',
			dark: '#191919',
		},
		otherSearchFieldBackground: {
			light: '#ebebeb',
			dark: '#373737',
		},
		colorNotSpecifiedInOriginalTokens: {
			light: '#212121',
			dark: '#e3e3e3',
		},
	},
};

const overwrittenLightTokens = {
	colorBackgroundAccent: '#2688eb',
	colorSearchFieldBackground: '#ebebeb',
	colorHeaderBackground: '#ffffff',
};

describe('overwriteFromFigmaJSON', () => {
	it('should leave only overwritten tokens', () => {
		expect(
			overwriteFromFigmaJSON(originalLightTokens, 'appearance', 'light', figmaJSON),
		).toStrictEqual(overwrittenLightTokens);
	});
});
