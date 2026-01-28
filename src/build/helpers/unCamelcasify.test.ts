import { describe, expect, it } from '@jest/globals';

import { unCamelcasify } from './unCamelcasify.js';

describe('unCamelcasify', () => {
	it('should correctly work with empty string', () => {
		expect(unCamelcasify('')).toBe('');
	});

	it('should work with Capitalize world', () => {
		expect(unCamelcasify('Hello')).toBe('hello');
	});

	it('should convert two words string', () => {
		expect(unCamelcasify('desktopS')).toBe('desktop-s');
	});

	it('should convert two words string with number prefix', () => {
		expect(unCamelcasify('desktop3S')).toBe('desktop-3s');
	});

	it('should convert many words string', () => {
		expect(unCamelcasify('hello1SWorldMy2XsFriend3Xs')).toBe('hello-1s-world-my-2xs-friend-3xs');
		expect(unCamelcasify('sizeGridColumn1X2')).toBe('size-grid-column1-x2');
		expect(unCamelcasify('size2Xs3Regular2L')).not.toBe('size-2x-3regular-2l');
	});
});
