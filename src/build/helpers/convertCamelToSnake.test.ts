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
		expect(convertCamelToSnake('size2XsRegular2L')).toBe('size_2xs_regular_2l');
	});
	it('should convert many words string', () => {
		expect(convertCamelToSnake('fontCaption2Caps')).toBe('font_caption2_caps');
	});
	it('should convert many words string', () => {
		expect(convertCamelToSnake('searchCaption2MailSans')).toBe('search_caption2_mail_sans');
	});

	it('should convert special case 1', () => {
		expect(convertCamelToSnake('octaviusShadowLetterList')).toBe('octavius_shadow_letter_list');
	});
});
