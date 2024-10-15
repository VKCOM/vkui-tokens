import { describe, expect, it } from '@jest/globals';

import { compileStructJSON } from './compileStructJSON';

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
				'var(--vkui--color_icon_primary, rgba(0, 0, 255, 0)) 0%',
				'var(--vkui--color_icon_primary, rgba(0, 0, 255, 0.05)) 15%',
				'var(--vkui--color_icon_primary, rgba(0, 0, 255, 0.2)) 30%',
				'var(--vkui--color_icon_primary, rgba(0, 0, 255, 0.8)) 70%',
				'var(--vkui--color_icon_primary, rgba(0, 0, 255, 0.95)) 85%',
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
				"color": "rgba(255, 255, 255, 1)",
				"token": "colorBackgroundContent",
				"step": 0,
				"alpha": 1
			},
			{
				"color": "rgba(0, 0, 0, 0)",
				"step": 1,
				"alpha": 0,
				"token": "colorBackgroundContent"
			}
		],
		"gradientOneColor": [
			{
				"color": "rgba(0, 0, 255, 0)",
				"step": 0,
				"alpha": 0
			},
			{
				"color": "rgba(0, 0, 255, 0.05)",
				"step": 0.15,
				"alpha": 0.05
			},
			{
				"color": "rgba(0, 0, 255, 0.2)",
				"step": 0.3,
				"alpha": 0.2
			},
			{
				"color": "rgba(0, 0, 255, 0.8)",
				"step": 0.7,
				"alpha": 0.8
			},
			{
				"color": "rgba(0, 0, 255, 0.95)",
				"step": 0.85,
				"alpha": 0.95
			},
			{
				"color": "rgba(0, 0, 255, 1)",
				"step": 1,
				"alpha": 1
			}
		],
		"gradientOneVariable": [
			{
				"color": "rgba(0, 0, 255, 0)",
				"token": "colorIconPrimary",
				"step": 0,
				"alpha": 0
			},
			{
				"color": "rgba(0, 0, 255, 0.05)",
				"token": "colorIconPrimary",
				"step": 0.15,
				"alpha": 0.05
			},
			{
				"color": "rgba(0, 0, 255, 0.2)",
				"token": "colorIconPrimary",
				"step": 0.3,
				"alpha": 0.2
			},
			{
				"color": "rgba(0, 0, 255, 0.8)",
				"token": "colorIconPrimary",
				"step": 0.7,
				"alpha": 0.8
			},
			{
				"color": "rgba(0, 0, 255, 0.95)",
				"token": "colorIconPrimary",
				"step": 0.85,
				"alpha": 0.95
			},
			{
				"color": "rgba(0, 0, 255, 1)",
				"token": "colorIconPrimary",
				"step": 1,
				"alpha": 1
			}
		]
	}
}`,
		);
	});
});
