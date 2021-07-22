import {expect} from '@jest/globals';

import {getStateFunctions} from './getStateFunctions';

describe('getStateFunctions', () => {
	const testThemeData = {
		colorsScheme: 'light',
		toneValueActive: 0.08,
		opacityDisable: 0.48,
		toneValueFocus: 0.08,
		toneValueHover: 0.04,
	} as const;

	const testStateFunctions = getStateFunctions(testThemeData);

	it('should return specific props', () => {
		expect(testStateFunctions).toHaveProperty('stateHover');
		expect(testStateFunctions).toHaveProperty('stateActive');
		expect(testStateFunctions).toHaveProperty('stateFocus');
		expect(testStateFunctions).toHaveProperty('stateDisabled');
	});

	it('should have correct types', () => {
		expect(typeof testStateFunctions.stateHover).toBe('function');
		expect(typeof testStateFunctions.stateActive).toBe('function');
		expect(typeof testStateFunctions.stateFocus).toBe('function');
		expect(typeof testStateFunctions.stateDisabled).toBe('function');
	});

	describe('stateHover', () => {
		it('should correctly work with transparent', () => {
			expect(testStateFunctions.stateHover('transparent')).toBe(
				'rgba(#00103D,0.04)',
			);
		});

		it('should correct create stateHover with custom color', () => {
			expect(testStateFunctions.stateHover('#f00')).toBe('#F50102');
		});
	});

	describe('stateActive', () => {
		it('should correctly work with transparent', () => {
			expect(testStateFunctions.stateActive('transparent')).toBe(
				'rgba(#00103D,0.08)',
			);
		});

		it('should correct create stateActive with custom color', () => {
			expect(testStateFunctions.stateActive('#f00')).toBe('#EB0105');
		});
	});

	describe('stateFocus', () => {
		it('should correctly work with transparent', () => {
			expect(testStateFunctions.stateFocus('transparent')).toBe(
				'rgba(#00103D,0.08)',
			);
		});

		it('should correct create stateFocus with custom color', () => {
			expect(testStateFunctions.stateFocus('#f00')).toBe('#EB0105');
		});
	});

	describe('stateDisabled', () => {
		it('should correct create stateDisabled with custom color', () => {
			expect(testStateFunctions.stateDisabled('#f00')).toBe(
				'rgba(255, 0, 0, 0.48)',
			);
		});
	});
});
