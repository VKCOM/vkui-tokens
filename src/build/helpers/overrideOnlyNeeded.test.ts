import { describe, expect, it } from '@jest/globals';

import { overrideOnlyNeeded } from './overrideOnlyNeeded';

describe('overrideOnlyNeeded', () => {
	it('should return new object', () => {
		const target = { a: 2, b: 3 };

		expect(overrideOnlyNeeded(target, {})).not.toBe(target);
		expect(overrideOnlyNeeded(target, {})).toStrictEqual(target);
	});

	it('should not add new properties', () => {
		const target = { a: 2, b: 3 };
		const override = { c: 5 };

		const result = overrideOnlyNeeded(target, override);

		expect((result as any).c).toBeUndefined();
		expect(result).toStrictEqual(target);
	});

	it('should override props', () => {
		const target = { a: 2, b: 3 };
		const override = { a: 32 };

		const result = overrideOnlyNeeded(target, override);

		expect(result.a).toBe(32);
		expect(result).toStrictEqual({ a: 32, b: 3 });
	});
});
