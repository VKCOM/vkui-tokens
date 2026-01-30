import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { replacePropDeep } from '../../build/helpers/replacePropDeep.ts';

describe('replacePropDeep', () => {
	const mapReplace = {
		fontFamily: 'lol',
		fontWeight: 666,
	};

	it('should return new object', () => {
		const object = {};

		assert.notEqual(replacePropDeep(object, mapReplace), object);
	});

	it('should work with empty', () => {
		const object = {};

		assert.deepEqual(replacePropDeep(object, mapReplace), {});
	});

	it('should not touch other vars', () => {
		const object = { opacityDisable: 0.5 };

		assert.deepEqual(replacePropDeep(object, mapReplace), {
			opacityDisable: 0.5,
		});
	});

	it('should replace flat values', () => {
		const object = { fontFamily: 'kek' };

		assert.deepEqual(replacePropDeep(object, mapReplace), {
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

		assert.deepEqual(replacePropDeep(object, mapReplace), {
			fontFamily: 'lol',
			kek: {
				fontWeight: 666,
			},
		});
	});
});
