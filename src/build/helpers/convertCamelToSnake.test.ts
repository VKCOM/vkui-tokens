import {convertCamelToSnake} from './convertCamelToSnake';

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

	it('should convert many words string', () => {
		expect(convertCamelToSnake('helloWorldMyFriend')).toBe(
			'hello_world_my_friend',
		);
	});

	it('should convert special case 1', () => {
		expect(convertCamelToSnake('octaviusShadowLetterList')).toBe(
			'octavius_shadow_letter_list',
		);
	});
});
