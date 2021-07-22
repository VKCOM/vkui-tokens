import {replacePropDeep} from '@/build/helpers/replacePropDeep';

describe('replacePropDeep', () => {
	const mapReplace = {
		fontFamily: 'lol',
		fontWeight: 666,
	};

	it('should return new object', () => {
		const object = {};

		expect(replacePropDeep(object, mapReplace)).not.toBe(object);
	});

	it('should work with empty', () => {
		const object = {};

		expect(replacePropDeep(object, mapReplace)).toStrictEqual({});
	});

	it('should not touch other vars', () => {
		const object = {opacityDisable: 0.5};

		expect(replacePropDeep(object, mapReplace)).toStrictEqual({
			opacityDisable: 0.5,
		});
	});

	it('should replace flat values', () => {
		const object = {fontFamily: 'kek'};

		expect(replacePropDeep(object, mapReplace)).toStrictEqual({
			fontFamily: 'lol',
		});
	});

	it('should replace complex values', () => {
		const object = {
			fontFamily: 'kek',
			kek: {
				fontWeight: 5302,
			},
		};

		expect(replacePropDeep(object, mapReplace)).toStrictEqual({
			fontFamily: 'lol',
			kek: {
				fontWeight: 666,
			},
		});
	});
});
