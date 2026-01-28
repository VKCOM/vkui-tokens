import { describe, expect, it } from '@jest/globals';

import { compileStructJSON } from './compileStructJSON.js';

describe('compileJSON', () => {
	it('should stringify correctly', () => {
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
			gradientOneVariable: [
				'rgba(0, 0, 255, 0) 0%',
				'rgba(0, 0, 255, 0.05) 15%',
				'rgba(0, 0, 255, 0.2) 30%',
				'rgba(0, 0, 255, 0.8) 70%',
				'rgba(0, 0, 255, 0.95) 85%',
				'var(--vkui--color_icon_primary, rgba(0, 0, 255, 1)) 100%',
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
				"step": 0,
				"color": "rgba(255, 255, 255, 1)",
				"token": "colorBackgroundContent",
				"alpha": 1
			},
			{
				"step": 1,
				"color": "rgba(0, 0, 0, 0)",
				"alpha": 0
			}
		],
		"gradientOneColor": [
			{
				"step": 0,
				"color": "rgba(0, 0, 255, 0)",
				"alpha": 0
			},
			{
				"step": 0.15,
				"color": "rgba(0, 0, 255, 0.05)",
				"alpha": 0.05
			},
			{
				"step": 0.3,
				"color": "rgba(0, 0, 255, 0.2)",
				"alpha": 0.2
			},
			{
				"step": 0.7,
				"color": "rgba(0, 0, 255, 0.8)",
				"alpha": 0.8
			},
			{
				"step": 0.85,
				"color": "rgba(0, 0, 255, 0.95)",
				"alpha": 0.95
			},
			{
				"step": 1,
				"color": "rgba(0, 0, 255, 1)",
				"alpha": 1
			}
		],
		"gradientOneVariable": [
			{
				"step": 0,
				"color": "rgba(0, 0, 255, 0)",
				"token": "colorIconPrimary",
				"alpha": 0
			},
			{
				"step": 0.15,
				"color": "rgba(0, 0, 255, 0.05)",
				"token": "colorIconPrimary",
				"alpha": 0.05
			},
			{
				"step": 0.3,
				"color": "rgba(0, 0, 255, 0.2)",
				"token": "colorIconPrimary",
				"alpha": 0.2
			},
			{
				"step": 0.7,
				"color": "rgba(0, 0, 255, 0.8)",
				"token": "colorIconPrimary",
				"alpha": 0.8
			},
			{
				"step": 0.85,
				"color": "rgba(0, 0, 255, 0.95)",
				"token": "colorIconPrimary",
				"alpha": 0.95
			},
			{
				"step": 1,
				"color": "rgba(0, 0, 255, 1)",
				"token": "colorIconPrimary",
				"alpha": 1
			}
		]
	}
}`,
		);
	});
});
