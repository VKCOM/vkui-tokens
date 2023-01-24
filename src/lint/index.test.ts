import { lint } from '@/lint/index';

describe('lint unit', () => {
	test('shows no warnings if everything is ok', () => {
		expect(
			lint([
				{
					colorBgAlpha: 'transparent',
				},
			]),
		).toEqual([]);
	});

	test('shows warnings for opaque token name but alpha value', () => {
		expect(
			lint([
				{
					colorBg: 'transparent',
				},
			]),
		).toEqual([
			'undefined: colorBg error: Color token type mismatch: opaque token name but alpha value',
		]);
	});

	test('shows warnings for alpha token name but opaque value', () => {
		expect(
			lint([
				{
					colorBgAlpha: 'black',
				},
			]),
		).toEqual([
			'undefined: colorBgAlpha error: Color token type mismatch: alpha token name but opaque value',
		]);
	});

	test('shows warnings for nested objects', () => {
		expect(
			lint([
				{
					colors: { colorBg: 'transparent' },
				},
			]),
		).toEqual([
			'undefined: colors.colorBg error: Color token type mismatch: opaque token name but alpha value',
		]);
	});
});
