import * as assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { mergeTokensData } from './mergeTokensData.ts';

const fontFamily = 'MailSans, Helvetica, Arial, sans-serif';

const content = {
	simple: {
		docs: {
			themeName: {
				tags: ['legacy'],
				desc: 'Legacy',
			},
			fontFamilyAccent: {
				tags: ['font'],
				desc: 'Семейство шрифтов для заголовков',
			},
		},
		tokens: {
			themeName: 'calendar',
			fontFamilyAccent: fontFamily,
		},
		result: {
			themeName: {
				tags: ['legacy'],
				desc: 'Legacy',
				value: 'calendar',
			},
			fontFamilyAccent: {
				tags: ['font'],
				desc: 'Семейство шрифтов для заголовков',
				value: fontFamily,
			},
		},
	},
	regularCompact: {
		docs: {
			fontTitle1: {
				tags: [],
				desc: '',
			},
		},
		tokens: {
			fontTitle1: {
				regular: {
					fontSize: 24,
					lineHeight: '32px',
					fontWeight: 500,
					fontFamily,
				},
				compact: {
					fontSize: 24,
					lineHeight: '28px',
					fontWeight: 500,
					fontFamily,
				},
			},
		},
		result: {
			fontTitle1: {
				tags: [],
				desc: '',
				value: {
					fontSize: 24,
					lineHeight: {
						regular: '32px',
						compact: '28px',
					},
					fontWeight: 500,
					fontFamily,
				},
			},
		},
	},
	onlyRegular: {
		docs: {
			fontCaption1Caps: {
				tags: [],
				desc: '',
			},
		},
		tokens: {
			fontCaption1Caps: {
				regular: {
					fontSize: 12,
					lineHeight: 16,
					fontFamily: 'Helvetica, Arial, sans-serif',
					fontWeight: 400,
					textTransform: 'uppercase',
					letterSpacing: '0.26px',
				},
			},
		},
		result: {
			fontCaption1Caps: {
				tags: [],
				desc: '',
				value: {
					fontSize: {
						regular: 12,
					},
					lineHeight: {
						regular: 16,
					},
					fontFamily: {
						regular: 'Helvetica, Arial, sans-serif',
					},
					fontWeight: {
						regular: 400,
					},
					textTransform: {
						regular: 'uppercase',
					},
					letterSpacing: {
						regular: '0.26px',
					},
				},
			},
		},
	},
	notRegularCompact: {
		docs: {
			colorBackgroundContent: {
				tags: [],
				desc: '',
			},
		},
		tokens: {
			colorBackgroundContent: {
				normal: '#232324',
				hover: '#2C2C2D',
				active: '#353536',
			},
		},
		result: {
			colorBackgroundContent: {
				tags: [],
				desc: '',
				value: {
					normal: '#232324',
					hover: '#2C2C2D',
					active: '#353536',
				},
			},
		},
	},
};

describe('mergeTokensData', () => {
	it('should merge 2 object token with simple token value', () => {
		assert.deepEqual(
			mergeTokensData(content.simple.docs, content.simple.tokens),
			content.simple.result,
		);
	});

	it('should merge 2 object token with regular/compact token value', () => {
		assert.deepEqual(
			mergeTokensData(content.regularCompact.docs, content.regularCompact.tokens),
			content.regularCompact.result,
		);
	});

	it('should merge 2 object token with only regular token value', () => {
		assert.deepEqual(
			mergeTokensData(content.onlyRegular.docs, content.onlyRegular.tokens),
			content.onlyRegular.result,
		);
	});

	it('should merge 2 object token with not regular/compact token value', () => {
		assert.deepEqual(
			mergeTokensData(content.notRegularCompact.docs, content.notRegularCompact.tokens),
			content.notRegularCompact.result,
		);
	});
});
