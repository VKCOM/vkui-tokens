import {lint} from '@/lint/index';

describe('lint', () => {
	test('snapshot', () => {
		expect(lint()).toMatchSnapshot();
	});
});
