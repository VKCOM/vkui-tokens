import {checkAlphaMismatch} from '@/lint/rules/alphaMismatch';

describe('lint rules | alphaMismatch', () => {
	const emit = jest.fn();

	beforeEach(() => {
		emit.mockClear();
	});

	test('not a color', () => {
		checkAlphaMismatch('sizeBorderRadius', '', emit);
		expect(emit.mock.calls).toEqual([]);
	});

	test('static color correct opaque', () => {
		checkAlphaMismatch('colorBorder', 'rgb(1,1,1)', emit);
		expect(emit.mock.calls).toEqual([]);
	});

	test('static color correct transparent', () => {
		checkAlphaMismatch('colorBorderAlpha', 'transparent', emit);
		expect(emit.mock.calls).toEqual([]);
	});

	test('static color correct rgba', () => {
		checkAlphaMismatch('colorBorderAlpha', 'rgba(1,1,1,.1)', emit);
		expect(emit.mock.calls).toEqual([]);
	});

	test('static color incorrect', () => {
		checkAlphaMismatch('colorBorder', 'rgba(1,1,1,.1)', emit);
		expect(emit.mock.calls).toEqual([
			['Color token type mismatch: opaque token name but alpha value'],
		]);
	});
});
