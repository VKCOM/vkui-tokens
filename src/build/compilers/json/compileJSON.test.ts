import {compileJSON} from './compileJSON';

describe('compileJSON', () => {
	it('should correct stringify', () => {
		const testData = {
			colorState: {
				normal: '#00103D',
			},
			toneValueHover: 0.04,
		};

		expect(compileJSON(testData)).toBe(
			'{\n\t"colorState": {\n\t\t"normal": "#00103D"\n\t},\n\t"toneValueHover": 0.04\n}',
		);
	});
});
