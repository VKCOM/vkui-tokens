import { describe, expect, it } from '@jest/globals';

import { convertCamelToSnake } from './convertCamelToSnake';

describe('convertCamelToSnake', () => {
	it('should correctly work with empty string', () => {
		expect(convertCamelToSnake('')).toBe('');
	});

	it('should work with word lower letters', () => {
		expect(convertCamelToSnake('hello')).toBe('hello');
	});

	it('should work with Capitalize world', () => {
		expect(convertCamelToSnake('Hello')).toBe('hello');
	});

	it('should convert two words string', () => {
		expect(convertCamelToSnake('desktopS')).toBe('desktop_s');
	});

	it('should convert two words string with number prefix', () => {
		expect(convertCamelToSnake('desktop3S')).toBe('desktop_3s');
	});

	it('should convert many words string', () => {
		expect(convertCamelToSnake('hello1SWorldMy2XsFriend3Xs')).toBe(
			'hello_1s_world_my_2xs_friend_3xs',
		);
		expect(convertCamelToSnake('sizeGridColumn1X2')).toBe('size_grid_column1_x2');
	});

	it('shows edge case with wrong convertion when size group with number in the middle of token and number stands next to it', () => {
		// это пример когда работает не так как ожидается, но пока что в существующих токенах
		// нету необходимости в таком преобразовании.
		expect(convertCamelToSnake('size2Xs3Regular2L')).not.toBe('size2x_3_regular_2l');
		expect(convertCamelToSnake('size2Xs3Regular2L')).toBe('size2_xs3_regular_2l');
	});

	it('should convert special case 1', () => {
		expect(convertCamelToSnake('octaviusShadowLetterList')).toBe('octavius_shadow_letter_list');
	});
});
