import {compileStructJSON} from './compileStructJSON';

describe('compileJSON', () => {
	it('should correct stringify', () => {
		const testData = {
			colorA: '#fff',
			colorsScheme: 'scheme',
			randomToken: 123,
		};

		expect(compileStructJSON(testData)).toBe(
			`{
	"color": {
		"colorA": "#fff"
	},
	"colorsScheme": {
		"colorsScheme": "scheme"
	},
	"other": {
		"randomToken": 123
	}
}`,
		);
	});
});
