import {unCamelcasify} from './unCamelcasify';

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

	it('should convert many words string', () => {
		expect(unCamelcasify('helloWorldMyFriend')).toBe(
			'hello-world-my-friend',
		);
	});
});
