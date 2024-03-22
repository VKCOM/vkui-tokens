import { describe, expect, it } from '@jest/globals';

import { unCamelcasify } from './unCamelcasify';

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
	});

	it('shows edge case with wrong convertion when size group with number in the middle of token and number stands next to it', () => {
		// это пример когда работает не так как ожидается, но пока что в существующих токенах
		// нету необходимости в таком преобразовании.
		expect(unCamelcasify('size2Xs3Regular2L')).not.toBe('size2x-3-regular-2l');
		expect(unCamelcasify('size2Xs3Regular2L')).toBe('size2-xs3-regular-2l');
	});
});
