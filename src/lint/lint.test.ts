import { describe, expect, test } from '@jest/globals';

import { lint } from '../lint/index.ts';

describe('lint', () => {
	test('snapshot', () => {
		expect(lint()).toMatchSnapshot();
	});
});
