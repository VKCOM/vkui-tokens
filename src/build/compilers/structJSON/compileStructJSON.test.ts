import { describe, expect, it } from '@jest/globals';

import { compileStructJSON } from './compileStructJSON';

describe('compileJSON', () => {
	it('should correct stringify', () => {
		const testData = {
			colorA: '#fff',
			colorsScheme: 'scheme',
			randomToken: 123,
			gradientTest:
				'var(--vkui--color_background_content, rgba(255, 255, 255, 1)) 0%, rgba(0, 0, 0, 0) 100%',
			gradientOneColor: [
				'rgba(0, 0, 255, 0) 0%',
				'rgba(0, 0, 255, 0.05) 15%',
				'rgba(0, 0, 255, 0.2) 30%',
				'rgba(0, 0, 255, 0.8) 70%',
				'rgba(0, 0, 255, 0.95) 85%',
				'rgba(0, 0, 255, 1) 100%',
			].join(', '),
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
	},
	"gradient": {
		"gradientTest": [
			{
				"color": "rgba(255, 255, 255, 1)",
				"token": "colorBackgroundContent"
			},
			{
				"color": "rgba(0, 0, 0, 0)"
			}
		],
		"gradientOneColor": [
			{
				"color": "rgba(0, 0, 255, 0)"
			},
			{
				"color": "rgba(0, 0, 255, 0.05)"
			},
			{
				"color": "rgba(0, 0, 255, 0.2)"
			},
			{
				"color": "rgba(0, 0, 255, 0.8)"
			},
			{
				"color": "rgba(0, 0, 255, 0.95)"
			},
			{
				"color": "rgba(0, 0, 255, 1)"
			}
		]
	}
}`,
		);
	});
});
